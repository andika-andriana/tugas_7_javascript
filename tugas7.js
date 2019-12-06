const tugas7 = [155, 155, 165, 165, 175, 180, 175, 185, 195, 185];
const baru = new Set([155, 155, 165, 165, 175, 180, 175, 185, 195, 185]);

console.log("- - - Perulangan For - - - ")
for (i = 0; i < tugas7.length; i++) {
  console.log(tugas7[i]);
}

console.log("- - - Perulangan For - - - ")
for (let value of baru) {
  console.log(value);
}

/*perbedaan antara perulangan for dan for of adalah :
- for = tidak bisa menggunakan Set untuk menghapus duplikasi data pada Array
- for of = bisa digunakan untuk melakukan peraulangan dengan Set untuk menghapus duplikasi
*/