<template>
<div>
  <h1 class="text-3xl p-6 shadow-xl text-lime-700">Služby spoločnosti Flores</h1>
      <Posts :posts="filteredPosts" />
    
</div>
</template>

<script>
  import posts from '../../data/posts';
  import Posts from '../Posts';
  
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