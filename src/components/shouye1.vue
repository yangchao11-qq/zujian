<template>
  <div class="hellob">

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    
    <div class="hellp">
      <el-input v-model="input" placeholder="请输入内容"></el-input>

      <el-button @click="sousuoko23()">
         <i class="el-icon-search"></i>
      </el-button>

    <span class="span">
      <el-button type="primary" @click="dialogVisibles()">添加用户</el-button>
    </span>
    </div>
    <el-table
    class="juio"
    ref="singleTable"
    :data="list"
   
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="username"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="email"
      label="邮箱"
      width="150">
    </el-table-column>
    <el-table-column
      property="mobile"
      label="电话">
    </el-table-column>
    <el-table-column
      property="role_name"
      label="角色">
    </el-table-column>
     <el-table-column
      label="状态">
       <template slot-scope="scope">
         <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="zhuangtai()">
          </el-switch>
       </template>
    </el-table-column>
     <el-table-column
      property="address"
      label="操作">
      <template slot-scope="scope">
       
        <el-button type="primary" size="mini" @click="quedingtianjai2(scope.row)" > <i class="el-icon-edit"></i></el-button>
        <el-button type="danger" size="mini"  @click="shanchu(scope.row)"><i class="el-icon-delete"></i></el-button>
         <el-button type="warning" size="mini" @click="quanxian(scope.row)"><i class="el-icon-s-tools"></i></el-button>
       
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange2"  
      :page-sizes="[5, 10, 15]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="lop">
    </el-pagination>
  </div>

        <el-dialog
        title="添加用户"
        :visible.sync="dialogVisible"
        width="30%">
            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" prefix-icon="el-icon-user-solid"> </el-input>
                     </el-form-item>
                     <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" prefix-icon="el-icon-lock"></el-input>
                     </el-form-item>
                     <el-form-item label="邮箱" prop="email">
                        <el-input v-model="form.email" prefix-icon="el-icon-bell"> </el-input>
                     </el-form-item>
                     <el-form-item label="手机" prop="mobile">
                        <el-input v-model="form.mobile" prefix-icon="el-icon-phone"></el-input>
               </el-form-item>       
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="quedingtianjai()">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="修改用户"
        :visible.sync="sidfg"
        width="30%">
            <el-form :model="form2" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="用户名" prop="username" >
                        <el-input v-model="form2.username" prefix-icon="el-icon-user-solid" disabled> </el-input>
                     </el-form-item>
                     <el-form-item label="邮箱" prop="email">
                        <el-input v-model="form2.email" prefix-icon="el-icon-bell"> </el-input>
                     </el-form-item>
                     <el-form-item label="手机" prop="mobile">
                        <el-input v-model="form2.mobile" prefix-icon="el-icon-phone"></el-input>
               </el-form-item>       
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="sidfg = false">取 消</el-button>
          <el-button type="primary" @click="quedingtian2()">确 定</el-button>
        </span>
      </el-dialog>

              <el-dialog
            title="删除"
            :visible.sync="shanchua"
            width="30%"
           >
            <span>确认删除?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="shanchua = false">取 消</el-button>
              <el-button type="primary" @click="shanchu2()">确 定</el-button>
            </span>
          </el-dialog>
            <el-dialog
            title="分配"
            :visible.sync="quanxian2"
            width="30%"
           >
             <div>当前的用户:{{username}}</div>
              <div>当前的角色:{{role_name2}}</div>
               <div class="aop"> 
                 <div class="aop2">
                       分配新角色:  
                      </div>
                        <div>
                    <el-select v-model="value22" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.roleName"
                        :value="item.id">
                      </el-option>
                    </el-select>
                    </div>
               </div>
              <span slot="footer" class="dialog-footer">
              <el-button @click="shanchua = false">取 消</el-button>
              <el-button type="primary" @click="quanxian3()">确 定</el-button>
            </span>
          </el-dialog>

  </div>
</template>

<script>
import {jiaoseguanli,quedingtianjai,zhuangtai,bianji,shanchu,sousuoko2,fenpei,quedingfenpei} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    //自定义检验规则邮箱的
    //这里的rule是代表哪个验证的列表
    //value代表这个是否数输入了
    //callback提示的文字
     var checkmobile = (rule, value, callback) => {
       var emal=/^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
           if(emal.test(value)){
             return callback()
           }
           return callback(new Error('请输入正确的手机号'));
      }
       var checkAge = (rule, value, callback) => {
       var emal=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
           if(emal.test(value)){
             return callback()
           }
           return callback(new Error('请输入正确的邮箱'));
      }
    return{
      input:"500",
      params:{
        query:this.input,
        pagenum:1,
        pagesize:5
      },
      list:[],
      dialogVisible:false,
      form:{
         username:"",
         password:"",
         email:"",
         mobile:""
      },
      form2:{
         username:"",
         email:"",
         mobile:""
      },
       id:0,
       rules:{
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          email:[
                { required:true, message:"请输入邮箱", trigger:"blur"},
                {validator:checkAge, trigger:"blur"}
               ],
          mobile:[
           { required:true, message:"请输入手机", trigger:"blur"},
            {validator:checkmobile, trigger:"blur"}
            ]
               
        },
        role_name:"role_name",
        sidfg:false,
        mg_stat:"mg_stat",
        shanchua:false,
        id2:0,
        lop:50,
        id3:0,
        quanxian2:false,
        username:"",
        role_name2:"",
         options: [],
        value22: '',
        id4:0
    }
  },
  created(){
    this.sousuoko()
  },
  methods:{
    sousuoko23(){
       console.log("kkkk")
      
       let URL=`users/${this.input}`
       sousuoko2(URL).then((res)=>{
         console.log(res.data)
            this.list=[]
            this.list.push(res.data.data)
       })
    },
    sousuoko(){
      //如果是get请求的话需要给请求里面的数据加上大括号
      jiaoseguanli(this.params).then((res)=>{
          console.log(res.data.data.users)
          this.list=res.data.data.users
      })
    },
    //添加的弹框
    dialogVisibles(){
       this.dialogVisible=true
    },
    quedingtianjai(){
           quedingtianjai(this.form).then((res)=>{
                    console.log(res.data.data)
                  if(res.data.data==null){
                     this.$Message.error("用户名已经存在")
                  }else{
                     this.$Message.success("添加成功")
                     /*
                      在ECMAScript 5.1中，新增了 Object.create，它支持使用指定的 [[Prototype]] 创建对象。Object.create(null) 是一种常见的模式，用于创建将用作映射的对象。当假定对象将包含来自Object.prototype 的属性时，这可能会导致错误。该规则防止直接从一个对象调用某些 Object.prototype 的方法。

            此外，对象可以具有属性，这些属性可以将 Object.prototype 的内建函数隐藏，可能导致意外行为或拒绝服务安全漏洞。例如，web 服务器解析来自客户机的 JSON 输入并直接在结果对象上调用 hasOwnProperty 是不安全的，因为恶意客户机可能发送一个JSON值，如 {"hasOwnProperty": 1}，并导致服务器崩溃。

            为了避免这种细微的 bug，最好总是从 Object.prototype 调用这些方法。例如，foo.hasOwnProperty("bar") 应该替换为 Object.prototype.hasOwnProperty.call(foo, "bar")。
                     */

                     if(!Object.prototype.hasOwnProperty.call(res.data.data, "role_name")){
                       //记住如果想在字段里面添加字段，需要先声明这个字段的字符串变量就可以
                       //还有上面的hasOwnProperty的使用
                       // role_name:"role_name"
                         res.data.data[this.role_name]="ch澳际管理"
                     }
                        this.list.push(res.data.data)
                        this.dialogVisible=false
                  }
                  
           })
    },
    //状态改变
    zhuangtai(){
      var id=0
      var mg_state=""
      this.list.map((val)=>{
          id=val.id
          mg_state=val.mg_state
      })
      var URL=`users/${id}/state/${mg_state}`
      zhuangtai(URL).then((res)=>{
                console.log(res.data)
                if(res.data.meta.status!=200){
                        this.$Message.error("设置失败")
                        return
                    }else{ 
                        this.$Message.success("设置成功")
                        return
                    }
            })
     
    },
    //这个是编辑提交
    quedingtianjai2(e){
      console.log(e)
      this.form2.username=e.username
      this.form2.email=e.email
      this.form2.mobile=e.mobile
      this.id=e.id
      this.sidfg=true
    },
    quedingtian2(){
    
        var URL=`users/${this.id}`
       
      bianji(URL,this.form2).then((res)=>{
        console.log(res.data)
        if(res.data.meta.status!=200){
                        this.$Message.error("更新失败")
                        
                    }else{ 
                        this.$Message.success("更新成功")
                        this.list=this.list.map((val)=>{
                          console.log(val)
                                if(this.id==val.id){
                                   val.username=this.form2.username
                                    val.email=this.form2.email
                                    val.mobile=this.form2.mobile
                                }
                                return val
                        })
                        this.sidfg=false
                    }
      })
    },
    //删除
    shanchu(e){
      this.id2=e.id
      this.shanchua=true
    },
    shanchu2(){
      var URL=`users/${this.id2}`
       shanchu(URL).then((res)=>{
           console.log(res.data)
            if(res.data.meta.status!=200){
                        this.$Message.error("删除失败")
                       
                    }else{ 
                        this.$Message.success("删除成功")
                        
                        for(var i=0;i<this.list.length;i++){
                              if(this.id2==this.list[i].id){
                                this.list.splice(i,1)
                              }
                        }
                        console.log(this.list)
                       
                    }
       })

    },
    //多少条每页
    handleSizeChange(e){
        console.log(e)
       this.params.pagesize=e
       this.sousuoko()

    },
    //第几页
    handleCurrentChange2(e){
        console.log(e)
       this.params.pagenum=e
       this.sousuoko()

    },
    quanxian(e){
     this.id4=e.id
      this.username=e.username
      this.role_name2=e.role_name
     this.quanxian2=true
    /* let params={
       rid:this.value22
     }*/
       //let URL=`users/${e.id}}/role`
       //获得角色权限的列表
     fenpei().then((res)=>{
             console.log(res.data.data)
             this.options=res.data.data
     })
    },
    quanxian3(){
          quedingfenpei(this.id,this.value22).then((res)=>{
               console.log(res.data.data)
               if(res.data.meta.status!=200){
                        this.$Message.error("分配失败")
                      
                    }else{ 
                        this.$Message.success("分配成功")
                    }
          })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
