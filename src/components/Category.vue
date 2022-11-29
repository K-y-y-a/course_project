<template>
    <div class="main__category category" id="category-scroll">
        <CategoryItem
            v-for="category in GET_CATEGORIES"
            :key="category.title"
            :category="category"
        />

        <div class="category__void-box"></div>

        <div class="category__button-block">
            <button class="category__button category_button-left" @click="scrollLeft">&lt;</button>
            <button class="category__button category_button-right" @click="scrollRight">&gt;</button>
        </div>
        
    </div>
</template>

<script>
    import CategoryItem from "/src/components/CategoryItem.vue"
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            CategoryItem,
        },
        computed: {
            ...mapGetters(['GET_CATEGORIES'])
        },
        methods: {
            scrollRight() {
                let section = document.querySelector(".category");
                section.scrollLeft += 100;
            },
            scrollLeft() {
                let section = document.querySelector(".category");
                section.scrollLeft -= 100;
            }
        }
    }
</script>

<style scoped>

</style>
