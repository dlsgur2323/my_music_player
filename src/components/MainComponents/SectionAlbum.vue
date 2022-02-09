<template>
    <div class="section-album" >
      <h1 >{{ sectionTitle }}</h1>
      <div class="list" v-on:mousedown="listMouseDown" @mouseup="listMouseUp">
        <div class="album" v-for="(album, index) in albumList" :key="index">
          <img :src="require(`@/assets/images/${album.picture}`)" alt="" >
          <p class="title" ><a href="">{{ album.title }}</a></p>
          <p class="artist" ><a href="">{{ album.artist }}</a></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props : ['propsdata'],
    data : function () {
        return {
            albumList: this.propsdata.albumList,
            sectionTitle : this.propsdata.sectionTitle,
            mouseDown : false,
            mouseX : 0,
        }
    },
    methods : {
        listMouseDown : function(event){
            const list = event.currentTarget;
            this.mouseDown = true;
            list.addEventListener('mousemove', (e)=>{this.listMouseMove(e,list) });
            list.addEventListener('mouseleave', this.listMouseLeave);
            this.mouseX = event.x;
        },
        listMouseUp : function(){
            this.mouseDown = false;
        },
        listMouseLeave : function(){
            this.mouseDown = false;
        },
        listMouseMove : function(e,list){
            if(this.mouseDown === true){
                const gap = this.mouseX - e.x;
                this.mouseX = e.x;
                list.scrollLeft = list.scrollLeft + gap;
            }
        }
    }
};
</script>


<style scoped>
    .section-album{
        border-bottom:0.5px solid rgb(32, 32, 32); 
        margin:20px 0px;
    }
    .section-album .list{
        overflow-x: scroll;
        white-space: nowrap;
    }

    .section-album .list{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    .section-album .list::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    .section-album h1{
        color: white;
    }
    .section-album .list .album{  
        margin-bottom:20px; 
        margin-right: 25px;
        width:300px;
        display: inline-block;
    }
    .section-album .list .album img{  
        width:100%;
        border-radius:5px;
        object-fit:cover;
        cursor: pointer;
    }

    .section-album .list .album .title{  
        color:white; 
        margin:0px;
        font-size: 1rem;
    }

    .section-album .list .album .artist{  
        color:lightgrey; 
        margin:0px;
        font-size: 0.9rem;
    }
    .section-album .list .album p a{  
        cursor: pointer;
    }
</style>