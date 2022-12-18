<template>
    <div class="news__news-list news-list">
        <NewsListItem
            class="news-list__news-list-item"
            v-for="news_item in news"
            :key="news_item.id"
            :news_item="news_item"
        ></NewsListItem>
    </div>
</template>

<script lang="ts">
import NewsListItem from "/src/components/NewsListItem.vue";

export default {
    components: {
        NewsListItem,
    },
    props: {
        news: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style scoped>
@import "/src/assets/_news-list.scss";
</style>
