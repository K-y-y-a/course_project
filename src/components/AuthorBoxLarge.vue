<template>
    <div class="author-box-large__author-link-cell">
        <span class="author-box-large__author-photo">
            <img class="author-box-large__author-image" alt="Фотография автора" v-bind:src="neww.authorPhotoLink">
        </span>
        <span class="author-box-large__author-name text-size_small">{{neww.author}}</span> 
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
        }
    }
</script>

<style scoped>

</style>
