# Bangla Converter

A fast, lightweight, and user-friendly web tool for converting Bangla text between **Unicode (Avro)** and **Bijoy (SutonnyMJ)** formats.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-banglaconverter.pages.dev-5B3DF5?style=for-the-badge)](https://banglaconverter.pages.dev/)
[![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JavaScript-111827?style=for-the-badge)](#tech-stack)
[![Client Side](https://img.shields.io/badge/Processing-100%25%20Client--Side-16A34A?style=for-the-badge)](#privacy)

> Convert Bangla text between Unicode and Bijoy quickly, directly in your browser.

## 🌐 Live Demo

**https://banglaconverter.pages.dev/**

---

## 📌 Project Overview

**Bangla Converter** is a browser-based utility designed to make Unicode ↔ Bijoy conversion simple and accessible.

The interface provides separate workspaces for Unicode and Bijoy text, with quick conversion controls, copy/paste support, character counts, and a text-fixing utility. The project is designed around a clean and responsive user experience so it can be used comfortably on both desktop and mobile devices.

All text processing is performed on the client side, so users can convert text without needing to upload or store their content on a remote server.

## ✨ Features

- 🔄 **Unicode → Bijoy** conversion
- 🔄 **Bijoy → Unicode** conversion
- 📋 Easy **copy & paste** workflow
- 🛠️ **Fix Text** utility for common formatting issues
- 🗑️ **Clear All** control
- 🔢 Real-time **character count**
- 📱 Fully **responsive** interface
- ⚡ Fast browser-based processing
- 🔒 **Client-side processing**
- 🚫 No account or login required
- 🎨 Clean and minimal modern UI

## 🖥️ Interface

The application uses a two-panel workflow:

```text
┌─────────────────────────────┐     ┌─────────────────────────────┐
│ Unicode / অঙ্গ (Avro)       │     │ Bijoy / বিজয় (SutonnyMJ)   │
│                             │     │                             │
│       Input Text            │     │       Converted Text        │
│                             │     │                             │
└─────────────────────────────┘     └─────────────────────────────┘
                 │
          To Bijoy / To Unicode
```

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Application structure |
| **CSS3** | Styling, layout & responsive design |
| **JavaScript** | Conversion logic & interactions |
| **Cloudflare Pages** | Web deployment |

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/bangla-converter.git
cd bangla-converter
```

### 2. Open the project

This is a client-side web application, so no backend server is required.

You can simply open:

```text
index.html
```

in your browser.

### 3. Run locally

For a better development experience, use any local static server.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 📁 Project Structure

```text
bangla-converter/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── icons/
│   └── images/
│
└── README.md
```

> File names may differ depending on the current project structure.

## 🔐 Privacy

Bangla Converter is designed with a **client-side-first approach**.

User-entered text is processed directly in the browser rather than being intentionally uploaded to a backend for conversion. This helps keep the conversion process fast and minimizes unnecessary data handling.

**Do not enter sensitive information into any public web tool unless you are comfortable doing so.**

## 📱 Responsive Design

The interface is optimized for:

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📟 Tablet

The layout adapts to smaller screens while keeping the main conversion workflow accessible.

## 🎯 Use Cases

Bangla Converter can be useful for:

- Bangla content writers
- Students
- Designers
- Developers
- Bloggers
- Publishers
- Social media creators
- Office documentation
- Users working with legacy Bijoy text

## 🔮 Future Improvements

Potential improvements include:

- Enhanced conversion accuracy
- More text-formatting tools
- Keyboard shortcuts
- Drag & drop text/file support
- Improved mobile editing experience
- Additional Bangla text utilities
- Progressive Web App (PWA) support

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

## 📄 License

No license has been specified for this project yet.

If you plan to make the repository open source, add an appropriate license file such as **MIT**, **Apache-2.0**, or another license that matches your intended usage.

## 🔗 Links

- **Live Website:** https://banglaconverter.pages.dev/
- **GitHub:** Add your repository URL here

---

<p align="center">
  Made with ❤️ for Bangla text conversion
</p>
