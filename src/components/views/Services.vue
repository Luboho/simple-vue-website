<template>
<div>
  <h1 class="text-3xl p-6 text-lime-700">Služby spoločnosti Flores</h1>
      <Articles :articles="filteredArticles" />
    
</div>
</template>

<script>
  import articles from '../../data/articles';
  import Articles from '../Articles';
  
  export default {
    name: "Services",

    computed: {
      filteredArticles() {
          return articles.filter(function(article) {
            return (article.writtenFor == 'services');
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