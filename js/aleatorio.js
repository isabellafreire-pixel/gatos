const nomes = ["o gato preto e o gato branco", "a dupla de gatinhos", "o felino preto e o seu irmão branco", "os gatinhos curiosos"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
