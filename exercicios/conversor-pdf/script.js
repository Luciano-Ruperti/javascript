const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {

    // Conteudo do PDF
    const caixaTexto = document.querySelector("#caixa-texto").value;

    // Configuração do arquivo final de PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    };

    // Gerar e baixar o PDF
    html2pdf().set(options).from(caixaTexto).save();
    document.querySelector("#caixa-texto").value = "";
    document.querySelector("#caixa-texto").focus();
    

});