<template>
<div>
  <h1 class="text-3xl pt-10 px-10 text-gray-200">Služby spoločnosti Flores</h1>
      <Posts :posts="filteredPosts" />
    
</div>
</template>

<script>
  import posts from '../data/posts.js';
  import Posts from '../components/Posts.vue';
  
  export default {
    name: "Services",

    computed: {
      filteredPosts() {
          return posts.filter(function(post) {
            return (post.writtenFor == 'services');
        });
      },
    },

    components: {
      Posts
    }
  }
</script>

<style>

</style>