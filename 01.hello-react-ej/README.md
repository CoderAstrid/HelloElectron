# The 1st Electron-JS app

## Install yarn
[For windows msi](https://classic.yarnpkg.com/en/docs/install#windows-stable)

```
npm install --global yarn
```
## Install & Create app
CRA (create-react-app) is a package that automatically creates the react development environment with one command line.
Executing the CRA command internally installs React and React-DOM. Instead of installing packages with NPM, you can always create a React execution environment with the latest version of CRA by using NPX as shown below.
### `react` & `electron`
```
yarn create react-app hello-react-ej --template typescript
```
In terminal, move app directory & install electron
```
yarn add electron electron-builder --dev
```
For debugging, can install follow pakages:
```
yarn add electron-is-dev
yarn add concurrently wait-on cross-env --dev
```
- electron-is-dev
Package to check if Electron is running in the development environment.

- concurrently
Instructions that help you execute multiple instructions in parallel.

- wait-on
A cross-platform command that waits until a specific port, file, HTTP resource, etc. is activated.

- cross-env
A command that helps you set environment variables with the same statement regardless of OS such as Windows, Linux, macOS, etc. when running a program in the CLI environment.

### `typescript`

```
yarn add typescript
```
## Configuration

### `tsconfig.json`
<pre>
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",<b>
    "sourceMap": true</b>
  },<b>
  "include": [
    "src",
    "./public/electron.ts"
  ],
  "exclude": ["node_modules"]</b>
}
</pre>
### `package.json`
<pre>
{
  ...,
  "description": "YOUR_DESCRIPTION",
  "author": "AUTHOR",
  "main": "public/electron.js",
  "homepage": "./",
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test",
    "react-eject": "react-scripts eject",
    "start": "concurrently \"cross-env BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "yarn react-build && electron-builder",
    "release": "yarn react-build && electron-builder --publish=always"
  },
  ...
}
</pre>
## Compile & Run
### `Electron.ts`
```
yarn tsc ./public/electron.ts
```
### Run
```
yarn start
```
### Build
```
yarn build
```
## Release
```
yarn release
```
