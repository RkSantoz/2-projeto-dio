let heroi = [
  ["OndaSuave", 200], 
  ["TerraTremor", 2100],
  ["VentoVoraz", 6325],
  ["GeloGélido", 4990],
  ["RelâmpagoRápido", 5750],
  ["PlantaProtetora", 7285],
  ["MetalMagnético", 1530],
  ["LuzLuminosa", 8740],
  ["SombraSilenciosa", 9510],
  ["FogoFaísca", 12000]
]

function classificarHeroi(xp) {
  if (xp < 1000) {
    return "FERRO";
  } else if (xp >= 1001 && xp <= 2500) {
    return "BRONZE";
  } else if (xp >= 2501 && xp <= 5000) {
    return "PRATA";
  } else if (xp >= 5001 && xp <= 6000) {
    return "OURO";
  } else if (xp >= 6001 && xp <= 7000) {
    return "PLATINA";
  } else if (xp >= 7001 && xp <= 8000) {
    return "DIAMANTE";
  } else if (xp >= 8001 && xp <= 9000) {
    return "ASCENDENTE";
  } else if (xp >= 9001 && xp <= 10000) {
    return "RADIANTE";
  } else if (xp >= 10001) {
    return "IMORTAL";
  }
}


  let nome = heroi[5][0]
  let xp = heroi[5][1]
  let classificacao = classificarHeroi(xp);
  console.log("O herói : ", nome, "Sua Experiência: ", xp, "Classificação: ", classificacao)