<template>
    <div>
        <el-button @click="checkToken">验证token</el-button>
        <SocketIO/>
    </div>
</template>

<script>
    import WebSocket from "../components/WebSocket"
    import SocketIO from '../components/SocketIO'
    export default {
        name: "Home",
        components:{WebSocket,SocketIO},
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

        }
    }
</script>

<style scoped>

</style>