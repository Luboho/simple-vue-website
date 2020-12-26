<template>
<div class="pt-24 pb-48">
  <h1 class="text-bg text-3xl p-6 text-lime-700">Niečo málo o nás.</h1>
      <Articles :articles="filteredArticles" />
</div>
</template>

<script>
  import articles from '../../data/articles';
  import Articles from '../Articles';
  
  export default {
    name: "AboutUs",

    computed: {
      filteredArticles() {
          return articles.filter(function(article) {
            return (article.writtenFor == 'about-us');
        });
      },
    },

    components: {
      Articles
    }
  }
</script>

<style>

</style>