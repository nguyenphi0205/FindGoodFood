<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span
      v-if="showPreviousLink()"
      class="pagination-btn"
      v-on:click="updatePage(currentPage - 1)"
    ><</span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span
      v-if="showNextLink()"
      class="pagination-btn"
      v-on:click="updatePage(currentPage + 1)"
    >></span>
  </div>
</template>
<style scoped>
.pagination-btn {
  cursor: pointer;
}
</style>
<script>
export default {
  name: "pagination",
  props: ["posts", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    }
  }
};
</script>
