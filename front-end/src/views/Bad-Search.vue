<template>
<div class="home-content">
  <form id="google-form" @submit.prevent="googleBooks">
    <label class="intro">I'm sorry, the page you searched for does not exist on this site.
      Please try a different search, or you may try searching on Google Books:</label>
    <input type="text" placeholder="Search Google Books" id="search-google" v-model="search">
    <input type="submit" id="get-book" value="Search Google books">
    <div id="google-books"></div>
  </form>

  <div class="push"></div>
</div>
</template>

<script>
export default {
  name: "Bad Search",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    googleBooks() {
      if (this.search == "") {
        let error = "<p class='intro'>";
        error += "Please enter a search query.";
        error += "</p>";
        document.getElementById("google-books").innerHTML = error;
        return;
      }
      let url = "https://www.googleapis.com/books/v1/volumes?q=";
      url += this.search;
      fetch(url)
        .then(response => {
          return response.json();
        }).then(json => {
          console.log(json);
          let books = "";
          for (let i = 0; i < json.items.length; i++) {
            console.log(json.items[i]);
            books += "<div class='book-result-item'>"
            books += "<p class='google-book-info'><strong>Search Result #" + (i + 1) + "</strong></p>";
            if ('authors' in json.items[i].volumeInfo) books += "<p class='google-book-info'><strong>Author:</strong> " + json.items[i].volumeInfo.authors[0] + "</p>";
            books += "<p class='google-book-info'><strong>Book Title:</strong> " + json.items[i].volumeInfo.title + "</p>";
            books += "<p class='google-book-info'><a class='google-book-links' href='" + json.items[i].volumeInfo.infoLink;
            books += "'>Link to Google Books page.</a></p>"
            books += "</div>";
          }
          document.getElementById("google-books").innerHTML = books;
        });
    }
  }
}
</script>

<style scoped>
#google-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#get-book {
  background-color: #235789;
  color: #F9E7E7;
  font-family: "Courier Prime", monospace;
  padding: 10px;
  margin-top: 10px;
}

#google-books {
  display: flex;
  flex-direction: column;
}

.google-book-info {
  text-align: center;
}

.google-book-links {
  color: white;
  text-decoration: underline;
}

.book-result-item {
  color: white;
  background-color: #7B8CDE;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  width: 80%
}

@media only screen and (min-width: 961px) {
  #google-books {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .book-result-item {
    width: 16%;
    margin: 0 2% 20px 2%;
  }
}

@media only screen and (max-width: 960px) and (min-width: 501px) {
  #google-books {
    flex-wrap: wrap;
    flex-direction: row;
  }

  .book-result-item {
    width: 29%;
    margin: 0 2% 20px 2%;
  }
}
</style>
