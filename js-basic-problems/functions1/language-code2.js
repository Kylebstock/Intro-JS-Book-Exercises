
const extractLanguage = local => {
  return local.slice(0,2);
}
const extractRegion = local => {
  return local.split('.')[0].split('_')[1];
}

const localGreet = local => {
  let language = extractLanguage(local);
  let region = extractRegion(local);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

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

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8'));  // 'salut'
console.log(localGreet('pt_PT.UTF-8'));  // 'Ola'
console.log(localGreet('de_DE.UTF-16')); // 'Holla!'