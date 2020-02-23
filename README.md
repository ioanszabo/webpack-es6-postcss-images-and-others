ES6 project-starter boilerplate
==========
This is boilerplate to start your own project. 
It's purpose is to to save you from configuring the environment.
If you encounter any issues, please let me know to fix them, or you can 
fix and make a pull request. Thanks.

Boilerplate treats the following items:
- ES6 imports and features
- Webpack
- Next CSS
- Basscss library
- ESLint standard
- Prettier
- Dotenv
- Fetch polyfill
- Husky for git hooks
- Images (file-loader)

### :gear: Installation
`mkdir <your project name>`
`git clone https://github.com/ioanszabo/webpack-es6-postcss-images-and-others.git .`
`cd <ypur project name>`
`yarn install`

At this point you can start write your project.

### :bookmark_tabs: Browser support
It is build for browsers that support all modern features.
Please feel free to adapt it to your custom needs.

### :electric_plug: Dependencies
Check package.json file.

### :memo: Documentation
> **NOTICE**: All commands must be run from your project root directory.

The following script are available:

`yarn start` - starts dev server

`yarn build` - build yor project in dist/ directory

`yarn lint` - run the linter to check for errors and coding style issues

To run prettier execute the following command:

`node_modules/.bin/prettier ./src/*.js --check`
For more info please check official documentation.

> **NOTICE**: When you run `git commit` command the pre-commit hook will run.
>
> To disable it just remove from package.json file the following lines,
```
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.js": [
        "yarn lint",
        "prettier --write",
        "git add"
    ]
},
```
>remove the following dependencies:
``` 
"husky": "^4.2.3",
"lint-staged": "^10.0.7",
```
> and remove pre-commit hook from .git/hooks directory

### :scroll: License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

