import axios from "axios";

const TOKEN_LENGTH = 10;

function generateToken(n) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

export class Api {
    static baseURL = new URL("http://localhost:3000/");

    static getCategories() {
        let url = new URL('categories', this.baseURL);

        return axios(url.href, {
            method: "GET"
        })   
    }

    static getNews(start: string, end: string) {
        let url = new URL('news', this.baseURL)
        url.searchParams.append('type', 'common');
        url.searchParams.append('_sort', 'date');
        url.searchParams.append('_order', "desc");
        url.searchParams.append('_start', start);
        url.searchParams.append('_end', end);

        return axios(url.href, {
            method: "GET"
        })   
    }

    static getAuthorNews(start: string, end: string) {
        let url = new URL('news', this.baseURL);
        url.searchParams.append('type', 'author');
        url.searchParams.append('_sort', 'date');
        url.searchParams.append('_order', "desc");
        url.searchParams.append('_start', start);
        url.searchParams.append('_end', end);

        return axios(url.href, {
            method: "GET"
        })   
    }

    static getNewByText(text: string, start: string, end: string) {
        let url = new URL('news', this.baseURL);
        url.searchParams.append('_sort', 'date');
        url.searchParams.append('_order', "desc");
        url.searchParams.append('_start', start);
        url.searchParams.append('_end', end);
        url.searchParams.append('q', text);

        return axios(url.href, {
            method: "GET"
        }) 
    }

    static getNewByCategory(category: string, start: string, end: string) {
        let url = new URL('news', this.baseURL);
        url.searchParams.append('_sort', 'date');
        url.searchParams.append('_order', "desc");
        url.searchParams.append('_start', start);
        url.searchParams.append('_end', end);
        url.searchParams.append('category', category);

        return axios(url.href, {
            method: "GET"
        }) 
    }

    static setNewUser(login: string, password: string, nickName: string) {
        let url = new URL('users', this.baseURL);

        return axios.post(url.href, {
            login: login,
            password: password,
            nickName: nickName,
            token: generateToken(TOKEN_LENGTH),
        });
    }

    static getUserToken(login: string, password: string) {
        let url = new URL('users', this.baseURL);
        url.searchParams.append('login', login);
        url.searchParams.append('password', password);        

        return axios(url.href, {
            method: "GET"
        }) 
    }

    static getNewComments(id: string) {
        let url = new URL('chats', this.baseURL);
        url.searchParams.append('chatId', id);
        url.searchParams.append('_sort', 'date');
        url.searchParams.append('_order', "asc");
              

        return axios(url.href, {
            method: "GET"
        }) 
    }

    static getUserByToken(token: string) {
        let url = new URL('users', this.baseURL);
        url.searchParams.append('token', token);

        return axios(url.href, {
            method: "GET"
        }) 
    }

    static addNewComment(userData) {
        let url = new URL('chats', this.baseURL);

        return axios.post(url.href, {
            chatId: userData.chatId,
            date: userData.date,
            nickName: userData.nickName,
            comment: userData.comment,
        });
    }
}