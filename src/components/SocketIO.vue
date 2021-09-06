<template>
    <div>
        <Message class="message"/>
        <EmojiInputVue class="inputArea"/>
    </div>
</template>

<script>
    import EmojiInputVue from './EmojiInput'
    import Message from './Message'
    import Upload from './upload'
    export default {
        name:'SocketIO',
        components: {Message,EmojiInputVue,Upload},
        data(){
            return{
                msg:'',
            }
        }, 
        methods:{
            
        },
        mounted(){
            
            
        }
    }
</script>

<style scoped>
.message{
    height: 70%;
}
.inputArea{
    height: 20%;
}

</style>