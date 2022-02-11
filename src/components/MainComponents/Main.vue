<template>
  <div class="main">
    <div class="page">
      <section v-bind:id="articleData.menu">
        <Article v-bind:propsdata="articleData"></Article>
      </section>
      <nav>
        <MenuList v-bind:propsdata="menuData"></MenuList>
      </nav>
    </div>
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
    },
    data(){
      return {
        articleData : {
          menu : 'now',
        },
        menuData : {
          changeMenu : this.changeMenu
        },
      }
    },
    methods : {
      changeMenu(menu){
        this.articleData.menu = menu;
      }
    }
  }
</script>

<style scoped>
  .page{
    max-width : 1920px;
    width : 100vw;
    height : calc(100vh - 80px);
    display: flex;
    flex-wrap: wrap;
  }
  .main{
    width: 100vw;
    height: 100vh;
    background : rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .page nav{
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    background : rgba(0,0,0,1);
    border-left: 0.5px solid rgb(32, 32, 32);
  }
  .page section{
    box-sizing: border-box;
    max-width: calc(100% - 200px);
    height: 100%;
    background : rgba(0,0,0,1);
    overflow-y: scroll;
  }

  .page section {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
  }
  .page section::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
  }

  .main footer{
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    bottom:80px;
    background : rgba(0,0,0,0.9);
  }
</style>
