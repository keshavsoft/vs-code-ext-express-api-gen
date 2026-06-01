# Developer Guide — vs-code-ext-express-api-gen 🚀

## Overview

`vs-code-ext-express-api-gen` is a Visual Studio Code extension for automatically generating Express.js route entries directly from the VS Code Title Bar.

The extension focuses on reducing repetitive backend route setup and simplifying Express.js API initialization.

---

# 🎯 Main Developer Purpose

When the developer clicks:

```bash
StartEndPoint
```

from the VS Code Title Bar, the extension:

* Asks for endpoint name
* Creates route structure
* Updates `app.js`
* Registers route automatically

---

# ⚡ Current Functionality

The extension currently supports:

✅ Route generation
✅ `app.js` route injection
✅ Endpoint folder initialization
✅ Express.js modular structure
✅ Faster API setup workflow

---

# 🛠️ Route Generation Flow

---

# Step 1 — Run Extension

Press:

| Shortcut | Purpose                           |
| -------- | --------------------------------- |
| `F5`     | Launch Extension Development Host |

---

# Step 2 — Open Extension Host

VS Code launches:

```bash
Extension Development Host
```

---

# Step 3 — Click Title Bar Button

Inside endpoint file or workspace:

```bash
StartEndPoint
```

appears on the VS Code Title Bar.

---

# Step 4 — Enter Endpoint Name

Example:

```bash
V1
```

---

# Step 5 — Route Registration

The extension automatically updates:

```js
app.js
```

with:

```js
app.use("/V1", require("./src/V1/routes"));
```

---

# 📁 Generated Structure

```bash
src/
└── V1/
    └── routes.js
```

---

# 📁 Project Structure

```bash
vs-code-ext-express-api-gen
│
├── .vscode
├── archive
├── Docs
├── node_modules
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
├── dev.md
└── CHANGELOG.md
```

---

# 📄 Important Files

| File           | Purpose                      |
| -------------- | ---------------------------- |
| `extension.js` | Main extension entry         |
| `app.js`       | Route registration target    |
| `routes.js`    | Generated endpoint router    |
| `package.json` | VS Code command registration |

---

# ⚡ Developer Shortcuts

| Shortcut           | Purpose                  |
| ------------------ | ------------------------ |
| `F5`               | Run extension            |
| `Ctrl + Shift + P` | Open command palette     |
| `Ctrl + R`         | Reload VS Code           |
| `Ctrl + ``         | Open integrated terminal |

---

# 🧠 Developer Notes

* Always validate existing `app.js`
* Avoid duplicate route injection
* Keep generated routes modular
* Maintain Express.js standards
* Prefer reusable route generation functions

---

# 🧪 Testing Workflow

## Install Dependencies

```bash
npm install
```

---

## Start Extension

```bash
F5
```

---

## Validate Route Generation

Check:

* `app.js`
* Generated `routes.js`
* Route path correctness
* Duplicate route prevention

---

# 🚀 Future Improvements

Planned developer features:

* Auto CRUD endpoint generation
* Middleware injection
* Dynamic route templates
* AI-assisted endpoint generation
* Route conflict detection

---

# 🧠 Technologies Used

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 👨‍💻 Maintainer

Developed by **KeshavSoft**
