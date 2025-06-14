# Code Reviewer Backend

A Node.js backend service that leverages Google Gemini AI to provide expert code reviews. The AI acts as a senior code reviewer, analyzing submitted code, identifying issues, and suggesting improvements for efficiency, security, and maintainability.

## Features

- Accepts code snippets via a REST API
- Uses Google Gemini AI with a detailed system instruction for high-quality code reviews
- Returns actionable, constructive feedback and suggested code improvements

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A valid [Google Gemini API Key](https://aistudio.google.com/app/apikey)

## Setup

1. **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd Code-Reviewer/Backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the `Backend` directory with the following content:
    ```
    GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
    ```

4. **Start the server:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    nodemon server.js
    ```

    The server will run at [http://localhost:3000](http://localhost:3000).

## API Usage

### Endpoint

`POST /ai/get-review`

#### Request Body

```json
{
  "code": "<your code snippet here>"
}
```

#### Example

```sh
curl -X POST http://localhost:3000/ai/get-review \
  -H "Content-Type: application/json" \
  -d '{"code": "function add(a, b) { return a + b; }"}'
```

#### Response

The API responds with a detailed code review, including:
- Identified issues
- Suggested fixes
- Explanations and best practices

## Project Structure

```
Backend/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── ai.controller.js
│   ├── routes/
│   │   └── ai.route.js
│   └── services/
│       └── ai.service.js
├── server.js
├── package.json
└── .env
```

## Customizing the AI Reviewer

The system instruction for the AI reviewer is defined in `src/services/ai.service.js`. You can modify this instruction to tailor the review style or focus areas as needed.

---

**Note:** This project is for educational and prototyping purposes. Always review AI-generated feedback before applying changes to

