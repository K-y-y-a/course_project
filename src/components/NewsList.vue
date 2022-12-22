<template>
    <div class="news__news-list news-list">
        <NewBlock
            class="news-list__new-block"
            v-for="news_item in news"
            :key="news_item.id"
            :news_item="news_item"
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

<style scoped>
@import "/src/assets/_news-list.scss";
</style>
