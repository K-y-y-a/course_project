<template>
    <div class="category-types__category-item category-item" v-for="category in categories">    
        <a class="category-item__link" v-bind:href="category[1]">
            <span class="category-item__title">{{ category[0] }}</span>
        </a>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                categories: [
                    ["Политика", "/politics/index.html"], 
                    ["В мире", "/politics/index.html"], 
                    ["Экономика", "/politics/index.html"],
                    ["Общество", "/politics/index.html"], 
                    ["Происшествия", "/politics/index.html"], 
                    ["Армия", "/politics/index.html"],
                    ["Наука", "/politics/index.html"], 
                    ["Спорт", "/politics/index.html"], 
                    ["Религия", "/politics/index.html"],
                    ["Культура", "/politics/index.html"], 
                    ["Туризм", "/politics/index.html"], 
                ]
            }
        }
    }
</script>

<style scoped>

</style>
