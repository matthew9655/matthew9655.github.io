<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- <script>
export default {
    name: 'App',
    data() {
        return {
            texts: texts,
        };
    },
};
</script> -->


<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital@0;1&display=swap');

html, body {
  background-color: #FCF9F9FF;
}


#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

a {
  text-decoration: none;
  color: #265396;
}
a:visited {
  color: #265396;
}
</style>
