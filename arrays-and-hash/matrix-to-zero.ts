/*
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input: 2 1 3 0 2
 *         7 4 1 3 8
 *         4 0 1 2 1
 *         9 3 4 1 9
 *
 *  Output: [[0 0 0 0 0],
 *          [7 0 1 0 8],
 *          [0 0 0 0 0],
 *          [9 0 4 0 9]]
 */

/*
Algorithm
  1.- Create a new empty array
  2.- Iterate the bi dimensional array item by item
  3.- if the item is equal to then 
    3.1.- fill the elements of the row to zero
    3.2.- fill the elements of the column to zero
  4.- Return the array created
*/

const m = [[2,1,3,0,2],[7,4,1,3,8],[4,0,1,2,1],[9,3,4,1,9]]
class Matrix {
  replaceWithZero(matrix: Array<Array<number>>): Array<Array<number>> {
    const aux = Array<Array<number>>();
    for(let row = 0; row<matrix.length; row++) {
      aux[row] = [];
      for(let col = 0; col<matrix[row].length; col++) {
        if(matrix[row][col] == 0) {
          aux[row][col] = 1;
        } else {
          aux[row].push(0);
        }
      }
    }

    for(let row = 0; row<aux.length; row++) {
      for(let col = 0; col<aux[row].length; col++) {
        if(aux[row][col] == 1) {
          this.setRowToZero(matrix, row);
          this.setColToZero(matrix, col);
        } 
      }
    }
    return matrix;
  }

  private setRowToZero(matrix: Array<Array<number>>, row: number) {
    for(let col = 0; col < matrix[0].length; col++){
      matrix[row][col] = 0;
    }
  }

  private setColToZero(matrix: Array<Array<number>>, col: number) {
    for(let row = 0; row < matrix.length; row++){
      matrix[row][col] = 0;
    }
  }
}

const matrix = new Matrix();
console.log(matrix.replaceWithZero(m))