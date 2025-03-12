function height_calc(heightFrom, heightTo) {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Funkcija koja će proveriti uslov za medijski upit
    function checkMediaQuery() {
        if (!mediaQuery.matches) { // Samo za ekrane veće od 768px
            var checkExist = setInterval(function () {
                var whatWeDo1 = document.querySelector(heightFrom);
                var whatWeDo2 = document.querySelector(heightTo);

                if (whatWeDo1 && whatWeDo2 && whatWeDo1.offsetHeight > 0) {
                    clearInterval(checkExist); // Zaustavlja proveru kada pronađe elemente

                    var height = whatWeDo1.offsetHeight;
                    whatWeDo2.style.height = height + "px";
                    console.log("Visina postavljena na:", height);
                } else {
                    console.log("Čekam da se pojave elementi:", heightFrom, heightTo);
                }
            }, 100); // Proverava na svakih 100ms dok ne pronađe elemente
        } else {
            console.log("Medijski upit je aktivan, kod se ne izvršava.");
        }
    }

    checkMediaQuery();
    mediaQuery.addListener(checkMediaQuery);
}

// Pozivi funkcije
height_calc("#what-we-do-1", "#what-we-do-2");
height_calc("#who-we-are-1", "#who-we-are-2");
