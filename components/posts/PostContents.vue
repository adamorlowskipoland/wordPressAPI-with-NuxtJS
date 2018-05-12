<template>
  <article class="card">
    <h2 class="post-subtitle">
      <nuxt-link :to="`/posts/${post.slug}`"
                 v-if="mode === 'excerpt'">
        {{ post.title.rendered }}
      </nuxt-link>
      <span v-else>{{ post.title.rendered }}</span>
    </h2>
    <div v-if="mode === 'full'"
         class="post-meta">
      <p>{{ post.date_gmt | output-date }}</p>
      <p>by {{ authors[post.author].name }}</p>
    </div>
    <div class="post-body"
         v-html="post.excerpt.rendered"
         v-if="mode === 'excerpt'">
    </div>
    <div class="post-body"
         v-html="post.content.rendered"
         v-else>
    </div>
  </article>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      post: { type: Object },
      mode: {
        type: String,
        validator: val => (['excerpt', 'full'].includes(val))
      }
    },
    computed: mapState(['authors'])
  }
</script>
<style lang="scss">
  .card {
    background: #FFFFFF;
    border: 1px solid #B3B3B3;
    box-shadow: 2px 0 10px 0 rgba(0,0,0,0.32), -2px 4px 10px 0 rgba(0,0,0,0.29);
    border-radius: 10px;
    padding: 1rem 1.25rem;
  }
</style>
