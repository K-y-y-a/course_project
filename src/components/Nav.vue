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
            <router-link to="/signin" class="nav__login">
                <img
                    class="nav__img"
                    alt="Логин"
                    src="/assets/images/logo/login-ria.png"
                />
            </router-link>
            <router-link to="/search" class="nav__search">
                <img
                    class="nav__img"
                    alt="Поиск"
                    src="/assets/images/logo/search-ria.png"
                />
            </router-link>
            <div class="nav__chat">
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
export default {
    emits: ["onRemove"],
    props: {},
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_nav.scss";
</style>
