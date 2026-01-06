let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result, index) {
  let { link, title, description } = result;

  // 1. Create the Card Container (A generic DIV turned into a Card)
  let resultItemEl = document.createElement("a");
  resultItemEl.href = link;
  resultItemEl.target = "_blank";
  // Stagger animation based on index
  resultItemEl.style.animationDelay = `${index * 50}ms`;
  resultItemEl.classList.add(
    "block",
    "bg-surface",
    "p-6",
    "rounded-xl",
    "border",
    "border-slate-100",
    "shadow-sm",
    "hover:shadow-xl",
    "hover:border-accent/30",
    "hover:-translate-y-1",
    "transition-all",
    "duration-300",
    "group",
    "animate-fade-in",
    "opacity-0",
    "h-full",
    "flex",
    "flex-col"
  );

  // 2. Title
  let titleEl = document.createElement("h3");
  titleEl.textContent = title;
  titleEl.classList.add(
    "text-xl",
    "font-bold",
    "text-text",
    "group-hover:text-accent",
    "transition-colors",
    "mb-2"
  );
  resultItemEl.appendChild(titleEl);

  // 3. Link Display (Clean URL)
  let urlEl = document.createElement("div");
  urlEl.classList.add(
    "text-xs",
    "text-subtext",
    "mb-4",
    "flex",
    "items-center",
    "gap-2",
    "font-mono"
  );
  urlEl.innerHTML = `<i class="fas fa-link text-[10px]"></i> wikipedia.org`;
  resultItemEl.appendChild(urlEl);

  // 4. Description
  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add(
    "text-subtext",
    "text-sm",
    "leading-relaxed",
    "line-clamp-3"
  );
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  // 5. "Read More" Arrow (Visual cue)
  let footerEl = document.createElement("div");
  footerEl.classList.add("mt-auto", "pt-4", "flex", "justify-end");
  footerEl.innerHTML = `<span class="text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">Read Article <i class="fas fa-arrow-right ml-1"></i></span>`;
  resultItemEl.appendChild(footerEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.add("hidden");

  // Empty State Handling
  if (searchResults.length === 0) {
    searchResultsEl.innerHTML = `
                    <div class="col-span-1 md:col-span-2 text-center text-subtext py-10">
                        <i class="far fa-sad-tear text-4xl mb-3 opacity-50"></i>
                        <p>No results found. Try a different keyword.</p>
                    </div>
                `;
    return;
  }

  for (let i = 0; i < searchResults.length; i++) {
    createAndAppendSearchResult(searchResults[i], i);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    let searchInput = searchInputEl.value;
    if (searchInput.trim() === "") return;

    spinnerEl.classList.remove("hidden");
    searchResultsEl.textContent = "";

    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = { method: "GET" };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      })
      .catch(function (err) {
        spinnerEl.classList.add("hidden");
        searchResultsEl.innerHTML = `<div class="text-red-500 text-center col-span-2">Failed to fetch results. Check internet connection.</div>`;
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
