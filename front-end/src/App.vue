<template class="body">
<div class="wrapper" id="app" @click="outsideSearch($event)">
  <div id="nav">
    <router-link to="/">
      <div class="icon">
        <h2>Liam Ashton</h2>
        <p>Beginning Novelist</p>
      </div>
    </router-link>
    <div id="navbarNav">
      <router-link to="/">Home</router-link>
      <router-link to="/camelost">Camelost</router-link>
      <router-link to="/renchanged">Renchanged</router-link>
      <router-link to="/futerror">Futerror</router-link>
      <router-link to="/about-me">About Me</router-link>
    </div>
    <div class="search">
      <form id="form" v-on:submit.prevent="submitSearch">
        <input placeholder="Search" id="search" v-model="search" @input.prevent="searchHelp" @click.prevent="searchHelp">
        <div id="search-results-wrapper">
          <!--<div id="search-results">
          </div>-->
        </div>
      </form>
    </div>
  </div>
  <router-view />

  <div class="footer">
    <p class="footer-item">You can find me on <a href="https://www.linkedin.com/in/liam-ashton/" target="_blank">
        LinkedIn</a>, on <a href="https://github.com/mail-mi" target="_blank">GitHub</a>,
      or on <a href="https://www.facebook.com/liam.ashton.376" target="_blank">Facebook</a>.</p>
    <p class="footer-item">My <a href="https://github.com/mail-mi/cp.mailmiwebpage.com" target="_blank">GitHub repository</a>.</p>
  </div>

</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submitSearch() {
      fetch("/pages.txt")
        .then((response) => {
          //console.log(response);
          return response.json();
        }).then(json => {
          let newUrl = document.location.href;
          newUrl = newUrl.substring(0, newUrl.indexOf("/", 7));

          for (let i = 0; i < json.length; i++) {
            if (this.search.toLowerCase() == json[i].pageName.toLowerCase()) {
              newUrl += json[i].link;
              document.location.href = newUrl;
              return;
            }
          }
          newUrl += "/bad-search";
          document.location.href = newUrl;
        }).catch(error => {
          console.log(error);
        });
    },
    searchHelp() {
      let pageNames = "<ul id='page-names'>";
      const url = "/pages.txt";
      if (this.search === '') {
        document.getElementById("search-results-wrapper").innerHTML = '';
        return;
      }
      fetch(url)
        .then((response) => {
          return response.json();
        }).then((json) => {
          for (let i = 0; i < json.length; i++) {
            if (json[i].pageName.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
              pageNames += "<li class='page-name'>";
              pageNames += "<a class='page-link' href='";
              pageNames += json[i].link;
              pageNames += "'>";
              pageNames += json[i].pageName;
              pageNames += "</a></li>";
            }
          }
          pageNames += "</ul>"
          let searchResult = '<div id="search-results">';
          searchResult += pageNames;
          searchResult += '</div>';

          document.getElementById("search-results-wrapper").innerHTML = searchResult;
        });
    },
    outsideSearch(event) {
      const searchBar = document.getElementById("form");
      let targetElement = event.target;

      do {
        if (targetElement == searchBar) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      document.getElementById("search-results-wrapper").innerHTML = "";
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: serif;
}

*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
}

body {
  background-color: #99D5C9;
}

h1 {
  font-family: serif;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #7B8CDE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

#nav h2,
#nav p {
  font-family: 'Courier Prime', monospace;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #000 !important;
  font-weight: normal;
}

#nav p {
  font-size: 14.7pt
}

#nav a {
  font-weight: bold;
  color: #000;
  text-decoration: none;
  font-weight: normal;
}

#nav a:hover {
  color: #F9E7E7;
}

#nav a.router-link-exact-active {
  color: #F9E7E7;
}

#navbarNav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

@media only screen and (min-width: 400px) and (max-width: 899 px) {
  #navbarNav {
    width: 80%;
    flex-direction: row;
  }
}

@media only screen and (min-width: 900px) {
  #navbarNav {
    width: 50%;
    flex-direction: row;
  }
}

#form {
  width: 200px;
}

#search-results-wrapper {
  width: inherit;
}

#search-results {
  background-color: white;
  border: 1px solid black;
  position: absolute;
  width: inherit;
  padding: 5px;
}

#page-names {
  list-style-type: none;
}

.page-link {
  text-decoration: none;
  background-color: white;
  color: black;
  border: none !important;
}

.page-link:hover {
  text-decoration: none;
  background-color: #235789;
  color: #F9E7E7;
}

/*Home*/
.home-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.intro {
  width: 80%;
  text-align: center;
  margin: 20px;
  font-family: 'Courier Prime', monospace;
}

.books {
  display: flex;
  flex-direction: column;
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
  text-decoration: none !important;
  color: #F9E7E7 !important;
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

.odd img,
.odd img {
  float: left;
}

/*Book Pages*/
.book-page {
  display: flex;
  flex-direction: column;
}
.book-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-content h1 {
  font-family: 'Courier Prime', monospace;
  margin-top: 10px;
  text-align: center;
}

.book-img {
  max-width: 90%;
  border-radius: 20px;
}

.book-info {
  max-width: 90%;
  list-style-position: inside;
  margin-top: 20px;
}

.book-info strong {
  font-family: "Courier Prime", monospace;
  font-weight: bold;
}

p.main-characters {
  margin-bottom: 0;
}

.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comments h1 {
  font-family: "Courier Prime", monospace;
}

.comment-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.comment-form * {
  margin-bottom: 10px;
}

.comment-form button {
  background-color: #235789;
  color: #F9E7E7;
  font-family: "Courier Prime", monospace;
  padding: 10px;
}

.comment-list {
  text-align: center;
}

.comment-list p {
  margin: 1px;
}

.comment-text {
  font-family: "Courier Prime", monospace;
}

.comment-info {
  margin-bottom: 5px;
}

.delete {
  font-family: "Courirer Prime", monospace;
  color: red;
}

@media only screen and (min-width: 750px) {
  .book-content {
    display: block;
  }

  .book-img {
    width: 400px;
    float: left;
    margin: 0 20px 20px 10px;
  }
}

/*Bad Search*/
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
  margin-bottom: 10px;
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

/*Footer*/
.body {
  min-height: 100%;
}

.wrapper {
  min-height: 100%;
  margin-bottom: -6em;
}

.footer,
.push {
  height: 6em;
}

.footer {
  width: 100%;
  background-color: #7B8CDE;
  color: #000;
  display: flex;
  justify-content: space-between;
}

.footer-item {
  margin: 1em 1em;
  font-family: serif;
}

.footer-item a {
  text-decoration: underline;
  color: inherit;
}

.footer-item a:hover {
  color: #F9E7E7;
}
</style>
