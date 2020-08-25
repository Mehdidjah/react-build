# 🚀 React + TypeScript + Vite Starter

This project is a clean and optimized starter template built using **React**, **TypeScript**, and **Vite**.  
It includes Hot Module Replacement (HMR), ESLint configurations, and an easy setup for fast development and building scalable React applications.

---

## ⚡ Tech Stack

- React  
- TypeScript  
- Vite  
- ESLint  
- HMR (Hot Module Replacement)

---

## 📦 Installation & Setup

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build

Preview production build:

npm run preview

---

## 🔧 ESLint Configuration

The project includes basic rules, but you can enable **type-aware linting**:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // OR stricter:
      // tseslint.configs.strictTypeChecked,
      // Optional stylistic rules:
      // tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
