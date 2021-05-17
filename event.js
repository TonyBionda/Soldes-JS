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
    printConsole('<strong>Voici ce que vous pouvez payer:', data.devis.articles.map(({ nom, quantite, prix }) => `${nom} - Quantité: ${quantite} pour un prix de ${prix}`).join('<br />'))
    printConsole('<strong>Voici ce qui a été enlevé:', [...data.devis.articlesEnleves].map(([{nom}, quantite]) => `${nom} - Quantité: ${quantite}`).join('<br />'))
}



