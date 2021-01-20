<template>
  <div>
    <h1 class="text-bg text-2xl py-10 px-5 text-gray-200">Mohli by ste potrebovať.</h1>
      <Masonry :media="media" :currentView="currentView" />
  </div>
</template>

<script>
  import { media, paragraphs } from '../../data/media';
  import Masonry from '../Masonry';

  export default {
    name: "Rental",

    props: ["currentView"],

    data: () => ({
      media,
      paragraphs,
    }),

    components: {
      Masonry
    },

}

</script>

<style >
  
</style>
