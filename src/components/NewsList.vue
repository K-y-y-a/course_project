<template>
    <div class="news__news-list news-list">
        <NewsListItem
            v-for="neww in news"
            :key="neww.id"
            :neww="neww"
        ></NewsListItem>
    </div>
</template>

<script lang="ts">
    import NewsListItem from "/src/components/NewsListItem.vue"

    export default {
        components: {
            NewsListItem,
        },
        props: {
            news: {
                type: Object,
                default() {
                    return {}
                },
            }
        }
    }
</script>

<style scoped>

</style>
