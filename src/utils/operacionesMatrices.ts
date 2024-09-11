// src/utils/operacionesMatrices.ts


type Matriz = number[][];


export const sumarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  return matriz1.map((fila, i) =>
    fila.map((valor, j) => valor + matriz2[i][j])
  );
};


export const restarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  return matriz1.map((fila, i) =>
    fila.map((valor, j) => valor - matriz2[i][j])
  );
};


export const multiplicarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  return matriz1.map((fila, i) =>
    fila.map((valor, j) => valor * matriz2[i][j])
  );
};


export const dividirMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  return matriz1.map((fila, i) =>
    fila.map((valor, j) => valor / matriz2[i][j])
  );
};
