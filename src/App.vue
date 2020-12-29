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
</style>
