
# 🧩 Microfrontend E-Commerce — Module Federation (Rspack + React)

This project demonstrates a modern microfrontend architecture using
@module-federation/enhanced
 and Rspack for lightning-fast development builds.

It includes three independently deployable apps that integrate seamlessly at runtime.

## 🏗️ Architecture
App	Port	Description
🏠 container	3000	The host shell that dynamically loads remote microfrontends.
📦 products	3001	Remote exposing a <ProductList /> component.
🛒 cart	3002	Remote exposing a <CartView /> component.

## ⚙️ Tech Stack

Rspack – blazing-fast Webpack alternative for bundling

React 18 – UI framework

Module Federation Enhanced Runtime – dynamic loading, prefetching, and shared dependencies

Bridge React Plugin – enables lazy loading and prefetching of remote components

TypeScript – strong typing and IDE support

## 🚀 Features

🔗 Dynamic Federation Runtime — remotes loaded via manifest files (mf-manifest.json)

⚡ Cross-Origin Support — each microfrontend runs on its own port with proper CORS headers

🔄 Lazy Loading & Prefetch — remotes fetched only when needed, or proactively via hover

🧠 Type-Safe Module Exposure — auto-generated federated type definitions (@mf-types)

🧩 Hot Reloading during development for all apps

## 🧰 Development

Run all workspaces concurrently:

npm run dev:all


Then open:

Container → http://localhost:3000

Products → http://localhost:3001

Cart → http://localhost:3002

Hover over “Prefetch Products” to trigger on-demand remote prefetching.

## 🗂️ Folder Structure
mf-ecommerce/
├── container/
│   ├── src/
│   └── rspack.config.js
├── products/
│   ├── src/
│   └── rspack.config.js
├── cart/
│   ├── src/
│   └── rspack.config.js
└── package.json

## Status:

✅ All microfrontends load and communicate successfully.
✅ Prefetching and manifest-based federation verified working.
✅ No CORS or runtime manifest errors.
