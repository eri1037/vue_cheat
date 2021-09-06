//创建整个应用的路由
import VueRouter from 'vue-router'
import Login from "../pages/Login"
import Home from "../pages/Home"
import Test from "../pages/Test"

//路由配置
const router =  new VueRouter({
    routes:[
        {path: '/', redirect:'/login'},
        {path:'/login', component:Login},
        {path: '/home', component: Home},
        {path:'/test', component: Test}
    ]
})
//前置路由守卫
/*router.beforeEach((to, from, next) => {
    if (to.path === '/login')
        return next()
    const token = sessionStorage.getItem('token')
    if (!token)
        return next('/login')
    next()
})*/

export default router