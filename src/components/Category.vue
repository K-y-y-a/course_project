<template>
    <div class="main__category category" id="category-scroll">
        <CategoryItem
            v-for="category in GET_CATEGORIES"
            :key="category.title"
            :category="category"
        />

        <div class="category__void-box"></div>

        <div class="category__button-block">
            <button
                class="category__button category_button-left"
                @click="scrollLeft('.category')"
            >
                &lt;
            </button>
            <button
                class="category__button category_button-right"
                @click="scrollRight('.category')"
            >
                &gt;
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import CategoryItem from "/src/components/CategoryItem.vue";
import { mapGetters } from "vuex";

import { scrollRight, scrollLeft } from "/src/scripts";

export default {
    components: {
        CategoryItem,
    },
    computed: {
        ...mapGetters(["GET_CATEGORIES"]),
    },
    methods: {
        scrollRight(class_name: string) {
            return scrollRight(class_name);
        },
        scrollLeft(class_name: string) {
            return scrollLeft(class_name);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_category.scss";
</style>
