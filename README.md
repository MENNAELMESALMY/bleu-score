# bleu

Calculate BLEU score for reference and candidate sentences.

## Installation

To use the `bleu` package in your project, you can install it via npm or yarn:

```sh
npm install bleu
```

## Usage
Here's an example of how to calculate the BLEU score using the bleu function:
```javascript
const { bleu } = require('bleu');

const reference = "This is a sample reference sentence.";
const candidate = "This is a sample candidate sentence.";
const maxN = 4;

const bleuScore = bleu(reference, candidate, maxN);

console.log(`BLEU Score: ${bleuScore}`);
```

If you are using TypeScript, you can also use it:

```typescript
import { bleu } from 'bleu';

const reference = "This is a sample reference sentence.";
const candidate = "This is a sample candidate sentence.";
const maxN = 4;

const bleuScore = bleu(reference, candidate, maxN);

console.log(`BLEU Score: ${bleuScore}`);
```

## API
`bleu(reference: string, candidate: string, maxN: number): number`
Calculates the BLEU score for a reference sentence and a candidate sentence. The maxN parameter specifies the maximum n-gram to consider for precision.

- `reference`: The reference sentence.
- `candidate`: The candidate sentence.
- `maxN`: The maximum n-gram to consider for precision.

## License
This package is released under the MIT License. See the [LICENSE file](https://github.com/MENNA123MAHMOUD/bleu-score/blob/main/LICENSE) for details.

## Contributing
If you'd like to contribute to this project or report issues, please visit the [GitHub repository](https://github.com/MENNA123MAHMOUD/bleu-score).