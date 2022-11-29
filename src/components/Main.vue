<template>
    <div class="layout__main main">
        <Category></Category>
        <div class="main__news news">
            <MainNew 
                v-for="mainNew in GET_NEWS_RANGE(0,1)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>
            <NewsList
                :news = this.GET_NEWS_RANGE(1,6)
            ></NewsList>
        </div>
        
        <div class="main__news-2 news">
            <div class="news__block">
                <div class="news__category-title">
                    <span class="news__category-title-text">Популярное</span>
                </div>
                <NewsList
                    :news = this.GET_NEWS_RANGE(6,11)
                ></NewsList>
                
            </div>

            <AuthorList
                :news = this.GET_AUTHOR_NEWS_RANGE(0,2)
            ></AuthorList>
        </div>

        <div class="main__news-3 news">
            <div class="news__block-3">
                <NewsList
                    :news = this.GET_NEWS_RANGE(11,16)
                ></NewsList>
            </div>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(16,17)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <NewsList
                :news = this.GET_NEWS_RANGE(17,19)
            ></NewsList>

            <NewsList
                :news = this.GET_NEWS_RANGE(19,21)
            ></NewsList>

            <NewsList
                :news = this.GET_NEWS_RANGE(21,23)
            ></NewsList>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(23,24)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(24,25)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <NewsList
                :news = this.GET_NEWS_RANGE(25,27)
            ></NewsList>

        </div>

        <div class="main__news-4 news">
            <NewsList
                :news = this.GET_NEWS_RANGE(27,29)
            ></NewsList>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(29,30)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(30,31)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(31,32)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(32,33)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>

            <MainNew
                v-for="mainNew in GET_NEWS_RANGE(33,34)"
                :key="mainNew.id"
                :mainNew="mainNew"
            ></MainNew>
        </div>
        
        <div class="main__news-5 news">
            <HorisontalNewsList
                :news = this.GET_NEWS_RANGE(34,40)
            ></HorisontalNewsList>
        </div>
    </div>
</template>

<script lang="ts">
    import Category from "/src/components/Category.vue"
    import MainNew from "/src/components/MainNew.vue"
    import NewsList from "/src/components/NewsList.vue"
    import AuthorList from "/src/components/AuthorList.vue"
    import CategoryTypes from "/src/components/CategoryTypes.vue"
    import HorisontalNewsList from "/src/components/HorisontalNewsList.vue"

    import { mapGetters, mapActions } from 'vuex'

     

    export default {
        components: {
			Category,
			MainNew,
            NewsList,
            AuthorList,
            CategoryTypes,
            HorisontalNewsList,
        },
        computed: {
            ...mapGetters([
                'GET_NEWS_RANGE',
                'GET_AUTHOR_NEWS_RANGE'
            ]),
        },
    }
</script>

<style scoped>

</style>
