# PX2REM

Simple application to convert points, pixels, percentage and rem interchangeably with a simple and clean interface.

This application was created to be a companion app to any developer to aid them on their daily tasks of converting high fidelity designs into working web sites, WPA or native apps.
Some popular design tools such as sketch work mainly with pixel values, but when building you may (rightfully so) want to change this to a more flexible and accessible unit for you and your users.

With this application you will be able to convert from:
- PX to %
- PT to %
- REM to %
- PX to PT
- % to PT
- REM to PT
- PX to REM
- % to REM
- PT to REM

Would you like us to support more units? Feel free to let us know by creating a ticket [here](https://github.com/Mario-Duarte/PX2Rem/issues).

## Development Installation

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```bash
yarn
```

### Usage

Just run `start` script.

```bash
yarn start
```

### Packaging the application

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

## Contributors
[Mario Duarte](https://github.com/Mario-Duarte) - Full stack developer </br>
[Aleex Caires](https://github.com/AleexCaires) - Frontend developer

## License of use

[MIT](/LICENSE.md)