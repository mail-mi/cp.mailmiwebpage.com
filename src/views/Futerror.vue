<template>
<div class="book-content">
  <h1>{{futerror.title}}</h1>

  <img class="book-img" :src="'/images/' + futerror.image">

  <div class="book-info">
    <p><strong>Series:</strong> {{futerror.series}}, book {{futerror.book_number}}.</p>

    <p class="main-characters"><strong>Main Characters:</strong></p>
    <ul>
      <li v-for="character in futerror.main_characters" :key="character.id">
        {{character.name}}: {{character.description}}
      </li>
    </ul>

    <p><strong>Summary:</strong> {{futerror.summary}}</p>

    <p><strong>Current Status:</strong> {{futerror.status}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Futerror',
  computed: {
    futerror() {
      return this.$root.$data.books[2];
    }
  }
}
</script>
