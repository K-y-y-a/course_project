<template>
    <div class="share-button__box">
        <button
            class="share-button__share"
            v-on:focus="showLinks"
            v-on:blur="hideLinks"
        >
            &#10148;
        </button>

        <div class="share-button__list" v-if="isSend">
            <button class="share-button__list-item" v-on:click="sendTelegram">
                <span class="share-button__list-item-title">Telegram</span>
                <img
                    class="share-button__list-item-icon"
                    src="/assets/images/icons/telegram-icon.svg"
                    alt="telegram-img"
                />
            </button>
            <button class="share-button__list-item" v-on:click="sendTwitter">
                <span class="share-button__list-item-title">Twitter</span>
                <img
                    class="share-button__list-item-icon"
                    src="/assets/images/icons/twitter-icon.svg"
                    alt="twitter-img"
                />
            </button>
            <button class="share-button__list-item" v-on:click="sendVK">
                <span class="share-button__list-item-title">ВКонтакте</span>
                <img
                    class="share-button__list-item-icon"
                    src="/assets/images/icons/vk-icon.svg"
                    alt="twitter-img"
                />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { sleep } from "/src/scripts";

const SHARE_TELEGRAM = "https://telegram.me/share/url?url=";
const SHARE_TWITTER = "https://twitter.com/intent/tweet?url=";
const SHARE_VK = "https://vk.com/share.php?url=";
const BASE_DOMAIN = window.location.hostname + ":" + window.location.port;

export default {
    data() {
        return {
            isSend: false,
        };
    },
    props: {
        route: {
            type: String,
            default() {
                return {};
            },
        },
    },
    methods: {
        showLinks() {
            this.isSend = true;
        },
        hideLinks() {
            sleep(100).then(() => {
                this.isSend = false;
            });
        },
        sendTelegram() {
            this.openWindow(SHARE_TELEGRAM + BASE_DOMAIN + this.route);
        },
        sendTwitter() {
            this.openWindow(SHARE_TWITTER + BASE_DOMAIN + this.route);
        },
        sendVK() {
            this.openWindow(SHARE_VK + BASE_DOMAIN + this.route);
        },
        openWindow(url: URL) {
            window.open(
                url,
                "_blank",
                "location=yes,height=570,width=520,scrollbars=yes,status=yes"
            );
        },
    },
};
</script>

<style scoped>
@import "/src/assets/_share-button.scss";
</style>
