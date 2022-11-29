<template>
	<main class="layout">
		<Nav></Nav>
		<router-view></router-view>  
		<!-- <Widgets></Widgets> -->
	</main>	
</template>

<script>
	import Main from "/src/components/Main.vue"
	import Nav from "/src/components/Nav.vue"

	import { mapGetters, mapActions } from 'vuex'

	const LIMIT_NEWS_ON_PAGE = 40;    
    const LIMIT_AUTHOR_NEWS_ON_PAGE = 2;  

	export default {
		name: 'App',
		components: {
			Main,
			Nav,
		},
		methods: {
            ...mapActions([
                'GET_NEWS_FROM_API',
                'GET_AUTHOR_NEWS_FROM_API',
				'GET_CATEGORIES_FROM_API'
            ]),
            GetNewsRange(start, end){
                GET_NEWS_RANGE(start, end)
                    .then(res => { return res.split('\n') });
            }
        },
		mounted() {
            this.GET_NEWS_FROM_API(LIMIT_NEWS_ON_PAGE);
            this.GET_AUTHOR_NEWS_FROM_API(LIMIT_AUTHOR_NEWS_ON_PAGE);
			this.GET_CATEGORIES_FROM_API();
        }
	}

</script>

<style scoped>
	
</style>
