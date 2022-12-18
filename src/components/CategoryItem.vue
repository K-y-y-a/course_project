<template>
    <div class="category__category-item category-item">
        <router-link :to="linkOpen" tag="button" class="category-item__link">
            <span class="category-item__title">{{ category.title }}</span>
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        category: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    computed: {
        linkOpen() {
            return `/categories/${this.category.id}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/_category-item.scss";
</style>
