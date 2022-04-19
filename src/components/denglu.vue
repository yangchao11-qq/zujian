<template>
  <div class="hello">
       <div class="crea">
          <div class="creaf">
               <img src="../assets/logo.png" alt="" class="imga">
          </div>
         <div class="from">
               <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="用户名称" prop="username">
                        <el-input v-model="form.username" prefix-icon="el-icon-user-solid"> </el-input>
                     </el-form-item>
                     <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" prefix-icon="el-icon-lock"></el-input>
                     </el-form-item>
            </el-form>
             <div class="asd">
            <el-button type="primary" @click="denglu2()">登录</el-button>
             <el-button type="primary" @click="chongzhi()">重置</el-button>
         </div>  
         </div>
           
       </div>
  </div>
</template>

<script>
import {postdeng} from '../axios/qingqiu'


export default {
  name: 'HelloWorld',
  props: {
   
  }
  ,
  data(){
    return{
      form:{
         username:"admin",
         password:"123456"
      },
      rules:{
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]}
    }
  },
  created(){
      
  },
  methods:{
     denglu2(){
       this.denglu()
     },
     denglu(){
        console.log()
         this.$router.push("/qq")
       this.$refs.ruleForm.validate(valid => {
             console.log(valid)
             var parmes={
               username:this.form.username,
               password:this.form.password
              }
       postdeng(parmes).then((res)=>{
                 console.log(res.data)
                 if(res.data.meta.status!=200){
                     this.$Message.error("登录失败")
                 }else{
                    window.sessionStorage.setItem("totke",res.data.data.token)
                    this.$Message.success("登录成功")
                     this.$router.push("/qq")
                 }
      })

        })   
     },
     chongzhi(){
        console.log("pppp")
        this.$refs.ruleForm.resetFields()
     }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
.hello{
   background: #2b4b6b;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   .crea{
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      display: flex;
      justify-content: center;
   }
   .creaf{
         height: 130px;
         width: 130px;
         border: 1px solid rgb(231, 221, 221);
         border-radius: 50%;
         padding: 10px;
         box-shadow: 0 0 10px #ddd;
         position: absolute;
         left: 50%;
         transform: translate(-50%,-50%);
         background-color: #fff;
         .imga{
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: rgb(224, 218, 218);
          }   
   }
   .from{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
   }
   .asd{
      
    margin-left: 50%;
    transform: translateX(-50%);
   }
 
   
}

</style>
