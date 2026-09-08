# To create next project use below command: 
- npm create next-app@latest <app-name>

# To implement testing in next js project
1. cd <app-name>
2. mkdir tests
2. npm install -D @playwright/test
3. npm exec playwright install

# To run test
- npm exec playwright test

# Edit package.json for test
- add script in package.json
    "scripts": {
        "test": "playwright test",
        "test:ui": "playwright test --ui",
        "test:ui:debug": "playwright test --ui --debug"
    },

# To run test
- npm run test:e2e