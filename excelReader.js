const XLSX = require("xlsx");

function lerCelula(planilha, linha, coluna) {
  const workbook = XLSX.readFile(planilha);
  const primeiraPlanilha = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[primeiraPlanilha];
  const celula = worksheet[`${coluna}${linha}`];
  return celula ? celula.v : null;
}

module.exports = {
  lerCelula,
};
