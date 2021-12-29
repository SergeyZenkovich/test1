<template>
  <div id="app">
    <FavoriteProducts />
    <ProjectsBlock />
  </div>
</template>

<script>
import FavoriteProducts from "./components/FavoriteProducts.vue";
import ProjectsBlock from "./components/ProjetcsBlock.vue";
export default {
  name: 'App',
  components: {
    FavoriteProducts,
    ProjectsBlock,
  },
  methods:{
    cMethod: ()=> alert('Hello'),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
