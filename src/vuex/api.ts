import axios from "axios";

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
}