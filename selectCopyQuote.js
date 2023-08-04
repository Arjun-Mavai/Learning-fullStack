const copyButton = document.getElementById("copyButton");
const textAreaInput = document.getElementById("textAreaInput");
const selectedTextInfo = document.getElementById("selectedTextInfo");

// Array of random quotes
const quotes = [
     
        "जिंदगी एक सफर है, इसे खुशियों से भरो और अपने इरादों को पाने के लिए कठिनाइयों का सामना करो।",
        "सफलता का रहस्य यही है कि आप खुद को पहचानें और अपने लक्ष्य की ओर बढ़ें।",
        "जिंदगी में सफलता के लिए समय के साथ सामंजस्य रखें, सब्र रखें, और मेहनत करें।",
        "असली समर्थन वो होता है जब लोग आपके सपनों को पूरा करने में आपकी मदद करते हैं।",
        "खुद को वो बनाएं जो आप बनना चाहते हैं, न की दुनिया कहती है।",
        "जीवन में बदलाव लाने के लिए आपको सोच को बदलना होगा।",
        "सपने वो नहीं जो हम सोते वक्त देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।",
        "समय कभी रुकता नहीं है, इसलिए आपको भी नहीं रुकना चाहिए।",
        "आपकी सोच आपकी शक्ति है, इसे सकारात्मक बनाएं और अपने लक्ष्य की ओर बढ़ें।",
        "जीवन एक अनमोल उपहार है, इसे खुशियों से भरकर जियें और दूसरों के साथ भी इसे बांटें।",
      
      


  "Life is what happens when you're busy making other plans.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The only way to do great work is to love what you do.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "The best way to predict the future is to create it. - Peter Drucker",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The secret of success is to know something nobody else knows. - Aristotle Onassis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

copyButton.addEventListener("click", () => {
  // Select the text inside the textarea field
  textAreaInput.select();

  try {
    // Copy the selected text to the clipboard
    const successful = document.execCommand('copy');
    if (successful) {
      // Get the selected text and create the paragraph content
      const selectedText = window.getSelection().toString();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const paragraphContent = `Hello ${selectedText}! Welcome to this site.You are a wonderful human being. Here's a randomly generated quote for you:"${randomQuote}"`;

      // Set the paragraph content and show it below the textarea
      
      // selectedTextInfo.textContent = paragraphContent; // because i've added the div with id paragraph wrapper in the html here giving value through inner html no need to textcontent line
      selectedTextInfo.style.display = "inline";
      selectedTextInfo.style.fontFamily = "Times New Roman";
      

      
      document.getElementById("paragraph-wrapper").innerHTML = paragraphContent;

      console.log("Copied to clipboard!");
    } else {
      console.log("Unable to copy");
    }
  } catch (err) {
    console.error('Unable to copy text:', err);
  }
});
