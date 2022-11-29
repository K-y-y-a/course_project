<template>
    <div class="news-list__item blocks-separator">
        <router-link
            :to="linkOpen"
            tag="button"
            class="news-list__link"
        >
            <span>{{neww.title}}</span>
        </router-link>

        <div class="news-list__info">
            <div class="news-list__date text-size_small">{{getDate()}}</div>
            <div class="news-list__share">Раздача</div>
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
