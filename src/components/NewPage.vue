<template>
    <div class="layout__new-page new-page">
        <div class="new-page__page">
            <div class="new-page__time">
                <span>
                    {{ this.getDate }}
                </span>
            </div>

            <h1 class="new-page__title">
                {{ this.getNew().title }}
            </h1>

            <div class="new-page__new-image-box">
                <div class="new-page__new-image">
                    <img
                        class="new-page__new-image-image"
                        v-bind:src="this.getNew().photoLink"
                    />
                </div>
                <span class="new-page__new-image-title">
                    {{ this.getNew().photoDescription }}
                </span>
            </div>

            <div v-if="thereIsAuthor">
                <router-link
                    :to="linkOpenAuthor"
                    tag="button"
                    class="new-page__new-source"
                >
                    <AuthorBox :news_item="news_item" :large="true"></AuthorBox>
                </router-link>
            </div>

            <div class="new-page__new-text-box">
                <p class="new-page__new-text">
                    {{ this.getNew().description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AuthorBox from "/src/components/AuthorBox.vue";
import { mapGetters } from "vuex";
import { getDate } from "/src/scripts";

export default {
    components: {
        AuthorBox,
    },
    data() {
        return {
            thereIsAuthor: true,
        };
    },
    methods: {
        showAuthorBox() {
            return true;
        },
        getNewById(id) {
            let news_item = this.GET_NEW_BY_ID(id);
            if (news_item == undefined)
                news_item = this.GET_AUTHOR_NEW_BY_ID(id);
            return news_item;
        },
        getNew() {
            return this.getNewById(this.$route.params.id);
        },
    },
    computed: {
        ...mapGetters(["GET_NEW_BY_ID", "GET_AUTHOR_NEW_BY_ID"]),
        news_item() {
            return this.getNewById(this.$route.params.id);
        },
        getDate() {
            return getDate(this.getNew().date);
        },
        linkOpenAuthor() {
            if (typeof this.getNew().authorId === "undefined") {
                this.thereIsAuthor = false;
                return "";
            }
            return `/authors/${this.getNew().authorId}`;
        },
    },
};
</script>

<style></style>

<style lang="scss" scoped>
@import "/src/assets/_new-page.scss";
</style>
