<template>
  <div class="book-content">
    <h1>{{renchanged.title}}</h1>

    <img class="book-img" :src="'/images/' + renchanged.image">

    <div class="book-info">
      <p><strong>Series:</strong> {{renchanged.series}}, book {{renchanged.book_number}}.</p>

      <p class="main-characters"><strong>Main Characters:</strong></p>
      <ul>
        <li v-for="character in renchanged.main_characters" :key="character.id">
          {{character.name}}: {{character.description}}
        </li>
      </ul>

      <p><strong>Summary:</strong> {{renchanged.summary}}</p>

      <p><strong>Current Status:</strong> {{renchanged.status}}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Renchanged',
  computed: {
    renchanged() {
      return this.$root.$data.books[1];
    }
  }
}
</script>
