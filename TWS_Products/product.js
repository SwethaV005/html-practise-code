document.addEventListener("DOMContentLoaded", function () {
    const searchLink = document.querySelector(".head nav a:last-child");
    const cards = document.querySelectorAll(".images .card");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search products...";
    searchInput.className = "search-box";
    searchInput.style.display = "none";
    searchLink.parentElement.insertBefore(searchInput, searchLink);

    
    searchLink.addEventListener("click", function (e) {
        e.preventDefault();
        const isHidden = searchInput.style.display === "none";
        searchInput.style.display = isHidden ? "inline-block" : "none";
        if (isHidden) searchInput.focus();
        else {
            searchInput.value = "";
            filterCards("");
        }
    });

    
    searchInput.addEventListener("input", function () {
        filterCards(searchInput.value.trim().toLowerCase());
    });

    function filterCards(query) {
        cards.forEach(function (card) {
            const name = card.querySelector("p").textContent.toLowerCase();
            card.style.display = name.includes(query) ? "" : "none";
        });
    }
});



