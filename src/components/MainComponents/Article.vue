<template>
  <div class="top-side">
      <div class="search-box">
          <input type="text" placeholder="검색">
          <button><i class="fas fa-search"></i></button>
      </div>
  </div>
  <component :is="currentMenu"></component>
</template>

<script>
import Now from '@/components/MainComponents/Articles/Now.vue';
import Chart from '@/components/MainComponents/Articles/Chart.vue';
import Recent from '@/components/MainComponents/Articles/Recent.vue';
export default {
  props : ['propsdata'],
  components : {
    Now : Now,
    Chart : Chart,
    Recent : Recent
  },
  data(){
    return {
      data : this.propsdata,
    }
  },
  computed : {
    currentMenu(){
      const menu = this.data.menu;
      if(menu == 'now') return 'Now';
      if(menu == 'chart') return 'Chart';
      if(menu == 'recent') return 'Recent';
      return 'Now';
    }
  }
}
</script>

<style>

  .top-side{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-box{
    width: 40%;
    height: 50%;
    /* background: rgb(71, 71, 71); */
    border : 0.5px solid rgb(32, 32, 32);
  }
  .search-box button{
    cursor: pointer;
    background: none;
    border: 0px;
    height: 100%;
    width : 10%;
    color: rgb(201, 201, 201);
    box-sizing: border-box;
    font-size: 1rem;
  }
  .search-box input{
    background: none;
    border: 0px;
    border-right: 0.5px solid rgb(32, 32, 32);
    height: 100%;
    width : 90%;
    padding: 0px 20px;
    box-sizing: border-box;
    color: rgb(201, 201, 201);
    font-weight: bold;
  }
  .search-box input:focus{
    outline: 1px solid rgb(71, 71, 71);
  }

</style>