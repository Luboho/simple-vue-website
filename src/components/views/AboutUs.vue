<template>
<div class="pt-18 pb-48">
  <h1 class="text-bg text-3xl pt-10 px-10 text-gray-200">Niečo málo o nás.</h1>
      <Posts :posts="filteredPosts" />
</div>
</template>

<script>
  import posts from '../../data/posts';
  import Posts from '../Posts';
  
  export default {
    name: "AboutUs",

    computed: {
      filteredPosts() {
          return posts.filter(function(post) {
            return (post.writtenFor == 'about-us');
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