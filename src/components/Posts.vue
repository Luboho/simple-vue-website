<template>
  <!-- Posts -->          
  <div class="relative z-20 pb-10">
      <div v-for="post in posts" :key="post.id">

        <div class="pt-10 px-10 post-bg relative z-20">
            <div class="relative z-20 w-full shadow-xl overflow-auto rounded text-gray-900 text-justify p-5">
              <img :src="post.image" class="relative z-20 rounded-lg p-3 md:w-6/12 lg:w-8/12 md:float-left lg:float-left">
                <p class="pt-4 lg:text-md font-bold">{{ post.title }}</p>
                <p class="text-sm">{{ post.text }}</p>
                  <img v-if="bgImage" class="anime" 
                      :src="shuffle(bgImagesArray)" alt="">
            </div>
        </div>

      </div>

  </div>

<!-- End of Posts -->
</template>

<script>
  export default {
      name: "Posts",

      props: ["posts"],

      created() {
          this.bgImage = this.shuffle(this.bgImagesArray)
      },

      data() {
        return {
          bgImagesArray: [
            require('@/assets/default/gardening.png'),
            require('@/assets/default/gardening2.png'),
            require('@/assets/default/gardening3.png'),
            require('@/assets/default/gardening4.png'),
            require('@/assets/default/gardening5.png'),
            require('@/assets/default/gardening6.jpg'),
            require('@/assets/default/gardening7.png'),
            require('@/assets/default/gardening8.png'),
            require('@/assets/default/flovers.gif'),
             require('@/assets/default/lake.png'),
          ],
        bgImage: []
        }
      },

      methods: {
        shuffle(items) {
          return items[Math.floor(Math.random()*items.length)];
        }
      }


  }
</script>

<style>
  .post-bg div {
    background-color: rgba(221, 218, 214, 0.85);
  }
  .anime {
    bottom: 5px;
    right: 5px;
    position: absolute;
    z-index: 10;
    opacity: .2;
  }
</style>