function getTheMessage(words, keys) {
  // your code here
  let result = ''
  for (let i = 0; i < keys.length; i++) {
    let key = toBin(keys[i])
    let value = sendToWords(words[i]);
    for (let j = 0; j < key.length; j++) {
      if (key[j] === '1') {
        result += value[j] + ' '
      }
    }
  }
  return result
}

function toBin(num) {
  let strRes = ''
  strBin = '';
  temporary = num;
  while (temporary >= 1) {
    strBin += temporary % 2;
    let hasilBagi = Math.floor(temporary / 2)
    temporary = hasilBagi
  }
  let lenStrBin = strBin.length;
  while (lenStrBin < 4) {
    strBin += '0'
    lenStrBin++;
  }
  for (let i = strBin.length - 1; i>=0; i--) {
    strRes += strBin[i]
  }
  return strRes
}

function sendToWords(str) {
  arr = []
  str += ' '
  let temporary = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      arr.push(temporary)
      temporary = ''
    } else {
      temporary += str[i];
    }
  }
  return arr
}


let kunci = [1, 4, 2, 0, 12]

let sajak = [
  'Ingatkah kota kelahiran kita',     // 0001 => binary dari 1
  'Kota Serang nan indah dan lapang', // 0100 => binary dari 4,  hiraukan semua kata setelah 'indah'
  'Tidak ada musuh dari hati ini',    // 0010 => binary dari 2,  hiraukan semua kata setelah 'dari'
  'Karena damai selalu dalam diri',   // 0000 => binary dari 0,  tidak ada yang kita ambil
  'Besok pagi kita menuai padi'       // 1100 => binary dari 12, hiraukan semua kata setelah 'menuai'
]

console.log(getTheMessage(sajak, kunci)) // Kita serang musuh besok pagi

kunci = [0, 1, 0, 2, 10, 2]
sajak = [
  'Cantik rupawan dirimu nak',                  // 0000 => binary dari 0
  'Kulihat dari sembarang posisi dan tertegun', // 0001 => binary dari 1,  hiraukan semua kata setelah 'posisi'
  'Bidadari terlahir',                          // 0000 => binary dari 0
  'Akankah aku lawan keelokan ini',             // 0010 => binary dari 2,  hiraukan semua kata setelah 'keelokan'
  'Di ufuk timur matahari tersenyum',           // 1010 => binary dari 10, hiraukan semua kata setelah 'matahari'
  'Menerangi ujung lembah tempat kita berdiam', // 0010 => binary dari 2,  hiraukan semua kata setelah 'tempat'
]

console.log(getTheMessage(sajak, kunci)) // Posisi lawan di timur lembah