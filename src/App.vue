<template>
	<main class="layout">
		<Nav></Nav>
		<router-view></router-view>  
		<!-- <Widgets></Widgets> -->
	</main>	
</template>

<script lang="ts">
	import Main from "/src/components/Main.vue"
	import Nav from "/src/components/Nav.vue"

	import { mapActions } from 'vuex'

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
            ])
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
