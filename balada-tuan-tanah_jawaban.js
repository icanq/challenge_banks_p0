//Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
//Angka negatif : harus membayar pajak sebesar 20 dollar per properti
//Angka nol     : semua properti di komplek itu sedang kosong
let duit = 0
let pajak = 0
let komplek = 0

function cekKomplek(input) {
  for (let index = 0; index < input.length; index++) {
    if (input[index] > 0) {
      duit += input[index] * 100
    } else if (input[index] < 0 ) {
      pajak += input[index] * 20 * -1
    } else if (input[index] == 0) {
      komplek++
    }
  }
  output = `Tuan Postoro mendapat ${duit} dollar, harus membayar pajak sebesar ${pajak} dollar, dan ada ${komplek} komplek yang kosong`
  return output
}

console.log(cekKomplek([3, -2, 0, 0, 4]))


// SOLVED