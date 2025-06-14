# Code Reviewer Frontend

This is the frontend React application for the **Code Reviewer** project. It provides a user-friendly interface for submitting code snippets and receiving AI-powered code reviews in real time.

---

## Features

- **Live Code Editor:**  
  Write or paste your code in a syntax-highlighted editor powered by [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) and [PrismJS](https://prismjs.com/).

- **AI Code Review:**  
  Submit your code to the backend with a single click and receive a detailed, Markdown-formatted review from an AI code reviewer.

- **Markdown Rendering:**  
  Reviews are rendered with [react-markdown](https://github.com/remarkjs/react-markdown) and syntax highlighting for easy reading.

- **Responsive, Modern UI:**  
  Clean, dark-themed layout with a split view for code input and review output.

---

## File Overview

### `App.jsx`

- Implements the main UI and logic.
- Manages code input and review output using React state.
- Sends code to the backend API (`/ai/get-review`) via Axios.
- Renders the code editor and the Markdown review output.

### `App.css`

- Styles the main layout with a left (editor) and right (review) pane.
- Applies dark themes, rounded corners, and responsive spacing.
- Styles the review button and code blocks for a modern look.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd Code-Reviewer/Frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

> **Note:**  
> The frontend expects the backend API to be running at `http://localhost:3000`.  
> Make sure to start the backend server as well.

---

## Usage

1. Enter or paste your code in the left editor pane.
2. Click the **Review** button.
3. View the AI-generated review in the right pane, formatted in Markdown with syntax highlighting.

---

## Customization

- **Editor Language:**  
  The editor is set up for JavaScript by default. To support other languages, adjust the `prism.highlight` call and import the relevant PrismJS language components.

- **Styling:**  
  Modify `App.css` to change the color scheme, layout, or responsiveness as desired.

---

## Dependencies

- [React](https://react.dev/)
- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
- [PrismJS](https://prismjs.com/)
- [Axios](https://axios-http.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- [highlight.js](https://highlightjs.org/)

---

## License

MIT

---

**Happy Reviewing! 🚀**
