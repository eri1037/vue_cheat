<template>
  <div>
      <ul>
          <ol v-for="emoji in emojiList" :key="emoji" v-html="emoji" @click="getEmoji(emoji)"></ol>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Emoji',
    data(){
        return{
            emojiList:['&#128512;', '&#128513;', '&#128514;', '&#128515;']
        }
    },
    methods:{
        getEmoji(emoji){
            console.log(emoji)
            this.$bus.$emit('selectEmoji', emoji)
        }
    },
    mounted(){
        let i = 128516
        while(i<128530){
            this.emojiList.push(`&#${i++};`)
        }
    }

}
</script>

<style scoped>
div{
    width: 300px;
    height: 400px; 
    background: gray;
    margin-left: 300px;
}

ol{
    width: 50px;
    height: 50px;
    font-size: 40px;
    float:left;
}
ol:hover{
    background: rgb(11, 178, 219);
}
</style>