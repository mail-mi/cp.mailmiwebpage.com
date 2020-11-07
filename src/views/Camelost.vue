<template>
  <div class="book-content">
    <h1>{{camelost.title}}</h1>

    <img class="book-img" :src="'/images/' + camelost.image">

    <div class="book-info">
      <p><strong>Series:</strong> {{camelost.series}}, book {{camelost.book_number}}.</p>

      <p class="main-characters"><strong>Main Characters:</strong></p>
      <ul>
        <li v-for="character in camelost.main_characters" :key="character.id">
          {{character.name}}: {{character.description}}
        </li>
      </ul>

      <p><strong>Summary:</strong> {{camelost.summary}}</p>

      <p><strong>Current Status:</strong> {{camelost.status}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Camelost',
  computed: {
    camelost() {
      return this.$root.$data.books[0];
    }
  }
}
</script>
