<template>
    <div class="author-box__author-link-cell">
        <span
            class="author-box__author-photo"
            v-bind:class="{ 'author-box_image-lagre': large }"
        >
            <img
                class="author-box__author-image"
                alt="Фотография автора"
                v-bind:src="news_item.authorPhotoLink"
            />
        </span>
        <span class="author-box__author-name text-size_small">{{
            news_item.author
        }}</span>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        news_item: {
            type: Object,
            default() {
                return {};
            },
        },
        large: {
            type: Boolean,
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_author-box.scss";
</style>
