// for(i = 0; i <= array.length; i++){
//     newArray.push(array[i] * 2);             // FOR LOOP
// }

// 1. MAP FUNCTION

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArray = array.map((number) => {
//     return number * 2;
// });
// console.log(array);
// console.log(newArray);


// 2. FILTER FUNCTION

// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] < 5) {                     // FOR LOOP METHOD
//         newArray1.push(array1[i])
//     }
// }

// const array1 = [1, 2, 4, 36, 29, 8, 6, 3, 1, 5]

// const newArray1 = array1.filter((number) => {
//     return number < 5;
// });

// console.log(newArray1)

// REDUCE FUNCTION

// for(let i = 0; i < array.length; i++) {              // FOR LOOP
//     newArray2.push(`Number: ${array2[i]}`);
// }

// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const sum = array2.reduce((sum, number) => {
//     return sum + number;
// },0)

// console.log(sum);
 
// ***************************************************************************** //

// const users = [
//     { id : 1, name : "brawk", age : 23},
//     { id : 2, name : "som", age : 22},
//     { id : 3, name : "mada", age : 21},
//     { id : 4, name : "ethan", age : 25},
//     { id : 5, name : "skuba", age : 23},
// ];

// const removeUser = (id) => {
//     const newUserArray = users.filter((user) => {
//         return user.id != id;
//     });
//     return newUserArray;
// }
// console.log(removeUser(1))


// const players = [
//     {id: 1, name: "boaster", role:"igl/controller"},
//     {id: 2, name: "alfajer", role:"sentinel"},
//     {id: 3, name: "crashies", role:"initiator"},
//     {id: 4, name: "chronical", role:"flex"},
//     {id: 5, name: "kaajak", role:"duelist"}
// ]

// const changeRole = (id,newRole) => {
//     const newPlayerId = players.map((player) => {
//         if (player.id == id) {
//             return {id: player.id, name: player.name, role: newRole };
//         } 
//         else {
//             return player;
//         }
//     });
//     return newPlayerId;
// }
// console.log(changeRole(1,"captain"))


// const obj = {
//     a: 1,
//     b: 2,
//     sum() {
//         return this.a + this.b;
//     }
// }
// console.log(obj)

alert("hello world")