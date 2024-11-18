// JavaScript for Research Database Back Page

// Function to handle form submission for search
document.querySelector('.search-bar form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const query = document.querySelector('input[name="query"]').value;
    if (query.trim()) {
        console.log(`Searching for: ${query}`);
        performSearch(query);
    } else {
        alert("Please enter a search term.");
    }
});

// Function to simulate search and display results
function performSearch(query) {
    document.querySelector('.results').innerHTML = `<h2>Search Results</h2><p>Showing results for <strong>"${query}"</strong></p>`;
    const results = [
        { title: "Title of Research Article 1", author: "John Doe", year: 2023 },
        { title: "Title of Research Article 2", author: "Alice Brown", year: 2022 },
    ];
    results.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'result-item';
        articleElement.innerHTML = `
            <h3><a href="#">${article.title}</a></h3>
            <p class="author">Author(s): ${article.author}</p>
            <p class="publication">Published in ${article.year}</p>
            <div class="result-actions">
                <button onclick="viewArticle()">View Full Text</button>
                <button onclick="addToFavorites('${article.title}')">Add to Favorites</button>
                <button onclick="exportCitation('${article.title}', '${article.author}', ${article.year})">Export Citation</button>
            </div>
        `;
        document.querySelector('.results').appendChild(articleElement);
    });
}

// Pagination Functionality
document.querySelectorAll('.pagination a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        if (link.classList.contains('prev')) {
            loadPreviousPage();
        } else if (link.classList.contains('next')) {
            loadNextPage();
        }
    });
});

function loadPreviousPage() {
    console.log("Loading previous page...");
}

function loadNextPage() {
    console.log("Loading next page...");
}

// Function to view article details
function viewArticle() {
    const articleDetails = document.querySelector('.article-details');
    articleDetails.style.display = 'block';
    articleDetails.innerHTML = `
        <h2>Sample Article Title</h2>
        <p class="author">Author(s): Sample Author</p>
        <p class="publication">Published in Sample Journal, 2023</p>
        <h3>Abstract</h3>
        <p>This is a sample abstract to preview the content of the article...</p>
        <h3>Full Text</h3>
        <p>Full text of the article will appear here...</p>
        <div class="article-actions">
            <button onclick="exportCitation()">Export Citation</button>
            <button onclick="downloadPDF()">Download PDF</button>
            <button onclick="addToFavorites('Sample Article Title')">Add to Favorites</button>
        </div>
    `;
}

// Function to add an article to favorites
function addToFavorites(articleTitle) {
    console.log(`Adding "${articleTitle}" to favorites.`);
    alert(`"${articleTitle}" has been added to your favorites.`);
}

// Function to export citation for an article
function exportCitation(title, author, year) {
    const citation = `${author}. (${year}). ${title}. Retrieved from Research Database.`;
    console.log(`Exporting citation: ${citation}`);
    alert(`Citation exported:\n\n${citation}`);
}

// Function to download article as PDF (simulated)
function downloadPDF() {
    alert("Download started for PDF version of the article.");
}

// Filter application logic
document.querySelector('.filters button').addEventListener('click', function() {
    const subject = document.querySelector('select[name="subject"]').value;
    const startDate = document.querySelector('input[name="start_date"]').value;
    const endDate = document.querySelector('input[name="end_date"]').value;
    console.log(`Applying filters: Subject - ${subject}, Date Range - ${startDate} to ${endDate}`);
    alert(`Filters applied:\nSubject: ${subject}\nDate Range: ${startDate} to ${endDate}`);
});

// Placeholder to highlight 'Active' page in pagination (for dynamic page setup)
function setActivePage(pageNumber) {
    document.querySelectorAll('.pagination a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.pagination a[data-page="${pageNumber}"]`).classList.add('active');
}

// Event listener for 'View Full Text' buttons
document.querySelectorAll('.result-actions button').forEach(button => {
    if (button.textContent.includes("View Full Text")) {
        button.addEventListener('click', function() {
            viewArticle();
        });
    }
});

// Example Modal Popup for Citation (if needed)
function openCitationModal(citation) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Citation</h2>
            <p>${citation}</p>
            <button onclick="copyToClipboard('${citation}')">Copy to Clipboard</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Function to close the modal popup
function closeModal() {
    document.querySelector('.modal').remove();
}

// Function to copy citation to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Citation copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}
// Sign out button
document.querySelector('.signout').addEventListener('click', function() {
    window.location.href = 'index.html';
});
