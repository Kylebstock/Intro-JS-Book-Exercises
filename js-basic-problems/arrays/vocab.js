let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

let newList = () => {
  for (let i = 0; i < vocabulary.length; i += 1) {
    let synonyms = vocabulary[i];

    for (let j = 0; j < synonyms.length; j += 1) {
      console.log(synonyms[j]);
    }
  }
}
console.log(newList());