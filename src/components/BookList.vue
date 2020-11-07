<template>
<div class="books">
  <div class="book" v-for="book in books" :key="book.book_number">
    <router-link :to="book.page_link" class="book-link">
      <template v-if="book.book_number % 2 === 1">
        <div class="odd">
          <img :src="'/images/' + book.image">
          <h4>{{book.title}}</h4>
          <p>{{book.summary}}</p>
        </div>
      </template>
      <template v-else>
        <div class="even">
          <img :src="'/images/' + book.image">
          <h4>{{book.title}}</h4>
          <p>{{book.summary}}</p>
        </div>
      </template>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array,
  }
}
</script>

<style>
.books {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
}
.book {
  background-color: #235789;
  border-radius: 20px;
  text-decoration: none;
  margin-bottom: 20px;
  color: #F9E7E7;
}
.book:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-decoration: none;
  color: #F9E7E7;
}
.book-link {
  text-decoration: none;
}
.odd h4,
.odd p {
  margin: 10px 5px 5px 5px;
}
.even h4,
.even p {
  margin: 10px 5px 5px 10px;
}
.book h4 {
  font-family: "Courier Prime", monospace;
}
.book img {
  max-width: 200px;
  height: inherit;
  border-radius: 20px;
  margin-right: 10px;
}
.even img {
  float: right;
  margin-left: 10px;
  margin-right: 0;
}
.odd img {
  float: left;
}
</style>
