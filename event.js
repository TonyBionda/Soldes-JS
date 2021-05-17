const eventTriggered = () => {
    clearConsole();
    console.time();
    let userInput = getInput();
    startProcess(userInput);
    console.timeEnd();
}

const startProcess = (userInput) => {
    const data = getData(userInput)
    startFilter(data);
    finalProcess(data);
}

const finalProcess = ({ devis }) => {
    printConsole('<strong>Voici ce que vous pouvez payer:', devis.articles.map(({ nom, quantite, prix }) => `${nom} - Quantité: ${quantite} pour un prix de ${prix}`).join('<br />'))
    printConsole('<strong>Voici ce qui a été enlevé:', [...devis.articlesEnleves].map(([{ nom }, quantite]) => `${quantite} ${nom}`).join('<br />'))
}



