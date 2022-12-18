<template>
    <div class="news__author-list author-list">
        <AuthorListItem
            class="author-list__author-list-item"
            v-for="news_item in news"
            :key="news_item.id"
            :news_item="news_item"
        ></AuthorListItem>
    </div>
</template>

<script lang="ts">
import AuthorListItem from "/src/components/AuthorListItem.vue";

export default {
    components: {
        AuthorListItem,
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

<style lang="scss" scoped>
@import "/src/assets/_author-list.scss";
</style>
