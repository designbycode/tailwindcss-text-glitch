<a href="#installation" width="100%">
<img src="banner.svg" alt="Title banner"/>
</a>

## Tailwind CSS Text Glitch

[![npm version](https://badge.fury.io/js/@designbycode%2Ftailwindcss-text-glitch.svg)](https://badge.fury.io/js/@designbycode%2Ftailwindcss-text-glitch)
![npm](https://img.shields.io/npm/dt/%40designbycode/tailwindcss-text-glitch)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Ftailwindcss-text-glitch)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Ftailwindcss-text-glitch)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-text-glitch?style=social)](https://github.com/DesignByCode/tailwindcss-text-glitch/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/tailwindcss-text-glitch.svg?style=flat)](http://hits.dwyl.com/designbycode/tailwindcss-text-glitch)

[![NPM](https://nodei.co/npm/@designbycode/tailwindcss-text-glitch.png)](https://nodei.co/npm/@designbycode/tailwindcss-text-glitch/)

The Tailwind CSS plugin generates a glitch effect on text elements.

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Usage](#usage)
* [Utilities](#utilities)
* [Applying Text-Glitch Effect](#applying-text-glitch-effect)
    * [Available duration values for glitch effect](#available-duration-values-for-glitch-effect)
* [Configuration](#configuration)
* [Example](#example)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Installation

To use this plugin, you need to install it via pnpm, npm or yarn.

#### Using pnpm

```bash
pnpm add -D @designbycode/tailwindcss-text-glitch
```

#### Using npm

```bash
npm install --save-dev @designbycode/tailwindcss-text-glitch
```

#### Using yarn

```bash
yarn add -D @designbycode/tailwindcss-text-glitch
```

## Usage

Once the plugin is installed, you can enable it in your Tailwind CSS configuration file. Usually, this file is named tailwind.config.js.

```javascript
module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-text-glitch"),
    ],
};
```

## Utilities

The plugin generates several utility classes for applying text glitch effects.

## Applying Text-Glitch Effect

To make it work you only need to add the class of ```.text-glitch``` to you html. The rest off the classes is just modifiers.

```html

<div class="text-glitch"></div>
```

#### Available duration values for glitch effect

| Key    | Value | Full Class                   |
|:-------|:------|:-----------------------------| 
| fast   | 1s    | .text-glitch-duration-fast   |
| normal | 3s    | .text-glitch-duration-normal |
| slow   | 5s    | .text-glitch-duration-slow   |

## Configuration

The plugin allows you to customize the text-glitch by modifying the theme object in your Tailwind CSS configuration file.

```javascript
// tailwind.config.js

module.exports = {
    // ...other configurations
    plugins: [
        // ...other plugins
        require("@designbycode/tailwindcss-text-glitch"),
    ],
    theme: {
        duration: {
            fast: "1s",
            normal: "3s",
            slow: "5s",
        },
    },
};

```

## Example

Here's an example of how you can use the utility classes to apply text-glitch:

```html

<div class="text-glitch">
    Glitch Effect
</div>

```

Change duration speed of effect by using duration modifiers.

```html

<div class="text-glitch text-glitch-duration-slow">
    Glitch Effect
</div>

```

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

## Acknowledgments

- This plugin is inspired by the needs of web developers using Tailwind CSS.
- Special thanks to the Tailwind CSS team for creating such an amazing framework.











