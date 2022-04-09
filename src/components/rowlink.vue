<template>
  <div class="hello">
        <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button type="primary" @click="dialogVisiblep()">添加角色</el-button>
      </div>
      <div  class="text item">
           <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
         type="index"
        width="50">
        </el-table-column>
    <el-table-column type="expand">
      <template  slot-scope="scope">
             <!--这里要控制边框线是否显示的-->
            <el-row :gutter="20" :class="['ab3',index===0 ? 'ab':'']" v-for="(item,index) in scope.row.children" :key="item.id">

              <el-col :span="5"><div class="grid-content bg-purple" > <el-tag class="mkop">{{item.authName}}<span class="dfy" @click="shanchu3(item.id,scope.row)">X</span></el-tag></div></el-col>

              <el-col :span="15" >
                <div class="grid-content bg-purple">
                <el-row :gutter="20" v-for="(item,indea) in item.children" :key="item.id" :class="['ab',indea===0 ? 'ab4':'']">
                         <el-col :span="5" ><div class="grid-content bg-purple"> <el-tag type="success">{{item.authName}}<span class="dfy" @click="shanchu3(item.id,scope.row)">X</span></el-tag></div></el-col>

                         <el-col :span="15" class="ab2"><div class="grid-content bg-purple"> <el-tag type="warning" v-for="(item) in item.children" :key="item.id">{{item.authName}}<span class="dfy" @click="shanchu3(item.id,scope.row)">X</span></el-tag></div></el-col>
                 </el-row>

              </div>
            </el-col>
              
             
            </el-row>
       

          <!--这块布局多看看，要多看看看看看啊看啊看-->
                 <!--渲染一级权限-->
                









          </template>
        </el-table-column>
    
        <el-table-column
          label="角色名称"
          prop="roleName">
        </el-table-column>
        <el-table-column
          label="角色描述"
          prop="roleDesc">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="desc">
           <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="quedingtianjai2(scope.row)" ><i class="el-icon-edit"></i>编辑</el-button>
                  <el-button type="danger" size="mini"  @click="shanchu(scope.row)"><i class="el-icon-delete"></i>删除</el-button>
                  <el-button type="warning" size="mini" @click="quanxian(scope.row)"><i class="el-icon-s-tools"></i>分配权限</el-button>
           </template>
        </el-table-column>
      </el-table> 
      </div>
    </el-card>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
       >
           <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="角色用户名" prop="username">
                        <el-input v-model="form.username" > </el-input>
                     </el-form-item>
                     <el-form-item label="角色描述" prop="password">
                        <el-input v-model="form.password" ></el-input>
                     </el-form-item>    
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="tianjai()">确 定</el-button>
        </span>
      </el-dialog>
      <!--编辑-->
        <el-dialog
        title="提示"
        :visible.sync="bianji"
        width="30%"
       >
           <el-form :model="form2" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="角色用户名" prop="username">
                        <el-input v-model="form2.username" > </el-input>
                     </el-form-item>
                     <el-form-item label="角色描述" prop="password">
                        <el-input v-model="form2.password" ></el-input>
                     </el-form-item>    
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="bianji = false">取 消</el-button>
          <el-button type="primary" @click="bianji2()">确 定</el-button>
        </span>
      </el-dialog>
      <!--删除-->
      
        <el-dialog
          title="删除"
          :visible.sync="dialogVisible3"
          width="50%"
          >
          <span>确定删除么?</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="quedingshanchu()">确 定</el-button>
          </span>
        </el-dialog>
         <!--分配权限-->
           <el-dialog
          title="分配权限"
          :visible.sync="dialogVisible4"
          width="50%"
          >
          <!--default-checked-keys	默认勾选的节点的 key 的数组-->
         <el-tree :data="data" :props="defaultProps"  show-checkbox ref="treeref" :default-checked-keys="lop" node-key="id" default-expand-all></el-tree>
           
           
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible4 = false">取 消</el-button>
            <el-button type="primary" @click="quedingshanchu2()">确 定</el-button>
          </span>
        </el-dialog>
    


  </div>
</template>

<script>
import {jiaoseliebiao,jiaoseliebiao2,bianji3,shanchu9,shouquan9,suoyouquanxian,shanchu8} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return{
      tableData: [],
        currentRow: null,
        dialogVisible:false,
         rules:{
          username: [
            { required: true, message: '请输入角色用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入角色描述', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]},
          form:{
            username:"",
            password:""
          },
          bianji:false,
          form2:{
            username:"",
            password:""
          },
          id3:0,
          dialogVisible3:false,
          id9:0,
          dialogVisible4:false,
           data: [],
         defaultProps: {
          children: 'children',
          label: 'authName'
        },
        status:false,
        eid:0,
        push:[],
        lop:[]
    }
  },
  created(){
    this.liebiao()
     this.quanxian2()
  },
  methods:{
     dialogVisiblep(){
       this.dialogVisible=true
     },
     tianjai(){
       console.log("88888")
       jiaoseliebiao2(this.form).then((res)=>{
            console.log(res.data)
            if(res.data.meta.status!=201){
                        this.$Message.error("设置失败")
                    }else{ 
                        this.$Message.success("设置成功")
                        this.tableData.push(res.data.data)
                        this.dialogVisible=false
                    }
       })
       
     },
     liebiao(){
       jiaoseliebiao().then((res)=>{
           console.log(res.data.data)
           this.tableData=res.data.data
            this.digui(res.data.data)
       })

     },
     //编辑
     quedingtianjai2(e){
       this.id3=e.id
       console.log(e)
       this.form2.username=e.roleName
       this.form2.password=e.roleDesc
       this.bianji=true
     },
     bianji2(){
          bianji3(this.id3,this.form2).then((res)=>{
                  console.log(res.data.data)
                  if(res.data.meta.status!=200){
                        this.$Message.error("修改失败")
                    }else{ 
                        this.$Message.success("修改发成功")
                        this.bianji=false
                        this.tableData=this.tableData.map((val)=>{
                          console.log(val)
                            if(this.id3==val.id){
                              val=res.data.data
                            }
                              return val
                        })      
                    }
                  
          })
     },
     //删除
     shanchu(e){
         console.log(e)
         this.id9=e.id
         this.dialogVisible3=true
     },
     quedingshanchu(){
             console.log("555")
             shanchu9(this.id9).then((res)=>{
                  if(res.data.meta.status!=200){
                        this.$Message.error("删除失败")
                    }else{ 
                        this.$Message.success("删除成功")
                        //记着删除数组要用for循环和splice（）配合
                          for(var i=0;i<this.tableData.length;i++){
                             if(this.id9==this.tableData[i].id){
                                 this.tableData.splice(i,1)
                             }
                          }
                        this.dialogVisible3=false
                    }
             })
     },
     //分配权限
     quanxian(e){
       console.log(e.id)
       this.eid=e.id
       this.dialogVisible4=true
     },
     quanxian2(){
       //获取说有的权限列表
          let type="tree"
          suoyouquanxian(type).then((res)=>{ 
              console.log(res.data.data)
                this.data=res.data.data
                window.sessionStorage.setItem('data',JSON.stringify(res.data.data))   
               
       })
       
     },
      //获取我们所有的3级权限id然后渲染数组默认选中状态
     digui(e){
       if(e==null) return 
       e.map((val)=>{
              if(!val.children){
           this.lop.push(val.id)
         }
           this.digui(val.children)
       })
       
       
     },
     quedingshanchu2(){
       console.log("55599")
       //getCheckedKeys	若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
       //getHalfCheckedKeys	若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
        const key=[
          this.$refs.treeref.getCheckedKeys(),
          this.$refs.treeref.getHalfCheckedKeys()
        ]

         const ids=key.join(',')
       
       shouquan9(this.eid,ids).then((res)=>{
               console.log(res.data)
               if(res.data.meta.status !==200){
            return this.$message.error('分配权限失败')
          }
            this.$message.success('分配权限成功')
            //这里是利用当我们分配权限成之后，然后直接调用最前面的请求方法进行更新页面
            this.liebiao()
           this.dialogVisible4 = false
            })
     },
     //删除权限
     shanchu3(e,ty){
      shanchu8(ty.id,e).then((res)=>{
            console.log(res.data)
            if(res.data.meta.status!=200){
                        this.$Message.error("删除失败")
                        
                    }else{ 
                        this.$Message.success("删除成功")
                        //这里是利用当我们分配权限成之后，然后直接调用最前面的请求方法进行更新页面
                        this.liebiao()
                    }
      })
     }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tag{
  margin: 7px;
}
.ab{
border-top: 1px solid #eee;
}
.ab3{
  border-bottom: 1px solid #eee;
}
.ab4{
   border-top: 1px solid rgb(255, 255, 255);
}

.ab2{
  margin-left: 20px;
}
.mkop{
  margin-left: 50%;
 margin-top: 35%;

 transform: translateX(-50%);
}
.dfy{
  margin-left: 15px;
}
</style>
 