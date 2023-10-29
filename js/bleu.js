"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bleu = void 0;
function bleu(reference, candidate, maxN) {
    // Tokenize the reference and candidate sentences
    const referenceTokens = reference.split(' ');
    const candidateTokens = candidate.split(' ');
    // Calculate n-gram precision
    const precision = Array(maxN).fill(0);
    for (let n = 1; n <= maxN; n++) {
        const referenceNgrams = {};
        const candidateNgrams = {};
        for (let i = 0; i < referenceTokens.length - n + 1; i++) {
            const ngram = referenceTokens.slice(i, i + n).join(' ');
            referenceNgrams[ngram] = (referenceNgrams[ngram] || 0) + 1;
        }
        for (let i = 0; i < candidateTokens.length - n + 1; i++) {
            const ngram = candidateTokens.slice(i, i + n).join(' ');
            candidateNgrams[ngram] = (candidateNgrams[ngram] || 0) + 1;
        }
        let totalNgramMatches = 0;
        for (const ngram in candidateNgrams) {
            if (ngram in referenceNgrams) {
                // Clipped precision
                totalNgramMatches += Math.min(candidateNgrams[ngram], referenceNgrams[ngram]);
            }
        }
        let totalPredictedNgrams = (candidateTokens.length - n + 1);
        precision[n - 1] = totalPredictedNgrams > 0 ? totalNgramMatches / totalPredictedNgrams : 0;
    }
    // Calculate brevity penalty
    const referenceLength = referenceTokens.length;
    const candidateLength = candidateTokens.length;
    const brevityPenalty = candidateLength > referenceLength
        ? 1
        : Math.exp(1 - referenceLength / candidateLength);
    // Calculate BLEU score
    const geometricMean = Math.pow(precision.reduce((acc, p) => acc * p, 1), 1 / maxN);
    const bleuScore = brevityPenalty * geometricMean;
    return bleuScore;
}
exports.bleu = bleu;
