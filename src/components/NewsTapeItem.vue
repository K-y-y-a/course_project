<template>
    <div class="news-tape__item">
        <a href="/news/somenew.html" class="news-tape__link">
            <span class="news-tape__date text-size_small">21:38</span>
            <span class="news-tape__title">Шойгу провел переговоры с главой Минобороны Китая</span>
        </a>
    </div>
</template>

<script lang="ts">
// весь неиспользуемый по проекту код лучше удалять
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
