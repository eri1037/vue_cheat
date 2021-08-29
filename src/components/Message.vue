<template>
    <div class="content">
        <ul>
            <li v-for="(message, index) in messageList" :key='index' :class="message.own===false?'left':'right'">
                <span class="header" :style="{background:message.color}"></span>
                <p class="text" v-html="message.msg"></p> 
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
                    {own:true, msg:'sdfs&#8986;sdf', color:'red'},
                    {own:false, msg:'456789123213123213', color:'blue'},
                    {own:true, msg:'456789%123213123213456789123213123213456789123213123213456789123213123213', color:'red'},
                    {own:false, msg:'456789123213123213456789123213123213456789123213123213456789123213123213', color:'yellow'},
                ],
            }
        },
        methods:{
            pushData(data){
                this.messageList.push(data)
            }
        },
        mounted(){
            console.log(this.messageList[0].msg)
            this.$bus.$on('sendMsg', this.pushData)
        }
    }
</script>

<style scoped>
.content{
    width: 600px;
    height: 800px;
    background: gray;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: 300px;
    position: relative;
}

li{
    width: 100%;
    margin-top: 10px;
    display: flex;
}

.left{
    text-align: left;
    padding-left: 10px;
}

.right{
    text-align: right;
    justify-content: flex-end;
}

.header{
    width: 50px;
    height: 50px;
    display: inline-block;
}

.text{
    max-width: 400px;
    padding: 15px;
    word-wrap: break-word;
    word-break: break-all;
}

.left .text{
    background: green;
    margin-left: 10px;
}

.right .header{
    margin-right: 10px;
    position: absolute;
    z-index: 1;
}

.right .text{
    left: -70px;
    text-align: left;
    position: relative; 
    background: white;
}
</style>