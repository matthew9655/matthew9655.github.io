<template>
  <div id="main-header">
    <div id=sub-header>About</div>
    <div id="sub-header">Papers</div>
    <div id="sub-header">Projects</div>
    <div id="sub-header">Blog</div>
    <div id="sub-header">Contact Me</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-header {
    display: flex;
    justify-content: center;
    width:100%;
    height: 10%;
    margin-bottom: 60px;
}
#sub-header {
    width: 8%;
    height: 100%;
    cursor: pointer;
}
</style>