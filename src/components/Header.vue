<template>
  <div id="main-header">
    <div id=sub-header @click=" () => { this.$router.push('/') }">Home</div>
    <div id="sub-header" @click=" () => { this.$router.push('papers') }">Papers</div>
    <div id="sub-header" @click=" () => { this.$router.push('extras') }">Extras</div>
    <a id="sub-header" href="/files/cv.pdf" download>CV</a>
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

<style scoped>
#main-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    width: 100%;
    height: 10%;
    margin-bottom: 60px;
    right: 5%;
}
#sub-header {
    margin: 0px 10px 0px 10px;
    height: 100%;
    cursor: pointer;
    color: #89ABE3FF;
}
</style>