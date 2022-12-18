<template>
    <div class="search-list__item">
        <router-link :to="linkOpen" tag="button" class="search-list__link">
            <span class="search-list__new-title">{{ news_item.title }}</span>
            <span class="search-list__new-image-box">
                <img
                    class="search-list__new-image"
                    alt="Фотозаголовок"
                    v-bind:src="news_item.photoLink"
                />
            </span>
        </router-link>

        <div class="search-list__info">
            <div class="search-list__date text-size_small">{{ getDate() }}</div>
            <ShareButton
                class="search-list__share"
                :route="linkOpen"
            ></ShareButton>
        </div>
    </div>
</template>

<script lang="ts">
import ShareButton from "/src/components/ShareButton.vue";
import { getDate } from "/src/scripts";

export default {
    components: {
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
        linkOpen() {
            return `/news/${this.news_item.id}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_search-list.scss";
</style>
