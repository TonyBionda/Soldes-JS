const clearCanvas = (ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawTask = (data, ctx) => {
    const { height, width } = canvas;
    data.matrix.forEach((tableau, rowIndex) => {
        tableau.forEach((tache, columnIndex) => {
            if (tache != null)
                tache.draw(ctx, width / data.matrix[rowIndex].length * columnIndex, height / transposeMatrix(data.matrix)[0].length * rowIndex)
        })
    });
}

const drawFleche = (data, ctx) => {
    data.fleches.forEach((fleche) => fleche.draw(ctx));
}