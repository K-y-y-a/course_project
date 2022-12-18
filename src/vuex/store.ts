import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        categories: [],
        news: [],
        authorNews: [],
        
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
        
    },
    actions: {
        // здесь определенно не хватает пагинации в твоих запросах к серверу по новостям
        GET_CATEGORIES_FROM_API({ commit }) {
            // все обращения к апи надо вынести в отдельный класс и избежать дублирования между самими обращениями
            return axios('http://localhost:3000/categories', {
                method: "GET"
            })
                .then((categories) => {
                    commit('SET_CATEGORIES_FROM_STATE', categories.data);
                    return categories;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_NEWS_FROM_API({ commit }, limit) {
            let url = new URL("http://localhost:3000/news?type=common&_sort=date&_order=desc");
            url.searchParams.append('_limit', limit);

            return axios(url.href, {
                method: "GET"
            })
                .then((news) => {
                    commit('SET_NEWS_FROM_STATE', news.data);
                    return news;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        GET_AUTHOR_NEWS_FROM_API({ commit }, limit) {
            let url = new URL("http://localhost:3000/news?type=author&_sort=date&_order=desc");
            url.searchParams.append('_limit', limit);

            return axios(url.href, {
                method: "GET"
            })
                .then((authorNews) => {
                    commit('SET_AUTHOR_NEWS_FROM_STATE', authorNews.data);
                    return authorNews;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
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
            // JSON метода друг друга исключают, не нужны в данном случае
            let result = JSON.parse(
                JSON.stringify( 
                    state.authorNews.slice(begin, end) 
                )
            )

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
        GET_NEW_BY_TEXT: (state) => (text) => {    
            let news1 = state.authorNews.filter(o => o.title.indexOf(text) != -1);
            let news2 = state.authorNews.filter(o => o.description.indexOf(text) != -1);
            let authorNews1 = state.news.filter(o => o.title.indexOf(text) != -1);
            let authorNews2 = state.news.filter(o => o.description.indexOf(text) != -1);
            
            let news = [...new Set(news1.concat(news2))];
            let authorNews = [...new Set(authorNews1.concat(authorNews2))];
            let result = news.concat(authorNews);
            return result
        },

        GET_NEW_BY_CATEGORY: (state) => (category) => {    
            let news = state.news.filter(o => o.category.indexOf(category) != -1);
            let authorNews = state.authorNews.filter(o => o.category.indexOf(category) != -1);
            
            let result = news.concat(authorNews);
            return result
        },

        GET_CATEGORY_BY_ID: (state) => (id) => { 
            let category = state.categories.filter(o => o.id.indexOf(id) != -1);
            return category
        },


        

    },
});
