# 📝 Task Manager - To-Do App

A clean, responsive React.js To-Do application built with modern web technologies. Features a minimalist black and white design that works seamlessly across all devices.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-orange?logo=css3)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-green?logo=html5)

## ✨ Features

- **🎯 Task Management**: Add, delete, and mark tasks as complete
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Clean Design**: Minimalist black and white theme with smooth animations
- **♿ Accessibility**: High contrast mode, keyboard navigation, and screen reader support
- **🌙 Smart Themes**: Automatic dark mode detection and high contrast support
- **⚡ Performance**: Optimized React components with efficient state management
- **🔒 Data Persistence**: Tasks stored in local state (can be extended with localStorage)

## 🚀 Live Demo

[Try the app here](https://arklogamer.github.io/mulearn-todo) - Live on GitHub Pages!

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARKLOGAMER/mulearn-todo.git
   cd mulearn-todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### Adding Tasks
- Type your task in the input field
- Press Enter or click "Add Task" button
- Tasks are automatically validated (empty tasks won't be added)

### Managing Tasks
- **Complete**: Check the checkbox to mark as done
- **Delete**: Click the × button to remove a task
- **View Progress**: See total, completed, and pending tasks at the bottom

### Keyboard Shortcuts
- **Enter**: Add new task
- **Tab**: Navigate between elements
- **Space**: Toggle task completion


## 🏗️ Project Structure

```
mulearn-todo/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── App.jsx            # Main React component
│   ├── App.css            # Component-specific styles
│   ├── index.jsx          # React entry point
│   └── index.css          # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App |


### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://arklogamer.github.io/mulearn-todo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**Made with ❤️ using React.js**

*Last updated: December 2024*
