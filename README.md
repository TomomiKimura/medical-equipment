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

#### ...fix "Port XXXX is already in use." error

```sh
./scripts/kill-servers.sh
```

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
├── .husky                              # husky's configuration files
│   └── pre-commit                      # Script that husky runs before a git commit is made
├── apps                                # Contains individual applications
│   └── [app-name]                      # Contains the source code for the application "[app-name]" (e.g. admin, web)
│       ├──.next                        # Next.js temporary files (DON'T TOUCH!)
│       ├── pages                       # Contains page components for Next.js application
│       │   ├── _app.tsx                # Customizes Next.js application (e.g. loading global css)
│       │   └── index.tsx               # Entry point (starting file) for Next.js
│       ├── .eslintrc.js                # ESLint configuration file for app [app-name]
│       ├── next.config.js              # Next.js configuration file. See: https://nextjs.org/docs/api-reference/next.config.js/introduction
│       ├── next-env.d.ts               # TypeScript definition file (adds types) for Next.js (DON'T TOUCH!)
│       ├── package.json                # Node.js package configuration file for [app-name] (dependencies, scripts, etc.)
│       ├── README.md                   # README.md file for [app-name]
│       └── tsconfig.json               # Typescript configuration file for [app-name]
├── node_modules                        # Node.js dependencies (DON'T TOUCH!)
├── packages                            # Contains all Node.js packages that AREN'T applications (libraries, configuration projects, etc.)
│   ├── eslint-config-custom            # Node.js package that contains shared configuration for ESLint. This can be used by other packages.
│   │   └── index.js                    # Entry point of eslint-config-custom
│   ├── tsconfig                        # Node.js package that contains shared configuration for TypeScript. Other packages can use this.
│   │   ├── base.json                   # Contains general TypeScript configuration
│   │   ├── nextjs.json                 # Contains Next.js-specific TypeScript configuration
│   │   └── react-library.json          # Contains React-specific TypeScript configuration
│   └──  ui                             # Package that contains the shared UI components that other packages will use (like web, admin, etc.)
│       ├── .storybook                  # Storybook
│       │   ├── main.js                 # Controls Storybook's server. Plugins, and main configuration is done here.
│       │   └── preview.js              # Contains configuration that will affect how ALL stories are rendered (e.g. global css, etc.)
│       ├── admin                       # Admin-specific UI components.
│       ├── shared                      # Shared UI components (both web, admin and maybe other packages use)
│       │   ├── Button                  # Directory for the Buttom component
│       │   │   ├── Button.module.css   # CSS module for Button component
│       │   │   ├── Button.stories.tsx  # Stories for Button component
│       │   │   └── Button.tsx          # Button component
│       │   └── variables.css           # Shared CSS variables (used by all components and the theme)
│       ├── types                       # Contains definition files for UI package
│       │   └── css-modules.d.ts        # TypeScript definition file that adds types for css modules
│       └── web                         # Web-specific UI components
├── .editorconfig                       # Configuration file for IDEs that sets things like amount of spaces, space vs tabs, etc... See: https://editorconfig.org/
├── .eslintrc.js                        # ESLint configuration file for the entire repository (medical-equipment)
├── .gitignore                          # Configuration file for git to ignore certain files
├── .lintstagedrc.json                  # Configuration file for lint-staged. lint-staged lints (checks for errors, format, etc.) files that are going to be committed.
├── .nvmrc                              # Contains the version of Node.js this project should use (read by `nvm use`)
├── package.json                        # Node.js package configuration file
└── package-lock.json                   # npm configuration file that tells npm the exact version of packages that need to be installed (DON'T TOUCH!)
```
