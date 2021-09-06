<template>
    <div class="message">
        <img class="user-header" :src="message.header"/>
        <div class="context">
            <span class="user-name">{{message.name}}</span>
            <p v-if="message.type==='text'" class="text" v-html="message.content"></p>
            <el-image v-else-if="message.type==='image'" :src="message.content" :preview-src-list="imgList" class="text"></el-image>
        </div>
        <span class="time">{{message.date}}</span>
    </div>
</template>

<script>
export default {
    name:'MessageStru',
    props:['message', 'imgList'],
}
</script>

<style scoped>

.message{
    width: 100%;
    margin: 10px 0;
    display: flex;
}

.el-image{
    max-width: 100px !important;
    max-height: 100px !important;
    padding: 0 !important; 
}

.left{
    text-align: left;
    padding-left: 10px;
}

.right{
    justify-content: flex-end;
}

.user-header{
    width: 50px;
    height: 50px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 5px;
}


.context{
    max-width: 75%;
    display: flex;
    flex-direction: column;
}

.user-name{
    margin: 0 10px;
}

.text{
    max-width: 100%;
    padding: 15px;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 10px;
}

.left .text{
    background: green;
    margin-left: 10px;
}

.right .user-header{
    margin-right: 10px;
    order: 3;
}

.right .context{
    text-align: right;
    order: 2;
}

.right .text{
    margin-right: 10px;
    text-align: left;
    background: white;
    
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