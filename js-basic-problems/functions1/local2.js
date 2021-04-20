/*
const extractLanguage = local => {
  return local.substring(3,5);
}
*/

const extractLanguage = local => {
  return local.split('.')[0].split('_')[1];
}
console.log(extractLanguage('en_US.UTF-8'));  // 'US'
console.log(extractLanguage('en_GB.UTF-8'));  // 'GB'
console.log(extractLanguage('ko_KR.UTF-16')); // 'KR'
