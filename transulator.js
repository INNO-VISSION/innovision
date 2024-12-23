// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Default language
        includedLanguages: 'en,te,hi', // Supported languages
        autoDisplay: false // Disable automatic display
    }, 'google_translate_element');
}

// Translate based on user selection
function translateLanguage(language) {
    // Find the hidden Google Translate dropdown
    var selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
        selectField.value = language; // Set the selected language
        selectField.dispatchEvent(new Event("change")); // Trigger translation
    }
}
