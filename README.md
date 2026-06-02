# vs-code-ext-express-api-gen 🚀

AI-assisted Express API Generator Extension for Visual Studio Code.

Quickly create Express routes, endpoints, and modular API structures directly from the VS Code Title Bar and Explorer context menu.

---

# 🎯 Main Purpose

Using the **StartEndPoint** option from the VS Code Title Bar, developers can instantly generate route structures inside `app.js`.

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

## Generated Output

```js
app.use("/V1", require("./src/V1/routes"));
```

---

# 📁 Folder Structure

```bash id="n6y4qp"
vs-code-ext-boilerplate
│
├── .vscode
├── Config
├── Public
├── node_modules
├── .env
├── .env.local
├── app.js
├── config.json
├── configLoader.js
├── package-lock.json
├── package.json
├── port.js
├── routes.js
└── server.js
```

---

# 🛠️ Command

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `StartEndPoint` | Creates a new route entry in `app.js` |

---

# 💡 Why Use This Extension?

* Save backend development time
* Avoid repetitive route creation
* Maintain clean project structure
* Improve development productivity

---

# 🧠 Built With

* Node.js (https://nodejs.org)
* Express.js (https://expressjs.com)
* VS Code Extension API (https://code.visualstudio.com/)
* JavaScript
* HTML5

---

# 📄 License

MIT License

---

# ⭐ Support

* ⭐ Star the Repository

  ```md
  (https://github.com/keshavsoft/vs-code-ext-express-api-gen)
  ```

* 🍴 Fork the Repository

  ```md
  (https://github.com/your-username/vs-code-ext-express-api-gen/fork)
  ```

* 🚀 Share with Developers

  ```md
  (https://marketplace.visualstudio.com/items?itemName=KeshavSoft.vs-code-ext-express-api-gen)
  ```

* 🛒 VS Code Marketplace Extension

  ```md
  (https://marketplace.visualstudio.com/items?itemName=KeshavSoft.vs-code-ext-express-api-gen)
  ```
