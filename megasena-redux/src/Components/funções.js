// Funções de suporte
const gerador = () => {
  const qtd = 60;
  let num = parseInt((Math.random()*qtd).toFixed(0));
  while (num === 0){
    return num = parseInt((Math.random()*qtd).toFixed(0));
  }
  return num;
};

const geradorJogo = (limite) => {
  let jogo = [];
  let num = gerador();
  jogo.push(num);
  do {
    num = gerador();
    // eslint-disable-next-line no-loop-func
    while(!jogo.find((a) => a === num)){
      jogo.push(num);
    }
  }while (jogo.length < limite);
  return jogo.sort((a, b) => a - b);
}

console.log(geradorJogo(6));

// export default geradorJogo;