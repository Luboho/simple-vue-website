<template>
  <!-- Articles -->          
  <div>
      <div v-for="article in articles" :key="article.id">

        <div class="py-10 px-20 article-bg ">
            <div class="w-full shadow-xl overflow-auto rounded text-gray-900 text-justify p-5">
              <img src="@/assets/pics/photo2.jpeg" class="rounded-lg p-3 md:w-6/12 lg:w-8/12 md:float-left lg:float-left">
                <p class="pt-4 lg:text-md font-bold">{{ article.title }}</p>
                <p class="text-xs">{{ article.text }}</p>
            </div>
        </div>

      </div>

  </div>

<!-- End of Articles -->
</template>

<script>
  export default {
      props: ["articles"],

      name: "Articles",

     
  }
</script>

<style>
  .article-bg div {
    background-color: rgba(221, 218, 214, 0.85);
  }
</style>