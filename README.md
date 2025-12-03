# Swag_Labs_Tests_POM

[![Playwright Logo](https://img.shields.io/badge/Playwright-E2E%20Testing-brightgreen?logo=playwright&style=for-the-badge)](https://playwright.dev/)
[![Design Pattern](https://img.shields.io/badge/Pattern-Page%20Object%20Model-yellow?style=for-the-badge)]()
[![Target Website](https://img.shields.io/badge/Target-Swag%20Labs%20Demo-informational?style=for-the-badge)](https://www.saucedemo.com/)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript&style=for-the-badge)]()

## Project Overview

This repository contains a comprehensive suite of automated tests for the **Swag Labs** e-commerce demo website.

The project is structured around the **Page Object Model (POM)** pattern, ensuring test scripts are modular, highly readable, and easily maintainable. This approach is ideal for managing complex user flows in e-commerce applications.

The test suite covers critical end-to-end workflows, including:

* **User Authentication:** Successful and unsuccessful login scenarios.
* **Product Management:** Adding items to the shopping cart.
* **Checkout Process:** Completing the entire purchase flow, from cart review to confirmation.
* **Filters and Sorting:** Verifying product list functionality.

---

## Technology Stack

* **Playwright** - The chosen framework for fast, cross-browser test execution.
* **TypeScript** - Used for strong typing, leading to more robust and scalable test code.
* **Page Object Model (POM)** - The architectural foundation for separating test logic from page structure.
* **Node.js & npm** - The execution environment and dependency manager.

---

## Prerequisites

To run this project, you need the following installed:

* **Node.js** (version 16 or newer recommended)
* **npm** or **Yarn**
* **Git**

---

## Installation and Execution

Follow these steps to set up and run the test suite.

### 1. Clone the Repository

```bash
git clone [https://github.com/ivan-milutinovic/Swag_Labs_Tests_POM.git](https://github.com/ivan-milutinovic/Swag_Labs_Tests_POM.git)
cd Swag_Labs_Tests_POM

2. Install Dependencies
Install all necessary packages and the required Playwright browser drivers:
Bash
npm install
npx playwright install

3. Running the Tests
Execute the full suite of e-commerce tests:
Bash
npx playwright test

Viewing in UI Mode (for Interactive Debugging):
Bash
npx playwright test --ui

4. Viewing the Test Report
Access the detailed HTML report after test completion:
Bash
npx playwright show-report

Project Structure
The project structure is optimized for the Page Object Model, promoting separation of concerns:

.
├── pages/                  # All Page Object Model classes (e.g., LoginPage, CheckoutPage)
├── tests/                  # Test files defining the scenarios (e.g., checkout.spec.ts)
├── data/                   # Test data (e.g., user credentials, product lists)
├── playwright.config.ts    # Main Playwright configuration
└── package.json            # Dependencies and scripts
