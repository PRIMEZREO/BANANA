// function dig(obj, target) {
//   for (var i = 1; ; i++) {
//     obj = obj["level" + i];
//     if (`level`+i === target) {
//       console.log(obj);
//       break;
//     }
//   }
// }

// var data = {
//   level1: {
//     level2: {
//       level3: "some data"
//     }
//   }
// };

// dig(data, "level2"); // { level3: 'some data' }
// dig(data, "level3"); // 'some data'
// dig(data, "level4"); // undefined
