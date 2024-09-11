// src/components/MatrizCalculadora.tsx

import React, { useState } from 'react';
import './MatrizCalculadora.css'; // Importar el CSS para los estilos de la calculadora de matrices
import {
  sumarMatrices,
  restarMatrices,
  multiplicarMatrices,
  dividirMatrices
} from '../utils/operacionesMatrices'; // Importar funciones para operaciones de matrices
import {
  agregarFilaColumnaAmbas,
  reducirFilaColumnaAmbas
} from '../utils/manejoMatrices'; // Importar funciones para manejar filas y columnas de matrices

// Definición del tipo para las matrices (matriz de números)
type Matriz = number[][];

// Componente funcional de la Calculadora de Matrices
const MatrizCalculadora: React.FC = () => {
  // Estados para las matrices y el resultado de la operación
  const [matriz1, setMatriz1] = useState<Matriz>([[0]]);
  const [matriz2, setMatriz2] = useState<Matriz>([[0]]);
  const [resultado, setResultado] = useState<Matriz>([]);
  const [operacion, setOperacion] = useState<"suma" | "resta" | "multiplicacion" | "division">("suma");

  // Función para manejar el cambio en los campos de entrada de las matrices
  const handleMatrizChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setMatriz: React.Dispatch<React.SetStateAction<Matriz>>, 
    filaIdx: number, 
    colIdx: number
  ) => {
    // Crear una copia de la matriz actual y actualizar el valor en la posición especificada
    const nuevaMatriz = [...(setMatriz === setMatriz1 ? matriz1 : matriz2)];
    nuevaMatriz[filaIdx][colIdx] = parseFloat(e.target.value);
    setMatriz(nuevaMatriz); // Actualizar el estado de la matriz
  };

  // Función para realizar la operación matemática seleccionada
  const realizarOperacion = () => {
    let res: Matriz;
    // Seleccionar la función de operación basada en el valor de `operacion`
    switch (operacion) {
      case "suma":
        res = sumarMatrices(matriz1, matriz2);
        break;
      case "resta":
        res = restarMatrices(matriz1, matriz2);
        break;
      case "multiplicacion":
        res = multiplicarMatrices(matriz1, matriz2);
        break;
      case "division":
        res = dividirMatrices(matriz1, matriz2);
        break;
      default:
        res = [];
    }
    setResultado(res); // Establecer el resultado de la operación
  };

  // Función para renderizar una matriz en la interfaz de usuario
  const renderMatriz = (matriz: Matriz, setMatriz: React.Dispatch<React.SetStateAction<Matriz>>) => (
    matriz.map((fila, filaIdx) => (
      <div key={filaIdx} className="matrix-row">
        {fila.map((valor, colIdx) => (
          <input
            key={colIdx}
            type="number"
            value={valor}
            onChange={(e) => handleMatrizChange(e, setMatriz, filaIdx, colIdx)}
          />
        ))}
      </div>
    ))
  );

  return (
    <div className="container">
      <h2>Calculadora de Matrices</h2>
      
      {/* Selector de operación */}
      <select 
        value={operacion} 
        onChange={(e) => setOperacion(e.target.value as "suma" | "resta" | "multiplicacion" | "division")}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>
      
      {/* Sección para la Matriz 1 */}
      <div className="matrix-section">
        <h3>Matriz 1</h3>
        {renderMatriz(matriz1, setMatriz1)} {/* Renderizar la primera matriz */}
      </div>

      {/* Sección para la Matriz 2 */}
      <div className="matrix-section">
        <h3>Matriz 2</h3>
        {renderMatriz(matriz2, setMatriz2)} {/* Renderizar la segunda matriz */}
      </div>

      {/* Botones para agregar o reducir filas/columnas en ambas matrices */}
      <div className="button-group">
        <button onClick={() => agregarFilaColumnaAmbas(matriz1, matriz2, setMatriz1, setMatriz2)}>
          Agregar Fila/Columna
        </button>
        <button onClick={() => reducirFilaColumnaAmbas(matriz1, matriz2, setMatriz1, setMatriz2)}>
          Reducir Fila/Columna
        </button>
      </div>

      {/* Botón para calcular el resultado */}
      <button onClick={realizarOperacion}>Calcular</button>

      {/* Mostrar el resultado de la operación si existe */}
      {resultado.length > 0 && (
        <div className="result-container">
          <h3>Resultado</h3>
          {resultado.map((fila, filaIdx) => (
            <div key={filaIdx} className="matrix-row">
              {fila.map((valor, colIdx) => (
                <span key={colIdx}>{valor} </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatrizCalculadora;
