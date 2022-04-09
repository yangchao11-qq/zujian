<template>
  <div class="hello">
     <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
     <el-card class="box-card">
         <el-alert
      title="注意:只允许为第三级分类设置相关的参数"
      type="warning"
      :closable="false"
      center
      show-icon>
    </el-alert>
     <div>
       <div class="blocka">
          <span class="demonstration"> 选择商品分类:</span>
          <el-cascader
          :props="options"
            v-model="value"
            :options="options2"
            @change="handleChange"></el-cascader>
        </div>
     </div>
      <el-tabs v-model="activeName" @tab-click="handleClickq">
        <el-tab-pane label="动态参数" name="first">
           <el-button type="primary" :disabled="pop" size="mine" @click="dialogVisible = true">添加参数</el-button>
           

             <el-table  
    :data="tableData"
    style="width: 100%" >
    <el-table-column type="expand">
      <template slot-scope="scope">
        
             
                          <!--循环渲染tag标签-->
                            <el-tag :key="i"
                                v-for="(item,i) in scope.row.attr_vals"
                                  closable @close="shanchu1111(i,scope.row)">
                                  {{item}}
                               </el-tag>
                           <!--输入的文本框-->
                          <el-input
                            class="input-new-tag"
                            v-show="inputVisible==1"
                            v-model="scope.row.inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm(scope.row)"
                            @blur="handleInputConfirm(scope.row)"
                          >
                          </el-input>
                          <!--添加的按钮-->
                          <el-button v-show="inputVisible==2"
                            class="button-new-tag" 
                            size="small" 
                            @click="showInput66(scope.row)">+ New Tag</el-button>
                                
      </template>
    </el-table-column>
   <el-table-column
                prop="attr_name"
                label="参数名称"
                width="auto">
              </el-table-column>
              <el-table-column
                prop="name"
                label="操作"
                width="auto">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="quedingtianjai2(scope.row)" >编辑<i class="el-icon-edit"></i></el-button>
                  <el-button type="danger" size="mini"  @click="shanchu(scope.row)">删除<i class="el-icon-delete"></i></el-button>
                </template>
              </el-table-column>
           </el-table>

        </el-tab-pane>
        <el-tab-pane label="静态属性" name="second">
          <el-button type="primary" :disabled="pop" size="mine" @click="dialogVisible = true">添加参数</el-button>
              <el-table  
    :data="tableData"
    style="width: 100%" >
    <el-table-column type="expand">
      <template slot-scope="scope">
        
             
                          <!--循环渲染tag标签-->
                            <el-tag :key="i"
                                v-for="(item,i) in scope.row.attr_vals"
                                  closable @close="shanchu1111(i,scope.row)">
                                  {{item}}
                               </el-tag>
                           <!--输入的文本框-->
                          <el-input
                            class="input-new-tag"
                            v-show="inputVisible==1"
                            v-model="scope.row.inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm(scope.row)"
                            @blur="handleInputConfirm(scope.row)"
                          >
                          </el-input>
                          <!--添加的按钮-->
                          <el-button v-show="inputVisible==2"
                            class="button-new-tag" 
                            size="small" 
                            @click="showInput66(scope.row)">+ New Tag</el-button>
                                
      </template>
    </el-table-column>
   <el-table-column
                prop="attr_name"
                label="参数名称"
                width="auto">
              </el-table-column>
              <el-table-column
                prop="name"
                label="操作"
                width="auto">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="quedingtianjai2(scope.row)" >编辑<i class="el-icon-edit"></i></el-button>
                  <el-button type="danger" size="mini"  @click="shanchu(scope.row)">删除<i class="el-icon-delete"></i></el-button>
                </template>
              </el-table-column>
           </el-table>

        </el-tab-pane>
      </el-tabs>


     
      

      </el-card>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          >
         
           <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item :label="label" prop="username">
                        <el-input v-model="form.username" > </el-input>
                     </el-form-item>
           </el-form>


          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible9()">确 定</el-button>
          </span>
        </el-dialog>

            <el-dialog
              title="编辑"
              :visible.sync="dialogVisible111"
              width="30%"
              >
              <el-form :model="kop" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item :label="label" prop="username">
                        <el-input v-model="kop" > </el-input>
                     </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible111= false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible12()">确 定</el-button>
              </span>
            </el-dialog>
            <el-dialog
              title="删除"
              :visible.sync="dialogVisible111nn"
              width="30%"
              >
              <el-form :model="kop2" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item :label="label" prop="username">
                        <el-input v-model="kop2" > </el-input>
                     </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible111nn= false">取 消</el-button>
                <el-button type="primary" @click="dialogV()">确 定</el-button>
              </span>
            </el-dialog>
            
  </div>
</template>

<script>
import {shangpinfenlei,chanshu,shangpinfenlei3,shangpinfenlei4,shangpinfenlei5} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return{
       options:{
           value: 'cat_id',
           label: 'cat_name',
          children:'children'
          },
          options2:[],
          value:"",
          activeName:"first",
          pop:true,
          tableData:[],
          dialogVisible:false,
          dialogVisible111:false,
          dialogVisible111nn:false,
          form:{
            username:""
          },
           rules:{
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]},
          id6:0,
          id7:0,
          hui:"many",
          kop:"",
          kop2:"",
          label:"动态参数",
          attr_vals:"",
         inputVisible:2,
          dynamicTags:[2,1,6],
          lll:"",
          op:false
    }
  },
  created(){
   this.shang()
  },
  methods:{
     shang(){
       shangpinfenlei().then((res)=>{
           console.log(res.data)
           this.options2=res.data.data
       })
     },
     handleChange(e){
       this.id6=e[2]
      console.log(e)
       this.hjko()
      this.pop=false
     },
     //请求数据列表的
     hjko(){
        chanshu(this.id6,this.hui).then((res)=>{
           console.log(res.data.data)
           console.log("------------------------")
           //split是把字符串转为数组，和...有区别  ...是每一位字符串，，二split是每一个一块的字符串["ttt", "eee"],这个里卖弄要给空格，不能给逗号
              res.data.data.forEach((val)=>{
                  val.attr_vals=val.attr_vals ? val.attr_vals.split(' '):[]
              })
           this.tableData=res.data.data
      })
     }
     ,
     //添加数据
     dialogVisible9(){
       console.log("pp")
       var params={
         attr_name:this.form.username,
         attr_sel:this.hui
       }
       shangpinfenlei3(this.id6,params).then((res)=>{
         console.log(res.data.data)
          this.tableData.push(res.data.data)
       })
     },
     //这段要知道是通过tab栏切换获取不同的值的
     handleClickq(e){
         console.log(e.label)
         this.label=e.label
         if(e.label=="静态属性"){
           console.log("55555")
            this.hui='only'
             this.hjko()
         }else{
             this.hui='many'
             this.hjko()
         }
        
     },
     //编辑
     quedingtianjai2(e){
       console.log("555")
        console.log(e)
        this.id7=e.attr_id
        this.attr_vals=e.attr_vals
        this.kop=e.attr_name
        this.dialogVisible111=true
     },
     //删除
     shanchu(e){
        console.log(e)
        this.kop2=e.attr_name
         this.id7=e.attr_id
        this.attr_vals=e.attr_vals
        this.dialogVisible111nn=true
     },
     //编辑确定
     dialogVisible12(){
       let params={
         attr_name:this.kop,
         attr_sel:this.hui
       }
       shangpinfenlei4(this.id6,this.id7,params).then((res)=>{
            
            if(res.data.meta.status!=200){
                     this.$Message.error("修改失败")
                 }else{
                  
                    this.$Message.success("修改成功")
                    console.log(res.data.data)
                     this.hjko()
                     this.dialogVisible111=false
                 }
       })
     },
     //删除确定
     dialogV(){
           shangpinfenlei5(this.id6,this.id7).then((res)=>{
              console.log(res.data)
            if(res.data.meta.status!=200){
                     this.$Message.error("删除失败")
                 }else{
                    this.$Message.success("删除成功")
                    console.log(res.data.data)
                     this.hjko()
                     this.dialogVisible111nn=false
                 }
       })
     },
     //tag的标签
     showInput66(e){
      console.log(e)
       this.inputVisible=1
         this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        })
     },
     handleInputConfirm(e){
             console.log(e)
             //这里我们输入的适合要烤炉空格的情况
             if(e.inputValue.trim().length!=0){
               this.inputVisible=2
               e.attr_vals.push(e.inputValue.trim())
                e.inputValue=''
                this.dialogVisible12()
             }else{
               this.inputVisible=2
              e.inputValue=''
             }
     },
    // 删除tag标签
    shanchu1111(i,e){
        console.log(i,e)
        e.attr_vals.splice(i,1)
        this.dialogVisible12()
     }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    
  }

</style>
