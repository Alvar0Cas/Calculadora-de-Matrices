// src/utils/manejoMatrices.ts


type Matriz = number[][];


export const agregarFilaColumnaAmbas = (
  matriz1: Matriz,
  matriz2: Matriz,
  setMatriz1: React.Dispatch<React.SetStateAction<Matriz>>,
  setMatriz2: React.Dispatch<React.SetStateAction<Matriz>>
) => {
  if (matriz1.length >= 3 || matriz1[0].length >= 3) {
    alert("No se pueden agregar más de 3 filas y 3 columnas.");
    return;
  }


  const nuevaMatriz1 = matriz1.map(fila => [...fila, 0]);
  nuevaMatriz1.push(Array(nuevaMatriz1[0].length).fill(0));
  setMatriz1(nuevaMatriz1);


  const nuevaMatriz2 = matriz2.map(fila => [...fila, 0]);
  nuevaMatriz2.push(Array(nuevaMatriz2[0].length).fill(0));
  setMatriz2(nuevaMatriz2);
};


export const reducirFilaColumnaAmbas = (
  matriz1: Matriz,
  matriz2: Matriz,
  setMatriz1: React.Dispatch<React.SetStateAction<Matriz>>,
  setMatriz2: React.Dispatch<React.SetStateAction<Matriz>>
) => {
  if (matriz1.length <= 1 || matriz1[0].length <= 1) {
    alert("Debe haber al menos 1 fila y 1 columna.");
    return;
  }


  const nuevaMatriz1 = matriz1.slice(0, -1).map(fila => fila.slice(0, -1));
  setMatriz1(nuevaMatriz1);


  const nuevaMatriz2 = matriz2.slice(0, -1).map(fila => fila.slice(0, -1));
  setMatriz2(nuevaMatriz2);
};