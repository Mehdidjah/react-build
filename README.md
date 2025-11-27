# React + TypeScript + Vite

This project is built using **React**, **TypeScript**, and **Vite**, providing a fast development experience with Hot Module Replacement (HMR) and optimized build performance.

---

## 🚀 Features
- ⚡ **Vite** for ultra-fast dev server and builds  
- ⚛️ **React** with modern JSX support  
- 🦾 **TypeScript** for type-safety  
- 🔥 **HMR (Hot Module Replacement)** enabled  
- 🧹 **ESLint** preconfigured  

---

## 📁 Project Structure
```
/
├── src/               # React components, logic, styles
├── public/            # Static assets
├── index.html         # Root HTML file
├── tsconfig.*.json    # TypeScript configurations
├── vite.config.ts     # Vite config
└── eslint.config.js   # ESLint setup
```

---

## 🛠 Plugins Available
Two official Vite plugins for React:

### 1. `@vitejs/plugin-react`
Uses **Babel** for Fast Refresh.

### 2. `@vitejs/plugin-react-swc`
Uses **SWC** for even faster Fast Refresh.

---

## ⚛️ React Compiler (Optional)
React Compiler is **not enabled** by default because it impacts development and build performance.

To enable it, follow React’s official documentation.

---

## 🧹 Expanding ESLint Configuration (Recommended for Production)

If you're building a production-level application, enable **type-aware** linting:

```ts
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // Or stricter rules:
      // tseslint.configs.strictTypeChecked,
      // Optional stylistic rules:
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## 🧩 Optional: React-Specific ESLint Plugins

Install:

- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

Then update `eslint.config.js`:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## 🧞 Commands

Run all commands from the project root:

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm install`   | Install dependencies                     |
| `npm run dev`   | Start local dev server (`localhost:5173`) |
| `npm run build` | Build for production                     |
| `npm run preview` | Preview the production build locally   |

---

## 📚 Learn More
- Vite docs — https://vitejs.dev  
- React docs — https://react.dev  
- TypeScript docs — https://www.typescriptlang.org  
