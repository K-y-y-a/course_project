<template>
    <div class="chats" v-if="GET_CHAT_STATE()">
        <div class="chats__title">
            <div
                class="chats__close-button"
                v-on:click="hideChat"
                v-if="!isOpen()"
            >
                &#9587;
            </div>

            <div
                class="chats__close-button"
                v-on:click="returnToChat"
                v-if="isOpen()"
            >
                &#10094;
            </div>

            {{ chatsMessage }}
        </div>
        <div class="chats-box" v-if="!isOpen()">
            <div
                class="chat__chat-new chat-new blocks-separator"
                v-for="news_item in GET_NEWS_RANGE(0, 30)"
                :key="news_item.id"
                :news_item="news_item"
                v-on:click="goToChat(news_item)"
            >
                <div class="chat-new__title-cell">
                    <div class="chat-new__new-title">
                        {{ news_item.title }}
                    </div>

                    <div class="chat-new__new-photo">
                        <img
                            class="chat-new__new-image"
                            alt="Фотозаголовок"
                            v-bind:src="news_item.photoLink"
                        />
                    </div>
                </div>

                <div class="chat-new__date text-size_small">
                    {{ getDate(news_item.date) }}
                </div>
            </div>
        </div>

        <div class="new-forum" v-if="isOpen()">
            <div
                class="new-forum__comment"
                v-for="item in GET_NEW_COMMENTS()"
                :key="item.id"
            >
                <div class="new-forum__comment-nickName">
                    {{ item.nickName }}
                </div>
                <div class="new-forum__comment-area">
                    <div class="new-forum__comment-text">
                        {{ item.comment }}
                    </div>
                    <div class="new-forum__comment-date">
                        {{ getDate(item.date) }}
                    </div>
                </div>
            </div>

            <div class="new-forum__input-field">
                <textarea
                    class="new-forum__text"
                    v-model="newCommentText"
                    v-if="userLogin()"
                ></textarea>
                <button
                    class="new-forum__submit"
                    v-on:click="sendComment()"
                    v-if="userLogin()"
                >
                    &#10148;
                </button>

                <div class="new-forum__chat-message" v-if="!userLogin()">
                    <div class="new-forum__chat-message-block">
                        {{ chatMessage1 }}
                        <router-link to="/sign-in">
                            <span>{{ chatMessage2 }}</span>
                        </router-link>
                        {{ chatMessage3 }}
                    </div>
                </div>
            </div>
        </div>

        <div class="chats__error-message" v-if="!GET_USER_EXISTS()">
            {{ errorMessage }}
            <button
                class="chats__error-message-button"
                v-on:click="hideErrorMessage"
            >
                {{ errorButtonMessage }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { getDate } from "/src/scripts";

export default {
    data() {
        return {
            newCommentText: "",
            chatsMessage: "Чаты",
            errorMessage: "Ошибка! Попробуйте перезайти",
            errorButtonMessage: "Закрыть",
            chatMessage1: "Чтобы написать комментарий",
            chatMessage2: "войдите",
            chatMessage3: "в систему",
        };
    },
    methods: {
        ...mapActions([
            "ADD_THIS_CHAT_ID",
            "ADD_NEW_COMMENT",
            "CHANGE_CHAT_STATE",
            "CHANGE_USER_EXISTS",
            "GET_NEW_COMMENTS_FROM_API",
            "CHANGE_CHAT_NEW_STATE",
        ]),
        getDate(date) {
            return getDate(date);
        },
        goToChat(news_item: { id: string }) {
            this.CHANGE_CHAT_NEW_STATE(true);
            this.ADD_THIS_CHAT_ID(news_item.id);
            this.GET_NEW_COMMENTS_FROM_API(news_item.id);
        },
        sendComment() {
            this.ADD_NEW_COMMENT(this.newCommentText);
            this.newCommentText = "";
        },
        hideChat() {
            this.CHANGE_CHAT_STATE(false);
        },
        hideErrorMessage() {
            this.CHANGE_USER_EXISTS(true);
        },
        returnToChat() {
            this.CHANGE_CHAT_NEW_STATE(false);
            this.ADD_THIS_CHAT_ID("");
        },
        userLogin() {
            //console.log(this.GET_USER_TOKEN());
            if (this.GET_USER_TOKEN() == "") return false;
            else return true;
        },
        isOpen() {
            return this.GET_CHAT_NEW_STATE();
        },
    },
    computed: {
        ...mapGetters([
            "GET_NEWS_RANGE",
            "GET_NEW_COMMENTS",
            "GET_USER_EXISTS",
            "GET_CHAT_STATE",
            "GET_NEW_COMMENTS",
            "GET_USER_TOKEN",
            "GET_CHAT_NEW_STATE",
            "GET_THIS_CHAT_ID",
        ]),
    },
    beforeUpdate() {
        this.GET_NEW_COMMENTS_FROM_API(this.GET_THIS_CHAT_ID());
    },
};
</script>

<style scoped>
@import "/src/assets/_chat.scss";
</style>
