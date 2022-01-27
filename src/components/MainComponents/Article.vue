<template>
  <div class="now">
    <div class="top-side">
      <div class="search-box">
        <input type="text" placeholder="검색">
      </div>
    </div>
    <div class="section-news">
      <div class="news-main">
        <div class="news"></div>
      </div>
    </div>
    <div class="section-album">
      <div class="news"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .now{
    width: 100%;
    padding: 0px 20px;
    overflow-y: scroll;
  }
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
  .search-box input{
    background: none;
    border: 0px;
    height: 100%;
    width : 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    color: rgb(201, 201, 201);
    font-weight: bold;
  }
  .search-box input:focus{
    outline: 1px solid rgb(71, 71, 71);
  }

  .section-news{
    
  }
</style>