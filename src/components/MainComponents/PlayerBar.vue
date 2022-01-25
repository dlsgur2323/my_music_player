<template>
  <div class="player-bar">
        <div class="info">
            <div class="pic"></div>
            <div class="txt">
                <p class="title">Leave it all behine</p>
                <p class="artist">John Splithoff</p>
            </div>
        </div>
        <div class="control-box">
            <ul class="controls main-controls">
                <li>
                    <a href="#"><i class="fas fa-step-backward"></i></a>
                </li>
                <li>
                    <a href="#" style="font-size:2.2rem;color:rgb(255, 1, 99);"><i class="fas fa-play"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-step-forward"></i></a>
                </li>
            </ul>
            <ul class="controls sub-controls">
                <li>
                    <a href="#"><i class="fas fa-random"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-undo"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-volume-down"></i></a>
                    <input type="range" name="" id="">
                </li>
            </ul>
            <ul class="controls right-controls">
                <li>
                    <a href="#" style="font-size:1.5rem;"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </div>
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
    .control-box{
        width: calc(100% - 300px);
        display: flex;
        align-content: center;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    ul.controls{
        list-style: none;
        display: flex;
        padding: 0px;
    }
    ul.controls li {
        margin-left: 20px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    ul.controls li a{
        font-size: 1.2rem;
        color: rgb(177, 177, 177);
        text-align: center;
    }
    .main-controls li{
        margin: 0px 5% 0px 5%;
    }
    .main-controls{
        margin-left: 15%;
        width: 40%;
        justify-content: center;
    }
    .sub-controls{
        float: right;
        width: 35%;
        justify-content: right;
    }
    .right-controls{
        widows: 25%;
        float: right;
        justify-content: center;
        margin-right: 2%;
    }


    .player-bar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }
    .info{
        margin-left: 30px;
        height: 70%;
        width: 300px;
    }
    .info .pic{
        width : 55px;
        height: 100%;
        background: rgb(63, 59, 59);
        float: left;
    }
    .info .txt{
        margin-left: 10px;
        float: left;
        height: 80%;
        line-height: 200%;
    }
    .info .txt p{
        margin: 0px;
    }
    .info .txt p.title{
        letter-spacing: 0.5px;
        height: 50%;
        color:rgb(221, 221, 221)
    }
    .info .txt p.artist{
        height: 50%;
        color:rgb(117, 117, 117);
        font-size : 0.9rem;
    }
</style>