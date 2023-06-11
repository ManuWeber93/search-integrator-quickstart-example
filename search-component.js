const searchResultList = document.querySelector("#searchResultList");

function search(searchTerm) {
    SearchProcessor.search(searchTerm, processSearchResults);
}

function processSearchResults(searchResults, allRecords) {
    if (searchResults.length === 0) {
        setNoResultsAsResultList();
        return;
    }
    setSearchResultsAsResultList(searchResults, allRecords);
}

function setNoResultsAsResultList() {
    searchResultList.textContent = "No search results found...";
}

function setSearchResultsAsResultList(searchResults, allRecords) {
    const searchResultListItems = searchResults.map(searchResult =>
        `<div>
           <a href="${searchResult.item.link}">
             <div>${searchResult.item.title}</div>
           </a>
         </div>
        `);

  searchResultList.innerHTML = searchResultListItems.join("");
}

window.search = search;
