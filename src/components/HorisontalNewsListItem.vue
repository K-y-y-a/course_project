<template>
    <div class="horisontal-news-list__item">
        <router-link
            :to="linkOpen"
            tag="button"
            class="horisontal-news-list__link"
        >
            <span class="horisontal-news-list__new-photo">
                <img
                    class="horisontal-news-list__new-image"
                    alt="Фотография события"
                    v-bind:src="news_item.photoLink"
                />
            </span>
            <span class="horisontal-news-list__new-title">{{
                news_item.title
            }}</span>
        </router-link>

        <div class="horisontal-news-list__info">
            <div class="horisontal-news-list__date text-size_small">
                {{ getDate() }}
            </div>
            <ShareButton
                class="horisontal-news-list__share text-size_small"
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
@import "/src/assets/_horisontal-news-list.scss";
</style>
