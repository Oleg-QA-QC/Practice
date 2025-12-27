# AutoPractice 🚀

## Project Purpose

This is a web application automated testing project using **WebdriverIO** and the **Page Object Model (POM)** pattern. The project is designed for testing the [DemoQA](https://demoqa.com/) website and demonstrating test automation skills.

### Main Features:
- ✅ Web form automation testing
- ✅ Checkbox testing and state validation
- ✅ Web tables operations (adding and removing users)
- ✅ Page Object Model pattern implementation
- ✅ Data validation using different approaches

---

## Project Structure

```
AutoPractice/
│
├── test/
│   ├── pageobject/              # Page Object classes
│   │   ├── actions.page.js      # Base actions
│   │   ├── elements.page.js     # Page elements
│   │   ├── textBox.page.js      # Text box page
│   │   └── webTables.page.js    # Web tables page
│   │
│   └── specs/                   # Test specifications
│       └── task1.js             # Main test file
│
├── .env                         # Configuration variables (test data)
├── .gitignore                   # Git ignored files
├── wdio.conf.js                 # WebdriverIO configuration
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

### Structure Description:

- **test/pageobject/** - contains Page Object classes for interacting with page elements
- **test/specs/** - contains test scenarios (specs)
- **.env** - file with test data (name, email, addresses, etc.)
- **wdio.conf.js** - configuration for running WebdriverIO tests

---

## Installation

### Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (installed with Node.js)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Oleg-QA-QC/Practice.git
   cd AutoPractice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Check the `.env` file:**
   
   Make sure the `.env` file exists in the root directory with the following variables:
   ```env
   NAME = John
   LAST_NAME = Doe
   EMAIL = john@doe.com
   AGE = 30
   SALARY = 50000
   DEPARTMENT = Engineering
   CURRENT_ADDRESS = 123 Main St, Springfield
   PERMANENT_ADDRESS = 456 Elm St, Shelbyville
   ```

   You can modify these values according to your needs.

---

## How to Run

### Run All Tests

To run all tests, execute the command:

```bash
npm run wdio
```

### Run a Specific Test File

```bash
npx wdio run wdio.conf.js --spec=test/specs/task1.js
```

### What Happens During Execution:

1. WebdriverIO launches the browser (Chrome by default)
2. Tests from `task1.js` are executed:
   - Text field completion
   - Checkbox selection
   - Adding and removing users in web tables
3. Test results are displayed in the console
4. Browser automatically closes after execution

---

## Technologies

The project uses the following technologies:

- **[WebdriverIO](https://webdriver.io/)** v9.21.0 - test automation framework
- **[Mocha](https://mochajs.org/)** - testing framework
- **[dotenv](https://www.npmjs.com/package/dotenv)** - environment variable management
- **Page Object Model (POM)** - design pattern for organizing test code

---

## Test Scenarios

### 1. Text Box Testing
- Form completion with name, email, current and permanent address
- Validation of displayed entered data

### 2. Checkbox Testing
- Expanding element tree
- Selecting "WorkSpace" checkbox
- Verifying active checkbox state

### 3. Web Tables Operations
- Adding a new user
- Validating data in the table
- Removing user
- Verifying user absence after removal

---

## Useful Commands

```bash
# Install dependencies
npm install

# Run tests
npm run wdio

# Check Node.js version
node --version

# Check npm version
npm --version
```

---

## Author

**Oleg Zagorodnii**
- GitHub: [@Oleg-QA-QC](https://github.com/Oleg-QA-QC)

---

## License

This project was created for educational and practical purposes.

---

## Support

If you have any questions or issues, please create an [Issue](https://github.com/Oleg-QA-QC/Practice/issues) in the repository.
