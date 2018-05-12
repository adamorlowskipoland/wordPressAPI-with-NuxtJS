<template>
  <ul class="post-list">
    <li v-for="post in posts"
        :key="post.id"
        class="post-list-item">
      <PostExcerpt :post="post"
                   mode="excerpt"/>
    </li>
  </ul>
</template>

<script>
  import PostExcerpt from './PostContents.vue'

  export default {
    props: {
      posts: { type: Array }
    },
    components: {
      PostExcerpt
    }
  }
</script>

<style lang="scss">
  .post-list {
    padding: 0;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    li {
      list-style: none;
    }
  }
</style>
