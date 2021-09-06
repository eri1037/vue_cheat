<template>
    <div class="content" >
        <div class="head">
            <img src="../assets/logo.png"/>
        </div>
        <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item prop="name">
                <el-input v-model="form.name" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="onReset">重置</el-button>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                form:{
                    name:'zzs',
                    password:'123456'
                },
                //表单输入规定
                rules:{
                    name:[
                        { required: true, message: '请输入名称', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            onSubmit(){
                this.$refs.loginForm.validate((val) => {
                    if (val)
                        this.$http.get('/starry/login', {params:{name:this.form.name, password:this.form.password}})
                            .then((res)=>{
                                if (res.data.status===0){
                                    sessionStorage.setItem('token', res.data.token)
                                    this.$router.push('/home')
                                }
                                else if (res.data.status===-1){
                                    this.$message.error('账号或密码错误')
                                }
                            }).catch((err)=>{
                                this.$message.error('连接服务器失败.')
                        })
                })

            },
            onReset(){
                this.$refs.loginForm.resetFields()
            }
        }
    }
</script>

<style scoped>
    .content{
        width: 500px;
        background: #2c3e50;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%)
    }
    .head{
        width: 100px;
        height: 100px;
        border: 1px solid #eeeeee;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0 0 10px #dddddd;
        position: relative;
        background-color: #ffffff;
        left: 50%;
        top: 0%;
        transform: translate(-50%,-50%);
    }
    img{
         width: auto;
         height: auto;
         max-width: 100%;
         max-height: 100%;
        border-radius: 50%;
        background: #eeeeee;
     }
    .el-form{margin:10px 50px 50px 50px}
    .el-button{float: right;margin: 10px 10px 50px 10px;}

</style>