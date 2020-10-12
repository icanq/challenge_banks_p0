let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
  ["icanq", 0]
]

function battleStats(battle) {
  let output = {}
  for (let i = 0; i < battle.length; i++) {
    //looping
    //formula
    let key = battle[i][0]
    let value = battle[i][1]

    if (!output[key]) { //jika output[key] belum ada
      if (value < 0) {
        output[key] = {
          'Kalah': Math.abs(value),
          'Menang': 0
        }
      } else {
        output[key] = {
          'Kalah': 0,
          'Menang': value
        }
      }
    } else { //jika output[key] udah ada
      if (value < 0) {
        output[key]['Kalah'] += Math.abs(value)
      } else {
        output[key]['Menang'] += value
      }
    }
  }
  return output
}

console.log(battleStats(battle))