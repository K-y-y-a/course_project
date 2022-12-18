<template>
    <div class="layout__search search">
        <div class="search__line">
            <input type="text" class="search__line-text" v-model="text" placeholder="Поиск" v-on:keyup.enter="submit"/>
            <button class="search__line-button" v-on:click="clear">&#215;</button>
        </div>
           
        <div class="search__search-list search-list">
            <SearchList
                v-for="neww in news"
                :key="neww.id"
                :neww="neww"
            ></SearchList>
        </div>

        <div class="search__error" v-if="isEmpty">{{error}}</div>
        
    </div>
</template>

<script lang="ts">
    import SearchList from "/src/components/SearchList.vue"

    import { mapGetters } from 'vuex'

    export default {
        components: {
            SearchList
        },
        data () {
            return {
                text: "",
                news: [],
                isEmpty: false,
              // вместо дублирования с CategoryPage можно создать NoData.vue компонент,
              // вообще всё что дублируется надо выносить в отдельные фичи всегда
                error: "К сожалению, по вашему запросу ничего не найдено",
            }
        },
        methods: {
            submit() {
                this.GET_NEW_BY_TEXT(this.text);
                this.news = this.GET_NEW_BY_TEXT(this.text);

                if(this.news.length == 0) this.isEmpty = true
                else this.isEmpty = false;
            },
            clear() {
                this.text = "";
            },
            getNew() {
                return this.getNewById(this.$route.params.id);               
            },
        },
        computed: {
            ...mapGetters([
                'GET_NEW_BY_TEXT'
            ]),
        },
    }
</script>

<style scoped>

</style>
