<template>
  <div class="bg-lime-800 bg-image px-3 py-1 shadow-2xl">
<!-- Menu Dropdown Media < 768px-->
    <div v-if="dropDown" class="flex justify-between">    
        <!-- Icon, Home, Header -->
        <!--Burger Button -->
        <div class="w-screen flex justify-between">
          <div class="flex">
            <div class="flex-col text-xs font-bold align-middle my-auto ml-12 mr-2 text-lime-900">
              <p>M</p>
              <p>E</p>
              <p>N</p>
              <p>U</p>
            </div>
            <p class="my-auto text-5xl transform duration-1000 hover:transform hover:scale-150 rounded text-lime-200 font-bold hover:font-black focus:color-red-500 hover:text-lime-400 cursor-pointer" @click="openNav">&#9776;</p>
            <div class="flex-col text-xs font-bold align-middle my-auto ml-2 text-lime-900">
              <p>M</p>
              <p>E</p>
              <p>N</p>
              <p>U</p>
            </div>
          </div>

            <div class="mr-20">
              <a href="/">
                <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
                <h1 class="text-xl text-center font-bold whitespace-nowrap text-lime-300">Flores s.r.o.</h1>
              </a>
            </div>
        </div>
        
        <div id="mySidenav" class="sidenav mx-auto">
          <!-- Close Menu Button -->
          <a href="javascript:void(0)" class="text-lime-200 hover:text-lime-400 closebtn" @click="closeNav">&times;</a>
              <!-- End Close Menu Button -->
              <a href="/" class="flex flex-col align-self-center mr-5">
                <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
                <h1 class=" text-center font-bold whitespace-nowrap text-lime-300 text-xl">Flores s.r.o.</h1>
              </a>
               <ul class="text-lime-200">

                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/' }">
                  <a href="/">
                    <div class="mx-8 sm:text-left flex">
                        <font-awesome-icon :icon="['fas', 'home']" class="my-auto mr-1" />
                          Domov
                    </div>
                  </a>
                </li>
                <li  class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/services' }">
                  <a href="/services">
                    <div class="mx-8 sm:text-left flex">
                        <font-awesome-icon :icon="['fas', 'truck-monster']" class="my-auto mr-1" />
                          Služby
                    </div>
                  </a>
                </li>
                <li  class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/rental' }">
                  <a href="/rental">
                    <div class="mx-8 sm:text-left flex justify-between">
                        <font-awesome-icon :icon="['fas', 'tools']" class="my-auto mr-1" />
                          Požičovňa
                    </div>
                  </a>
                </li>
                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg " :class="{ active: currentView == '/aboutUs' }">
                  <a href="/about">
                    <div class="mx-8 sm:text-left flex">
                        <font-awesome-icon :icon="['fas', 'users']" class="my-auto mr-1" />
                          O nás
                    </div>
                  </a>
                </li>
                <li class="p-1 mx-auto text-lime-200 hover:text-lime-400 hover:shadow-lg align-baseline" :class="{ active: currentView == '/contact' }">
                  <a href="/contact" >
                    <div class="mx-8 sm:text-left flex">
                      <font-awesome-icon :icon="['fas', 'address-card']" class="my-auto mr-1" />
                      Kontakt
                    </div>
                  </a>
                </li>
              </ul>
        </div>
    <div v-if="modal" @click="isModal" class="bg-black modal opacity-50 fixed right-0 left-0 top-0 bottom-0 z-200"></div>
  </div>
    <!-- End of Dropdown Menu -->                

  <div v-else>
<!-- Larger than small screen Menu -->
    <ul class="flex md:justify-between pl-8">

      <li class="text-lime-500 animate-pulse lg:pb-4">
        <!-- Icon, Home, Header -->
        <div class="pl-3">
          <a href="/" class="flex flex-col align-self-center mr-12" >
            <img src="@/assets/pics/flower_logo.png" class="mx-auto" />
            <h1 class=" text-center font-bold ml-1 whitespace-nowrap text-lime-300 text-xl">Flores s.r.o.</h1>
          </a>
        </div>
      </li>

      <ul class="flex justify-end">
        <li class="text-lime-200 font-semibold p-2 px-5  md:self-center rounded hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/' }">
            <a href="/">
            <div class="md:text-center lg:text-left">
              <font-awesome-icon :icon="['fas', 'home']" />
              <span class="ml-1 whitespace-nowrap">Domov</span>
            </div>
          </a>
        </li>
        <li  class="text-lime-200 font-semibold p-2 px-5  md:self-center rounded hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/services' }">
            <a href="/services">
            <div class="md:text-center lg:text-left">
              <font-awesome-icon :icon="['fas', 'truck-monster']" />
              <span class="ml-1 whitespace-nowrap">Služby</span>
            </div>
          </a>
        </li>
        <li  class="text-lime-200 font-semibold p-2 px-5  md:self-center rounded hover:text-lime-400 hover:shadow-lg" :class="{ active: currentView == '/rental' }">
            <a href="/rental">
            <div class="md:text-center lg:text-left">
              <font-awesome-icon :icon="['fas', 'tools']" />
              <span class="ml-1 whitespace-nowrap">Požičovňa</span>
            </div>
          </a>
        </li>
        <li class="text-lime-200 font-semibold p-2 px-5  md:self-center rounded hover:text-lime-400 hover:shadow-lg " :class="{ active: currentView == '/aboutUs' }">
            <a href="/about">
            <div class="md:text-center lg:text-left">
              <font-awesome-icon :icon="['fas', 'users']" />
              <span class="ml-1 whitespace-nowrap">O nás</span>
            </div>
          </a>
        </li>
        <li class="text-lime-200 font-semibold p-2 px-5  md:self-center rounded hover:text-lime-400 hover:shadow-lg align-baseline" :class="{ active: currentView == '/contact' }">
            <a href="/contact">
            <div class="md:text-center lg:text-left">
              <font-awesome-icon :icon="['fas', 'address-card']" />
              <span class="ml-1 whitespace-nowrap">Kontakt</span>
            </div>
          </a>
        </li>
      </ul>
    </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: "MainNav",
    data() {
      return {
          modal: false,
          dropDown: true,
      }
    },
  mounted() {

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

  computed: {
    currentView() {
      return this.$route.path;
    }
  },

  methods: {
    
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
    cursor: auto;
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
  color:#e17b1c;
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
