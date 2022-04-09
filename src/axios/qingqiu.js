import { requer}  from './axios'
//如果这里需要多个值，那么就传多个值，这个id的地方
export function postdeng(id){
     return  requer.post(
       "/login",
         id
     )
}
export function zuoce(){
  return requer.get(
    "/menus"
  )
}
export function jiaoseguanli(id){
  return requer.get(
    "/users",{params:id}
  )
}
export function quedingtianjai(id){
  return requer.post(
    "/users",id
  )
}
export function zhuangtai(url){
  return requer.put(
    url
  )
}
export function bianji(url,id){
  return requer.put(
    url,id
  )
}
export function shanchu(url){
  return requer.delete(
    url
  )
}
export function sousuoko2(url){
  return requer.get(
    url
  )
}
//获得角色分配权限
export function fenpei(){
  return requer.get(
    'roles'
  )
}
//确定分配脚色权限接口
export function quedingfenpei(id,role){
  return requer.put(
    `users/${id}/role`,{rid:role}
  )
}
//脚色列表
export function jiaoseliebiao(){
  return requer.get(
    `roles`
  )
}
//添加角色
export function jiaoseliebiao2(id){
  return requer.post(
    `roles`,{
      roleName:id.username,
      roleDesc:id.password
    }
  )
}
//编辑角色
export function bianji3(id1,id){
  return requer.put(
    `roles/${id1}`,{
      roleName:id.username,
      roleDesc:id.password
    }
  )
}
//删除脚色
export function shanchu9(id1){
  return requer.delete(
    `roles/${id1}`
  )
}
//所有权限
export function suoyouquanxian(type){
  return requer.get(
    `rights/${type}`
  )
}
//所有权限
export function suoyouquanxian2(type){
  return requer.get(
    `rights/${type}`
  )
}
//角色授权
export function shouquan9(id1,id){
  return requer.post(
    `roles/${id1}/rights`,{rids:id}
  )
}
//删除权限
export function shanchu8(id1,id){
  return requer.delete(
    `roles/${id1}/rights/${id}`
  )
}
/*---------------------------------------------------- */
/*商品分类列表 */
export function shangpin(id){
  return requer.get(
    `goods`,{params:{
      query:id.query,
      pagenum:id.pagenum,
      pagesize:id.pagesize
    }}
  )
}
// 根据 ID 查询商品
export function shangpin23(id){
  return requer.get(
    `goods/${id}`
  )
}
//商品列表数据
export function shangpin98(){
  return requer.get(
    `categories`
  )
}
// 商品参数
export function chanshu(id,kl){
  return requer.get(
    `categories/${id}/attributes`,{params:{
      sel:kl
    }}
  )
}

//商品分类
export function shangpinfenlei(){
  return requer.get(
    `categories`
  )
}
//根据 id 查询分类
export function shangpinfenlei2(id){
  return requer.get(
    `categories/${id}`
  )
}
//添加动态参数
export function shangpinfenlei3(id,lop){
  return requer.post(
    `categories/${id}/attributes`,lop
  )
}
//编辑提交商品
export function shangpinfenlei4(id,lop,klp){
  return requer.put(
    `categories/${id}/attributes/${lop}`,klp
  )
}
//删除提交商品
export function shangpinfenlei5(id,lop){
  return requer.delete(
    `categories/${id}/attributes/${lop}`
  )}

  //删除提交商品
export function tianjiavvv(id){
  return requer.post(
    `categories`,id
  )
}
  //订单数据列表
  export function dingdan(id){
    return requer.get(
      `orders`,{id}
    )
  }
  



