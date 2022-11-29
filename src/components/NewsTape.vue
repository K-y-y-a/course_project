<template>
    <div class="news-tape__tape">
        <div class="news-tape__list">
            
        </div>
    </div>

    <div class="news-tape__close-button"></div>
</template>

<script>
    export default {
        emits: ['onRemove'],
        props: {
            model: {
                required: true,
                default: {
                    id: 0,
                    description: 'Create todo list'
                }
            }
        }
    }
</script>

<style scoped>

</style>
