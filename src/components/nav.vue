<template>
    <el-menu 
        class="left-nav"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
        <el-submenu index = '1'>
            <template slot="title">
                <span>单聊</span>
            </template>
            <el-menu-item v-for="friend in friendList" :key="friend.id" :index="friend.id.toString()">{{friend.name}}</el-menu-item>
        </el-submenu>

        <el-submenu index = '2'>
            <template slot="title">
                <span>群聊</span>
            </template>
            <el-menu-item index = "2-1">3</el-menu-item>
            <el-menu-item index = "2-2">4</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name:'Nav',
    data(){
        return{
            friendList:[],
            groupList:[],
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index, indexPath){
            console.log(index, indexPath)
            this.$bus.$emit('selectFriend', parseInt(index))
        }
    },
    mounted(){
        this.$http.get('/starry/getFriends', {params:{token:sessionStorage.getItem('token')}})
        .then(res => {
            if(res.data.status === 1){
                this.friendList = this.friendList.concat(res.data.data)
                console.log(this.friendList)
            }        
        }).catch(err => {
            console.log('nav:', err)
        })
    }
}
</script>

<style scoped>
.left-nav{
    overflow-y: scroll;
    overflow-x: hidden;
}
.left-nav::-webkit-scrollbar{
    display: none;
}
</style>