<template>
  <div id="app" class="bg-image max-w-screen-3xl  shadow-inner overflow-y-scroll">
      <MainNav />
      <div class="mx-auto max-w-6xl">
        <router-view :currentUrl="currentUrl"></router-view>
      </div>
      <Footer />
  </div>
</template>

<script>
// import Content from './components/Content.vue'
// import AboutUs from './views/AboutUs.vue';
// import Contact from './components/Posts';
// import Home from './views/Home';
// import Rental from './views/Rental.vue';
// import Services from './views/Services.vue';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
// import eventBus from "./eventBus.js";

 export default {
        name: "App",

        computed: {
            currentUrl() {
                return window.location.href;
            }
        },
        
        components: {
        
           MainNav,
           Footer,
        }
    }
</script>


<style>
.bg-image {
        background-image: url('~@/assets/default/dots.png');
        background-repeat: repeat;
        background-color: #B45309;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
