<template>
    <div class="new-block blocks-separator">
        <router-link :to="linkOpen">
            <div class="new-block__photo" v-if="isMain">
                <img
                    class="new-block__image"
                    alt="Новость 1"
                    v-bind:src="news_item.photoLink"
                />
                <div class="new-block__photo-shadow"></div>
            </div>

            <div
                class="new-block__new-title"
                v-bind:class="{
                    'new-block__title-main': isMain,
                    'new-block__title-simple': isSimple,
                }"
                v-if="isSimple || isMain"
            >
                {{ news_item.title }}
            </div>

            <div class="new-block__horizontal-block" v-if="isHorizontal">
                <img
                    class="new-block__horizontal-block-image"
                    alt="Фотография события"
                    v-bind:src="news_item.photoLink"
                />
                <span class="new-block__horizontal-block-title">{{
                    news_item.title
                }}</span>
            </div>

            <div class="new-block__title-cell" v-if="isAuthor">
                <div class="new-block__author-block">
                    <div
                        class="new-block__new-title"
                        v-bind:class="{
                            'new-block__title-main': isMain,
                            'new-block__title-simple': isSimple,
                            'new-block__title-author': isAuthor,
                        }"
                    >
                        {{ news_item.title }}
                    </div>
                    <div class="new-block__author-link" v-if="isAuthor">
                        <AuthorBox
                            :news_item="news_item"
                            :large="false"
                        ></AuthorBox>
                    </div>
                </div>

                <span class="new-block__new-photo" v-if="isAuthor">
                    <img
                        class="new-block__new-image"
                        alt="Фотозаголовок"
                        v-bind:src="news_item.photoLink"
                    />
                </span>
            </div>
        </router-link>

        <div class="new-block__info">
            <div class="new-block__date text-size_small">
                {{ getDate() }}
            </div>
            <ShareButton
                class="new-block__share"
                :route="linkOpen"
                :expandDirection="'up'"
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
        blockSize: {
            type: String,
            default() {
                return "small";
            },
        },
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
        isMain() {
            return this.blockSize == "main" ? true : false;
        },
        isAuthor() {
            return this.blockSize == "author" ? true : false;
        },
        isHorizontal() {
            return this.blockSize == "horizontal" ? true : false;
        },
        isSimple() {
            return this.blockSize == "main" ||
                this.blockSize == "author" ||
                this.blockSize == "horizontal"
                ? false
                : true;
        },
    },
};
</script>

<style scoped>
@import "/src/assets/_new-block.scss";
</style>
