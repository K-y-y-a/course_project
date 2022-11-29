<template>
    <div class="horisontal-news-list__item">
        <router-link
            :to="linkOpen"
            tag="button"
            class="horisontal-news-list__link"
        >
            <span class="horisontal-news-list__new-photo">
                <img class="horisontal-news-list__new-image" alt="Фотография события" v-bind:src="neww.photoLink">
            </span>
            <span class="horisontal-news-list__new-title">{{neww.title}}</span>   
        </router-link>

        <div class="horisontal-news-list__info">
            <div class="horisontal-news-list__date text-size_small">{{getDate()}}</div>
            <div class="horisontal-news-list__share text-size_small">Раздача</div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            neww: {
                type: Object,
                default() {
                    return {}
                },
            }
        },
        methods: {
            getDate() {
                return this.neww.date.slice(11,16);
            }
        },
        computed: {
            linkOpen () {
                return `/news/${this.neww.id}`;
            }
        }
    }
</script>

<style scoped>

</style>
