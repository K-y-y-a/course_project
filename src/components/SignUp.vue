<template>
    <div class="page-not-found">
        <h1>
            {{ message }}
        </h1>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            message: "PageNotFound",
        };
    },
};
</script>

<style lang="scss" scoped>
//@import "/src/assets/_page-not-found.scss";
</style>
