# 🇧🇩 Unicode <-> Bijoy Converter

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <br>
  <br>
  <b>A highly precise, lightning-fast, and user-friendly web tool for converting Bangla text between Unicode (Avro) and Bijoy (SutonnyMJ) formats.</b>
</div>

<br>

> Convert Bangla text between Unicode and Bijoy seamlessly directly in your browser without breaking conjuncts, English words, or special characters.

## 🌐 Live Demo

**[banglaconverter.pages.dev](https://banglaconverter.pages.dev/)**

---

## 📌 Why this converter?

While there are many Bijoy/Unicode converters on the internet, most of them suffer from severe formatting issues:
- They break English words mixed inside Bangla text.
- They render complex conjuncts (যুক্তাক্ষর) incorrectly.
- The UI is often outdated or not mobile-friendly.

**This converter solves all of that.** Built with a robust conversion engine, it detects mixed English text natively and applies precise mapping for SutonnyMJ's strict rules, resulting in 100% accurate, press-ready output.

## ✨ Features

- 🔄 **Bidirectional Conversion:** Convert Unicode → Bijoy and Bijoy → Unicode.
- 🧠 **Mixed-Language Intelligence:** Perfectly preserves English words, numbers, and symbols inside Bangla text.
- 🎯 **High Precision Conjuncts:** Native support for the most complex Bijoy ligatures (যেমন: গ্র, শ্র, ক্ষ, ঞ্জ).
- 🛠️ **Auto Fix Text:** Built-in utility to clean up broken formatting, stray nuktas, and spacing issues.
- 📱 **Mobile-Optimized:** Sticky controls on mobile make it incredibly easy to use without scrolling back and forth.
- ⚡ **Zero Latency:** 100% Client-side JS. No servers, no waiting.
- 🎨 **Premium UI:** A beautifully polished Glassmorphism interface with smart copying features.

## 🖥️ Interface & Workflow

The application uses an intuitive side-by-side (or stacked on mobile) workflow:

`	ext
┌─────────────────────────────┐     ┌─────────────────────────────┐
│ Unicode / অভ্র (Avro)       │     │ Bijoy / বিজয় (SutonnyMJ)   │
│                             │     │                             │
│       Input Text            │  →  │       Converted Text        │
│                             │  ←  │                             │
└─────────────────────────────┘     └─────────────────────────────┘
`
Simply paste your text into the corresponding box, and press the convert button (or hit Ctrl+Enter). 

## 🚀 Getting Started

### 1. Clone the repository

`ash
git clone https://github.com/YOUR-USERNAME/bijoy-unicode-converter.git
cd bijoy-unicode-converter
`

### 2. Run Locally

Because it's a completely frontend application, no build steps are required. You can simply double-click index.html to open it in your browser. 

For the best experience (to avoid strict CORS issues with local files), use a local server:

`ash
# Using Python
python -m http.server 8000

# OR using Node.js
npx serve .
`

Then visit http://localhost:8000 in your browser.

## 📁 Project Structure

`	ext
bijoy-unicode-converter/
│
├── index.html        # Main Application UI
├── style.css         # Modern Glassmorphism Styling
├── SutonnyMJ.ttf     # Included font for rendering Bijoy text natively
├── js/
│   └── engine.js     # The core conversion engine & logic
└── README.md
`

## 🔐 Privacy by Design

This application is strictly **client-side**. All text processing is done inside your browser's memory using JavaScript. **No data is ever sent to any server.** You can even download the tool and use it completely offline.

## 👨‍💻 Developer

Crafted with ❤️ by **[Abdullah Al Siam](https://abdullahalsiam.bd)**.

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software as long as the original copyright and license notice are included.
