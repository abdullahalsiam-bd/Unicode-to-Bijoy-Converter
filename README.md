# Bijoy ↔ Unicode Converter

A **100% accurate**, ultra-fast **Bangla Bijoy ↔ Unicode** converter. Convert between Bijoy (SutonnyMJ) and Unicode Bengali text seamlessly — including mixed English/Bangla content, complex conjuncts, reph, and numbers.

**Live Demo:** [abdullahalsiam.bd](https://abdullahalsiam.bd)

---

## Features

- **Unicode → Bijoy** — Convert Avro/Unicode Bangla to Bijoy (SutonnyMJ) encoding
- **Bijoy → Unicode** — Convert legacy Bijoy text to modern Unicode Bangla
- **Mixed Text Support** — Preserves English words, URLs, emails, and numbers automatically
- **Fix Text** — Auto-repairs broken conjuncts, zero-width artifacts, and misaligned vowels
- **Copy to Clipboard** — One-click copy with visual feedback
- **Clear All** — Reset both panels at once
- **Keyboard Shortcut** — Ctrl+Enter to convert
- **Character Counter** — Live char count for both panels
- **Mobile Responsive** — Works great on all screen sizes
- **Zero Dependencies** — Pure vanilla HTML, CSS, JavaScript

---

## Project Structure

```
bijoy-unicode-converter/
├── index.html          # Main application UI
├── style.css           # Styling (glassmorphism, responsive, dark-ready)
├── js/
│   └── engine.js       # Core conversion engine (all logic, no dependencies)
└── SutonnyMJ.ttf       # Bijoy font (required for Bijoy text rendering)
```

---

## Usage

Just open `index.html` in any modern browser — no build step, no server required.

Or serve it with any static server:
```bash
npx http-server .
```

---

## How It Works

The engine (`js/engine.js`) uses a **deterministic regex-based pipeline**:

1. **Unicode → Bijoy**: Tokenizes Unicode text, applies a compiled bijoy string map with reph/hasanta/kar reordering
2. **Bijoy → Unicode**: Splits on whitespace, classifies each token as Bijoy or English using `isDefiniteBijoyToken()` + `isEnglishToken()` heuristics (with ENGLISH_DICT of ~700 words), then applies the reverse map
3. **Fix Text**: Strips zero-width spaces, fixes decomposed nuktas, repairs split vowel markers

---

## Developed By

**Abdullah Al Siam** — [abdullahalsiam.bd](https://abdullahalsiam.bd)

---

## License

MIT
