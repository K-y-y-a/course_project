<template>
    <div class="header">
        <div class="header__logo">
            <span>{{ model.description }}</span>
        </div>
        <div class="header__menu">
            <div class="task__button" v-on:click="emitOnRemove">&#215;</div>
        </div>
        
    </div>
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
