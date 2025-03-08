# Tauri + React + TypeScript + Tailwind + ShadCN UI

A modern, production-ready template for building cross-platform desktop applications with web technologies.

![Tauri React ShadCN](https://img.shields.io/badge/Tauri-React-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-blue)
![ShadCN UI](https://img.shields.io/badge/ShadCN-UI-blue)

## 🚀 Features

- **Tauri**: Build smaller, faster, and more secure desktop applications with a web frontend
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Static type-checking for JavaScript
- **Tailwind CSS**: A utility-first CSS framework
- **ShadCN UI**: High-quality, accessible components built with Radix UI and Tailwind CSS
- **Vite**: Next generation frontend tooling for fast development

## 📋 Prerequisites

- **Bun 1.2.4 or later**: Fast JavaScript runtime, package manager, and bundler
- **Rust and Cargo**: Required for Tauri development
- **OS-specific dependencies for Tauri**:
  - **Windows**: Microsoft Visual Studio C++ Build Tools
  - **macOS**: Xcode Command Line Tools
  - **Linux**: Various packages (see [Tauri docs](https://tauri.app/v1/guides/getting-started/prerequisites))

## 🛠️ Getting Started

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/nyelmer/tauri-react-shadcn.git
cd tauri-react-shadcn

# Install dependencies
bun install
```

### Development

```bash
# Start the development server with hot-reload
bun run tauri dev
```

This will start both the React development server and the Tauri development process.

### Building for Production

```bash
# Create a production build
bun run tauri build
```

This will create platform-specific installers in the `src-tauri/target/release/bundle` directory.

## 📁 Project Structure

```
├── src/                 # React frontend code
│   ├── components/      # React components
│   │   └── ui/          # ShadCN UI components
│   ├── App.tsx          # Main React component
│   └── main.tsx         # React entry point
├── src-tauri/           # Tauri backend code
│   ├── src/             # Rust source code
│   └── tauri.conf.json  # Tauri configuration
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 🧩 Adding ShadCN Components

This project uses ShadCN UI, which provides high-quality, accessible components that you can copy and paste into your apps.

```bash
# Add a new component
bun x shadcn-ui@latest add button
```

Replace "button" with any component you want to add from the ShadCN library.

## 🔧 Customization

### Tauri Configuration

You can customize your application's metadata, icons, and more in the `src-tauri/tauri.conf.json` file.

### Tailwind Configuration

Tailwind CSS can be configured in the `tailwind.config.js` file.

### ShadCN Theme

The ShadCN theme can be customized in the `src/components/ui/theme.tsx` file.

## 📚 Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Tauri](https://tauri.app/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
