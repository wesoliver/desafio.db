class Forca {
  palavra = ['_','_','_','_','_','_', '_']
  letrasChutadas = []
  vidas = 6
  
constructor (nome){
  this.nome = nome
}

verificaLetraChutada(letra) {
  let contador = 0
  for (let i = 0; i < this.nome.length; i++) {
    if (letra === this.nome [i]) {
      contador++
      this.palavra.splice (i, 1, letra)
    }
  }
  return contador
}

  chutar(letra) {
    this.letrasChutadas.push(letra)
    const letrasQueVoceAcertou = this.verificaLetraChutada(letra)
    if (letrasQueVoceAcertou === 0)  {
      this.vidas--
    }
  }

  buscarEstado() {
  if (this.palavra.join('').includes (this.nome)) {
   let resultado = 'ganhou' 
    return resultado
  }  
    let resultado = this.vidas <= 0 ? 'perdeu' : 'aguardando chute'        
    return resultado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra.join(' ') // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
