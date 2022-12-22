<template>
    <main class="layout">
        <Nav></Nav>
        <router-view></router-view>
        <Chat></Chat>
        <!-- <NewForum></NewForum> -->
    </main>
</template>

<script lang="ts">
import NewForum from "/src/components/NewForum.vue";
import Chat from "/src/components/Chat.vue";
import Nav from "/src/components/Nav.vue";

import { mapActions } from "vuex";

const LIMIT_NEWS_ON_PAGE = 40;
const LIMIT_AUTHOR_NEWS_ON_PAGE = 2;

export default {
    name: "App",
    components: {
        NewForum,
        Chat,
        Nav,
    },
    methods: {
        ...mapActions([
            "GET_NEWS_FROM_API",
            "GET_AUTHOR_NEWS_FROM_API",
            "GET_CATEGORIES_FROM_API",
        ]),
    },
    mounted() {
        this.GET_NEWS_FROM_API({ start: 0, end: LIMIT_NEWS_ON_PAGE });
        this.GET_AUTHOR_NEWS_FROM_API({
            start: 0,
            end: LIMIT_AUTHOR_NEWS_ON_PAGE,
        });
        this.GET_CATEGORIES_FROM_API();
    },
};
</script>

<style scoped></style>
