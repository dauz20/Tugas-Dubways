//Menvetak bilangan Ganjil dan Genap
var nomor= [1, 2, 3, 4, 5, 6, 7, 8];

function checkNumber(number) {
  if (number % 2 == 0) {
    console.log(`Nomor: ${number} adalah bilangan genap`);
  } else {
    console.log(`Nomor: ${number} adalah bilangan ganjil`);
  }
}
checkNumber(nomor[0])
checkNumber(nomor[1]);
checkNumber(nomor[2])
checkNumber(nomor[3])
checkNumber(nomor[4])
checkNumber(nomor[5])
checkNumber(nomor[6])
checkNumber(nomor[7])
