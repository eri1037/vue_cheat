<template>
    <div>
        <el-input style='width:200px' v-model="input"/>
        <el-button @click="send">发送消息2</el-button>
        <h1>{{msg}}</h1>
        <Message/>
    </div>
</template>

<script>
    import Message from './Message'
    export default {
        name:'SocketIO',
        components: {Message},
        data(){
            return{
                msg:'',
                input:''
            }
        },
        methods:{
            send(){
                this.$socket.emit('sendMsg', {msg:this.input})
            }
        },
        sockets:{
            connect(){
                console.log('链接成功')
            },
            getMsg(msg){
                console.log(msg)
                this.msg = msg
            }
        },
        mounted(){
            this.$socket.emit('hello', {name:'zzs' + Math.floor(Math.random()*100)})
        }
    }
</script>

<style scoped>


</style>