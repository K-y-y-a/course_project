<template>
    <div class="layout__no-data no-data">
        <div class="no-data__search-line" v-if="isSearch">
            <input
                type="text"
                class="no-data__search-line-text"
                v-model="text"
                placeholder="Поиск"
                v-on:keyup.enter="submit"
            />
            <button class="no-data__search-line-button" v-on:click="clear">
                &#215;
            </button>
        </div>

        <div class="no-data__category-title" v-if="isCategories">
            {{ categoryTitle }}
        </div>

        <div class="no-data__search-list">
            <SearchList
                v-for="news_item in getNews"
                :key="news_item.id"
                :news_item="news_item"
            ></SearchList>
        </div>

        <div class="no-data__error" v-if="isEmpty">{{ error }}</div>
    </div>
</template>

<script lang="ts">
import SearchList from "/src/components/SearchList.vue";

import { mapGetters, mapActions } from "vuex";

const LIMIT_NEWS_ON_PAGE = 10;

export default {
    components: {
        SearchList,
    },
    data() {
        return {
            text: "",
            lastText: null,
            category: "",
            isEmpty: false,
            error: "К сожалению, по вашему запросу ничего не найдено",
            isSearch: false,
            isCategories: true,
            page: 1,
            scrollPosition: 0,
            newsSize: 0,
            isEndOfData: false,
        };
    },
    methods: {
        ...mapActions([
            "GET_SEARCH_NEWS_FROM_API",
            "GET_CATEGORY_NEWS_FROM_API",
        ]),
        submit() {
            if (this.isSearch) {
                if (this.lastText != this.text) {
                    this.scrollPosition = 0;
                    this.isEndOfData = false;
                    this.newsSize = 0;
                    this.page = 1;
                }

                this.lastText = this.$route.query.text;

                this.$router.push({
                    path: this.$route.fullPath,
                    query: { text: this.text },
                });

                this.GET_SEARCH_NEWS_FROM_API({
                    text: this.text,
                    start: LIMIT_NEWS_ON_PAGE * (this.page - 1),
                    end: LIMIT_NEWS_ON_PAGE * this.page,
                    page: this.page,
                });
            } else {
                this.GET_CATEGORY_NEWS_FROM_API({
                    category: this.category,
                    start: LIMIT_NEWS_ON_PAGE * (this.page - 1),
                    end: LIMIT_NEWS_ON_PAGE * this.page,
                    page: this.page,
                });
            }
        },
        clear() {
            this.text = "";
        },
        setTextFromURL() {
            this.text = this.$route.query.text;
        },
        setCategoryFromURL() {
            this.category = window.location.pathname.split("/").pop();
        },

        setPageType() {
            if (window.location.pathname.split("/").pop() == "search") {
                this.isSearch = true;
                this.isCategories = false;
            } else {
                this.isSearch = false;
                this.isCategories = true;
            }
        },
        scroll() {
            /*
                попытка в бесконечный скролл
                проблема: после добавления данных скролл уходит вверх
                попробовал ставить вручную, но происходит "дёрганье"

            */
            window.onscroll = () => {
                let bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;

                if (bottomOfWindow && !this.isEndOfData) {
                    this.scrollPosition = document.documentElement.scrollTop;

                    this.page++;
                    //console.log("scroll down");
                    //console.log(this.page);
                    this.submit();
                }
            };
        },
    },
    computed: {
        ...mapGetters(["GET_SEARCH_NEWS_BY_TEXT", "GET_CATEGORY_BY_ID"]),
        getNews() {
            if (
                typeof this.$route.query.text !== "undefined" ||
                this.isCategories
            ) {
                let result = this.GET_SEARCH_NEWS_BY_TEXT();

                if (result.length == 0) {
                    this.isEmpty = true;
                } else this.isEmpty = false;

                if (this.newsSize < result.length) {
                    this.isEndOfData = false;
                    this.newsSize = result.length;
                } else this.isEndOfData = true;

                return result;
            }
        },
        categoryTitle() {
            if (this.isCategories) {
                try {
                    return this.GET_CATEGORY_BY_ID(
                        window.location.pathname.split("/").pop()
                    )[0].title;
                } catch {
                    return "";
                }
            }
        },
    },
    created() {
        this.setPageType();
    },
    updated() {
        if (this.lastText != this.$route.query.text) {
            this.scrollPosition = 0;
            this.isEndOfData = false;
            this.newsSize = 0;
            this.page = 1;
        }

        this.lastText = this.$route.query.text;

        document.documentElement.scrollTop = this.scrollPosition;

        this.setPageType();
    },
    mounted() {
        if (this.isCategories) {
            this.setCategoryFromURL();
            this.submit();
        }

        if (typeof this.$route.query.text !== "undefined") {
            this.setTextFromURL();
            this.submit();
        }

        this.scroll();
        this.page = 1;
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_no-data.scss";
</style>
