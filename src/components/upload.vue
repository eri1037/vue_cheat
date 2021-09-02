<template>
    <div>
        <input type="file" accept="image/png,image/jpeg,image/gif,image/jpg" ref="uploader" @change="addImg($event)"/>
        <el-button @click="getImg">获取服务器图片</el-button>
        <img style="width:200px;height:200px" :src="data"/>
    </div>
</template>

<script>
    export default {
        name: 'Upload',
        data(){
            return{
                img:'',
                data:''
            }
        },
        methods:{
            addImg(event){
                let inputDom = this.$refs.uploader
                this.img = inputDom.files[0]
                let data = new FormData()
                data.append('name', 123)
                data.append('img', this.img)
                console.log('formdata:',data.get('name'))
                this.$http.post('/starry/uploadImg', data   ).then(
                    (res) => {
                        console.log('upload success')
                        if(res.data.status === 200){
                            console.log(res.data)
                            this.data = 'http://127.0.0.1:8888/getImg?fileName=' + res.data.fileName
                            this.$socket.emit('sendImg', {token:sessionStorage.getItem('token'), fileName:this.data})
                        }
                    }
                ).catch((err) => {
                    console.log('upload fail', err)
                })
            },
            getImg(){
                //this.$socket.emit('sendImg',{token:sessionStorage.getItem('token'), fileName:''})
                /*this.$http.get('/starry/getImg').then(
                    (res) => {
                        console.log('upload success')
                        console.log(res)
                        this.data = require('')
                    }
                ).catch((err) => {
                    console.log('upload fail', err)
                })*/
                this.data = 'http://127.0.0.1:8888/getImg'
                
            }
        }
    }
</script>

<style scoped>

</style>