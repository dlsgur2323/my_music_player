<template>
  <div class="now">
    <div class="section-news">
      <div class="news-main">
        <div class="main-pic">
          <img src="../../../assets/images/pic_3.jpg" alt="">
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
  created : function(){
    const list = window.MusicService.getAlbumList({sort:'0'});
    this.recent.albumList = list;
    this.popular.albumList = list;
  },
  methods : {
  },
  data : ()=>{
    return {
      recent : {
        albumList : [],
        sectionTitle : '최신 앨범',
      },
      popular : {
        albumList : [],
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
    background-image: url(../../../assets/images/pic_3.jpg);
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