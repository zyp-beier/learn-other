<template>
  <div id="app">
    <CreateCourse></CreateCourse>
  </div>
</template>

<style lang="less">
  html,body{
    padding: 0;
    margin: 0;
}
</style>
<script>
  import CreateCourse from "./views/CreateCourse";
  export default {
    components: {CreateCourse}
  }
</script>
