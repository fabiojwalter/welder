Welder for Visual studio code
===========================

Visual Studio Code snippet plugin containing some very useful features.

<!-- TOC -->

- [Welder for Visual studio code](#welder-for-visual-studio-code)
- [1. Features](#1-features)
- [2. Setup (in 2 easy steps)](#2-setup-in-2-easy-steps)
- [3. Contribution guidelines](#3-contribution-guidelines)
- [4. Changelog](#4-changelog)
- [5. License](#5-license)
- [6. Documentation](#6-documentation)

<!-- /TOC -->


# 1. Features

Snippets for:
- SQL Migrations
- Sequelize Models
- Express Controllers
- Express Routers
- Validators
- Mocha tests (mocha, supertest, chai, chance)

![Plugin in action](images/welder.gif)


# 2. Setup (in 2 easy steps)

1. Install plugin
  1. Press `F1`, paste `ext install Welder` & then press `enter` (or)
  2. Goto extensions by pressing `Ctrl-Shift-X` (Windows/Linux) or `Cmd-Shift-X` (Mac) & Search for `Welder`, click on install
2. Reload your editor
3. **You are good to go...**

# 3. Contribution guidelines

1. Clone this repo
2. To modify snippets, you can find the templates for each snippet under `src/generators/`. These Html snippets must follow [sublime text snippet](http://docs.sublimetext.info/en/latest/extensibility/snippets.html) format. There is no need to update `snippets.json` manually. The build will take care of regenerating this file from template files.
3. If you need to change `README.md` (or) `package.json`, you should modify their templates (which are used to generate the root level files) under `files/`. For eg., If you want `package.json` at the root to be modified, you should change `package-template.json` under `files/`. These root level `package.json` & `README.md` are regenerated for every build from their corresponding templates.
4. To customize/create other generators, look at `source/util/config.js` or create your own customized generator as above mentioned. 
5. Send me a pull request

# 4. Changelog
See [here](CHANGELOG.md)

# 5. License

Welder for Visual Studio Code plugin is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

**Enjoy!**

# 6. Documentation
Description|Shortcut
:---|:---
MaxxiForge - Welder snippets express controller | welder-express-controller
MaxxiForge - Welder snippets express service | welder-express-service
MaxxiForge - Welder snippets model boolean-field | welder-model-boolean-field
MaxxiForge - Welder snippets model default | welder-model-default
MaxxiForge - Welder snippets model string-field | welder-model-string-field
MaxxiForge - Welder snippets sql add_column_boolean | welder-sql-add_column_boolean
MaxxiForge - Welder snippets sql add_column_varchar | welder-sql-add_column_varchar
MaxxiForge - Welder snippets sql create_search_index | welder-sql-create_search_index
MaxxiForge - Welder snippets sql create_table | welder-sql-create_table
MaxxiForge - Welder snippets sql create_unique_index | welder-sql-create_unique_index
MaxxiForge - Welder snippets sql fk | welder-sql-fk
MaxxiForge - Welder snippets sql fk_deferred | welder-sql-fk_deferred
