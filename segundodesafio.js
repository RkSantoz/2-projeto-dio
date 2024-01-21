function classificarHeroi(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
  
    if (saldoVitorias < 100) {
      return "FERRO";
    } else if (saldoVitorias >= 110 && saldoVitorias <= 200) {
      return "BRONZE";
    } else if (saldoVitorias >= 201 && saldoVitorias <= 500) {
      return "PRATA";
    } else if (saldoVitorias >= 501 && saldoVitorias <= 800) {
      return "OURO";
    } else if (saldoVitorias >= 801 && saldoVitorias <= 900) {
      return "DIAMANTE";
    } else if (saldoVitorias >= 901 && saldoVitorias <= 1000) {
      return "LENDÁRIO";
    } else if (saldoVitorias >= 1001) {
      return "IMORTAL";
    }
  }
  
  let heroi = [
    ["OndaSuave", 200, 150], 
    ["TerraTremor", 21, 50],
    ["VentoVoraz", 6325, 6000],
    ["GeloGélido", 4990, 4500],
    ["RelâmpagoRápido", 5750, 5500],
    ["PlantaProtetora", 7285, 7100],
    ["MetalMagnético", 530, 470],
    ["LuzLuminosa", 874, 780],
    ["SombraSilenciosa", 9510, 9000],
    ["FogoFaísca", 1200, 1050]
  ]
  
  for (let i = 0; i < heroi.length; i++) {
    let nome = heroi[i][0];
    let vitorias = heroi[i][1];
    let derrotas = heroi[i][2];
    let nivel = classificarHeroi(vitorias, derrotas);
    console.log("O Herói " + nome + " tem de saldo de " + (vitorias - derrotas) + " está no nível de " + nivel);
  }
  