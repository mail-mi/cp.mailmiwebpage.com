<template>
<div class="home-content">

  <p class="intro">Hi, I'm Liam, and I like to write novels. Below are some of the novels
    I've written, along with a short description. Click on them (or on the
    menu) to learn a little bit more about them!</p>

  <BookList :books="books" />

  <div class="push"></div>
</div>
</template>

<script>
import BookList from "../components/BookList.vue"

export default {
  name: 'Home',
  components: {
    BookList
  },
  computed: {
    books() {
      return this.$root.$data.books;
    }
  }
}
</script>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
