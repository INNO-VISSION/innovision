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

//nptel script
const courseWeeks = {
    iot: [
        { week: 0, pdf: 'https://ontime-uptime.notion.site/Prompt-for-Resume-158714fa91b98049bddce40faacb204b' },
        // { week: 1, pdf: 'iot_week1.pdf' },
        // { week: 2, pdf: 'iot_week2.pdf' },
        // { week: 3, pdf: 'iot_week3.pdf' },
        // { week: 4, pdf: 'iot_week4.pdf' },
        // { week: 5, pdf: 'iot_week5.pdf' },
        // { week: 6, pdf: 'iot_week6.pdf' },
        // { week: 7, pdf: 'iot_week7.pdf' },
        // { week: 8, pdf: 'iot_week8.pdf' },
        // { week: 9, pdf: 'iot_week9.pdf' },
        // { week: 10, pdf: 'iot_week10.pdf' },
        // { week: 11, pdf: 'iot_week11.pdf' },
    ],
    java: [
        { week: 0, pdf: '' },
        // { week: 1, pdf: 'python pdf\week1.PDF' },
        // { week: 2, pdf: 'java_week2.pdf' },
        // { week: 3, pdf: 'java_week3.pdf' },
        // { week: 4, pdf: 'java_week4.pdf' },
        // { week: 5, pdf: 'java_week5.pdf' },
        // { week: 6, pdf: 'java_week6.pdf' },
        // { week: 7, pdf: 'java_week7.pdf' },
        // { week: 8, pdf: 'java_week8.pdf' },
        // { week: 9, pdf: 'java_week9.pdf' },
        // { week: 10, pdf: 'java_week10.pdf' },
        // { week: 11, pdf: 'java_week11.pdf' },
    ],
    python: [
        { week: 0, pdf: 'python_intro.pdf' },
        // { week: 1, pdf: 'python_week1.pdf' },
        // { week: 2, pdf: 'python_week2.pdf' },
        // { week: 3, pdf: 'python_week3.pdf' },
        // { week: 4, pdf: 'python_week4.pdf' },
        // { week: 5, pdf: 'python_week5.pdf' },
        // { week: 6, pdf: 'python_week6.pdf' },
        // { week: 7, pdf: 'python_week7.pdf' },
        // { week: 8, pdf: 'python_week8.pdf' },
        // { week: 9, pdf: 'python_week9.pdf' },
        // { week: 10, pdf: 'python_week10.pdf' },
        // { week: 11, pdf: 'python_week11.pdf' },
    ],
   
    c: [
        { week: 0, pdf: 'c_intro.pdf' },
        // { week: 1, pdf: 'c_week1.pdf' },
        // { week: 2, pdf: 'c_week2.pdf' },
        // { week: 3, pdf: 'c_week3.pdf' },
        // { week: 4, pdf: 'c_week4.pdf' },
        // { week: 5, pdf: 'c_week5.pdf' },
        // { week: 6, pdf: 'c_week6.pdf' },
        // { week: 7, pdf: 'c_week7.pdf' },
        // { week: 8, pdf: 'c_week8.pdf' },
        // { week: 9, pdf: 'c_week9.pdf' },
        // { week: 10, pdf: 'c_week10.pdf' },
        // { week: 11, pdf: 'c_week11.pdf' },
    ],
    oo: [
        { week: 0, pdf: 'oo_intro.pdf' },
        // { week: 1, pdf: 'oo_week1.pdf' },
        // { week: 2, pdf: 'oo_week2.pdf' },
        // { week: 3, pdf: 'oo_week3.pdf' },
        // { week: 4, pdf: 'oo_week4.pdf' },
        // { week: 5, pdf: 'oo_week5.pdf' },
        // { week: 6, pdf: 'oo_week6.pdf' },
        // { week: 7, pdf: 'oo_week7.pdf' },
        // { week: 8, pdf: 'oo_week8.pdf' },
        // { week: 9, pdf: 'oo_week9.pdf' },
        // { week: 10, pdf: 'oo_week10.pdf' },
        // { week: 11, pdf: 'oo_week11.pdf' },
    ],
    sql: [
        { week: 0, pdf: 'sql_intro.pdf' },
        // { week: 1, pdf: 'sql_week1.pdf' },
        // { week: 2, pdf: 'sql_week2.pdf' },
        // { week: 3, pdf: 'sql_week3.pdf' },
        // { week: 4, pdf: 'sql_week4.pdf' },
        // { week: 5, pdf: 'sql_week5.pdf' },
        // { week: 6, pdf: 'sql_week6.pdf' },
        // { week: 7, pdf: 'sql_week7.pdf' },
        // { week: 8, pdf: 'sql_week8.pdf' },
        // { week: 9, pdf: 'sql_week9.pdf' },
        // { week: 10, pdf: 'sql_week10.pdf' },
        // { week: 11, pdf: 'sql_week11.pdf' },
    ]
};

const courseLinks = document.querySelectorAll('.sidebar a');
const weekList = document.getElementById('week-list');
const weekListUl = weekList.querySelector('ul');
const pdfContainer = document.getElementById('pdf-container');
const pdfFrame = document.getElementById('pdf-frame');

// Display week list dynamically based on the selected course
courseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const course = link.getAttribute('data-course');
        const weeks = courseWeeks[course];

        // Clear previous weeks
        weekListUl.innerHTML = '';

        // Populate new weeks
        weeks.forEach(({ week, pdf }) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = `Week ${week}`;
            a.setAttribute('data-pdf', pdf);
            li.appendChild(a);
            weekListUl.appendChild(li);
        });

        weekList.style.display = 'block';
        pdfContainer.style.display = 'none';
    });
});

// Load the selected week's PDF
weekListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const pdf = e.target.getAttribute('data-pdf');
        pdfFrame.src = pdf; // Load the selected PDF
        pdfContainer.style.display = 'block';
    }
});
