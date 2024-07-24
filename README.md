# Web Note Application

This is a **web note application** built using **React, Vite, and TypeScript**. It includes functionalities for **notes, reminders, and to-do lists**. I would be thrilled to see additional features such as:

- **Tagging and categorization** for better organization of notes.
- **Search functionality** to quickly find specific notes or tasks.
- **Priority levels** for to-do items to manage tasks more effectively.
- **Collaboration tools** to share notes and tasks with others.
- **Notifications and alerts** for reminders and deadlines.
- **Dark mode** for a more comfortable viewing experience in low-light environments.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
