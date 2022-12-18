<template>
    <div>
        <h1>Товар номер {{ newId }}</h1>
    </div>
</template>

<script lang="ts">
    export default {
        computed: {
            newId () {
                return +this.$route.params.id;
            }
        }
    }
</script>

<style>
</style>