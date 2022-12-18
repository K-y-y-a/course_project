<template>
    <div class="author-list-item blocks-separator">
        <router-link
            :to="linkOpenNew"
            tag="button"
            class="author-list-item__title-link"
        >
            <div class="author-list-item__title-link-cell">
                <span class="author-list-item__new-title">{{
                    news_item.title
                }}</span>
                <span class="author-list-item__new-photo">
                    <img
                        class="author-list-item__new-image"
                        alt="Фотозаголовок"
                        v-bind:src="news_item.photoLink"
                    />
                </span>
            </div>
        </router-link>

        <div class="author-list-item__author-link">
            <AuthorBox :news_item="news_item" :large="false"></AuthorBox>
        </div>

        <div class="author-list-item__info">
            <div class="author-list-item__date text-size_small">
                {{ getDate() }}
            </div>
            <ShareButton
                class="author-list-item__share"
                :route="linkOpenNew"
            ></ShareButton>
        </div>
    </div>
</template>

<script lang="ts">
import AuthorBox from "/src/components/AuthorBox.vue";
import ShareButton from "/src/components/ShareButton.vue";
import { getDate } from "/src/scripts";

export default {
    components: {
        AuthorBox,
        ShareButton,
    },
    props: {
        news_item: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        getDate() {
            return getDate(this.news_item.date);
        },
    },
    computed: {
        linkOpenNew() {
            return `/news/${this.news_item.id}`;
        },
        linkOpenAuthor() {
            return `/authors/${this.news_item.authorId}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_author-list-item.scss";
</style>
