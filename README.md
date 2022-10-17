# medical-equipment

## Development

### Setup

1. Clone the repository:

    ```sh
    git clone git@github.com:TomomiKimura/medical-equipment.git
    cd medical-equipment
    ```

2. Change to supported version of Node.js

    ```sh
    nvm use
    ```

    > ℹ️ You may need to install the version if isn't in your computer.

3. Install dependencies

    ```sh
    npm install
    ```

### How-to

#### ...run the projects in dev mode

```sh
npm run dev
```

Access the services from these URLs:

| Service   | URL                   |
| --------- | --------------------- |
| Web app   | http://localhost:3000 |
| Admin app | http://localhost:3001 |
| Storybook | http://localhost:6001 |

## File structure

```
├── .husky                              # husky's configuration file
    ├── pre-commit                      # Shortcut on terminal for husky
├── apps                                # Application files
    ├── [app-name]                      # Admin page application files
        ├──.next                        # Internal files for NEXT.js (Please don't touch!)
        ├── pages                       # Component files for admin page
            ├── _app.tsx                # AdminApp component file
            ├── index.tsx               # AdminApp component file
        ├── .eslintrc.js                # TSLint configuration file
        ├── next.config.js               # Additional NEXT.js configuration files when installed turporepo
        ├── next-env.d.ts               # Additional NEXT.js configuration files when installed turporepo
        ├── package.json                # NEXT.js configuration files
        ├── README.md                   # README file for NEXT.js
        ├── tsconfig.json                # Typescript compiler configuration file for NEXT.js
├── node_modules                        # npm dependencies (don't touch them)
├── packages                            # Configuration files for prettier, tslint, NEXT.js, and React.
    ├── eslint-config-custom             # Configuration file for customizing eslint
        ├── index.js
        ├── package.json                # npm's configuration file for eslint
    ├── tsconfig                         # Configuration file for customizing typescript complier
        ├── base.json                   # Configuration file for customizing typescript complier
        ├── nextjs.json                 # Configuration file for NEXT.js for customizing typescript complier
        ├── package.json                # npm's configuration file for typescript complier
        ├── react-library.json         ?# Configuration file for react for typescript complier
        ├── README.md                   # README file for typescript complier
    ├──  ui                             # User Interface files for storybook
        ├── .storybook                  # Configuration files for storybook
            ├── main.js                 # Configuration files for React for storybook
            ├── preview.js              # This file tells storybook to make css module available from anywhere.
        ├── admin
        ├── node_modules                # npm dependencies for storybook(don't touch them)
        ├── shared                      # A shared file to be used for both admin app and web app of storybook
            ├── Button.module.css       # CSS module file for Button component
            ├── Button.stories.tsx      # File for Button component for storybook
            ├── Button.tsx              # File for Button component props for storybook
            ├── variables.css           # CSS variables for Button component
        ├── types
            ├── css-modules.d.ts        # This tells TypeScript that any time we import a file that has a .module.css
                                          extension, it can expect that file to contain a default export of Record
        ├── web
        ├── package.json                # npm's configuration file for storybook
        ├── tsconfig.json                # Typescript compiler configuration file
├── .editorconfig                        # Editor configuration file
├── .eslintrc.js                        # TSLint configuration file
├── .gitignore                          # Configuration file for git to ignore certain files
├── .lintstagedrc.json                  # Configuration for prettier to the edited file
├── .npmrc
├── .nvmrc                              # This tells which version of node this project uses
├── package.json                        # npm's configuration file
├── package-lock.json                   # npm's with the exact desired dependency tree
├── README.md                           # This file you are reading
├── turbo.json                          # Configuration file for turborepo
├── External Libraries
├── Scratches and Consoles

```
