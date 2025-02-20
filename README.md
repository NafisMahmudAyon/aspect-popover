# Aspect Popover

A lightweight and customizable popover component for React, built with Tailwind CSS and Framer Motion.

![npm](https://img.shields.io/npm/v/aspect-popover)
![license](https://img.shields.io/github/license/yourusername/aspect-popover)
![downloads](https://img.shields.io/npm/dt/aspect-popover)

## 🚀 Features

- 🛠️ **Highly Customizable** – Easily modify styles and animations.
- ⚡ **Lightweight & Performant** – Optimized for fast rendering.
- 🎨 **TailwindCSS Support** – Seamlessly integrates with Tailwind.
- 🏗️ **Framer Motion Animations** – Smooth, modern transitions.
- 🔌 **Works with React 18 & 19** – Supports the latest React versions.

---

## 📦 Installation

```sh
npm install aspect-popover
# or
yarn add aspect-popover
# or
pnpm add aspect-popover
```

## ✨ Usage

```tsx
import React from "react";
import { Popover } from "aspect-popover";

export default function Example() {
  return (
    <Popover trigger={<button>Open Popover</button>}>
      <div className="p-4 bg-white shadow-lg rounded-lg">Hello, World!</div>
    </Popover>
  );
}
```

## 🎨 Customization

### Props

| Prop        | Type                 | Default      | Description |
|------------|---------------------|-------------|-------------|
| `trigger`  | `ReactNode`          | `null`      | The element that toggles the popover |
| `placement`| `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Defines where the popover appears |
| `open`     | `boolean`            | `false`     | Controls the visibility of the popover |
| `onClose`  | `() => void`         | `undefined` | Callback when the popover closes |
| `className`| `string`             | `""`        | Additional classes for styling |

### Example with Custom Placement

```tsx
<Popover trigger={<button>Hover me</button>} placement="top">
  <div className="p-4 bg-gray-100 border rounded">I'm on top!</div>
</Popover>
```

---

## ⚙️ Configuration

Aspect Popover supports Tailwind CSS by default. If you're using Tailwind, ensure your `tailwind.config.js` includes:

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository.
2. **Clone** your fork and install dependencies:  
   ```sh
   git clone https://github.com/yourusername/aspect-popover.git
   cd aspect-popover
   npm install
   ```
3. **Make Changes** – Update the component or docs.
4. **Commit & Push** – Follow conventional commit messages.
5. **Open a Pull Request** – Submit your PR for review.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on [GitHub](https://github.com/yourusername/aspect-popover)!

---

Happy coding! 🚀
