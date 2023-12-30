//2. feladat

function hatvanyoz(tomb, hatvany) {
    // Ellenőrizzük, hogy az első paraméter egy tömb és a második paraméter egy szám
    if (!Array.isArray(tomb) || typeof hatvany !== 'number') {
      return [];
    }
  
    // Hatványozzuk a tömb elemeit a második paraméterrel
    const eredmeny = tomb.map(function (szam) {
      return Math.pow(szam, hatvany);
      // Vagy rövidebben: return szam ** hatvany;
    });
  
    return eredmeny;
  }
  
  // Tesztesetek
  console.log(hatvanyoz([1, 4, 7, 2, 5], 3)); // [1, 64, 343, 8, 125]
  console.log(hatvanyoz('buvarszivattyu', 5)); // []
  