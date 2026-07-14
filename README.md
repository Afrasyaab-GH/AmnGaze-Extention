# AmnGaze Browser Extension

> 🛡️ **On-device AI visual content protection and image/video blurring for your browser.**

**AmnGaze Extension** is a privacy-first browser extension designed to protect your eyes and uphold digital purity. It automatically scans images and video frames on any webpage you visit, detects explicit or NSFW content using local **TensorFlow.js** models, and blurs them instantly before they can be displayed.

---

## 🌟 Key Features

*   **Real-Time AI Moderation**: Scans web images and video thumbnails dynamically as the page loads.
*   **100% Local & Private**: Model inference runs entirely in your browser using WebGL/WebAssembly. No image data or URLs are sent to any remote server.
*   **Smart Blurring Overlay**: Replaces explicit visual assets with a custom blur overlay, which can be unblurred or configured via your dashboard.
*   **Cross-Browser Support**: Manifest V3 compliant, compatible with Google Chrome, Microsoft Edge, and Brave.

---

## 🛠️ Architecture & Core Components

*   `manifest.json`: Extension entry point configuring permissions, declarative net requests, and scripts.
*   `amngaze-content.js`: Content script injected into webpages to monitor DOM changes, select images, and apply blurring stylesheets.
*   `amngaze-background.js`: Background service worker managing the lifecycle, model loading, and coordination.
*   `tfjs/`: Pre-bundled TensorFlow.js models and weights for local execution.
*   `tests/`: Suite for manifest validation and scheduler integrations.

---

## 🚀 Getting Started

### Local Development Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Afrasyaab-GH/amngaze-Extention.git
   ```
2. Open your browser and navigate to the extensions page (e.g., `chrome://extensions`).
3. Enable **Developer mode** in the top right.
4. Click **Load unpacked** and select the repository root directory.

---

## 🛠️ Development & Building

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Build Chrome and Firefox extensions:**
   ```bash
   npm run build
   ```
3. **Generate ZIP packages for distribution:**
   ```bash
   npm run dist
   ```
4. **Run the local test suite:**
   ```bash
   npm run test
   ```

---

© 2026 Al-Haq Studio & Afrasyaab Meranai. All rights reserved.
