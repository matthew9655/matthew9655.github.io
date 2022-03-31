<template>
  <div id="main-box">
    <p>Blog</p>
    <BlogCard :imageUrl="'face.jpg'" :text="'this is blog 1'"/>

  </div>
</template>

<script>

import texts from '../texts/texts.js';
import BlogCard from '../components/BlogCard.vue';

export default {
    name: 'About',
    components: {
      BlogCard: BlogCard,
    },
    data() {
        return {
            texts: texts,
        };
    },
};

</script>

<style scoped>
#main-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 25%;
    margin-bottom: 40px;
}
#image {
    border-radius: 50%;
    width: 25%;
}
#name {
    width: 25%;
    height: 20%;
    font-size: 30px;
    margin-bottom: 15px;
}
#about {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>