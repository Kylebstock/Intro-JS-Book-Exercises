const greet = code => {
  switch (code) {
    case 'en' :
      return 'Hi';
    case 'fr' :
      return 'Salut';
    case 'pt' :
      return 'Ola';
    case 'de' :
      return 'Holla!';
    default:
      return 'Code not found!';
  };
};
console.log(greet('en'));