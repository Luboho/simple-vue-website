<template>
  <div id="app">
  <div class="filters">
    <button @click="togglePostType('puppies')" ref="filter" :class="{'filter-active' : visiblePostCategories.includes('puppies')}">Puppies</button>
    <button @click="togglePostType('food')" ref="filter" :class="{'filter-active' : visiblePostCategories.includes('food')}">Food</button>
    <button @click="togglePostType('middleEarth')" ref="filter" :class="{'filter-active' : visiblePostCategories.includes('middleEarth')}">Middle Earth</button>
  </div>
  
  <transition-group class="grid" tag="div" name="transition--post-filter-" @enter="resetGrid" @after-leave="resetGrid">
    <p key="noPosts" v-if="filteredPosts.length < 1" class="no-posts">Choose a category from the options above</p>
    <div v-for="post in filteredPosts" :key="post.date.toString()" :style="{ height: `${post.height}rem` }" class="grid-item">
      <img :src="`https://images.unsplash.com/${post.img}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80`" width="100%" height="100%" alt="">
    </div>
  </transition-group>
</div>
</template>

<script>
import {VueMasonryPlugin} from 'vue-masonry';

export default {
    // using David DeSandro's Masonry for the grid
// https://masonry.desandro.com/

  mounted() {
    var grid = document.querySelector('.grid')
    var msnry = new VueMasonryPlugin( grid, { itemSelector: '.grid-item' } )
  },
  
  data: () => ({
    puppies: [
      'photo-1530281700549-e82e7bf110d6',
      'photo-1548658155-c3a6346ed81b',
      'photo-1530667912788-f976e8ee0bd5',
      'photo-1510337550647-e84f83e341ca',
      'photo-1518914781460-a3ada465edec',
      'photo-1521129529345-d4e9a83352b6',
      'photo-1524641234638-4c303747c310',
      'photo-1540092634799-a937b758282a'
    ],
    food: [
      'photo-1490645935967-10de6ba17061',
      'photo-1504113888839-1c8eb50233d3',
      'photo-1493807402946-1a3fe6683ff2',
      'photo-1485921325833-c519f76c4927',
      'photo-1534790566855-4cb788d389ec',
      'photo-1536090219743-b4d977a0d9f2',
      'photo-1484723091739-30a097e8f929',
      'photo-1523314906480-8f65cbed7113'
    ],
    middleEarth: [
      'photo-1517123438184-82346454d432',
      'photo-1521601135263-56c414ea4c93',
      'photo-1515253523277-36022e56dc5c',
      'photo-1515253703015-73b88b47f61a',
      'photo-1535666669445-e8c15cd2e7d9',
      'photo-1459294458679-97e81180a256',
      'photo-1462759353907-b2ea5ebd72e7',
      'photo-1506466010722-395aa2bef877'
    ],
    visiblePostCategories: ['puppies','food','middleEarth']
  }),
  
  computed: {
    allPosts() {
      let randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      }
      
      let setPostsInfo = (source,categoryName) => {
        let posts = source.map((image, i) => {
          return {
            img: image,
            category: categoryName,
            date: randomDate(new Date(2016, 0, 1), new Date()),
            height: Math.floor(Math.random() * (25 - 8)) + 8
          }
        })

        return posts
      }
      
      
      let allPosts = [...setPostsInfo(this.puppies,'puppies'), ...setPostsInfo(this.food,'food'), ...setPostsInfo(this.middleEarth,'middleEarth')]

      let allPostsSortedByDate = allPosts.sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      })
            
      return allPostsSortedByDate
    },
    
    filteredPosts() {
      let filteredPosts = this.allPosts.filter(post => (
        this.visiblePostCategories.indexOf(post['category']) > -1
      ))
      
      let filteredPostsSortedByDate = filteredPosts.sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0
      })
      
      return filteredPostsSortedByDate
    }
  },
  
  methods: {
    togglePostType(type) {
      let index = this.visiblePostCategories.indexOf(type)
      
      index !== -1 ? this.visiblePostCategories.splice(index, 1) : this.visiblePostCategories.push(type)
    },
    
    resetGrid() {
      let gridEl = document.querySelector('.grid')

      Masonry.data(gridEl).reloadItems()

      this.$nextTick(() => {
        Masonry.data(gridEl).layout()
      })
    }
  }
}
</script>

<style>
@mixin set-grid($columns, $gutterSize: calc(2rem)) {
  padding-bottom: $gutterSize;
  
  .grid-item {
    width: calc((100% - (#{$gutterSize} * (#{$columns} + 1))) / #{$columns});
    margin-left: $gutterSize;
    margin-top: $gutterSize;
  }
}

.grid {
  @include set-grid(4);
  
  @media screen and (max-width: 1400px) {
    @include set-grid(3);
  }
  
  @media screen and (max-width: 1000px) {
    @include set-grid(2);
  }
  
  @media screen and (max-width: 600px) {
    @include set-grid(1);
  }
}

.grid-item {
  overflow: hidden;
  display: flex;
}

.transition--post-filter--enter-active,
.transition--post-filter--leave-active {
  transition: opacity .2s
}

.transition--post-filter--enter,
.transition--post-filter--leave-to {
  opacity: 0
}

.transition--fade--enter-active,
.transition--fade--leave-active {
  transition: opacity .6s
}

.transition--fade--enter,
.transition--fade--leave-to {
  position: absolute;
  opacity: 0
}




:root {
  font-size: calc(12px + 1vw)
}

body {
  overflow-y: scroll;
  color: #607D8B;
}

.filters {
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
}

button {
  background: #ECEFF1;
  color: #607D8B;
  border: 0;
  font-size: 1rem;
  padding: .5rem 1rem;
  cursor: pointer;
  box-shadow:
    0 1rem .8rem -1rem rgba(#78909C,1),
    0 .5rem 1.5rem rgba(#B0BEC5,.75);
  transition: color .3s, background .3s, box-shadow .3s;
  
  &:active {
    position: relative;
    top: 2px;
  }
  
  &:focus {
    outline: 2px solid currentColor;
  }
  
  &.filter-active {
    background: #01579B;
    color: cyan;
    box-shadow: 0 .5rem 1.5rem -.5rem #039BE5;
    box-shadow:
      0 1rem .5rem -1rem rgba(cyan,1),
      0 .5rem 1.5rem rgba(#039BE5,.5);
  }
}

img {
  object-fit: cover;
  box-sizing: border-box;
  border: .5rem solid white;
}

.grid-item {
  box-shadow:
    0 1rem 2rem -1rem #78909C,
    0 1rem 2rem #B0BEC5;
}

.no-posts {
  position: absolute;
  width: 100%;
  text-align: center;
  padding-top: 20vh;
  z-index: -1;
}
</style>