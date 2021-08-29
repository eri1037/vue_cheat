<template>
    <div>
        <EmojiInputVue/>
        <el-input style='width:200px' v-model="input" type="textarea"/>
        <el-button @click="send">发送消息2</el-button>
        <h1>{{msg}}</h1>
        <Message/>
    </div>
</template>

<script>
    import EmojiInputVue from './EmojiInput'
    import Message from './Message'
    export default {
        name:'SocketIO',
        components: {Message,EmojiInputVue},
        data(){
            return{
                msg:'',
                input:'&#65;'
            }
        },
        methods:{
            send(){
                this.$socket.emit('sendMsg', {msg:this.input, color:'red'})
            }
        },
        sockets:{
            connect(){
                console.log('链接成功')
            },
            getMsg(msg){
                console.log(this.input.codePointAt(0).toString(16))
                this.$bus.$emit('sendMsg', msg)
            }
        },
        mounted(){
            this.$socket.emit('hello', {name:'zzs' + Math.floor(Math.random()*100)})
        }
    }
</script>

<style scoped>


</style>