<template>
  <div class="blue-square-container">
    <h2>Hello review</h2>
    <div>search component</div>
    <div>
      <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
      </div>
    </div>
  </div>
</template>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
.blue-square-container {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
</style>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
      
      console.log(this.$http)
    // this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id).then(function(data) {
    //     // console.log(data);
    //     this.blog = data.body;
    //   });
  }
};
</script>