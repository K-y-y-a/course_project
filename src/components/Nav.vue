<template>
    <div class="layout__nav nav">
        <router-link to="/" class="nav__link">
            <img
                class="nav__img"
                alt="Новости"
                src="/assets/images/logo/1.png"
            />
        </router-link>

        <div class="nav__menu">
            <router-link to="/sign-in" class="nav__login" v-if="!checkToken">
                <img
                    class="nav__img"
                    alt="Логин"
                    src="/assets/images/logo/login-ria.png"
                />
            </router-link>

            <div class="nav__user" v-if="checkToken" v-on:click="logout">
                <span class="nav__user-name">{{ getUserName }}</span>
                <img
                    class="nav__img"
                    alt="Логин"
                    src="/assets/images/logo/logout-ria.png"
                />
            </div>

            <router-link to="/search" class="nav__search">
                <img
                    class="nav__img"
                    alt="Поиск"
                    src="/assets/images/logo/search-ria.png"
                />
            </router-link>
            <div class="nav__chat" v-on:click="showChat">
                <img
                    class="nav__img"
                    alt="Чат"
                    src="/assets/images/logo/chat-ria.png"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

export default {
    props: {},
    methods: {
        ...mapActions(["CLEAR_TOKEN", "CLEAR_USER_NAME", "CHANGE_CHAT_STATE"]),
        logout() {
            this.CLEAR_TOKEN();
            this.CLEAR_USER_NAME();
        },
        showChat() {
            this.CHANGE_CHAT_STATE(true);
        },
    },
    computed: {
        ...mapGetters(["GET_USER_TOKEN", "GET_USER_NAME", "GET_CHAT_STATE"]),
        checkToken() {
            let token = this.GET_USER_TOKEN();

            if (token != "user exists" && token != "") {
                return true;
            } else {
                return false;
            }
        },
        getUserName() {
            return this.GET_USER_NAME();
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_nav.scss";
</style>
