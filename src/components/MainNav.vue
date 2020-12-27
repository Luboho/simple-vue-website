<template>
  <div class="bg-lime-300 p-3 shadow-2xl">
<!-- Menu Dropdown Media < 768px-->
    <div v-if="dropDown" class="flex justify-between">    
        <!-- Icon, Home, Header -->
        <!--Burger Button -->
        <div class="w-screen flex justify-between">
            <p class="ml-12 mt-5 text-5xl transform duration-1000 hover:rotate-90 rounded text-lime-600 font-bold hover:font-black focus:color-red-500 hover:text-lime-900 cursor-pointer" @click="openNav">&#9776;</p>

            <div class="mr-20">
              <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
              <h1 class="text-xl text-center font-bold whitespace-nowrap text-lime-900">Flores s.r.o.</h1>
            </div>
        </div>
        
        <div id="mySidenav" class="sidenav mx-auto flex-col">
          <!-- Close Menu Button -->
          <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
              <!-- End Close Menu Button -->
              <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
              <h1 class=" text-center font-bold whitespace-nowrap text-lime-900">Flores s.r.o.</h1>
               <ul class="text-lime-200">

                <li class="p-2 mx-auto hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'home' }">
                  <a href=""  @click.prevent="navigate('home', 'Domov')">
                    <div class="ml-5 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'home']" />
                          Domov
                          <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'caret-left']" v-if="activeView == 'home'"></font-awesome-icon>
                    </div>
                  </a>
                </li>
                <li  class="p-2 mx-auto hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'services' }">
                  <a href="" @click.prevent="navigate('services', 'Služby')">
                    <div class="ml-5 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'truck-monster']" />
                          Služby
                          <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'caret-left']" v-if="activeView == 'services'"></font-awesome-icon>
                    </div>
                  </a>
                </li>
                <li  class="p-2 mx-auto hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'rental' }">
                  <a href="" @click.prevent="navigate('rental', 'Požičovňa')">
                    <div class="ml-5 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'tools']" />
                          Požičovňa
                          <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'caret-left']" v-if="activeView == 'rental'"></font-awesome-icon>
                    </div>
                  </a>
                </li>
                <li class="p-2 mx-auto hover:text-lime-400 hover:shadow-lg " :class="{ active: activeView == 'aboutUs' }">
                  <a href="" @click.prevent="navigate('aboutUs', 'O nás')">
                    <div class="ml-5 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'users']" />
                          O nás
                          <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'caret-left']" v-if="activeView == 'aboutUs'"></font-awesome-icon>
                    </div>
                  </a>
                </li>
                <li class="p-2 mx-auto hover:text-lime-400 hover:shadow-lg align-baseline" :class="{ active: activeView == 'contact' }">
                  <a href="" @click.prevent="navigate('contact', 'Kontakt')">
                    <div class="ml-5 sm:text-left">
                      <font-awesome-icon :icon="['fas', 'address-card']" />
                      Kontakt
                        <font-awesome-icon class="text-2xl align-bottom" :icon="['fas', 'caret-left']" v-if="activeView == 'contact'"></font-awesome-icon>
                    </div>
                  </a>
                </li>
              </ul>
        </div>
    <div v-if="modal" @click="isModal" class="bg-black opacity-50 absolute right-0 left-0 top-0 bottom-0 z-90"></div>
  </div>
    <!-- End of Dropdown Menu -->                

  <div v-else>
<!-- Larger than small screen Menu -->
    <ul class="lg:block md:flex md:justify-between px-3">

      <li class="text-lime-500 animate-pulse lg:pb-4 border-lime-500 lg:border-b">
        <!-- Icon, Home, Header -->
        <div class="sm:w-18 md:w-18 lg:w-32 lg:mx-auto">
          <div class="md:ml-5 lg:ml-7">
            <img src="@/assets/pics/flower_logo.png" />
          </div>
          <h1 class="text-xl text-center font-bold whitespace-nowrap text-lime-800">Flores s.r.o.</h1>
        </div>
      </li>
      <li class="text-lime-600 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'home' }">
        <a href=""  @click.prevent="navigate('home', 'Domov')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'home']" />
            Domov
            <p>
              <font-awesome-icon class="text-3xl" :icon="['fas', 'caret-up']" v-if="activeView == 'home'"></font-awesome-icon>
            </p>
          </div>
        </a>
      </li>
      <li  class="text-lime-600 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'services' }">
        <a href="" @click.prevent="navigate('services', 'Služby')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'truck-monster']" />
            Služby
            <p>
              <font-awesome-icon class="text-3xl" :icon="['fas', 'caret-up']" v-if="activeView == 'services'"></font-awesome-icon>
            </p>
          </div>
        </a>
      </li>
      <li  class="text-lime-600 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'rental' }">
        <a href="" @click.prevent="navigate('rental', 'Požičovňa')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'tools']" />
            Požičovňa
            <p>
              <font-awesome-icon class="text-3xl" :icon="['fas', 'caret-up']" v-if="activeView == 'rental'"></font-awesome-icon>
            </p>
          </div>
        </a>
      </li>
      <li class="text-lime-600 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg " :class="{ active: activeView == 'aboutUs' }">
        <a href="" @click.prevent="navigate('aboutUs', 'O nás')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'users']" />
            O nás
            <p>
              <font-awesome-icon class="text-3xl" :icon="['fas', 'caret-up']" v-if="activeView == 'aboutUs'"></font-awesome-icon>
            </p>
          </div>
        </a>
      </li>
      <li class="text-lime-600 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg align-baseline" :class="{ active: activeView == 'contact' }">
        <a href="" @click.prevent="navigate('contact', 'Kontakt')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'address-card']" />
          Kontakt
          <p>
            <font-awesome-icon class="text-3xl" :icon="['fas', 'caret-up']" v-if="activeView == 'contact'"></font-awesome-icon>
          </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import eventBus from "../eventBus";


export default {
  name: "MainNav",
    data() {
      return {
          activeView: 'home',
          modal: false,
          dropDown: false,
      }
    },
  created() {
    eventBus.$on('changeView', (data) => {
      // eslint-disable-next-line no-unused-vars
      let activeView;
          this.activeView = data.tag;
          this.closeNav();
      });

    window.onload = () => {
      if (window.innerWidth < 768){
        this.dropDown = true;
      } else {
        this.dropDown = false;
      }
    };
    window.onresize = () => {
      if (window.innerWidth < 768){
        this.dropDown = true;
      } else {
        this.dropDown = false;
      }
    };
  },
  methods: {
    navigate(newView, title) {
      eventBus.$emit('changeView', {
          tag: newView,
          title: title
      });
        this.modal = false;
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      this.modal = true;
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      this.modal = false;
    },
    isModal() {
      this.modal = !this.modal;
      this.closeNav();
    },
    
  },
}
</script>

<style scoped> 
  .active>a {
    color: #365314;
    cursor: not-allowed;
  }

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #84CC16;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 25px 3px 3px 50px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #4D7C0F;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #0f1604;
}

.sidenav .closebtn {
  position: absolute;
  top: -25px;
  right: 25px;
  font-size: 50px;
  margin-left: 50px;
}

</style>
