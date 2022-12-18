import { createStore } from "vuex";
import { Api } from "/src/vuex/api.ts"

const NEWS_LIMIT = 40

export default createStore({
    state: {
        categories: [],
        news: [],
        authorNews: [],
        searchNews: [],

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
    },
});
