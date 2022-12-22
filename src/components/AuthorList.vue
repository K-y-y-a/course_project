<template>
    <div class="news__author-list author-list">
        <NewBlock
            class="author-list__author-list-item"
            v-for="news_item in news"
            :key="news_item.id"
            :news_item="news_item"
            :blockSize="'author'"
        ></NewBlock>
    </div>
</template>

<script lang="ts">
import NewBlock from "/src/components/NewBlock.vue";

export default {
    components: {
        NewBlock,
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
