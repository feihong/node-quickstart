# Node Quickstart

A very simple Node.js example.

## Installation

### Mac & Linux

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm ls-remote
nvm install 8.0.0
nvm alias default 8.0.0
nvm use default
curl -o- -L https://yarnpkg.com/install.sh | bash
```

Add to profile:

```
export PATH=$PATH:`yarn global bin`
```

Note: You can also install yarn via brew on Mac, but that will also install node via brew, which is probably not what you want if you already have nvm installed.

## Upgrading

### Mac & Linux

```
nvm ls-remote
nvm install [latest-version]
nvm alias default [latest-version]
nvm use default
```

## Create a project

Generate a `package.json` file containing metadata about your project.

```
yarn init -y
```

## Adding dependencies

Download dependencies and add them to `package.json`.

```
yarn add koa koa-request koa-route
```

## Run the app

```
node app.js
```


## Sources

- [The best way to install Node.js](http://yoember.com/nodejs/the-best-way-to-install-node-js/)
- [Nvm install script](https://github.com/creationix/nvm#install-script)
- [Yarn install script](https://yarnpkg.com/en/docs/install#alternatives-tab)
