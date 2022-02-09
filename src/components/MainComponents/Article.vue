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
          <img src="../../assets/images/John-Splithoff.jpg" alt="">
        </div>
        <div class="sub-pic">
          <div class="sub-desc">
            <h1 style="font-size:2.5rem">
              New Album : All in
              <br/>
              John Splithoff
            </h1>
            <span style="color:rgb(200, 200, 200);">새벽 감성 자극하는 John Splithoff의 신곡을 놓치지 마세요.</span>
          </div>
        </div>
      </div>
    </div>
    <SectionAlbum v-bind:propsdata="recent"></SectionAlbum>
    <SectionAlbum v-bind:propsdata="popular"></SectionAlbum>
  </div>
</template>

<script>
import SectionAlbum from './SectionAlbum.vue';

export default {
  components : {
    SectionAlbum : SectionAlbum,
  },
  data : ()=>{
    return {
      recent : {
        albumList : [
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          },
        ],
        sectionTitle : '최신 음악',
      },
      popular : {
        albumList : [
          {
            title : 'Leave it all behind',
            artist : 'John Splithoff',
            picture : 'leave_it_all_behind.jpg',
          }
        ],
        sectionTitle : '인기 음악',
      }
    }
  },
}
</script>

<style>

  .now{
    width: calc(100% - 100px);
    height: 100%;
    padding: 0px 50px;
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
    height: 35%;
    margin-bottom:35px;
  }

  .section-news .news-main{
    height: 100%;
    width: 100%;
    display: flex;
  }
  .section-news .sub-pic::before{
    content: '';
    background-image: url(../../assets/images/John-Splithoff.jpg);
    background-size: cover;
    width: 110%;
    height: 110%;
    left : -5%;
    top : -5%;
    position: absolute;
    filter: blur(30px);
    z-index: -1;
    opacity: 0.4;
  }

  .section-news .news-main .sub-pic .sub-desc{
    z-index: 2;
    padding : 0px 50px;
  }
  .section-news .news-main .sub-pic{
    position: relative;
    height: 100%;
    width : 60%;
    color: white;
    box-sizing: border-box;
    z-index: 1;
    overflow: hidden;
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