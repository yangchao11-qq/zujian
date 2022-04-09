<template>
  <div class="hello">
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
     <el-card class="box-card">
      <el-alert
      title="添加商品信息"
      type="info"
      :closable="false"
      center
      show-icon>
    </el-alert>
    <!--这里为什么是-0就可以解决这个问题-->
     <el-steps :active="active-0" >
               <el-step title="基本信息"></el-step>
                <el-step title="商品参数"></el-step>
                <el-step title="商品属性"></el-step>
                 <el-step title="商品图片"></el-step>
                <el-step title="商品内容"></el-step>
                <el-step title="完成"></el-step>
      </el-steps>
    <el-tabs :tab-position="tabPosition" v-model="active" style="height: 200px;"  @tab-click="handleClick33" :before-leave="qiehuan">
    <el-tab-pane label="基本信息" name="0">
      <div>
        <el-form :model="form2" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                     <el-form-item label="商品名称" prop="username" >
                        <el-input v-model="form2.username"  > </el-input>
                     </el-form-item>
                     <el-form-item label="商品价格" prop="email">
                        <el-input v-model="form2.email" type="number"> </el-input>
                     </el-form-item>
                     <el-form-item label="商品重量" prop="mobile" >
                        <el-input v-model="form2.mobile" type="number" ></el-input>
               </el-form-item> 
                 <el-form-item label="商品数量" prop="mobile">
                        <el-input v-model="form2.mobile2" type="number"></el-input>
               </el-form-item>  
                <el-form-item label="商品分类" prop="mobile">
                       <div class="blockm">
                         <!--层级列表的使用要多看看，还有tree树的列表-->
                          <el-cascader
                            v-model="options3"
                            :options="options2"
                            :props="options"
                            @change="handleChange"></el-cascader>
                        </div>
                        
               </el-form-item>     
            </el-form>
            

            
      </div>
    </el-tab-pane>
    <el-tab-pane label="商品参数" name="1">
      <div v-for="(item,index) in pop" :key="index">
       <div>{{item.attr_name}}</div>
      
          <el-tag
          :key="index" v-for="(item,index) in item.attr_vals"
            :disable-transitions="false"
            closable
            @close="handleClose3(item)">
            {{item}}
          </el-tag>
         
       </div>
    </el-tab-pane>
    <el-tab-pane label="商品属性" name="2">
         <div v-for="(item,index) in pop" :key="index">
      
                        
        <el-form :model="item"  >
                     <el-form-item :label="item.attr_name"  >
                        <el-input v-model="item.attr_vals"  > </el-input>
                     </el-form-item>
        </el-form>
                      
       </div>
    </el-tab-pane>
    <el-tab-pane label="商品图片" name="3">

      <el-upload
          class="upload-demo"
          action="http://127.0.0.1:8888/api/private/v1/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          :headers="lopghu"
          :on-success="lppp"
          >
          <!--headers 设置图片上传的请求头-->
          <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-tab-pane>
    <el-tab-pane label="商品内容" name="4">定时任务补偿</el-tab-pane>
     
  </el-tabs>
        <br>
         <br>
          <br>
           <br>
            <br>
             <br>
     </el-card>
      <el-dialog
        title="图片预览"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <img :src="tyu" alt="">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import {shangpin98,chanshu} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
   
    return{
       dialogVisible:false,
      active:'3',
      tabPosition: 'left',
       form2:{
         username:"",
         email:"",
         mobile:"",
         mobile2:""
      },
       rules:{
          username: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入商品价格', trigger: 'blur' },
          ],
          email:[
                { required:true, message:"请输入商品重量", trigger:"blur"},
               
               ],
          mobile:[
           { required:true, message:"请输入商品数量", trigger:"blur"},
            
            ]
               
        },
        options:{
           value: 'cat_id',
           label: 'cat_name',
          children:'children'
          },
          options2:[],
          options3:"",
          pop:[],
          //设置图片上传的请求头
          lopghu:{
             Authorization:window.sessionStorage.getItem("totke")
          },
          //图片的链接地址，是用来处理预览图片的
          tyu:"",
          //这个是保存蹄片的数组
          tupian:[]
    }
  },
  created(){
    this.handleChange()
  },
  methods:{
   
    chanshu1(e){
        let lop='many'
       chanshu(e[2],lop).then((res)=>{
           console.log("========================") 
          console.log(res.data) 
          res.data.data.forEach(element => {
              element.attr_vals=element.attr_vals.split(' ')
          });
          this.pop=res.data.data
       })
    },
    handleChange(e){
      console.log(e)
      console.log("555599")
      shangpin98().then((res)=>{
         console.log(res.data.data)
         this.options2=res.data.data
         if(res.data.data){
             this.chanshu1(e)
         }
      })
    
     

    },
    handleClick33(){
      console.log("8888")  
    },
    //阻止tab栏切换的
    qiehuan(a,b){
         console.log(a+"即将去往的参数")
          console.log(b+"从哪个参数去往的")
          if(!this.form2.username){
           this.$Message.error("请输入商品名称")
           return false
          }
          if(!this.options3){
           this.$Message.error("请选择商品分类")
           return false
          }
    },
    handleClose3(item){
        this.pop=this.pop.map((val)=>{
                for(var i=0;i<val.attr_vals.length;i++){
                  if(item==val.attr_vals[i]){
                      val.attr_vals.splice(i,1)
                  }
                }
             return val
       })
    },
    //点击文件已上传的钩子
    handlePreview(e){
       console.log(e)
       this.dialogVisible=true
    },
    //上传文件移除的狗子
    handleRemove(e){
      //1.删除图片操作是，首先获取我们再lppp函数假日的图片路径
      console.log(e.response.data.tmp_path)
      var lp=e.response.data.tmp_path
      //2.我们去数组里面查找删除这个图片信息
      var ko=this.tupian.findIndex((val)=>{
               val.pic===lp
      })
      //这一步是删除操作完成
       this.tupian.splice(ko,1)
      },
    //上传的文件列表
    fileList(e){
        console.log(e)
    },
    //文件上传成功使的狗子
    lppp(e){
      //文件上传必须要设置请求头
          console.log(e)
          this.tyu=e.data.url
          //这是拼接一个图片信息到数组中
          var poi={pic:e.data.tmp_path}
          this.tupian.push(poi)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-steps--horizontal {
    width: 80%;
    margin-top: 20px;
    margin-left: 150px;
}
.el-tabs--left, .el-tabs--right {
    overflow: visible; 
}
/deep/.el-tag {
  
    margin: 10px;
}
.hello{
  height: 100%;
}
/deep/ .el-card {
    
     height: 100%;
}
</style>
