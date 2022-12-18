<template>
    <div class="news__main-new">
        <div class="news__photo">
            <img
                class="news__image"
                alt="Новость 1"
                v-bind:src="mainNew.photoLink"
            />
            <div class="news__photo-shadow"></div>
        </div>
        <div class="news__info">
            <div class="news__date text-size_small">{{ getDate() }}</div>
            <ShareButton class="news__share" :route="linkOpen"></ShareButton>
        </div>

        <router-link :to="linkOpen" tag="button" class="news__link">
            <div class="news__title">
                {{ mainNew.title }}
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import ShareButton from "/src/components/ShareButton.vue";
import { isString } from "@vue/shared";
import { getDate } from "/src/scripts";

export default {
    components: {
        ShareButton,
    },
    props: {
        mainNew: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        getDate() {
            return getDate(this.mainNew.date);
        },
    },
    computed: {
        linkOpen() {
            return `/news/${this.mainNew.id}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_news.scss";
</style>
