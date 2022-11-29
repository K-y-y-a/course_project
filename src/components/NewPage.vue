<template>
    <div class="layout__new-page new-page">
        <div class="new-page__page">
            <div class="new-page__time">
                <span>
                    {{newTime}}
                </span>
            </div>

            <h1 class="new-page__title">
                {{newTitle}}
            </h1>

            <div class="new-page__new-image-box">
                <div class="new-page__new-image">
                    <img class="new-page__new-image-image" v-bind:src="newPhotoLink">
                </div>        
                <span class="new-page__new-image-title">
                    {{newPhotoDescription}}
                </span>
            </div>

            <div v-if="thereIsAuthor">
                <router-link
                    :to="linkOpenAuthor"
                    tag="button"
                    class="new-page__new-source"
                >
                    <AuthorBoxLarge
                        :neww="neww"
                    ></AuthorBoxLarge>
                </router-link>
            </div>
            

            <div class="new-page__new-text-box">
                <p class="new-page__new-text">
                    {{newDescription}}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import AuthorBoxLarge from "/src/components/AuthorBoxLarge.vue"
    import { mapGetters } from 'vuex'

    export default {
        components: {
            AuthorBoxLarge
        },
        data() {
            return {
                thereIsAuthor: true,
            }
        },
        methods:{
            showAuthorBox() {
                return true
            },
            getNewById(id) {
                let neww = this.GET_NEW_BY_ID(id)
                if(neww == undefined) neww = this.GET_AUTHOR_NEW_BY_ID(id)
                return neww
            },
            getNew() {
                return this.getNewById(this.$route.params.id);               
            },
        },
        computed: {
            ...mapGetters([
                'GET_NEW_BY_ID',
                'GET_AUTHOR_NEW_BY_ID'
            ]),
            neww() {
                return this.getNewById(this.$route.params.id);               
            },
            newTime() {
                let datestring = this.getNew().date;
                let date = datestring.slice(0, 10).split("-").reverse().join(".");
                let time = datestring.slice(11, 16);
                let result = time + " " + date;
                return result
            },
            newTitle() {
                return this.getNew().title;
            },
            newPhotoLink() { 
                return this.getNew().photoLink;
            },
            newDescription() {
                return this.getNew().description;
            },
            newPhotoDescription() {
                return this.getNew().photoDescription;
            },
            linkOpenAuthor () {
                if(typeof this.getNew().authorId === 'undefined') 
                { 
                    this.thereIsAuthor = false;
                    return "";
                }
                return `/authors/${this.getNew().authorId}`;
            }
        }
    }
</script>

<style>

</style>