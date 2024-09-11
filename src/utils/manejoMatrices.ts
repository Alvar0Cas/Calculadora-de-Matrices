// src/utils/manejoMatrices.ts

// Tipo para representar una matriz, que es un array de arrays de números
type Matriz = number[][];

// Función para agregar una fila y una columna a ambas matrices
export const agregarFilaColumnaAmbas = (
  matriz1: Matriz,
  matriz2: Matriz,
  setMatriz1: React.Dispatch<React.SetStateAction<Matriz>>,
  setMatriz2: React.Dispatch<React.SetStateAction<Matriz>>
) => {
  // Verifica si la matriz tiene al menos 3 filas o 3 columnas
  // y muestra una alerta si se intenta agregar más filas o columnas
  if (matriz1.length >= 3 || matriz1[0].length >= 3) {
    alert("No se pueden agregar más de 3 filas y 3 columnas!!!");
    return;
  }

  // Crea una nueva matriz para matriz1 añadiendo una columna de ceros
  const nuevaMatriz1 = matriz1.map(fila => [...fila, 0]);
  // Añade una fila de ceros a la nueva matriz
  nuevaMatriz1.push(Array(nuevaMatriz1[0].length).fill(0));
  // Actualiza el estado con la nueva matriz
  setMatriz1(nuevaMatriz1);

  // Crea una nueva matriz para matriz2 añadiendo una columna de ceros
  const nuevaMatriz2 = matriz2.map(fila => [...fila, 0]);
  // Añade una fila de ceros a la nueva matriz
  nuevaMatriz2.push(Array(nuevaMatriz2[0].length).fill(0));
  // Actualiza el estado con la nueva matriz
  setMatriz2(nuevaMatriz2);
};

// Función para reducir el tamaño de ambas matrices eliminando la última fila y columna
export const reducirFilaColumnaAmbas = (
  matriz1: Matriz,
  matriz2: Matriz,
  setMatriz1: React.Dispatch<React.SetStateAction<Matriz>>,
  setMatriz2: React.Dispatch<React.SetStateAction<Matriz>>
) => {
  // Verifica si la matriz tiene al menos 2 filas y 2 columnas
  // y muestra una alerta si se intenta reducir la matriz a menos de 1 fila y 1 columna
  if (matriz1.length <= 1 || matriz1[0].length <= 1) {
    alert("Debe haber al menos 1 fila y 1 columna!!!");
    return;
  }

  // Crea una nueva matriz para matriz1 eliminando la última fila y columna
  const nuevaMatriz1 = matriz1.slice(0, -1).map(fila => fila.slice(0, -1));
  // Actualiza el estado con la nueva matriz
  setMatriz1(nuevaMatriz1);

  // Crea una nueva matriz para matriz2 eliminando la última fila y columna
  const nuevaMatriz2 = matriz2.slice(0, -1).map(fila => fila.slice(0, -1));
  // Actualiza el estado con la nueva matriz
  setMatriz2(nuevaMatriz2);
};
