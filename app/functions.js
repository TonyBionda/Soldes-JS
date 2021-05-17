const getInput = () => {
    const returnedObject = {};
    let { value } = document.getElementById("userInput") || document.getElementsByTagName("textarea")[0];
    if (!value) printError("Pas de texte trouvé...");
    printConsole(`Le user input a été trouvé, son texte est :<br />${value.split("\n").join("<br />")}<br />`);
    returnedObject.userInput = value;
    let { value: value2 } = document.getElementById("budget");
    if (!value2) printError("Pas de texte trouvé...");
    returnedObject.budget = value2;
    printConsole(`Le budget a été trouvé. Il est de <strong>${value2}`);
    return returnedObject;
}

const getData = ({ userInput, budget }) => {
    let instructions = userInput.split('\n');
    //on vérifie que c'est de la bonne forme
    const regex = new RegExp(/^.+:\d+:\d+$/);
    instructions = instructions.filter(instr => regex.test(instr));
    if (instructions.length == 0)
        printError("Aucune instruction n'est de la forme Article:Prix:Quantité. Revoyez votre input!")
    printConsole("Les instructions de la forme Article:Prix:Quantité ont été récupérées.")
    const data = {
        budget,
        devis: undefined,
        instructions: instructions
    }
    const articles = instructions.map(text => text.split(':')).reduce((acc, [article, prix, quantite]) => {
        acc.push(new Article(article, prix, quantite));
        return acc;
    }, []);
    data.devis = new Devis(articles);
    console.log(data)
    return data;
}

const startFilter = (data) => {
    if (data.budget < data.devis.prixTotal) {
        const gap = data.devis.prixTotal - data.budget;
        data.devis.startFilter(gap);
    }
}