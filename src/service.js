export class Service {
    static getAllNews() {
        return fetch("http://localhost:3000/news")
    }

    static getAllCategories() {
        return fetch("http://localhost:3000/categories").then(
            (response) => response.json()
        )
    }
}