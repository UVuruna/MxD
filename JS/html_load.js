function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Greška pri učitavanju ${filePath}:`, error));
}

loadHTML("title", "../HTML/title.html");
loadHTML("top", "../HTML/top.html");
loadHTML("about_us", "../HTML/about_us.html");
loadHTML("our_approach", "../HTML/our_approach.html");
loadHTML("ai_chat", "../HTML/ai_chat.html");
loadHTML("scaling_business", "../HTML/scaling_business.html");
loadHTML("business_partners", "../HTML/business_partners.html");
loadHTML("our_services", "../HTML/our_services.html");
