class Article {
    constructor(nom, prix, quantite) {
        this.nom = nom;
        this.quantite = parseInt(quantite);
        this.prix = parseFloat(prix);
    }
}

class Devis {
    constructor(articles) {
        this.articles = articles.sort(({ prix: a }, { prix: b }) => b - a);
        this.prixTotal = articles.reduce((acc, { prix, quantite }) => acc + prix * quantite, 0);
        this.articlesEnleves = new Map();
    }
    enleverArticle(article, nombre) {
        article.quantite -= nombre;
        if (article.quantite <= 0)
            this.articles = this.articles.filter(testArticle => testArticle != article);
        console.log(article)
    }
    startFilter(gap) {
        const article = this.articles[0];
        let { prix, quantite } = article;
        quantite = Math.min(Math.ceil(gap / prix), quantite);
        this.enleverArticle(article, quantite);
        this.articlesEnleves.set(article, quantite);
        if (gap - (prix * quantite) > 0)
            this.startFilter(gap - (prix * quantite))
        else
            this.prixTotal = this.articles.reduce((acc, { prix, quantite }) => acc + prix * quantite, 0);
    }
}