<template>
  <Main />
</template>

<script>
import Main from './components/MainComponents/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  methods : {

  }
}
</script>

<style>
  body,html{
    margin:0;
    overflow: hidden;
  }
  img {
    -webkit-user-drag: none;
  }
  a{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
    color: unset;
  }
</style>
