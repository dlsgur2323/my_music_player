<template>
  <div class="now">
    <div class="top-side">
      <div class="search-box">
        <input type="text" placeholder="검색">
        <button><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="section-news">
      <div class="news-main">
        <div class="main-pic">
          <img src="../../assets/John-Splithoff.jpg" alt="">
        </div>
        <div class="sub-pic">
          <h2>John Splithoff</h2>
        </div>
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
    width: calc(100% - 100px);
    height: 100%;
    padding: 0px 50px;
    overflow-y: auto;
    overflow-x : hidden;
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

  .section-news{
    margin-top: 20px;
    width: 100%;
    height: 40%;
  }

  .section-news .news-main{
    height: 100%;
    width: 100%;
    display: flex;
  }
  .section-news .news-main .sub-pic::before{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(../../assets/John-Splithoff.jpg);
    filter: blur(30px);
    content: "";
    opacity: 0.5;
  }
  .section-news .news-main .sub-pic{
    position: relative;
    height: 100%;
    width : 60%;
    color: white;
  }
  .section-news .news-main .main-pic{
    width : 40%;
  }
  .section-news .news-main .main-pic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>