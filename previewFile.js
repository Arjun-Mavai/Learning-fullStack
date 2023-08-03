function previewFile() {
  const fileInput = document.getElementById("fileInput");
  const filePreview = document.getElementById("filePreview");

  // Get the selected file from the input
  const file = fileInput.files[0];

  if (file) {
    // Check if the file is an image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (event) => {
        // Create an <img> element and set the image source to the file data URL
        const imgElement = document.createElement("img");
        imgElement.src = event.target.result;
        imgElement.style.maxWidth = "200px"; // Set maximum width for the image

        // Clear the previous preview and add the new image preview
        filePreview.innerHTML = "";
        filePreview.appendChild(imgElement);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    } else {
      // For non-image files, show the file name and type
      const fileInfo = document.createElement("p");
      fileInfo.textContent = `File Name: ${file.name}, Type: ${file.type}`;

      // Clear the previous preview and add the file details
      filePreview.innerHTML = "";
      filePreview.appendChild(fileInfo);
    }
  } else {
    // If no file is selected, clear the preview
    filePreview.innerHTML = "";
  }
}

// Add an event listener to the file input to trigger the preview when a file is selected
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", previewFile);



<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6BE9R61EYL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BE9R61EYL');
</script>
