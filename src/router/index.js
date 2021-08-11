//创建整个应用的路由
import VueRouter from 'vue-router'
import Login from "../pages/Login";

export default new VueRouter({
    routes:[
        {path: '/', redirect:'/login'},
        {path:'/login', component:Login}
    ]
})