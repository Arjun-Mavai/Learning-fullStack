fetch("config.json")
  .then((response) => response.json())
  .then((config) => {
    const themeLink = document.getElementById("theme");

    // Apply the theme from the configuration file
    themeLink.href = config.theme === "dark" ? "dark.css" : "light.css";

    // Add event listeners to update the theme based on user input
    const darkBtn = document.getElementById("darkBtn");
    const lightBtn = document.getElementById("lightBtn");

    darkBtn.addEventListener("click", () => {
      themeLink.href = "dark.css";
      config.theme = "dark";
    });

    lightBtn.addEventListener("click", () => {
      themeLink.href = "light.css";
      config.theme = "light";
    });
  });
