<template>
    <div class="news__horisontal-news-list-box">
        <div class="news__horisontal-news-list horisontal-news-list">
            <HorisontalNewsListItem
                v-for="news_item in news"
                :key="news_item.id"
                :news_item="news_item"
            ></HorisontalNewsListItem>

            <div class="horisontal-news-list__void-box"></div>

            <div class="horisontal-news-list__button-block">
                <button
                    class="horisontal-news-list__button horisontal-news-list_button-left"
                    @click="scrollLeft('.horisontal-news-list')"
                >
                    &lt;
                </button>
                <button
                    class="horisontal-news-list__button horisontal-news-list_button-right"
                    @click="scrollRight('.horisontal-news-list')"
                >
                    &gt;
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HorisontalNewsListItem from "/src/components/HorisontalNewsListItem.vue";
import { scrollRight, scrollLeft } from "/src/scripts";

export default {
    components: {
        HorisontalNewsListItem,
    },
    props: {
        news: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        scrollRight(class_name: string) {
            return scrollRight(class_name);
        },
        scrollLeft(class_name: string) {
            return scrollLeft(class_name);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_horisontal-news-list.scss";
</style>
