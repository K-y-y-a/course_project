<template>
    <div class="search-list__item">
        <router-link
            :to="linkOpen"
            tag="button"
            class="search-list__link"
        >
            <span class="search-list__new-title">{{neww.title}}</span>
            <span class="search-list__new-image-box">
                <img class="search-list__new-image" alt="Фотозаголовок" v-bind:src="neww.photoLink">
            </span>
        </router-link>

        <div class="search-list__info">
            <div class="search-list__date text-size_small">{{getDate()}}</div>
            <div class="search-list__share">Раздача</div>
        </div>
    </div> 
</template>

<script>
    export default {
        props: {
            neww: {
                type: Object,
                default() {
                    return {}
                },
            }
        },
        methods: {
            getDate() {
                let datestring = this.neww.date;
                let date = datestring.slice(0, 10).split("-").reverse().join(".");
                let time = datestring.slice(11, 16);
                let result = date + ", " + time;
                return result
            }
        },
        computed: {
            linkOpen () {
                return `/news/${this.neww.id}`;
            }
        }
    }
</script>

<style scoped>

</style>
