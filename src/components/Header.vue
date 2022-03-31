<template>
  <div id="main-header">
    <div id=sub-header>About</div>
    <div id="sub-header" @click="scroll('paper-header')">Papers</div>
    <div id="sub-header" @click="scroll('projects-header')">Projects</div>
    <div id="sub-header" @click=" () => { this.$router.push('blog') }">Blog</div>
    <div id="sub-header" @click=" () => { this.$router.push('courses') }">Courses</div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
    msg: String
    },
    methods: {
        scroll(refName) {
            let element = document.getElementById(refName);
            let top = element.offsetTop;
            window.scrollTo({
                top: top,
                left: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-header {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 10%;
    margin-bottom: 60px;
}
#sub-header {
    width: 18%;
    height: 100%;
    cursor: pointer;
}
</style>