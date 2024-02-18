// Dati degli articoli
const articles = [
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        author: "Diana Rossi",
        date: "2023-01-10",
        description: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.",
        image: "../asset/img/rubber-duck.jpg",
        type: ["geo", "tech"],
    },
    {
        title: "Viaggio culinario: alla ricerca dei sapori perduti",
        author: "Marco Bianchi",
        date: "2023-02-20",
        description: "Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.",
        image: "../asset/img/kitchen-food.jpg",
        type: ["cucina"],
    },
    {
        title: "Esplorando le profondità marine: il mistero degli abissi",
        author: "Alessandra Marino",
        date: "2023-03-10",
        description: "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriose e inesplorate.",
        image: "../asset/img/deep-sea.jpg",
        type: ["viaggi"],
    },
    {
        title: "Arte moderna: oltre i confini convenzionali",
        author: "Gabriele Neri",
        date: "2023-04-05",
        description: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        image: "../asset/img/modern-art.jpg",
        type: ["arte", "tech"],
    },
];

// Funzione principale per filtrare e visualizzare gli articoli
function ciclo() {
    const type = document.getElementById("form-tags").value;
    const checkbox = document.getElementById("newsSaved");

    let filteredArticles = articles;

    // Se la checkbox è selezionata, mostra solo gli articoli salvati
    if (checkbox.checked) {
        filteredArticles = filteredArticles.filter(article => article.saved);
    } else {
        // Altrimenti, filtra gli articoli in base al tipo selezionato
        if (type !== "Tutti i tag") {
            filteredArticles = filteredArticles.filter(article => article.type.includes(type));
        }
    }

    // Visualizza gli articoli filtrati
    displayArticles(filteredArticles);
}

// Funzione per visualizzare gli articoli
function displayArticles(articles) {
    const container = document.getElementById("card-articles");
    container.innerHTML = ""; // Cancella i contenuti precedenti

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("articles");
        // articleElement.style.width = "100%";

        // Costruisci il contenuto dell'articolo
        const content = `

       
  
        <h2 class="">${article.title}</h2>
        <h3 class="">pubblicato da ${article.author}</h3>
        <p class="">in data ${article.date}</p>
        <p class="">${article.description}</p>
        <img src="./images/${article.image}" class="" alt="${article.image}">
       

        `;

        articleElement.innerHTML = content;
        container.appendChild(articleElement);
    });
}

// Inizializza il filtro all'avvio della pagina
ciclo();

