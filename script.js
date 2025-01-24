document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click event from bubbling up
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Close the menu when clicking anywhere outside of it
    document.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Prevent menu from closing when clicking inside it
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close the menu when navigating to a new page
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            }
        });
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

// Search bar functionality
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
    { keyword: "powerbi", url: "powerbi.html" },
    { keyword: "web development", url: "web.html" },
    { keyword: "sql", url: "sql.html" },
    { keyword: "frontend development", url: "frontend-development.html" },
    { keyword: "backend solutions", url: "backend-solutions.html" },
].map(item => ({ keyword: item.keyword.toLowerCase(), url: item.url }));

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
    performSearch();
});

// Perform the search on Enter key press
searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Hide suggestions if the input is cleared
searchInput.addEventListener('input', function () {
    if (this.value === '') {
        suggestionsList.style.display = 'none';
    }
});

function performSearch() {
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
}

// Hide search bar when clicking outside of it
document.addEventListener('click', function (e) {
    if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
        searchBar.classList.remove('active');
    }
});
// Perform the search on Enter key press in the search input
if (window.innerWidth <= 768) { // Check if the viewport width is 768px or less (mobile view)
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

//nptel script

const courseWeeks = {
    iot1:[
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/Internet%20Of%20Things/week%2001/' },
    { week: 2, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/Internet%20Of%20Things/week%2002/' },

    ],
    iot: [
        // { week: 0, pdf: 'https://inno-vission.github.io/nptel/' },
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-//Introduction%20To%20Industry%204.0%20And%20Industrial%20Internet%20Of%20Things/week%2001/' },
    // { week: 2, pdf: 'iot/iot_week2.html' },
    // { week: 3, pdf: 'iot/iot_week3.html' },
    // { week: 4, pdf: 'iot/iot_week4.html' },
    // { week: 5, pdf: 'iot/iot_week5.html' },
    // { week: 6, pdf: 'iot/iot_week6.html' },
    // { week: 7, pdf: 'iot/iot_week7.html' },
    // { week: 8, pdf: 'iot/iot_week8.html' },
    // { week: 9, pdf: 'iot/iot_week9.html' },
    // { week: 10, pdf: 'iot/iot_week10.html' },
    // { week: 11, pdf: 'iot/iot_week11.html' },
    // { week: 12, pdf: 'iot/iot_week12.html' }
    ],
    java: [
        // { week: 0, pdf: 'java/java_week0.html' },
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-//PROGRAMMING%20IN%20JAVA/week%2001/' },
    { week: 2, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/PROGRAMMING%20IN%20JAVA/week%2002/' },
    // { week: 3, pdf: 'java/java_week3.html' },
    // { week: 4, pdf: 'java/java_week4.html' },
    // { week: 5, pdf: 'java/java_week5.html' },
    // { week: 6, pdf: 'java/java_week6.html' },
    // { week: 7, pdf: 'java/java_week7.html' },
    // { week: 8, pdf: 'java/java_week8.html' },
    // { week: 9, pdf: 'java/java_week9.html' },
    // { week: 10, pdf: 'java/java_week10.html' },
    // { week: 11, pdf: 'java/java_week11.html' },
    // { week: 12, pdf: 'java/java_week12.html' }

        
    ],
    python: [
        // { week: 0, pdf: '' },
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/joy%20of%20computing%20using%20python/week%2001/' },
    // { week: 2, pdf: 'python/py_week2.html' },
    // { week: 3, pdf: 'python/py_week3.html' },
    // { week: 4, pdf: 'python/py_week4.html' },
    // { week: 5, pdf: 'python/py_week5.html' },
    // { week: 6, pdf: 'python/py_week6.html' },
    // { week: 7, pdf: 'python/py_week7.html' },
    // { week: 8, pdf: 'python/py_week8.html' },
    // { week: 9, pdf: 'python/py_week9.html' },
    // { week: 10, pdf: 'python/py_week10.html' },
    // { week: 11, pdf: 'python/py_week11.html' },
    // { week: 12, pdf: 'python/py_week12.html' }

    ], 
   
    c: [
        { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-//Problem%20Solving%20Through%20Programming%20In%20C/week%2001/' },
    // { week: 2, pdf: 'c/c_week2.html' },
    // { week: 3, pdf: 'c/c_week3.html' },
    // { week: 4, pdf: 'c/c_week4.html' },
    // { week: 5, pdf: 'c/c_week5.html' },
    // { week: 6, pdf: 'c/c_week6.html' },
    // { week: 7, pdf: 'c/c_week7.html' },
    // { week: 8, pdf: 'c/c_week8.html' },
    // { week: 9, pdf: 'c/c_week9.html' },
    // { week: 10, pdf: 'c/c_week10.html' },
    // { week: 11, pdf: 'c/c_week11.html' },
    // { week: 12, pdf: 'c/c_week12.html' }


    ],
    oo: [
        { week: 0, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-//Fundamental%20of%20Object%20Oriented%20Programming/week%2001/' },
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/Fundamental%20of%20Object%20Oriented%20Programming/week%202/' },
    // { week: 2, pdf: 'oop/oop_week2.html' },
    // { week: 3, pdf: 'oop/oop_week3.html' },
    // { week: 4, pdf: 'oop/oop_week4.html' },
    // { week: 5, pdf: 'oop/oop_week5.html' },
    // { week: 6, pdf: 'oop/oop_week6.html' },
    // { week: 7, pdf: 'oop/oop_week7.html' },
    // { week: 8, pdf: 'oop/oop_week8.html' },
    // { week: 9, pdf: 'oop/oop_week9.html' },
    // { week: 10, pdf: 'oop/oop_week10.html' },
    // { week: 11, pdf: 'oop/oop_week11.html' },
    // { week: 12, pdf: 'oop/oop_week12.html' }

    ],
    sql: [
        // { week: 0, pdf: 'db/sql_week0.html' },
    { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-//Introduction%20To%20Database/week%2001/' },
        
    // { week: 2, pdf: 'db/sql_week2.html' },

    // { week: 3, pdf: 'db/sql_week3.html' },
    // { week: 4, pdf: 'db/sql_week4.html' },
    // { week: 5, pdf: 'db/sql_week5.html' },
    // { week: 6, pdf: 'db/sql_week6.html' },
    // { week: 7, pdf: 'db/sql_week7.html' },
    // { week: 8, pdf: 'db/sql_week8.html' },
    // { week: 9, pdf: 'db/sql_week9.html' },
    // { week: 10, pdf: 'db/sql_week10.html' },
    // { week: 11, pdf: 'db/sql_week11.html' },
    // { week: 12, pdf: 'db/sql_week12.html' }

       
    ],
    python_pro: [
        { week: 0, pdf: 'python_pro.pdf' },
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
    ],
    java_pro: [
        // { week: 0, pdf: '' },
        { week: 1, pdf: 'https://inno-vission.github.io/NPTEL-ANSWERS-2025-JAN-APR-/java%20programming%20assignment/week01/' },
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
    ],
  
    c_pro: [
        { week: 0, pdf: 'c_pro.pdf' },
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
const weekListUl = document.querySelector('#week-list ul');
const pdfContainer = document.getElementById('pdf-container');
const pdfFrame = document.getElementById('pdf-frame');

// Function to populate week list
function populateWeekList(course) {
    const weeks = courseWeeks[course];
    weekListUl.innerHTML = ''; // Clear previous weeks

    weeks.forEach(({ week, pdf }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = `Week ${week}`;
        a.setAttribute('data-pdf', pdf);
        li.appendChild(a);
        weekListUl.appendChild(li);
    });

    document.getElementById('week-list').style.display = 'block';
    pdfContainer.style.display = 'none';
    weekListUl.style.maxHeight = '400px'; // Adjust the height as needed
    weekListUl.style.overflowY = 'auto';
}

// Event listener for course links
courseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        populateWeekList(link.getAttribute('data-course'));
    });
});

// Event listener for week list
weekListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        pdfFrame.src = e.target.getAttribute('data-pdf');
        pdfContainer.style.display = 'block';
    }
});
