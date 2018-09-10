// let algorithim = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     let charObj = {};

//     for (let char of str1) {
//         if (charObj[char]) {
//             charObj[char] += 1;
//         } else {
//             charObj[char] = 1;
//         }
//     }
    
//     for (let char of str2) {
//         if (!charObj[char]) {
//             return false
//         } else {
//             charObj[char] -= 1
//         }
//     }

//     return true
// };


// console.log(algorithim('apple', 'apple'));

// var sumZero = function (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// };

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

let sumZero = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (arr[left] + arr[right] === 0) {
            return [arr[left],arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))