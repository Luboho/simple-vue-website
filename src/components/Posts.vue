<template>
  <!-- Posts -->          
  <div>
      <div v-for="post in posts" :key="post.id">

        <div class="py-10 px-10 post-bg ">
            <div class="w-full shadow-xl overflow-auto rounded text-gray-900 text-justify p-5">
              <img :src="post.image" class="rounded-lg p-3 md:w-6/12 lg:w-8/12 md:float-left lg:float-left">
                <p class="pt-4 lg:text-md font-bold">{{ post.title }}</p>
                <p class="text-xs">{{ post.text }}</p>
            </div>
        </div>

      </div>

  </div>

<!-- End of Posts -->
</template>

<script>
  export default {
      props: ["posts"],

      name: "Posts",

     
  }
</script>

<style>
  .post-bg div {
    background-color: rgba(221, 218, 214, 0.85);
  }
</style>