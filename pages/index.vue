<template>
  <section class="container">
    <div>
      <PostList :posts="posts"/>
    </div>
  </section>
</template>

<script>
  import PostList from '~/components/posts/PostList.vue'
  import wp from '~/lib/wp'

  export default {
    async asyncData ({ params }) {
      return wp.posts()
    },
    head () {
      return {
        title: `${this.$store.state.site_data.name} | Home`
      }
    },
    components: {
      PostList
    }
  }
</script>

<style lang="scss">
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    max-width: 1080px;
  }

  .main-contents {
    margin-top: -3.5rem;
  }
</style>
