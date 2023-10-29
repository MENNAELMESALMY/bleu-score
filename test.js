const { bleu } = require('./js/bleu.js');


// Test your function with sample data
const reference = "This is a sample reference sentence.";
const candidate = "This is a sample reference sentence.";
const maxN = 4;

const bleuScore = bleu(reference, candidate, maxN);

console.log(`BLEU Score: ${bleuScore}`);
