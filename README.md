### X Post AI Agent (JavaScript)
This project implements an AI agent built in JavaScript that creates and posts content to X using the Modal Context Protocol for state management. The agent integrates with the X API v2 to programmatically post tweets, handling OAuth 1.0a authentication and resolving common issues like 403 Forbidden errors.

## Features
- AI-Driven Content Creation: Generates tweet content using an AI model (customizable).

- Modal Context Protocol: Manages application state and interactions in a modular, context-aware way.

- X API Integration: Posts tweets via the X API v2 using JavaScript.

- Error Handling: Addresses 403 Forbidden errors by configuring correct permissions and tokens.

- Local Testing: Supports development with a Callback URL (e.g., http://localhost:3001).
  

## Prerequisites
- Node.js 18+: Ensure Node.js is installed.
- X Developer Account: Access to the X Developer Portal with a project and app.
- API Credentials: API Key, API Secret, Access Token, and Access Token Secret from the X Developer Portal.
- Dependencies: Install required npm packages (see Installation).

## Installation
```Clone the Repository:
  git clone https://github.com/yourusername/x-post-ai-agent.git
  cd x-post-ai-agent
```

```Install Dependencies:
  npm install
```

Configure Environment Variables:
Create a .env file in the project root:
```.env
  X_CONSUMER_KEY=your_api_key
  X_CONSUMER_SECRET=your_api_secret
  X_ACCESS_TOKEN=your_access_token
  X_ACCESS_TOKEN_SECRET=your_access_token_secret
```
Replace the values with your X API credentials from the X Developer Portal.

Contributing
Contributions are welcome! 
