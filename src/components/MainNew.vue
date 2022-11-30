<template>
    <div class="news__main-new">
        <div class="news__photo">
            <img class="news__image" alt="Новость 1" v-bind:src="mainNew.photoLink">
            <div class="news__photo-shadow"></div>
        </div>
        <div class="news__info">
            <div class="news__date text-size_small">{{ getDate() }}</div>
            <div class="news__share">Раздача</div>
        </div>

        <router-link
            :to="linkOpen"
            tag="button"
            class="news__link"
        >
            <div class="news__title">
                {{mainNew.title}}
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { isString } from '@vue/shared';

    export default {
        props: {
            mainNew: {
                type: Object,
                default() {
                    return {}
                },
            }
        },
        methods: {
            getDate() {
              // 11,16 уже встречал в коде, дублирования надо избегать и выносить всё в отдельные фичи,
              //     кроме того магических цифр надо избегать и давать им имена через переменные
                if(isString(this.mainNew.date)) return this.mainNew.date.slice(11,16);
            }
        },
        computed: {
          // это можно сделать и в <template> секции без computed
            linkOpen () {
                return `/news/${this.mainNew.id}`;
            }
        }
    }
</script>

<style scoped>

</style>
