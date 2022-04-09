<template>
  <div class="shouye">
    <header class="header">
        <div class="creaf">
               <img src="../assets/logo.png" alt="" class="imga">
               <div>电商后台管理</div>
        </div>
         <el-button type="info" @click="tuichu()" >退出</el-button>
    </header>
    <el-container>
      <el-aside  :width="isCollapse ? '64px':'200px'">
         <div class="aside" @click="shousuoqi()">|||</div>
         <el-menu
      :default-active="kui"
      class="el-menu-vertical-demo"
      
      text-color="#fff"
      active-text-color="#ffd04b" :collapse="isCollapse" :collapse-transition="false">
      
      <el-submenu :index="indext+''" v-for="(item,indext) in hui" :key="indext" >
        <template slot="title">
             <!--这里的小图标使用对象做的id值，要记住-->
              <i :class="ic[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group v-for="(item,indexi) in item.children" :key="indexi">
              <!--这里路由跳转值可以根据接口内的值来进行活动的跳转-->
              <el-menu-item :index="indext+''+'-'+indexi+''" @click="kio('/'+indext+'-'+indexi)">{{item.authName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        
      </el-main>
    </el-container>



  </div>
</template>

<script>
import {zuoce} from '../axios/qingqiu'
export default {
  name: 'lllo',
  data(){
    return{
      hui:[],
      kui:"",
      ic:{
               '125':'el-icon-place',
               '103':'el-icon-apple',
               '101':'el-icon-s-goods',
               '102':'el-icon-s-order',
           },
      isCollapse:false
    }
  },
  mounted(){
   this.zuoceh()
  },
  methods:{
    tuichu(){
      this.$router.push("/pop")
     window.sessionStorage.clear(); 
    },
    zuoceh(){
       zuoce().then((res)=>{
           console.log(res.data.data)
           this.hui=res.data.data
       })
    },
    kio(index){
       //这一步是保存值做一个值的缓存，应用于路由跳转
       console.log(index)
      
      this.$router.push(index)
    },
    shousuoqi(){
      console.log("kkkk")
      this.isCollapse=!this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
  height: 60px;
  background: #373d41;
  .creaf{
     display: flex;
     align-items: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 80%;
        margin-left: 5px;
        }  
    div{
     margin-left: 10px;
     color: rgb(255, 255, 255);
    }
  }
}
.aside{
  width: 99.5%;
  text-align: center;
  line-height: 30px;
   height: 30px;
   background:#4A5064 ;
   color: rgb(255, 255, 255);
   cursor: pointer;
}
 .aji{
     color: red;
   }

</style>
