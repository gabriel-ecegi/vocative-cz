# Vocalization library for czech Names and Surnames.

Can do the hard ones czech names like ""Řehoř" -> "Řehoři" and Names consisting of two first name like "Jaroslav Jan" -> "Jaroslave Jane".

Library also support surnames like "Klaus" -> "Klausi".

And both of them together like "Petr Klaus" -> "Petře Klausi".

## Installation

You can install the package via pnpm:

```bash
pnpm install vocative-cz
```

or if you are still using npm:

```bash
npm install vocative-cz
```

## Usage

```typescript
import { vocative } from "vocative-cz";

console.log(voctive("Řehoř")); // Řehoři
console.log(voctive("Eva")); // Evo
console.log(vocative("Petr Klaus")); // Petře Klausi
console.log(vocative("Jaroslav Jan")); // Jaroslave Jane
```
