document.getElementById("search").addEventListener('input', (event) => {
  event.preventDefault();
  let pageNames = "<ul id='page-names'>";
  let search = document.getElementById("search").value
  const url = "/pages.txt";
  fetch(url)
    .then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
      for(let i = 0; i < json.length; i++) {
        console.log(json[i].pageName);
        if (json[i].pageName.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
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
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let searchValue = document.getElementById("search").value;
  fetch("pages.txt")
    .then((response) => {
      return response.json();
    }).then(json => {
      let newUrl = document.location.href;
      newUrl = newUrl.substring(0, newUrl.indexOf("/", 7));

      for (let i = 0; i < json.length; i++) {
        if (searchValue.toLowerCase() == json[i].pageName.toLowerCase()) {
          newUrl += json[i].link;
          document.location.href = newUrl;
          return;
        }
      }
      newUrl += "/pages/bad-search.html";
      document.location.href = newUrl;
    });
});

document.addEventListener("click", (event) => {
  const searchBar = document.getElementById("form");
  let targetElement = event.target;

  do {
    if (targetElement == searchBar) {
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);

  document.getElementById("search-results-wrapper").innerHTML = "";
});
