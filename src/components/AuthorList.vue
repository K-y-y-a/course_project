<template>
    <div class="news__author-list author-list">
        <AuthorListItem
            v-for="neww in news"
            :key="neww.id"
            :neww="neww"
        ></AuthorListItem>
    </div>
</template>

<script>
    import AuthorListItem from "/src/components/AuthorListItem.vue"

    export default {
        components: {
            AuthorListItem
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
