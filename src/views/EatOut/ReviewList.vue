<template>
  <div class="blue-square-container">
    <h1 class="title">{{this.$route.params.product}}</h1>
    <div>search component</div>
    <div class="container">
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex md8>
            <h2 class="content-title">
              <span>LATEST {{this.$route.params.product}}</span>
            </h2>
            <v-card
              max-width="90%"
              class="mx-auto"
              v-for="post of visibleTodo"
              v-bind:visibleTodo="visibleTodo"
              v-bind:currentPage="currentPage"
              v-bind:post="post"
              :key="post.id"
              style="margin-bottom: 20px"
            >
              <v-layout wrap>
                <v-flex md4>
                  <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="100%" width="100%" />
                </v-flex>
                <v-flex md8>
                  <v-card-title>{{post.title}}</v-card-title>
                  <v-card-text>{{post.body}}</v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
            <div class="text-center">
              <Pagination
                v-bind:posts="posts"
                v-on:page:update="updatePage"
                v-bind:currentPage="currentPage"
                v-bind:pageSize="pageSize"
              >></Pagination>
            </div>
          </v-flex>
          <v-flex md4>
            <div>
              <h1>abc</h1>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-transform: uppercase;
  font-family: Duplicate Ionic, Helvetica, Arial, Verdana, sans-serif;
}
.content-title {
  width: 70%;
  text-align: center;
  border-bottom: 3px solid silver;
  font-family: Duplicate Ionic, Helvetica, Arial, Verdana, sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 0.3em;
  margin: 30px 5% 20px;
}
h2 span {
  background: #fff;
  /* text-align: center; */
  padding: 0 10px;
}
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
import axios from "axios";
import Pagination from "../../components/pagination/pagination.vue";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      nextID: 101,
      currentPage: 0,
      pageSize: 10,
      visibleTodo: [],
      id: this.$route.params.id,
      posts: [],
      errors: [],
      todos: [
        { id: 0, text: "Make dinner tonight!" },
        { id: 1, text: "Fold the laundry." },
        { id: 2, text: "Learn to make a Vue app!" },
        { id: 3, text: "Todo # 3" },
        { id: 4, text: "Todo # 4" },
        { id: 5, text: "Todo # 5" },
        { id: 6, text: "Todo # 6" },
        { id: 7, text: "Todo # 7" },
        { id: 8, text: "Todo # 8" },
        { id: 9, text: "Todo # 9" },
        { id: 10, text: "Todo # 10" },
        { id: 11, text: "Todo # 11" },
        { id: 12, text: "Todo # 12" }
      ]
    };
  },
  beforeMount: function() {
    this.updatevisibleTodo();
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updatevisibleTodo();
    },
    updatevisibleTodo() {
      axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          this.posts = response.data;
          this.visibleTodo = this.posts.slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize
          );
          console.log(this.visibleTodo);

          //
          if (this.visibleTodo.length == 0 && this.currentPage > 0) {
            this.updatePage(this.currentPage - 1);
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>