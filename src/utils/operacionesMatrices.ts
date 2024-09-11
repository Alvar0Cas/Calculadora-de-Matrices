// src/utils/operacionesMatrices.ts

// Tipo para representar una matriz, que es un array de arrays de números
type Matriz = number[][];

// Función para sumar dos matrices
export const sumarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  // Mapea cada fila de la primera matriz
  return matriz1.map((fila, i) =>
    // Mapea cada valor en la fila
    fila.map((valor, j) => valor + matriz2[i][j]) // Suma el valor correspondiente de la segunda matriz
  );
};

// Función para restar la segunda matriz de la primera
export const restarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  // Mapea cada fila de la primera matriz
  return matriz1.map((fila, i) =>
    // Mapea cada valor en la fila
    fila.map((valor, j) => valor - matriz2[i][j]) // Resta el valor correspondiente de la segunda matriz
  );
};

// Función para multiplicar dos matrices elemento por elemento
export const multiplicarMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  // Mapea cada fila de la primera matriz
  return matriz1.map((fila, i) =>
    // Mapea cada valor en la fila
    fila.map((valor, j) => valor * matriz2[i][j]) // Multiplica el valor correspondiente de la segunda matriz
  );
};

// Función para dividir la primera matriz por la segunda matriz elemento por elemento
export const dividirMatrices = (matriz1: Matriz, matriz2: Matriz): Matriz => {
  // Mapea cada fila de la primera matriz
  return matriz1.map((fila, i) =>
    // Mapea cada valor en la fila
    fila.map((valor, j) => valor / matriz2[i][j]) // Divide el valor correspondiente de la segunda matriz
  );
};
