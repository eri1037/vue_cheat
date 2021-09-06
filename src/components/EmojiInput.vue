<template>
    <div>
        <div class="toolbar">
            <Emoji v-show="showEmoji" class="emoji"/>
            <el-button icon="el-icon-search" circle @click="add"></el-button> 
            <el-button icon="el-icon-folder-add" circle></el-button>
            <el-button icon="el-icon-star-off" circle title="表情" @click="showEmoji=!showEmoji"></el-button>
            <Upload class="upload"/>
        </div>
        <textarea class="message-input" v-model='input'/>
        <el-button class="send" @click="send">发送</el-button> 
        
  </div>
</template>

<script>
    import Emoji from './Emoji'
    import Upload from './upload'
    export default {
        name:'EmojiInput',
        components:{Emoji, Upload},
        data(){
            return{
                input:'',
                showEmoji:false,
                reciver:''
            }
        },
        methods:{
            //向服务器发送数据
            send(){
                if(this.input.trim() === ''){
                    this.$message('不能输入空白内容')
                }else{
                    //向服务器socket中的sendMsg发送数据
                    this.$socket.emit('sendMsg', {token:sessionStorage.getItem('token'), msg:this.utf16toEntities(this.input.trim()), reciver:this.reciver})
                    this.input = ''
                }   
            },
            add(){
                this.input += '表情😀123456;'
                this.input = this.utf16toEntities(this.input)
                this.input = this.entitiestoUtf16(this.input)
            },
            getEmoji(emoji){
                this.input += this.entitiestoUtf16(emoji)
            },
            changeFriend(path){
                this.reciver = path
                console.log('changeFriend', path)
            },
            //emoji => utf16
            utf16toEntities(str) {
                const patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
                str = str.replace(patt, (char) => {
                    let H;
                    let L;
                    let code;
                    let s;

                    if (char.length === 2) {
                    H = char.charCodeAt(0); // 取出高位
                    L = char.charCodeAt(1); // 取出低位
                    code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法
                    s = `&#${code};`;
                    } else {
                    s = char;
                    }

                    return s;
                });

                return str;
            },
            //utf16 => emoji
            entitiestoUtf16(strObj) {
                const patt = /&#\d+;/g;
                const arr = strObj.match(patt) || [];

                let H;
                let L;
                let code;

                for (let i = 0; i < arr.length; i += 1) {
                    code = arr[i];
                    code = code.replace('&#', '').replace(';', '');
                    // 高位
                    H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
                    // 低位
                    L = ((code - 0x10000) % 0x400) + 0xDC00;
                    code = `&#${code};`;
                    const s = String.fromCharCode(H, L);
                    strObj = strObj.replace(code, s);
                }
                return strObj;
            }
        },
        sockets:{
            connect(){
                console.log('链接成功')
            },
            //服务器返回来的数据
            getMsg(msg){
                //将数据发送给Message模块
                msg.content = this.entitiestoUtf16(msg.content)
                this.$bus.$emit('sendMsg', msg)
            }
        },
        mounted(){
            //Emoji中选择后回调
            this.$bus.$on('selectEmoji', this.getEmoji)

            this.$bus.$on('selectFriend', this.changeFriend)
        }
    }
</script>

<style scoped>
.message-input{
    width: 100%;
    height: 50px;
    margin: 5px;
    border: none;
    outline: none;
    resize: none !important;
    overflow-y:scroll;

}

.message-input::-webkit-scrollbar{
    display: none;
}

.toolbar{
    width: 90%;
    text-align: left;
    position: relative;
}
.upload{
    display: inline;
    width: 100%;
    height: 100%;
    margin-left: 10px;
}

.send{
    float: right;
}

.emoji{
    width: 600px;
    position: absolute;
    top: -200px;
}
</style>