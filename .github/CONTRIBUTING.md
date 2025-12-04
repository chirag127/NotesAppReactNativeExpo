# Contributing to InkWell

First off, thank you for considering a contribution to InkWell. We are building a world-class, cross-platform note-taking application, and we value every contribution, from documentation updates to major new features.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as GitHub issues. Before creating a bug report, please check our [issues list](https://github.com/chirag127/InkWell-Note-Taking-Mobile-App/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible by filling out the [Bug Report Template](https://github.com/chirag127/InkWell-Note-Taking-Mobile-App/issues/new?template=bug_report.md).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create a new issue using the Feature Request template, providing as much context and detail as possible.

### Your First Code Contribution

Unsure where to begin contributing to InkWell? You can start by looking through `good-first-issue` and `help-wanted` issues:

- **Good first issues** - issues which should only require a few lines of code, and a test or two.
- **Help wanted issues** - issues which should be a bit more involved than `good-first-issue` issues.

### Pull Requests

The process described here has several goals:
- Maintain project quality
- Fix problems that are important to users
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1.  **Fork and Clone:** Fork the repository to your own GitHub account and then clone it to your local machine.
    bash
    git clone https://github.com/<your-username>/InkWell-Note-Taking-Mobile-App.git
    cd InkWell-Note-Taking-Mobile-App
    

2.  **Set Up:** Install all dependencies.
    bash
    # Using yarn
    yarn install
    

3.  **Create a Branch:** Create a new branch from `main`. Use a descriptive name.
    bash
    # Examples
    git checkout -b feat/add-rich-text-editor
    git checkout -b fix/login-button-alignment
    

4.  **Code:** Make your changes to the codebase.

5.  **Lint and Format:** Ensure your code adheres to our style guidelines. We use ESLint and Prettier.
    bash
    yarn lint
    yarn format
    

6.  **Test:** Add or update tests for your changes. All tests must pass.
    bash
    yarn test
    

7.  **Commit:** Commit your changes using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This is mandatory.
    bash
    # Examples
    git commit -m "feat: Implement note tagging functionality"
    git commit -m "fix: Correct layout issue on Android tablets"
    git commit -m "docs: Update contribution guidelines"
    

8.  **Push:** Push your changes to your fork.
    bash
    git push origin feat/your-feature-branch
    

9.  **Open a Pull Request:** Open a pull request against our `main` branch. Fill out the [Pull Request Template](https://github.com/chirag127/InkWell-Note-Taking-Mobile-App/blob/main/.github/PULL_REQUEST_TEMPLATE.md) completely. Link the PR to any relevant issues.

## Development Environment Setup

- **Node.js:** Use the latest LTS version.
- **Yarn:** Use the latest stable version of Yarn Classic.
- **Expo CLI:** `npm install -g expo-cli`
- **Mobile Simulators:** Xcode (for iOS) or Android Studio (for Android).

To start the development server:
bash
npx expo start


## Architectural Principles

To maintain code quality and consistency, we adhere to the following principles:

- **SOLID:** Our codebase follows SOLID principles to ensure it is maintainable, scalable, and robust.
- **DRY (Don't Repeat Yourself):** Avoid code duplication by creating reusable components and services.
- **Clean Code:** Write readable, simple, and self-documenting code.
- **TypeScript Strict Mode:** All contributions must be strictly typed to prevent common errors.

By contributing to InkWell, you agree that your contributions will be licensed under its [CC BY-NC 4.0 License](./LICENSE).
