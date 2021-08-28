<template>
    <div class="content">
        <ul>
            <li v-for="(message, index) in messageList" :key='index' :class="message.own===false?'left':'right'">
                <span class="header" :style="{background:message.color}"></span>
                <div class="text">{{message.msg}}</div> 
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
                    {own:true, msg:'1234567895', color:'red'},
                    {own:false, msg:'456789123213123213', color:'blue'},
                    {own:true, msg:'456789123213123213456789123213123213456789123213123213456789123213123213', color:'red'},
                    {own:false, msg:'456789123213123213456789123213123213456789123213123213456789123213123213', color:'yellow'},
                ],
            }
        },
        mounted(){
            console.log(this.messageList[0].msg)
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