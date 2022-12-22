<template>
    <div class="layout__main main">
        <Category></Category>
        <div class="main__news news">
            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(0, 1)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewsList :news="this.GET_NEWS_RANGE(1, 6)"></NewsList>
        </div>

        <div class="main__news-2 news">
            <div class="news__block">
                <div class="news__category-title">
                    <span class="news__category-title-text">Популярное</span>
                </div>
                <NewsList :news="this.GET_NEWS_RANGE(6, 11)"></NewsList>
            </div>

            <AuthorList :news="this.GET_AUTHOR_NEWS_RANGE(0, 2)"></AuthorList>
        </div>

        <div class="main__news-3 news">
            <div class="news__block-3">
                <NewsList :news="this.GET_NEWS_RANGE(11, 16)"></NewsList>
            </div>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(16, 17)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewsList :news="this.GET_NEWS_RANGE(17, 19)"></NewsList>

            <NewsList :news="this.GET_NEWS_RANGE(19, 21)"></NewsList>

            <NewsList :news="this.GET_NEWS_RANGE(21, 23)"></NewsList>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(23, 24)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(24, 25)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewsList :news="this.GET_NEWS_RANGE(25, 27)"></NewsList>
        </div>

        <div class="main__news-4 news">
            <NewsList :news="this.GET_NEWS_RANGE(27, 29)"></NewsList>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(29, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(29, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(29, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(29, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>

            <NewBlock
                class="news-list__new-block"
                v-for="news_item in GET_NEWS_RANGE(29, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            ></NewBlock>
        </div>

        <div class="main__news-5 news">
            <HorisontalNewsList
                :news="this.GET_NEWS_RANGE(34, 40)"
            ></HorisontalNewsList>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Category from "/src/components/Category.vue";
import Footer from "/src/components/Footer.vue";
import NewBlock from "/src/components/NewBlock.vue";
import NewsList from "/src/components/NewsList.vue";
import AuthorList from "/src/components/AuthorList.vue";
import CategoryTypes from "/src/components/CategoryTypes.vue";
import HorisontalNewsList from "/src/components/HorisontalNewsList.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        Category,
        Footer,
        NewBlock,
        NewsList,
        AuthorList,
        CategoryTypes,
        HorisontalNewsList,
    },
    computed: {
        ...mapGetters(["GET_NEWS_RANGE", "GET_AUTHOR_NEWS_RANGE"]),
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_main.scss";
@import "/src/assets/_news.scss";
</style>
