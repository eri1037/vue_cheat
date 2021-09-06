<template>
    <div>
        <div class="chat-name">{{chatName}}</div>
        <div class="content"> 
            <MessageStru v-for="(message, index) in messageList" :key="index" :message="message"  :imgList="imgList" :class="message.own===false?'left':'right'" />
        </div>
    </div>
    
</template>

<script>
    import MessageStru from '../components/MessageStru'
    export default {
        name:'Message',
        components:{MessageStru},
        data(){
            return {
                messageList:[
                    {own:true, type:'text', content:'sdfs&#8986;sdf', name:'cxk', header:'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg', time:'22:24'},
                    {own:false, type:'text', content:'456789123213123213', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                    {own:true, type:'image', content:'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                    {own:false, type:'image', content:'http://127.0.0.1:8888/getImg?fileName=/static/image/85163754_p0-1630935632542.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                    {own:true, type:'text', content:'sdfs&#8986;sdf', name:'cxk', header:'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg', time:'22:24'},
                    {own:false, type:'text', content:'456789123213123213', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                    {own:true, type:'image', content:'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                    {own:false, type:'image', content:'http://127.0.0.1:8888/getImg?fileName=/static/image/85163754_p0-1630935632542.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                ],
                imgList:[
                    'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg',
                    'http://127.0.0.1:8888/getImg?fileName=/static/image/85163754_p0-1630935632542.jpg'
                ],
                chatName:'聊天室'
            }
        },
        methods:{
            pushData(data){
                this.messageList.push(data)
            },
            changeMessagePage(path){
                console.log('SocketIO:', path)
                //向服务器发送朋友id获取消息内容
                this.$http.get('/starry/getChatMessage', {params:{token:sessionStorage.getItem('token'), reciver:path}})
                .then(res => {
                    console.log(res.data)
                    this.chatName = res.data.reciver
                    this.messageList = res.data.messageList
                    this.imgList = res.data.imgList
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        sockets:{
            getImg(data){
                this.messageList.push(data)
                this.imgList.push(data.content)
                console.log(this.imgList)
            }
        },
        mounted(){
            this.$bus.$on('sendMsg', this.pushData)
            //接收Nav发送过来的朋友id
            this.$bus.$on('selectFriend', this.changeMessagePage)
        },
    }
</script>

<style scoped>
.content{
    width: 100%;
    height:90%;
    background: gray;
    overflow-y: scroll;
    overflow-x: hidden; 
    position: relative;
}

.content::-webkit-scrollbar{
    display: none;
}

.chat-name{
    width: 100%;
    height: 5%;
    text-align: left;
    font-size: 20px;
    padding: 5px;
}

</style>