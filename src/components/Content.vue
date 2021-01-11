<template>
  <div class="container bg-image max-w-screen-2xl  shadow-inner overflow-y-scroll z-5">
      <keep-alive>
            <component :is="currentView.tag" :data="currentView.data" :currentView="currentView">
            </component>
      </keep-alive>
      <Footer />
  </div>
</template>

<script>
    import AboutUs from './views/AboutUs.vue';
    import Contact from './views/Contact.vue';
    import Home from './views/Home.vue';
    import Rental from './views/Rental.vue';
    import Services from './views/Services.vue';
    import Footer from './Footer';
    import eventBus from "../eventBus";

    export default {
        name: "Content",
        data() {
            return {
                history: [
                    {   // These info will render when we first open the page.
                        tag: 'home',
                        title: 'Domov',
                    }
                ],
                
            };
        },
        created() {
            eventBus.$on('changeView', (data) => {
                // Storing new view to temp array
                let temp = [{
                    tag: data.tag,
                    title: data.title,
                }];
                this.history = temp.concat(this.history.splice(0));
            });
        },
        computed: {
            currentView() {
                let current = this.history[0];
                return current;
            },
            previousView() {
                return typeof this.history[1] !== 'undefined' ? this.history[1] : null;
            },
        },
       
        components: {
           home: Home,
           aboutUs: AboutUs,
           contact: Contact,
           rental: Rental,
           services: Services,
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
</style>