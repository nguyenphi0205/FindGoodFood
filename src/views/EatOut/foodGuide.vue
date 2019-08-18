<template>
  <div class="blue-square-container">
    <h1 class="title">{{this.$route.name}}</h1>
    <div class="container">
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex md8>
            <v-layout row>
              <v-flex
                md6
                v-for="post of visibleTodo"
                v-bind:visibleTodo="visibleTodo"
                v-bind:currentPage="currentPage"
                v-bind:post="post"
                :key="post.id"
              >
                <v-card max-width="80%">
                  <v-layout wrap>
                    <v-flex md12>
                      <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="100%" width="100%" />
                    </v-flex>
                    <v-flex md12>
                      <v-card-title>{{post.title}}</v-card-title>
                      <v-card-text>{{post.body}}</v-card-text>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>

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
        {
          id: 0,
          title: "hello world",
          text: "Make dinner tonight!",
          hotContent: true
        },
        {
          id: 1,
          title: "hello world",
          text: "Fold the laundry.",
          hotContent: false
        },
        {
          id: 2,
          title: "hello world",
          text: "Learn to make a Vue app!",
          hotContent: false
        },
        { id: 3, title: "hello world", text: "Todo # 3", hotContent: false },
        { id: 4, title: "hello world", text: "Todo # 4", hotContent: false },
        { id: 5, title: "hello world", text: "Todo # 5", hotContent: false },
        { id: 6, title: "hello world", text: "Todo # 6", hotContent: false },
        { id: 7, title: "hello world", text: "Todo # 7", hotContent: false },
        { id: 8, title: "hello world", text: "Todo # 8", hotContent: false },
        { id: 9, title: "hello world", text: "Todo # 9", hotContent: false },
        { id: 10, title: "hello world", text: "Todo # 10", hotContent: false },
        { id: 11, title: "hello world", text: "Todo # 11", hotContent: false },
        { id: 12, title: "hello world", text: "Todo # 12", hotContent: false }
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