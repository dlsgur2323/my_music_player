<template>
  <div class="main">
    <section>
      <Article></Article>
    </section>
    <nav>
      <MenuList></MenuList>
    </nav>
    <footer>
      <PlayerBar></PlayerBar>
    </footer>
  </div>

</template>

<script>
import MenuList from "./MenuList.vue";
import PlayerBar from "./PlayerBar.vue";
import Article from "./Article.vue";
  export default {
    components : {
      MenuList : MenuList,
      Article : Article,
      PlayerBar : PlayerBar,
    }
  }
</script>

<style scoped>
  .main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .main nav{
    box-sizing: border-box;
    width: 200px;
    height: calc(100vh - 80px);
    background : rgba(0,0,0,1);
    border-left: 0.5px solid rgb(32, 32, 32);
  }
  .main section{
    box-sizing: border-box;
    width: calc(100vw - 200px);
    height: calc(100vh - 80px);
    background : rgba(0,0,0,1);
  }
  .main footer{
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    background : rgba(0,0,0,0.9);
  }
</style>
