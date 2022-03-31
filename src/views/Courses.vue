<template>
  <div id="main-box">
    <p>Courses</p>
    <p>First Year</p>
    <div id="course-box" v-for="(description, course) in firstYearCourses" :key="course">
        {{ course }} : {{description}}
    </div>

  </div>
</template>

<script>

import { firstYearCourses } from '../texts/coursesTexts.js';
// import BlogCard from '../components/BlogCard.vue';

export default {
    name: 'Courses',
    // components: {
    //   BlogCard: BlogCard,
    // },
    data() {
        return {
            firstYearCourses: firstYearCourses,
        };
    },
};

</script>

<style scoped>
#main-box{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 25%;
    margin-bottom: 40px;
    font-size:15px;
}
#course-box {
    text-align: left;
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