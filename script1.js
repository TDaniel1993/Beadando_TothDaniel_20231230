//1. feladat

function szepTomb(arr) {
    // Ellenőrizzük, hogy az input egy tömb-e
    if (!Array.isArray(arr)) {
      return false;
    }
  
    // Vegyük az első elem típusát, és hasonlítsuk össze az összes többi elem típusával
    const firstType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== firstType) {
        return false; // Ha találunk eltérő típust, térjünk vissza hamissal
      }
    }
  
    // Ha minden elem azonos típusú, a tömb szép
    return true;
  }
  
  // Tesztesetek
  console.log(szepTomb(['alma', 'korte', 'szilva', 'barack', 'palinka'])); // true
  console.log(szepTomb([10, 20, 30, 40, '50', 60, 70])); // false
  console.log(szepTomb([])); // true
  console.log(szepTomb('YEE HAW!')); // false
  