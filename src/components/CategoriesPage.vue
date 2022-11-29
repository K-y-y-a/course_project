<template>
    <div class="layout__categories-page categories-page">
        <div class="categories-page__title">
            {{categoryTitle}}
        </div>
           
        <div class="categories-page__search-list search-list">
            <SearchList
                v-for="neww in news"
                :key="neww.id"
                :neww="neww"
            ></SearchList>
        </div>

        <div class="categories-page__error" v-if="isEmpty">{{error}}</div>
        
    </div>
</template>

<script>
    import SearchList from "/src/components/SearchList.vue"

    import { mapGetters } from 'vuex'

    export default {
        components: {
            SearchList
        },
        data () {
            return {
                text: "",
                isEmpty: false,
                error: "К сожалению, по вашему запросу ничего не найдено",
            }
        },
        methods: {
            submit() {
                this.GET_NEW_BY_TEXT(this.text)
                console.log(this.GET_NEW_BY_TEXT(this.text))
                this.news = this.GET_NEW_BY_TEXT(this.text)

                if(this.news.length == 0) this.isEmpty = true
                else this.isEmpty = false
            },
            clear() {
                this.text = ""
            },
            getNewsByCategory(id) {
                let news = this.GET_NEW_BY_CATEGORY(id)
                
                if(news.length == 0) this.isEmpty = true
                else this.isEmpty = false

                return news
            },
        },
        computed: {
            ...mapGetters([
                'GET_NEW_BY_CATEGORY',
                'GET_CATEGORY_BY_ID'
            ]),
            news() {
                return this.getNewsByCategory(this.$route.params.id);               
            },
            categoryTitle() {
                return this.GET_CATEGORY_BY_ID(this.$route.params.id)[0].title
            }
        },
    }
</script>

<style scoped>

</style>
