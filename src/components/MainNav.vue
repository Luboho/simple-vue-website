<template>
  <div class="bg-lime-800 bg-image px-3 py-1 shadow-2xl">
<!-- Menu Dropdown Media < 768px-->
    <div v-if="dropDown" class="flex justify-between">    
        <!-- Icon, Home, Header -->
        <!--Burger Button -->
        <div class="w-screen flex justify-between">
            <p class="ml-12 my-auto text-5xl transform duration-1000 hover:transform hover:scale-150 rounded text-lime-200 font-bold hover:font-black focus:color-red-500 hover:text-lime-900 cursor-pointer" @click="openNav">&#9776;</p>

            <div class="mr-20">
              <a href=""  @click.prevent="navigate('home', 'Domov')">
                <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
                <h1 class="text-xl text-center font-bold whitespace-nowrap text-lime-300">Flores s.r.o.</h1>
              </a>
            </div>
        </div>
        
        <div id="mySidenav" class="sidenav mx-auto flex-col">
          <!-- Close Menu Button -->
          <a href="javascript:void(0)" class="text-lime-200 hover:text-lime-400 closebtn" @click="closeNav">&times;</a>
              <!-- End Close Menu Button -->
              <a href="" class="flex flex-col align-self-center mr-5" @click.prevent="navigate('home', 'Domov')">
                <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
                <h1 class=" text-center font-bold whitespace-nowrap text-lime-300 text-xl">Flores s.r.o.</h1>
              </a>
               <ul class="text-lime-200">

                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'home' }">
                  <a href=""  @click.prevent="navigate('home', 'Domov')">
                    <div class="mx-8 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'home']" />
                          Domov
                    </div>
                  </a>
                </li>
                <li  class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'services' }">
                  <a href="" @click.prevent="navigate('services', 'Služby')">
                    <div class="mx-8 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'truck-monster']" />
                          Služby
                    </div>
                  </a>
                </li>
                <li  class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: activeView == 'rental' }">
                  <a href="" @click.prevent="navigate('rental', 'Požičovňa')">
                    <div class="mx-8 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'tools']" />
                          Požičovňa
                    </div>
                  </a>
                </li>
                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg " :class="{ active: activeView == 'aboutUs' }">
                  <a href="" @click.prevent="navigate('aboutUs', 'O nás')">
                    <div class="mx-8 sm:text-left">
                        <font-awesome-icon :icon="['fas', 'users']" />
                          O nás
                    </div>
                  </a>
                </li>
                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg align-baseline" :class="{ active: activeView == 'contact' }">
                  <a href="" @click.prevent="navigate('contact', 'Kontakt')">
                    <div class="mx-8 sm:text-left">
                      <font-awesome-icon :icon="['fas', 'address-card']" />
                      Kontakt
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
        <div>
          <a href="" class="flex flex-col align-self-center mr-12" @click.prevent="navigate('home', 'Domov')">
            <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
            <h1 class=" text-center font-bold whitespace-nowrap text-lime-300 text-xl">Flores s.r.o.</h1>
          </a>
        </div>
      </li>
      <li class="text-lime-200 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'home' }">
        <a href=""  @click.prevent="navigate('home', 'Domov')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'home']" />
            Domov
          </div>
        </a>
      </li>
      <li  class="text-lime-200 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'services' }">
        <a href="" @click.prevent="navigate('services', 'Služby')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'truck-monster']" />
            Služby
          </div>
        </a>
      </li>
      <li  class="text-lime-200 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg" :class="{ active: activeView == 'rental' }">
        <a href="" @click.prevent="navigate('rental', 'Požičovňa')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'tools']" />
            Požičovňa
          </div>
        </a>
      </li>
      <li class="text-lime-200 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg " :class="{ active: activeView == 'aboutUs' }">
        <a href="" @click.prevent="navigate('aboutUs', 'O nás')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'users']" />
            O nás
          </div>
        </a>
      </li>
      <li class="text-lime-200 font-semibold p-2 px-3  md:self-center rounded-xl hover:text-lime-900 hover:shadow-lg align-baseline" :class="{ active: activeView == 'contact' }">
        <a href="" @click.prevent="navigate('contact', 'Kontakt')">
          <div class="md:text-center lg:text-left">
            <font-awesome-icon :icon="['fas', 'address-card']" />
          Kontakt
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
        this.closeNav();
    },
    openNav() {
      if(this.dropDown === true){
        document.getElementById("mySidenav").style.width = "180px";
        this.modal = true;
      }
    },
    closeNav() {
      if(this.dropDown === true) {
        document.getElementById("mySidenav").style.width = "0";
        this.modal = false;
      }
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
    color: #e17b1c;
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
  background-color: #4D7C0F;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 30px;
  background-image: url('~@/assets/default/drops.png')
}

.sidenav a {
  padding: 25px 3px 3px 10px;
  font-size: 16px;
  font-weight: bold;
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
.bg-image {
  background-image: url('~@/assets/default/drops.png');
}

</style>
