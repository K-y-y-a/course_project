<template>
    <div class="sign-in">
        <h1 class="sign-in__title" v-if="isSignUp">
            {{ signUpMessage }}
        </h1>

        <h1 class="sign-in__title" v-if="isSignIn">
            {{ signInMessage }}
        </h1>

        <input
            class="sign-in__input"
            type="text"
            v-bind:placeholder="nickNamePlaceholder"
            v-model="nickName"
            v-if="isSignUp"
        />

        <input
            class="sign-in__input"
            type="text"
            v-bind:placeholder="loginPlaceholder"
            v-model="login"
        />

        <input
            class="sign-in__input"
            type="password"
            v-bind:placeholder="passwordPlaceholder"
            v-model="password"
        />

        <button
            class="sign-in__button sign-in_button-incomplete"
            v-on:click="signIn"
            v-if="isSignIn"
        >
            {{ singInButtonText }}
        </button>

        <button
            class="sign-in__button sign-in_button-incomplete"
            v-on:click="signUp"
            v-if="isSignUp"
        >
            {{ singUpButtonText }}
        </button>

        <router-link to="/sign-up" class="sign-in__to-sign-up" v-if="isSignIn">
            <span>{{ signUpText }}</span>
        </router-link>

        <router-link to="/sign-in" class="sign-in__to-sign-up" v-if="isSignUp">
            <span>{{ signInText }}</span>
        </router-link>

        <div v-if="checkToken"></div>
    </div>
</template>

<script lang="ts">
import { Md5 } from "ts-md5";
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            signUpMessage: "Регистрация",
            signInMessage: "Вход на сайт",
            loginPlaceholder: "Почта",
            passwordPlaceholder: "Пароль",
            nickNamePlaceholder: "Ваше имя",
            singInButtonText: "Войти",
            singUpButtonText: "Зарегистрироваться",
            signUpText: "Регистрация",
            signInText: "Авторизация",
            login: "",
            password: "",
            nickName: "",
            isSignIn: false,
            isSignUp: false,
        };
    },
    methods: {
        ...mapActions([
            "ADD_NEW_USER",
            "GET_USER_TOKEN_FROM_API",
            "GET_USER_NAME_FROM_API",
        ]),
        signIn() {
            this.GET_USER_TOKEN_FROM_API({
                login: Md5.hashStr(this.login),
                password: Md5.hashStr(this.password),
            });
            this.GET_USER_NAME_FROM_API({
                login: Md5.hashStr(this.login),
                password: Md5.hashStr(this.password),
            });
        },
        signUp() {
            this.ADD_NEW_USER({
                login: Md5.hashStr(this.login),
                password: Md5.hashStr(this.password),
                nickName: this.nickName,
            });
        },
        setPageType() {
            if (window.location.pathname.split("/").pop() == "sign-in") {
                this.isSignIn = true;
                this.isSignUp = false;
            } else {
                this.isSignIn = false;
                this.isSignUp = true;
            }
        },
    },
    computed: {
        ...mapGetters(["GET_USER_TOKEN"]),
        checkToken() {
            if (this.GET_USER_TOKEN() == "user exists") alert("user exists");
            else if (
                this.GET_USER_TOKEN() != "user exists" &&
                this.GET_USER_TOKEN() != ""
            )
                this.$router.push("/");
            return true;
        },
    },
    created() {
        this.setPageType();
    },
    updated() {
        this.setPageType();
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_sign-page.scss";
</style>
