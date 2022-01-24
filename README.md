# PX2REM

Simple application to convert pixel values to rem, points and percentages.

## Installation

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```bash
yarn
```

## Usage

Just run `start` script.

```bash
yarn start
```

## Packaging

To generate the project package based on the OS you're running on, just run:

```bash
yarn package
```

To generate new icons for the application just run:

```bash
./node_modules/.bin/electron-icon-builder --input=./assets/icon.png --output=./assets/icons/
```

Input file should be 1024px x 1024px or larger. Make sure it is a 1 to 1 aspect ratio on width to height.
For more info [read here](https://github.com/safu9/electron-icon-builder).

## License

[MIT](https://choosealicense.com/licenses/mit/)