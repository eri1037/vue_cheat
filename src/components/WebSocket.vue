<template>
    <div>
        <el-button @click="send">发送消息</el-button>
    </div>
</template>

<script>
    export default {
        name: "WebSocket",
        methods:{
            init(){
                if (typeof(WebSocket) === 'undefined'){
                    this.$message.error('浏览器不支持socket')
                }else {
                    this.socket = new WebSocket('ws://localhost:8081')
                    /*this.socket.onopen = this.open()
                    this.socket.onerror = this.error()
                    this.socket.onmessage = this.message()*/
                    this.socket.onopen = () => {
                        console.log('open')
                    }
                    this.socket.onerror = () => {
                        console.log('err')
                    }
                    this.socket.onmessage = () =>{
                        console.log('onmessage')
                    }
                }
            },
            open(){
                console.log('open')
            },
            error(){
                console.log('err')
            },
            message(){
                console.log('onmessage')
            },
            send(){
                this.socket.send(JSON.stringify({token:sessionStorage.getItem('token'),data:123456}))

            },
            close(){

            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
            this.socket.onclose = this.close()
        },
    }
</script>

<style scoped>

</style>