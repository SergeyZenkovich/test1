<template>
    <div>
    <button @click="cMethod">
      Click on me {{5 + 5}}
    </button>
    <router-link to="/">To first button ...</router-link>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
    cMethod: ()=> alert('Hello!!!!!!!!!'),
  }
}
</script>

<style>
</style>