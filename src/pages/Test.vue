<template>
    <div>
        <MessageStru v-for="(message, index) in list" :key="index" :message="message"  :imgList="imgList" :class="message.own===false?'left':'right'" />
    </div>
</template>

<script>
import MessageStru from '../components/MessageStru'
export default {
    name:'Test',
    components:{MessageStru},
    data(){
        return{
            list:[
                {own:true, type:'text', text:'sdfs&#8986;sdf', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                {own:false, type:'text', text:'456789123213123213', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                {own:true, type:'image', imgURL:'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
                {own:false, type:'image', imgURL:'http://127.0.0.1:8888/getImg?fileName=/static/image/85131895_p0-1630933827141.jpg', name:'cxk', header:require('../assets/logo.png'), time:'22:24'},
            ],
            imgList:[
                'http://127.0.0.1:8888/getImg?fileName=/static/image/85143613_p0-1630933076686.jpg',
                'http://127.0.0.1:8888/getImg?fileName=/static/image/85131895_p0-1630933827141.jpg'
            ]
        }
    }
}
</script>

<style>

</style>