import { bleu }  from './ts/bleu';


// Test your function with sample data
const reference = "This is a sample reference sentence.";
const candidate = "This is a sample reference sentence.";
const maxN = 4;

const bleuScore = bleu(reference, candidate, maxN);

console.log(`BLEU Score: ${bleuScore}`);