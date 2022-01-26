<template>
  <div class="side-bar">
    <ul>
      <li class="logo">
        <h2>LOGO</h2>
      </li>
      <li>
        <div class="user-info">
          <div class="pic"></div>
          <div class="user-name">
            로그인
          </div>
        </div>
      </li>
      <li>
        <ul class="menu-list">
          <li>
            <a href="#" class="menu-now">NOW</a>
          </li>
          <li>
            <a href="#" class="menu">인기차트</a>
          </li>
          <li>
            <a href="#" class="menu">최신곡</a>
          </li>
          <li>
            <a href="#" class="menu">스테이션</a>
          </li>
          <li>
            <a href="#" class="menu">매거진</a>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <a href="#">
              이용권 구매
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  .side-bar{
    width: 100%;
    height: 100%;
  }
  ul{
    list-style: none;
  }
  .side-bar ul{
    list-style: none;
    padding: 0px 20px;
  }
  .side-bar >ul >li{
    border-bottom: 0.5px solid rgb(32, 32, 32);
  }
  .side-bar >ul >li:last-of-type{
    border-bottom: none;
  }
  .side-bar .logo{
    text-align: center;
    color: rgb(223, 223, 223);
  }

  .user-info{
    padding-left: 10px;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .user-info .pic{
    margin : 0px 10px;
    width: 30px;
    height: 30px;
    background: grey;
    border-radius: 30px;
  }
  .user-info .user-name{
    color: rgb(223, 223, 223);
  }
  
  .menu-list{
    margin: 40px 0px;
  }
  .menu-list li{
    margin: 10px 0px;
  }
  .menu-list li a{
    font-size: 1.2rem;
    color: rgb(201, 201, 201);
  }
  .menu-list li a.menu:hover{
    color : white;
  }
  .menu-list li a.menu-now:hover{
    color:rgb(255, 108, 164);
  }
  .menu-list li a.menu-now{
    color:rgb(255, 54, 131);
    font-weight:bold;
  }
</style>
