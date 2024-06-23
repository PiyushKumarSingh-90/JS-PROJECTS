const accesskey = "O84hDn3CTI0Bez2ip6BwtLMiU2Y69Rd0WaSnOt-E534";

const SearchForm = document.querySelector(".search-form"); // Use querySelector instead of getElementsByClassName
const SearchBox = document.querySelector(".search-box"); // Use querySelector instead of getElementsByClassName
const SearchResult = document.querySelector(".search-results"); // Use querySelector instead of getElementsByClassName
const ShowMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() 
{
    keyword = SearchBox.value;
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.forEach(result => 
        { // Use forEach instead of map
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            SearchResult.appendChild(imageLink);

        });

    ShowMore.style.display="block";
}

SearchForm.addEventListener("submit", (e) => 
{
    e.preventDefault();
    page = 1;
    SearchResult.innerHTML = ""; // Clear previous search results
    searchImages();
});

ShowMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})
