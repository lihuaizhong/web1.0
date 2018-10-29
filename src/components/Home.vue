<template>
    <div class="nva">
        <div class="find_height1">
        <div class="find_search">
            <div class="find_address">
                <select>
                    <option value ="sh">上海</option>
                    <option value ="bj">北京</option>
                    <option value="sz">深圳</option>
                    <option value="hz">杭州</option>
                </select>
            </div>
           <div class="find_find">
                <input class="find_input" type="text" placeholder="搜索高品质酒店">
            </div>
            <div class="find_erweima">
                    <img src="./../assets/saomiao.png" alt="">
            </div>
        </div>
        </div>
        <div class="find_head">
            <ul class="find_over">
              <li><a href="">最新</a></li>
              <li id='font_li'><a href="">最热</a></li>
              <li><a href="">网红打卡</a></li>
              <li><a href="">明星同款</a></li>
            </ul>
        </div>
        <div class="body_margin">
        <div class="find_body">
          <div class="waterfall-wrapper">
            <ul class="left-waterfall" ref="left">
              <li class="item" v-for="(item, index) in leftItems1" v-bind:style=" {height:170+'px'}">
               <a href="">   <div class="">
                  <img  class="img_style" :src="'./../static/img/' + index+'.jpg'" alt=""> 
                     <!-- <img class="img_style"  src="./../assets/saomiao.png" alt=""> -->
                     <!-- <img class="img_style"  src="./../assets/saomiao.png" alt=""> -->
                  
                  <!-- {{item.content}}{{ index }1111111111111111111111 -->
                  <!-- <div><img  class="img_style2" :src="'./../static/img/' + index+'.jpg'" alt=""> </div> -->
                  <div class="font_hi">{{item.content}}{{ index }}</div>
                   <div><img class="img_style2"  src="./../assets/cdcd.png" alt=""></div>
                  </div></a>
              </li>
            </ul>
            <ul class="right-waterfall" ref="right">
              <li class="item" v-for="(item, index) in rightItems2" v-bind:style=" {height:190+'px'}">
               <a href=""> <div class="font_hi">
                  <!-- <img class="img_style"  src="./../assets/saomiao.png" alt=""> -->
                  <img  class="img_style" :src="'./../static/img2/' + index+'.jpg'" alt=""> 
                <div class="font_hi">{{item.content}}{{ index }}</div>
                 <div><img class="img_style2"  src="./../assets/cdcd.png" alt=""></div>
                </div></a>
              </li>
            </ul>
            
          </div>
        </div>
        </div>
        <div class="find_tabbar">
          <div class="find_head find_ta">
            <ul class="img_ta">
              <li><a href=""><img src="./../assets/shouye.png" alt=""></a></li>
               <li><a href=""><img src="./../assets/faxian.png" alt=""></a></li>
              <li><a href=""><img src="./../assets/xiangzhu.png" alt=""></a></li>
              <li><a href=""><img src="./../assets/wode.png" alt=""></a></li>
            </ul>
        </div>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    border: none;
}
.nva{
     width: 366px;
     height:auto;
    /* border-style:dotted; */
     background-color: white;
    padding: 0px;
    margin-bottom: 120px;
    margin: 0 auto;
   }
   .find_search{
       height: 30px;
       width: 376px;
       text-align: center;
       background-color: white;
      line-height: 30px;
      font-size: 12px;
      margin-top: -8px;
      padding: 0px;
      position:fixed;
      

   }
   .find_height1{
        height: 30px;
       width: 376px;
       border-color: #f8f8f8;
   }
   .find_address{
       width: 60px;
       height: 30px;
       float: left;
   }
   .find_find{
       background-color: white;
       height: 30px;
       width: 200px;
       float: left;
       margin-left: 12px;
   }
   .find_input{
       height: 30px;
       width: 200px;

   }
   .find_erweima{
       float:right;
       margin-right: 12px;
   }
   .find_head ul {
       overflow: hidden;
        position:fixed;
        background-color: white;
     }
     .find_head {
       width: 100%;
       margin-top: -8px;
     }
    .find_head li {
        height: 30px;
        width: 89px;
        float: left;
        margin: 0 1px;
        list-style: none;
        text-align: center;
        color: #565656;
          font-size: 12px;
     }
   .find_tabbar{
    width:375px;
    height:60px;
   /* background:rgb(194, 11, 11); */
   position:fixed;
   bottom:0;
   left:auto;
   z-index:1;
    
   }
  ul li a{
        text-decoration:none;
        display: inline-block;
          color: #565656;
   }
.find_over li a:hover{
         border-bottom:1px solid#000;
        padding-bottom:4px;
        border-width: 2px;
        border-image: -webkit-linear-gradient(left, #c7072d , #dc938c) 30 10;
        border-image: -moz-linear-gradient(left,  #e70734, #dc938c) 30 10;
        border-image: linear-gradient(left,  #f10333 , #dc938c) 30 10;
        font-size:16px; 
       

    }
 #font_li li a {
       border-bottom:1px solid#000;
       padding-bottom:4px;
        border-width: 2px;
        border-image: -webkit-linear-gradient(left, #9f4456 , #dc938c) 30 10;
        border-image: -moz-linear-gradient(left,  #9f4456, #dc938c) 30 10;
        border-image: linear-gradient(left,  #9f4456 , #dc938c) 30 10;
       
        font-size:14px;
         font-weight: 400;
  }
    
    .body_margin{
     margin-bottom: 120px;
    }
    .find_body{
      margin-top: 30px;
      /* margin-bottom: 120px; */
    }
    img{
        /* height: 100px;
        width: 100px; */
    }
   /* ul.left-waterfall {
    width: 46%
  } */

  ul.left-waterfall {
    float: left;
    margin-bottom: 120px;
  }

  ul.right-waterfall {
    float: right;
  }

  li.item {
    width: 170px;
    background-color: white;
    margin: 8px auto;
      list-style: none;
    
  }
  .img_style{
    width: 160px;
    height: 90px;
    margin: 0 auto;
    padding: 4px;
}
.img_style2{
  height: 30px;
  width: 160;
  margin-top: 6px;
}
.font_hi {
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
color: #565656;
font-size: 12px;

}
.find_ta{
  margin-top: 30px
}
.img_ta li a img{
  height: 35px;
}
</style>
<script>
// import Vue from 'vue'
// import Axios from 'axios';
// Vue.prototype.$ajax = Axios;
export default {
    
     data () {
        
    return {
      data: [
        // {
        //   height: 100
        // },
        // {
        //   height: 110
        // },
        // {
        //   height: 150
        // },
        // {
        //   height: 200
        // },
        // {
        //   height: 300
        // },
        // {
        //   height: 100
        // },{
        //   height: 222
        // },{
        //   height: 111
        // },{
        //   height: 123
        // },{
        //   height: 451
        // },
      ],
      leftItems1: [],
      rightItems2: [],
      listdata: [],
      src : "./../assets/saomiao.png",
     
    }
  }, mounted () {
    // TODO GET DISPLAY_DATA
    // this.updateWaterfall()
  },methods: {
    updateWaterfall () {
      // const leftHeight = this.$refs.left.clientHeight
      // const rightHeight = this.$refs.right.clientHeight
      // let item = this.data.shift()
      // console.log(leftHeight)
      // console.log(rightHeight)
      // if (item == null) {
      //   return
      // }
      // if (leftHeight <= rightHeight) {
      //   this.leftItems.push(item)
      // }
      // else {
      //   this.rightItems.push(item)
      // }
      // this.$nextTick(function () {
      //   this.updateWaterfall()
      // })
      return 0
    }
  },created(){
 this.$axios.get("/api/ugc/list").then(res=>{
      console.log(res.data);
     console.log(res.data.body.list);
    for (var i=0;i<res.data.body.list.length;i++)
      {
       if(i%2==0){
        console.log(i%2==0)
          this.leftItems1.push(res.data.body.list[i]);
       }
       else  {
         this.rightItems2.push(res.data.body.list[i]);
         }
      }
    //  this.listdata=res.data.body.list;
 // console.log("cc"+res.data.body.list[1].);
  //var data1=res.data.list;
  // console.log("121212"+listdata);
    

 });
}
}
</script>
