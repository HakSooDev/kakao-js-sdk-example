# Kakao JavaScript SDK Integration

This repository provides an example of integrating the Kakao JavaScript SDK into a web application for user authentication and user information retrieval.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Important Notes](#important-notes)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Introduction

This project demonstrates how to use the Kakao JavaScript SDK to enable user authentication and retrieve user information from Kakao's API. It includes a simple HTML page (`page.html`) with buttons to perform various actions, such as logging in, requesting access tokens, fetching user information, and more.

The JavaScript code (`kakao.js`) serves as a practical guide for integrating the Kakao JavaScript SDK features into your own web applications.

## Prerequisites

Before you start, ensure you have the following:

- A Kakao Developer account to obtain an API key.
- A registered application on the Kakao Developer platform with appropriate settings, including a valid redirect URI.
- A web server, local or remote, to host the HTML and JavaScript files.

## Getting Started

1. **Clone this repository** to your local machine:

    ```bash
    git clone https://github.com/your-username/kakao-js-sdk-example.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd kakao-js-sdk-example
    ```

    *Note*: Use the appropriate terminal commands based on your operating system (e.g., Command Prompt on Windows, Terminal on macOS or Linux).

3. **Replace the placeholders** in `kakao.js` with your actual Kakao API key and redirect URI:

    ```javascript
    const KAKAO_API_KEY = "YOUR_KAKAO_API_KEY";
    const KAKAO_REDIRECT_URI = "YOUR_REDIRECT_URI";
    ```

4. **Run a web server** and open `page.html` in your browser.

## Usage

The `page.html` file provides a list of actions you can perform:

1. Click "카카오 로그인" to initiate a Kakao login.
2. Click "토큰 가져오기" to request an access token after logging in.
3. Click "유저 정보" to fetch user information using the access token.
4. **Note**: To use "OIDC 정보," ensure that OpenID Connect Activation is enabled in your Kakao Developer application settings. Click "OIDC 정보" to retrieve user information via the OpenID Connect endpoint.
5. Click "카카오 로그아웃" to log out of the Kakao session.
6. Click "카카오 연결해제" to unlink the Kakao account from the application.

## Important Notes

- This project is intended for educational and demonstration purposes. It's crucial to handle sensitive information securely in a production environment.
- Follow Kakao's official documentation and recommended practices for implementing user authentication and data handling.

## Acknowledgments
This project takes inspiration from the official [Kakao JavaScript SDK documentation](https://developers.kakao.com/docs/latest/en/kakaologin/js).

## License

This project is licensed under the [MIT License](LICENSE).

---
