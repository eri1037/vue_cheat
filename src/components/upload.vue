<template>
    <el-upload
            action="#"
            ref="uploader"
            :http-request="addImg"
            :limit="1"
            list-type="picture"
            :multiple="false"
            :show-file-list="false"
        >
            <el-button icon="el-icon-picture" circle title="发送图片"></el-button>
        </el-upload>
</template>

<script>
    export default {
        name: 'Upload',
        data(){
            return{
                img:'',
                data:'',
                reciver:''
            }
        },
        methods:{
            addImg(inputData){
                let file = inputData.file
                let data = new FormData()
                data.append('name', 123)
                data.append('img', file)
                this.$http.post('/starry/uploadImg', data).then(
                    (res) => {
                        console.log('upload success')
                        if(res.data.status === 200){
                            console.log(res.data)
                            this.data = 'http://127.0.0.1:8888/getImg?fileName=' + res.data.fileName
                            console.log('reciver',this.reciver)
                            this.$socket.emit('sendImg', {token:sessionStorage.getItem('token'), fileName:this.data, reciver:this.reciver})
                            this.$refs.uploader.clearFiles()                  
                        }
                    }
                ).catch((err) => {
                    console.log('upload fail', err)
                })
            },
            getImg(){
                this.data = 'http://127.0.0.1:8888/getImg'                
            },
            changeFriend(path){
                this.reciver = path
            }
        },
        mounted(){
            this.$bus.$on('selectFriend', this.changeFriend)
        }
    }
</script>

<style scoped>

</style>