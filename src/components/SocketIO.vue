<template>
    <div>
        <Upload/>
        <Message/>
        <EmojiInputVue/>
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
                input:'&#65;'
            }
        }, 
        mounted(){
            this.$socket.emit('hello', {token:sessionStorage.getItem('token')})
        }
    }
</script>

<style scoped>


</style>