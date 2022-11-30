<template>
    <div class="news__horisontal-news-list-box">
        <div class="news__horisontal-news-list horisontal-news-list">
            <HorisontalNewsListItem
                v-for="neww in news"
                :key="neww.id"
                :neww="neww"
            ></HorisontalNewsListItem>


            <div class="horisontal-news-list__void-box"></div>

            <div class="horisontal-news-list__button-block">
                <button class="horisontal-news-list__button horisontal-news-list_button-left" @click="scrollLeft">&lt;</button>
                <button class="horisontal-news-list__button horisontal-news-list_button-right" @click="scrollRight">&gt;</button>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
    import HorisontalNewsListItem from "/src/components/HorisontalNewsListItem.vue"

    export default {
        components: {
            HorisontalNewsListItem,
        },
        props: {
            news: {
                type: Object,
                default() {
                    return {}
                },
            }
        },
        methods: {
          // дублирование с Category.vue, это надо избегать, выносить всё что дублируется в одно место
            scrollRight() {
                let section = document.querySelector(".horisontal-news-list");
                section.scrollLeft += 100;
            },
            scrollLeft() {
                let section = document.querySelector(".horisontal-news-list");
                section.scrollLeft -= 100;
            }
        }
    }
</script>

<style scoped>

</style>
