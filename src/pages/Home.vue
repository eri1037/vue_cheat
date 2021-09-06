<template>
    <div > 
        <el-button @click="checkToken">验证token</el-button>
        <router-link to="/test">测试组件</router-link>
        <div class="home">
            <Nav class="left-nav"/>
            <SocketIO class="socketio"/>   
        </div>      
    </div>
</template>

<script>
    import SocketIO from '../components/SocketIO'
    import Nav from '../components/nav'
    export default {
        name: "Home",
        components:{SocketIO, Nav},
        methods:{
            checkToken(){
                let token = sessionStorage.getItem('token')
                if(token){
                    this.$http.get('/starry/home', {params:{token}})
                        .then(res => {
                            console.log(res)
                        }).catch(err => {
                        console.log(err)
                    })
                }
            }
        },
        mounted() {
           this.$socket.emit('hello', {token:sessionStorage.getItem('token')})
        }
    }
</script>

<style scoped>
    .home{
        width: 80%;
        height: 700px;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        display: flex;
    }
    .left-nav{
        width: 15%;

    }
    .socketio{
        width: 85%;
    }
    .chat-name{
        height: 100px;
    }
</style>