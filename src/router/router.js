
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import delu from "../components/denglu.vue"
import shouye from "../components/shouye"
import shouye1 from "../components/shouye1"
import link from "../components/rowlink"
import link2 from "../components/rowlink2"
import shangpin from "../components/shangpin"
import tianjia from "../components/tianjia"
import cah from "../components/canshuliebiao"
import shangpinfenlei from "../components/shangpinfenlei"
import dingdan from "../components/订单"

const router=new VueRouter({
    routes:[
        {path:"/",redirect:"/pop"},
        {path:"/pop",component:delu},
        {path:"/qq",component:shouye,
          children:[{
            path:'/0-0',component:shouye1
          },
          {
            path:'/1-0',component:link 
          }, {
            path:'/1-1',component:link2 
          },
          {
            path:'/2-0',component:shangpin 
          },
          {
            path:'/tianjia',component:tianjia 
          },{
            path:'/2-1',component: cah
          },
          {
            path:'/2-2',component: shangpinfenlei
          },
         {
            path:'/3-0',component: dingdan
          }]
    }
    
    ]
})
 router.beforeEach((to,form,next)=>{
   
     if(to.path==="/pop") return next();
     
     var tu=window.sessionStorage.getItem("totke")
     if(!tu) return next("/pop")
     next()

 })
        const originalPush = VueRouter.prototype.push
        VueRouter.prototype.push = function push(location, onResolve, onReject) {
            if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
            return originalPush.call(this, location).catch(err => err)
        }

export default router