# React Chrome Extension Template

This repository serves as a template for creating a Chrome extension with TypeScript, Webpack, and modular folder structure. It includes all the essentials to get you started with developing, building, and deploying a Chrome extension.

## Folder Structure
graphql
Copiar código
├── src
│   ├── background
│   │   └── background.ts         # Background script for persistent actions
│   ├── contentScript
│   │   └── contentScript.ts      # Content script for interacting with web pages
│   ├── options
│   │   ├── options.css           # CSS for options page
│   │   └── options.tsx           # React component for options page
│   ├── popup
│   │   ├── popup.css             # CSS for popup page
│   │   └── popup.tsx             # React component for popup page
├── static
│   ├── icon.png                  # Extension icon
│   └── manifest.json             # Manifest file for Chrome extension
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
├── webpack.common.js             # Webpack shared configuration
├── webpack.dev.js                # Webpack development configuration
└── webpack.prod.js               # Webpack production configuration

## Features
- TypeScript Support: The codebase is written in TypeScript for type safety and better development experience.
- Modular Folder Structure: Separates the background scripts, content scripts, popup, and options page to keep the project organized.
Webpack Setup: Uses Webpack to bundle the extension, with separate configurations for development and production.
- React Components: Popup and options pages are implemented using React for easier state management and UI updates.
- Static Assets: Icons and other static files are stored in the static folder.

## Getting Started

### Prerequisites
- Node.js and pnpm installed on your machine

### Installation
Clone the repository:
```bash
git clone https://github.com/your-username/crypto-watch-chrome-extension.git
cd crypto-watch-chrome-extension
```
Install dependencies:

```bash
pnpm install
```

### Development
For development, use the following command to build the project in watch mode:

```bash
pnpm run dev
```
This will generate a dist folder with your unpacked extension files.

### Load the Extension in Chrome
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" in the top-right corner.
Click "Load unpacked" and select the dist folder.

### Building for Production
To create an optimized production build, run:

```bash
pnpm run build
```
The production-ready files will be available in the dist folder.

### File Breakdown
- background.ts: Runs in the background to handle events like alarms or persistent storage.
- contentScript.ts: Runs in the context of the webpage, allowing interaction with page content.
- popup.tsx: The main React component for the extension's popup window.
options.tsx: The main React component for the extension's options page.
- manifest.json: Configuration file defining the extension's permissions, scripts, and UI elements.

### Configuration
- Webpack: Three configuration files (webpack.common.js, webpack.dev.js, webpack.prod.js) for different environments. Adjust these based on your project needs.
- tsconfig.json: TypeScript configuration tailored for this extension template.

### Contributing
Feel free to submit issues or pull requests to improve the project. Contributions are welcome!

### License
This project is licensed under the MIT License.

