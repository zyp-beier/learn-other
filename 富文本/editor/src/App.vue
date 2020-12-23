<template>
  <div id="app">
   <froala id="edit" tag="textarea" :config="config" v-model="model"></froala>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      config: {
          language: 'zh_cn'
      },
      model: ''
    }
  }
}
</script>

<style>
    a[href="https://froala.com/wysiwyg-editor"], a[href="https://www.froala.com/wysiwyg-editor?k=u"] {
        position: absolute;
        top: -99999999px;
        opacity: 0;
    }
</style>
