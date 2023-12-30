//3. feladat

function fullStack(frontendDevelopers, backendDevelopers) {
    // Szétválasztjuk a neveket a pontosvesszők alapján
    const frontendArray = frontendDevelopers.split(';');
    const backendArray = backendDevelopers.split(';');
  
    // Keresünk azokat a fejlesztőket, akik mindkét területen járatosak
    const fullStackDevelopers = frontendArray.filter(function (developer) {
      return backendArray.includes(developer);
    });
  
    return fullStackDevelopers;
  }
  
  // Tesztesetek
  console.log(
    fullStack(
      'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto',
      'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'
    )
  ); // ['Koaxk Abel', 'Riz Otto']
  
  console.log(
    fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna')
  ); // []
  