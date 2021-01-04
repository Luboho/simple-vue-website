<template>
  <div class="">
    <div class="lg:flex md:inline-block sm:inline-block">
      <MainNav />
      <div class="flex flex-col flex-1 w-screen h-screen overflow-y-hidden">
        <Content   />
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue';
import Content from './components/Content.vue';
import "tailwindcss/tailwind.css";

export default {
  name: 'App',

  components: {
    Content: Content,
    MainNav: MainNav
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

 * {
   font-family: 'Titillium', 'Roboto', 'sans-serif';
 }
</style>
