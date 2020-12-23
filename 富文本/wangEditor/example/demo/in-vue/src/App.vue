<template>
  <div id="app">
    <div>
      要复制的内容
      <span data-clipboard-action="copy" :data-clipboard-text="name" @click="copeLink" class="aa">{{name}}</span>
    </div>
    <hello></hello>
    <editor></editor>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Hello,
    Editor
  },
    data() {
      return{
          name: '147482580085284741147482580085284741147482580085284741'
      }
    },
    methods:{
        copeLink() {
            let _this = this;
            let clipboard = new this.clipboard(".aa")
            clipboard.on('success', function() {
                console.log('复制成功')
               alert('复制成功')
            })
            clipboard.on('error',function () {
                console.log('夫制失败')
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
