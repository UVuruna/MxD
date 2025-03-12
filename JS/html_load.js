function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Greška pri učitavanju ${filePath}:`, error));
}

loadHTML("title", "../HTML/title.html");
loadHTML("top", "../HTML/top.html");