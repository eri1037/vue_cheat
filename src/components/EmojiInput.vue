<template>
  <div>
        <Emoji/>
        <el-input style='width:200px' v-model='input' type="textarea"/>
        <el-button icon="el-icon-search" circle @click="add"></el-button>
        <el-button @click="send">发送消息2</el-button>
  </div>
</template>

<script>
    import Emoji from './Emoji'
    export default {
        name:'EmojiInput',
        components:{Emoji},
        data(){
            return{
                input:''
            }
        },
        methods:{
            send(){
                console.log(this.input)
            },
            add(){
                this.input += '表情😀123456;'
                this.input = this.utf16toEntities(this.input)
                console.log(this.input)
                this.input = this.entitiestoUtf16(this.input)
            },
            getEmoji(emoji){
                this.input += this.entitiestoUtf16(emoji)
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
        mounted(){
            this.$bus.$on('selectEmoji', this.getEmoji)
        }
    }
</script>

<style scoped>

</style>