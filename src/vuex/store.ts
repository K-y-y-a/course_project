import { createStore } from "vuex";
import { Api } from "/src/vuex/api.ts"

const NEWS_LIMIT = 40

export default createStore({
    state: {
        categories: [],
        news: [],
        authorNews: [],
        searchNews: [],
        token: "",
        nickName: "",
        showChat: false,
        showChatNew: false,
        newComments: [],
        thisChatId: "",
        isExistsUser: true,
    },
    mutations: {
        SET_CATEGORIES_FROM_STATE: (state, categories) => {
            state.categories = categories;
        },
        SET_NEWS_FROM_STATE: (state, news) => {
            state.news = news;
        },
        SET_AUTHOR_NEWS_FROM_STATE: (state, authorNews) => {
            state.authorNews = authorNews;
        },
        SET_SEARCH_NEWS_FROM_STATE: (state, params: {searchNews, page}) => {
            if(params.page == 1) state.searchNews = [...params.searchNews];
            else state.searchNews = [...state.searchNews, ...params.searchNews]
        },  
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER_NAME: (state, nickName) => {
            state.nickName = nickName;
        },  
        SET_NEW_COMMENTS: (state, comments) => {
            state.newComments = comments;
        },  
        ADD_NEW_COMMENTS: (state, comments) => {
            state.newComments.push(comments);
        },
        SET_THIS_CHAT_ID: (state, id) => {
            state.thisChatId = id;
        }, 
        SET_USER_EXISTS: (state, bool) => {
            state.isExistsUser = bool;
        }, 
        SET_CHAT_STATE: (state, bool) => {
            state.showChat = bool;
        },  
        SET_CHAT_NEW_STATE: (state, bool) => {
            state.showChatNew = bool;
        }, 
    },
    actions: {
        GET_CATEGORIES_FROM_API({ commit }) {
            Api.getCategories()
                .then((categories) => {
                    commit('SET_CATEGORIES_FROM_STATE', categories.data);
                    return categories;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_NEWS_FROM_API({ commit }, range: {start: number, end: number}) {
            Api.getNews(range.start.toString(), range.end.toString())
                .then((news) => {
                    commit('SET_NEWS_FROM_STATE', news.data);
                    return news;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_AUTHOR_NEWS_FROM_API({ commit }, range: {start: number, end: number}) {
            Api.getAuthorNews(range.start.toString(), range.end.toString())
                .then((authorNews) => {
                    commit('SET_AUTHOR_NEWS_FROM_STATE', authorNews.data);
                    return authorNews;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_SEARCH_NEWS_FROM_API({ commit }, params: {text: string, start: string, end: string, page: number}) {
            Api.getNewByText(params.text, params.start, params.end)
                .then((news) => {
                    commit('SET_SEARCH_NEWS_FROM_STATE', {searchNews: news.data, page: params.page});
                    return news;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_CATEGORY_NEWS_FROM_API({ commit }, params: {category: string, start: string, end: string, page: number}) {
            Api.getNewByCategory(params.category, params.start, params.end)
                .then((news) => {
                    commit('SET_SEARCH_NEWS_FROM_STATE', {searchNews: news.data, page: params.page});
                    return news;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_NEW_USER({ commit }, params: {login: string, password: string, nickName: string}) {
            Api.getUserToken(params.login, params.password)
                .then((user) => {
                    if(user.data.length > 0) {
                        commit('SET_TOKEN', "user exists");
                        return
                    }
                    
                    Api.setNewUser(params.login, params.password, params.nickName)
                        .then((user) => {
                            commit('SET_TOKEN', user.data.token);
                            commit('SET_USER_NAME', user.data.nickName);
                            return;
                        })
                        .catch((error) => {
                            console.log(error);
                            return error;
                        })
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })

        },
        GET_USER_TOKEN_FROM_API({ commit }, params: {login: string, password: string}) {
            Api.getUserToken(params.login, params.password)
                .then((user) => {
                    commit('SET_TOKEN', user.data.pop().token);
                    return;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_USER_NAME_FROM_API({ commit }, params: {login: string, password: string}) {
            Api.getUserToken(params.login, params.password)
                .then((user) => {
                    commit('SET_USER_NAME', user.data.pop().nickName);
                    return;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_THIS_CHAT_COMMENTS_FROM_API({ commit }, id: string) {
            Api.getThisChatComments(id)
                .then((comments) => {
                    commit('SET_THIS_CHAT_COMMENT', comments.data);
                    return;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        CLEAR_TOKEN({ commit }) {
            commit('SET_TOKEN', "");
            return;
        },
        CLEAR_USER_NAME({ commit }) {
            commit('SET_USER_NAME', "");
            return;
        },
        GET_NEW_COMMENTS_FROM_API({ commit }, id) {
            Api.getNewComments(id)
                .then((comments) => {
                    //console.log(comments.data)
                    commit('SET_NEW_COMMENTS', comments.data);
                    return;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        ADD_THIS_CHAT_ID({ commit }, id) {
            commit('SET_THIS_CHAT_ID', id);
            return;
        },
        ADD_NEW_COMMENT({ commit }, comment) {
            Api.getUserByToken(this.state.token)
                .then((user) => {
                    if(user.data.length > 0) {
                        let userData = user.data.pop();
                        userData.comment = comment;
                        userData.date = new Date();
                        userData.chatId = this.state.thisChatId;
                        Api.addNewComment(userData)
                            .then((comment) => {                
                                commit('ADD_NEW_COMMENTS', comment.data);
                            })
                            .catch((error) => {
                                console.log(error);
                                return error;
                            })
                    } else {
                        commit('SET_USER_EXISTS', false);
                    }
                    return;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
            return;
        },
        CHANGE_USER_EXISTS({ commit }, bool) {
            commit('SET_USER_EXISTS', bool);
            return;
        },

        CHANGE_CHAT_STATE({ commit }, bool) {
            commit('SET_CHAT_STATE', bool);
            return;
        },

        CHANGE_CHAT_NEW_STATE({ commit }, bool) {
            commit('SET_CHAT_NEW_STATE', bool);
            return;
        },
    },
    getters: {
        GET_CATEGORIES(state) {
            return state.categories;
        },
        GET_NEWS_RANGE: (state) => (begin, end) => {
            let result = JSON.parse(
                JSON.stringify( 
                    state.news.slice(begin, end) 
                )
            )

            let formatResult = Object.keys(result).map(key => {
                return result[key];
            })

            return formatResult
        },
        GET_AUTHOR_NEWS_RANGE: (state) => (begin, end) => {
            let result = state.authorNews.slice(begin, end) 

            let formatResult = Object.keys(result).map(key => {
                return result[key];
            })

            return formatResult
        },
        GET_NEW_BY_ID: (state) => (id) => {       
            return state.news.find(o => o.id == id)
        },
        GET_AUTHOR_NEW_BY_ID: (state) => (id) => {       
            return state.authorNews.find(o => o.id == id)
        },
        GET_SEARCH_NEWS_BY_TEXT: (state) => () => {   
            return state.searchNews
        },

        GET_NEW_BY_CATEGORY: (state) => (category) => {    
            let news = state.news.filter(o => o.category.indexOf(category) != -1);
            let authorNews = state.authorNews.filter(o => o.category.indexOf(category) != -1);
            
            let result = news.concat(authorNews);
            return result
        },

        GET_CATEGORY_BY_ID: (state) => (id: String) => {         
            let category = state.categories.filter(o => o.id.indexOf(id) != -1);        
            return category
        },

        GET_USER_TOKEN: (state) => () => {                 
            return state.token;
        },

        GET_USER_NAME: (state) => () => {                 
            return state.nickName;
        },

        GET_NEW_COMMENTS: (state) => () => {                 
            return state.newComments;
        },

        GET_USER_EXISTS: (state) => () => {                 
            return state.isExistsUser;
        },

        GET_CHAT_STATE: (state) => () => {                 
            return state.showChat;
        },

        GET_CHAT_NEW_STATE: (state) => () => {                 
            return state.showChatNew;
        },

        GET_THIS_CHAT_ID: (state) => () => {                 
            return state.thisChatId;
        },
    },
});
