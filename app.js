document.addEventListener("DOMContentLoaded", function() {
    const link = "https://type.fit/api/quotes";

    const quoteImage = document.getElementById("quoteImage"); // Select the image element

    if (quoteImage) {
        quoteImage.addEventListener("click", fetchQuote); // Attach click event listener to the image
    } else {
        console.log("Image with id 'quoteImage' not found");
    }

    function fetchQuote() {
        fetch(link)
            .then(response => response.json())
            .then(data => {
                const randomQuoteIndex = Math.floor(Math.random() * data.length);
                const quoteElement = document.getElementById("quote"); // Get the quote element
                if (quoteElement) {
                    const quoteText = data[randomQuoteIndex].text;
                    quoteElement.innerHTML = `"${quoteText}"`; // Add quotes around the text
                    console.log(data[randomQuoteIndex]);
                } else {
                    console.log("Element with id 'quote' not found");
                }
            });
    }

    fetchQuote(); // Optional: Fetch a quote on page load
    console.log("hello");
});
