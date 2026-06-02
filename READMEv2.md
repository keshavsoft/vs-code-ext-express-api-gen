# vs-code-ext-express-api-gen 🚀

AI-assisted Express API Generator Extension for Visual Studio Code.

Quickly create Express routes, endpoints, and modular API structures directly from the VS Code Title Bar and Explorer context menu.

---

# ✨ Overview

**vs-code-ext-express-api-gen** is a Visual Studio Code extension developed by **KeshavSoft** to simplify backend development using **Node.js** and **Express.js**.

This extension helps developers rapidly generate API structures with minimal manual coding.

---

# 🎯 Main Purpose

The extension provides a quick way to create Express endpoints directly from the VS Code interface.

Using the **StartEndPoint** option from the VS Code Title Bar, developers can instantly generate route structures inside `app.js`.

---

# ⚡ Features

✅ Generate Express.js API structure instantly
✅ Create route entries automatically in `app.js`
✅ Start endpoints directly from VS Code Title Bar
✅ Reduce repetitive backend setup work
✅ Modular route generation support
✅ Beginner-friendly development workflow
✅ Faster API development process

---

# 🖼️ Workflow

### Start Endpoint from VS Code

1. Click **StartEndPoint** from the VS Code Title Bar
2. Enter endpoint name

Example:

```bash
V1
```

3. Extension automatically creates route configuration inside `app.js`

---

# 📁 Folder Structure

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
└── CHANGELOG.md
```

---

# 🛠️ Command

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `StartEndPoint` | Creates a new route entry in `app.js` |

---

# 🚀 Example

## Input

When prompted:

```bash
V1
```

## Generated Output

```js
app.use("/V1", require("./src/V1/routes"));
```

---

# 💡 Why Use This Extension?

* Save backend development time
* Avoid repetitive route creation
* Quickly bootstrap Express APIs
* Maintain clean project structure
* Improve development productivity

---

# 🧠 Built With

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed by **KeshavSoft**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share with developers
