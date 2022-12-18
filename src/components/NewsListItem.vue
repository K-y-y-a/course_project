<template>
    <div class="news-list-item blocks-separator">
        <router-link :to="linkOpen" tag="button" class="news-list-item__link">
            <span>{{ news_item.title }}</span>
        </router-link>

        <div class="news-list-item__info">
            <div class="news-list-item__date text-size_small">
                {{ getDate() }}
            </div>
            <ShareButton
                class="news-list-item__share"
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

<style scoped>
@import "/src/assets/_news-list-item.scss";
</style>
