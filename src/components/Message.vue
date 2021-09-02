<template>
    <div class="content">
        <ul>
            <li v-for="(message, index) in messageList" :key='index' :class="message.own===false?'left':'right'">
                <span class="header" :style="{background:message.color}"></span>
                <p class="text" >{{message.msg}}<img v-if="message.imgURL !== null" :src=message.imgURL /></p>
                <span class="time">{{message.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data(){
            return {
                messageList:[
                    {own:true, msg:'sdfs&#8986;sdf', imgURL:require('../assets/logo.png'), color:'red', time:'22:24'},
                    {own:false, msg:'456789123213123213', imgURL:null, color:'blue', time:'22:24'},
                    {own:true, msg:'456789%123213123213456789123213123213456789123213123213456789123213123213', imgURL:null, color:'red', time:'22:24'},
                    {own:false, msg:'456789123213123213456789123213123213456789123213123213456789123213123213', imgURL:null, color:'yellow', time:'22:24'},
                ],
            }
        },
        methods:{
            pushData(data){
                this.messageList.push(data)
            }
        },
        sockets:{
            getImg(data){
                this.messageList.push(data)
            }
        },
        mounted(){
            console.log(this.messageList[0].msg)
            this.$bus.$on('sendMsg', this.pushData)
        },
    }
</script>

<style scoped>
.content{
    width: 600px;
    height: 300px;
    background: gray;
    overflow-y: scroll;
    overflow-x: hidden;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
}

li{
    width: 100%;
    margin: 10px 0;
    display: flex;
}

img{
    max-width: 100px;
    max-height: 100px;
}

.left{
    text-align: left;
    padding-left: 10px;
}

.right{
    justify-content: flex-end;
}

.header{
    width: 50px;
    height: 50px;
    display: inline-block;
    border-radius: 50px;
}

.text{
    max-width: 400px;
    padding: 15px;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 10px;
}

.left .text{
    background: green;
    margin-left: 10px;
}

.right .header{
    margin-right: 10px;
    order: 3;
}

.right .text{
    margin-right: 10px;
    text-align: left;
    background: white;
    order: 2;
}

.time{
    background: rgba(90, 90, 90, 0.3);
    align-self: flex-end;
}

.left .time{
    margin-left: 10px;
}

.right .time{
    margin-right: 10px;
    order: 1;
}
</style>