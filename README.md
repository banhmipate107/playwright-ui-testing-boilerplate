## 🌟 Sample boilerplate structure using Playwirght UI tests on the LambdaTest Playground [page](https://www.lambdatest.com/selenium-playground/):

### **🗂️ Project structure**

```
project
│
└───mock-data - contain test data
│   │   path.jpeg
│   │   user-data.ts
│
│───pages - contain pages' components and functions to interact them
│   │   download-file.ts
│   │   drag-drop-sliders.ts
│   │   ...
│
└───tests - contains automation test cases
│   │   input-form.spec.ts
│   │   interact-file.spec.ts
└───package.json
└───playwright.config.ts
└───README.md
```

#### **Clone repository**

    git clone https://github.com/banhmipate107/learn-playwright.git

#### **Install dependencies**

    npm install

#### **To run tests only on Firefox**

    npm run firefox

#### **To run tests only on Chromium**

    npm run chromium

#### **To run tests regarding forms**

    npm run input-form

#### **To run tests regarding files**

    npm run interact-file

#### **To open Playwright's report**

    npx playwright show-report

#### **To open Allure report**

    npm run allure-report

#### **To download the latest version**

    npm run reinstall
