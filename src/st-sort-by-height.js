import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

let arr = [4, 2, 6, -1, 1]
export default function sortByHeight(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }
  newArr.sort((a, b) => a - b)

  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i + count] != -1) {
      arr[i + count] = newArr[i]
    } else {
      count++;
      i -= 1;
    }
  }
  return arr
}

  // arr.sort(function (a, b) {
  //   if (a > b && a !==0) {
  //     return 1;
  //   }
  //   if (a < b && a !==0) {
  //     return -1;
  //   }
  //     return 0;
  // });
