<template>
    <div class="author-list__item blocks-separator">
        <router-link
            :to="linkOpenNew"
            tag="button"
            class="author-list__title-link"
        >
            <div class="author-list__title-link-cell">
                <span class="author-list__new-title">{{neww.title}}</span>
                <span class="author-list__new-photo">
                    <img class="author-list__new-image" alt="Фотозаголовок" v-bind:src="neww.photoLink">
                </span>
            </div>  
    
        </router-link>

        <router-link
            :to="linkOpenAuthor"
            tag="button"
            class="author-list__author-link"
        >
            <AuthorBox
                :neww="neww"
            ></AuthorBox>
        </router-link>

        <div class="author-list__info">
            <div class="author-list__date text-size_small">{{getDate()}}</div>
            <div class="author-list__share">Раздача</div>
        </div>
    </div>
</template>

<script>
    import AuthorBox from "/src/components/AuthorBox.vue"

    export default {
        components: {
            AuthorBox
        },
        props: {
            neww: {
                type: Object,
                default() {
                    return {}
                },
            }
        },
        methods: {
            getDate() {
                return this.neww.date.slice(11,16);
            }
        },
        computed: {
            linkOpenNew () {
                return `/news/${this.neww.id}`;
            },
            linkOpenAuthor () {
                return `/authors/${this.neww.authorId}`;
            }
        }
    }
</script>

<style scoped>

</style>
