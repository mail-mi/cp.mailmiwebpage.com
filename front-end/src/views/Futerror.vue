<template>
<div class="book-page">
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
  <div class="comments">
    <h1>Comments:</h1>
    <form class="comment-form" @submit.prevent="addComment">
      <input type="text" v-model="name" placeholder="Name">
      <textarea v-model="comment" placeholder="Comment"></textarea>
      <button type="submit">Add</button>
    </form>
    <div class="comment-list">
      <div v-for="comment in comments" :key="comment._id">
        <hr>
        <p class="comment-text">{{comment.comment}}</p>
        <span class="comment-info"><em>-- {{comment.name}}, upvotes: {{comment.upvotes}}</em>
          <span v-on:click="upvoteComment(comment)"><strong> &uarr;</strong></span>
          <span v-on:click="downvoteComment(comment)"><strong> &darr;</strong></span>
          <span v-on:click="deleteComment(comment)" class="delete"><strong> X</strong></span>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Futerror',
  data() {
    return {
      comments: [],
      comment: '',
      name: ''
    }
  },
  created: function() {
    this.getComments();
  },
  computed: {
    futerror() {
      return this.$root.$data.books[2];
    }
  },
  methods: {
    async getComments() {
      try {
        const response = await axios.get("/api/futerror");
        console.log(response.data);
        this.comments = response.data.comments;
      } catch (error) {
        console.log(error);
      }
    },
    async addComment() {
      try {
        var url = "/api/futerror";
        await axios.post(url, {
          name: this.name,
          comment: this.comment
        });
        this.getComments();
        this.name = "";
        this.comment = "";
      } catch (error) {
        console.log(error);
      }
    },
    upvoteComment(comment) {
      var url = "/api/futerror/"
      url = url + comment._id;
      url = url + "/upvote";
      console.log(url);
      axios.put(url)
        .then(response => {
          console.log(response.data);
          comment.upvotes = response.data.comment.upvotes;
        }).catch(e => {
          console.log(e);
        });
    },
    downvoteComment(comment) {
      if (comment.upvotes === 0) return;
      var url = "/api/futerror/"
      url = url + comment._id;
      url = url + "/downvote";
      console.log(url);
      axios.put(url)
        .then(response => {
          console.log(response.data);
          comment.upvotes = response.data.comment.upvotes;
        }).catch(e => {
          console.log(e);
        });
    },
    async deleteComment(comment) {
      var url = "/api/futerror/" + comment._id + "/delete";
      await axios.delete(url);
      this.getComments();
    }
  }
}
</script>
