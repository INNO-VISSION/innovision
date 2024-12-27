document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

//toggle weeks
document.querySelectorAll('.toggle-weeks').forEach(button => {
    button.addEventListener('click', () => {
        const courseWeeks = button.parentElement.nextElementSibling;
        const icon = button.querySelector('i');
        if (courseWeeks.style.display === 'none') {
            courseWeeks.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            courseWeeks.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Selecting elements
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestions-list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Define searchable keywords and related page URLs
const keywords = [
    { keyword: "nptel", url: "nptel.html" },
    { keyword: "python", url: "python.html" },
    { keyword: "java", url: "java.html" },
    { keyword: "powerBI", url: "powerbi.html" },
    { keyword: "Web Development", url: "web.html" },
    { keyword: "sql", url: "sql.html" },
    { keyword: "Frontend Development", url: "frontend-development.html" },
    { keyword: "Backend Solutions", url: "backend-solutions.html" },
];

// Toggle search bar visibility (for mobile)
searchIcon.addEventListener('click', function () {
    searchBar.classList.toggle('active');
    searchInput.focus(); // Focus input when search bar becomes active
});

// Show suggestions while typing
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    if (searchTerm) {
        const matchedSuggestions = keywords.filter(item =>
            item.keyword.toLowerCase().includes(searchTerm)
        );

        if (matchedSuggestions.length > 0) {
            suggestionsList.style.display = 'block';
            matchedSuggestions.forEach(item => {
                const suggestionItem = document.createElement('li');
                suggestionItem.textContent = item.keyword;
                suggestionItem.classList.add('suggestion-item');
                suggestionsList.appendChild(suggestionItem);

                // Click on a suggestion to redirect to the related page
                suggestionItem.addEventListener('click', function () {
                    window.location.href = item.url; // Redirect to the related page
                });
            });
        } else {
            suggestionsList.style.display = 'none'; // Hide if no matches
        }
    } else {
        suggestionsList.style.display = 'none'; // Hide if input is empty
    }
});

// Perform the search on button click
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const matchedKeyword = keywords.find(item =>
        item.keyword.toLowerCase() === searchTerm
    );

    if (matchedKeyword) {
        window.location.href = matchedKeyword.url; // Redirect to the matched page
    } else {
        alert("No results found for the entered keyword."); // Optional feedback
    }

    // Hide suggestions after performing a search
    suggestionsList.style.display = 'none';
});

// Hide suggestions if the input is cleared
searchInput.addEventListener('input', function () {
    if (this.value === '') {
        suggestionsList.style.display = 'none';
    }
});


// nptel course
function showCourse(courseId) {
    const courses = document.querySelectorAll('.course-details');
    courses.forEach(course => course.classList.remove('active'));

    const selectedCourse = document.getElementById(courseId);
    if (selectedCourse) {
        selectedCourse.classList.add('active');
    }
}