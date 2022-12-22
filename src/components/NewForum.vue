<template>
    <div class="chats">
        <div class="chats__title">
            <div class="chats__close-button">&#9587;</div>
            {{ chatsMessage }}
        </div>
        <div class="chats-box">
            <div
                class="chat__chat-news chat-news blocks-separator"
                v-for="news_item in GET_NEWS_RANGE(0, 30)"
                :key="news_item.id"
                :news_item="news_item"
                :blockSize="'main'"
            >
                <div class="chat-news__title-cell">
                    <div class="chat-news__new-title">
                        {{ news_item.title }}
                    </div>

                    <div class="chat-news__new-photo">
                        <img
                            class="chat-news__new-image"
                            alt="Фотозаголовок"
                            v-bind:src="news_item.photoLink"
                        />
                    </div>
                </div>

                <div class="chat-news__date text-size_small">
                    {{ getDate(news_item.date) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { getDate } from "/src/scripts";

export default {
    data() {
        return {
            chatsMessage: "Чаты",
        };
    },
    methods: {
        getDate(date) {
            return getDate(date);
        },
    },
    computed: {
        ...mapGetters(["GET_NEWS_RANGE"]),
    },
};
</script>

<style scoped>
@import "/src/assets/_new-forum.scss";
</style>
