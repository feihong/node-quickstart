# Node Quickstart

A very simple Node.js example.

## Installation

### Mac

```
brew install node
```

### Linux

```
cd ~/Downloads
wget -O nodejs.tar.xz https://nodejs.org/dist/v7.3.0/node-v7.3.0-linux-x64.tar.xz
sudo tar -C /usr/local --strip-components 1 -xJf nodejs.tar.xz
```

## Upgrading

### Mac

```
brew upgrade node
```

### Linux

Run the same commands as you did for installation, except set the version number to the current release displayed on [nodejs.org](https://nodejs.org/).

## Managing multiple node.js versions

Depending on your needs, you may need to manage multiple node.js versions. For that, you should install nvm:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

## Create a project

Generate a `package.json` file containing metadata about your project.

```
npm init -y
```

## Adding dependencies

Download a dependency and add it to `package.json`.

```
npm install --save-dev koa
```

## Run the app

```
node app.js
```
