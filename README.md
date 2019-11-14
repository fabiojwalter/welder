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
MaxxiForge - Welder snippets model default | `welder-model-default`
MaxxiForge - Welder snippets sql create_search_index | `welder-sql-create_search_index`
MaxxiForge - Welder snippets sql create_table | `welder-sql-create_table`
MaxxiForge - Welder snippets sql create_unique_index | `welder-sql-create_unique_index`
MaxxiForge - Welder snippets sql fk | `welder-sql-fk`
Font Awesome fa-500px | `fa-fa-500px`
Font Awesome fa-adjust | `fa-fa-adjust`
Font Awesome fa-adn | `fa-fa-adn`
Font Awesome fa-align-center | `fa-fa-align-center`
Font Awesome fa-align-justify | `fa-fa-align-justify`
Font Awesome fa-align-left | `fa-fa-align-left`
Font Awesome fa-align-right | `fa-fa-align-right`
Font Awesome fa-amazon | `fa-fa-amazon`
Font Awesome fa-ambulance | `fa-fa-ambulance`
Font Awesome fa-anchor | `fa-fa-anchor`
Font Awesome fa-android | `fa-fa-android`
Font Awesome fa-angellist | `fa-fa-angellist`
Font Awesome fa-angle-double-down | `fa-fa-angle-double-down`
Font Awesome fa-angle-double-left | `fa-fa-angle-double-left`
Font Awesome fa-angle-double-right | `fa-fa-angle-double-right`
Font Awesome fa-angle-double-up | `fa-fa-angle-double-up`
Font Awesome fa-angle-down | `fa-fa-angle-down`
Font Awesome fa-angle-left | `fa-fa-angle-left`
Font Awesome fa-angle-right | `fa-fa-angle-right`
Font Awesome fa-angle-up | `fa-fa-angle-up`
Font Awesome fa-apple | `fa-fa-apple`
Font Awesome fa-archive | `fa-fa-archive`
Font Awesome fa-area-chart | `fa-fa-area-chart`
Font Awesome fa-arrow-circle-down | `fa-fa-arrow-circle-down`
Font Awesome fa-arrow-circle-left | `fa-fa-arrow-circle-left`
Font Awesome fa-arrow-circle-o-down | `fa-fa-arrow-circle-o-down`
Font Awesome fa-arrow-circle-o-left | `fa-fa-arrow-circle-o-left`
Font Awesome fa-arrow-circle-o-right | `fa-fa-arrow-circle-o-right`
Font Awesome fa-arrow-circle-o-up | `fa-fa-arrow-circle-o-up`
Font Awesome fa-arrow-circle-right | `fa-fa-arrow-circle-right`
Font Awesome fa-arrow-circle-up | `fa-fa-arrow-circle-up`
Font Awesome fa-arrow-down | `fa-fa-arrow-down`
Font Awesome fa-arrow-left | `fa-fa-arrow-left`
Font Awesome fa-arrow-right | `fa-fa-arrow-right`
Font Awesome fa-arrow-up | `fa-fa-arrow-up`
Font Awesome fa-arrows | `fa-fa-arrows`
Font Awesome fa-arrows-alt | `fa-fa-arrows-alt`
Font Awesome fa-arrows-h | `fa-fa-arrows-h`
Font Awesome fa-arrows-v | `fa-fa-arrows-v`
Font Awesome fa-asterisk | `fa-fa-asterisk`
Font Awesome fa-at | `fa-fa-at`
Font Awesome fa-backward | `fa-fa-backward`
Font Awesome fa-balance-scale | `fa-fa-balance-scale`
Font Awesome fa-ban | `fa-fa-ban`
Font Awesome fa-bar-chart | `fa-fa-bar-chart`
Font Awesome fa-barcode | `fa-fa-barcode`
Font Awesome fa-bars | `fa-fa-bars`
Font Awesome fa-battery-empty | `fa-fa-battery-empty`
Font Awesome fa-battery-full | `fa-fa-battery-full`
Font Awesome fa-battery-half | `fa-fa-battery-half`
Font Awesome fa-battery-quarter | `fa-fa-battery-quarter`
Font Awesome fa-battery-three-quarters | `fa-fa-battery-three-quarters`
Font Awesome fa-bed | `fa-fa-bed`
Font Awesome fa-beer | `fa-fa-beer`
Font Awesome fa-behance | `fa-fa-behance`
Font Awesome fa-behance-square | `fa-fa-behance-square`
Font Awesome fa-bell | `fa-fa-bell`
Font Awesome fa-bell-o | `fa-fa-bell-o`
Font Awesome fa-bell-slash | `fa-fa-bell-slash`
Font Awesome fa-bell-slash-o | `fa-fa-bell-slash-o`
Font Awesome fa-bicycle | `fa-fa-bicycle`
Font Awesome fa-binoculars | `fa-fa-binoculars`
Font Awesome fa-birthday-cake | `fa-fa-birthday-cake`
Font Awesome fa-bitbucket | `fa-fa-bitbucket`
Font Awesome fa-bitbucket-square | `fa-fa-bitbucket-square`
Font Awesome fa-black-tie | `fa-fa-black-tie`
Font Awesome fa-bold | `fa-fa-bold`
Font Awesome fa-bolt | `fa-fa-bolt`
Font Awesome fa-bomb | `fa-fa-bomb`
Font Awesome fa-book | `fa-fa-book`
Font Awesome fa-bookmark | `fa-fa-bookmark`
Font Awesome fa-bookmark-o | `fa-fa-bookmark-o`
Font Awesome fa-briefcase | `fa-fa-briefcase`
Font Awesome fa-btc | `fa-fa-btc`
Font Awesome fa-bug | `fa-fa-bug`
Font Awesome fa-building | `fa-fa-building`
Font Awesome fa-building-o | `fa-fa-building-o`
Font Awesome fa-bullhorn | `fa-fa-bullhorn`
Font Awesome fa-bullseye | `fa-fa-bullseye`
Font Awesome fa-bus | `fa-fa-bus`
Font Awesome fa-buysellads | `fa-fa-buysellads`
Font Awesome fa-calculator | `fa-fa-calculator`
Font Awesome fa-calendar | `fa-fa-calendar`
Font Awesome fa-calendar-check-o | `fa-fa-calendar-check-o`
Font Awesome fa-calendar-minus-o | `fa-fa-calendar-minus-o`
Font Awesome fa-calendar-o | `fa-fa-calendar-o`
Font Awesome fa-calendar-plus-o | `fa-fa-calendar-plus-o`
Font Awesome fa-calendar-times-o | `fa-fa-calendar-times-o`
Font Awesome fa-camera | `fa-fa-camera`
Font Awesome fa-camera-retro | `fa-fa-camera-retro`
Font Awesome fa-car | `fa-fa-car`
Font Awesome fa-caret-down | `fa-fa-caret-down`
Font Awesome fa-caret-left | `fa-fa-caret-left`
Font Awesome fa-caret-right | `fa-fa-caret-right`
Font Awesome fa-caret-square-o-down | `fa-fa-caret-square-o-down`
Font Awesome fa-caret-square-o-left | `fa-fa-caret-square-o-left`
Font Awesome fa-caret-square-o-right | `fa-fa-caret-square-o-right`
Font Awesome fa-caret-square-o-up | `fa-fa-caret-square-o-up`
Font Awesome fa-caret-up | `fa-fa-caret-up`
Font Awesome fa-cart-arrow-down | `fa-fa-cart-arrow-down`
Font Awesome fa-cart-plus | `fa-fa-cart-plus`
Font Awesome fa-cc | `fa-fa-cc`
Font Awesome fa-cc-amex | `fa-fa-cc-amex`
Font Awesome fa-cc-diners-club | `fa-fa-cc-diners-club`
Font Awesome fa-cc-discover | `fa-fa-cc-discover`
Font Awesome fa-cc-jcb | `fa-fa-cc-jcb`
Font Awesome fa-cc-mastercard | `fa-fa-cc-mastercard`
Font Awesome fa-cc-paypal | `fa-fa-cc-paypal`
Font Awesome fa-cc-stripe | `fa-fa-cc-stripe`
Font Awesome fa-cc-visa | `fa-fa-cc-visa`
Font Awesome fa-certificate | `fa-fa-certificate`
Font Awesome fa-chain-broken | `fa-fa-chain-broken`
Font Awesome fa-check | `fa-fa-check`
Font Awesome fa-check-circle | `fa-fa-check-circle`
Font Awesome fa-check-circle-o | `fa-fa-check-circle-o`
Font Awesome fa-check-square | `fa-fa-check-square`
Font Awesome fa-check-square-o | `fa-fa-check-square-o`
Font Awesome fa-chevron-circle-down | `fa-fa-chevron-circle-down`
Font Awesome fa-chevron-circle-left | `fa-fa-chevron-circle-left`
Font Awesome fa-chevron-circle-right | `fa-fa-chevron-circle-right`
Font Awesome fa-chevron-circle-up | `fa-fa-chevron-circle-up`
Font Awesome fa-chevron-down | `fa-fa-chevron-down`
Font Awesome fa-chevron-left | `fa-fa-chevron-left`
Font Awesome fa-chevron-right | `fa-fa-chevron-right`
Font Awesome fa-chevron-up | `fa-fa-chevron-up`
Font Awesome fa-child | `fa-fa-child`
Font Awesome fa-chrome | `fa-fa-chrome`
Font Awesome fa-circle | `fa-fa-circle`
Font Awesome fa-circle-o | `fa-fa-circle-o`
Font Awesome fa-circle-o-notch | `fa-fa-circle-o-notch`
Font Awesome fa-circle-thin | `fa-fa-circle-thin`
Font Awesome fa-clipboard | `fa-fa-clipboard`
Font Awesome fa-clock-o | `fa-fa-clock-o`
Font Awesome fa-clone | `fa-fa-clone`
Font Awesome fa-cloud | `fa-fa-cloud`
Font Awesome fa-cloud-download | `fa-fa-cloud-download`
Font Awesome fa-cloud-upload | `fa-fa-cloud-upload`
Font Awesome fa-code | `fa-fa-code`
Font Awesome fa-code-fork | `fa-fa-code-fork`
Font Awesome fa-codepen | `fa-fa-codepen`
Font Awesome fa-coffee | `fa-fa-coffee`
Font Awesome fa-cog | `fa-fa-cog`
Font Awesome fa-cogs | `fa-fa-cogs`
Font Awesome fa-columns | `fa-fa-columns`
Font Awesome fa-comment | `fa-fa-comment`
Font Awesome fa-comment-o | `fa-fa-comment-o`
Font Awesome fa-commenting | `fa-fa-commenting`
Font Awesome fa-commenting-o | `fa-fa-commenting-o`
Font Awesome fa-comments | `fa-fa-comments`
Font Awesome fa-comments-o | `fa-fa-comments-o`
Font Awesome fa-compass | `fa-fa-compass`
Font Awesome fa-compress | `fa-fa-compress`
Font Awesome fa-connectdevelop | `fa-fa-connectdevelop`
Font Awesome fa-contao | `fa-fa-contao`
Font Awesome fa-copyright | `fa-fa-copyright`
Font Awesome fa-creative-commons | `fa-fa-creative-commons`
Font Awesome fa-credit-card | `fa-fa-credit-card`
Font Awesome fa-crop | `fa-fa-crop`
Font Awesome fa-crosshairs | `fa-fa-crosshairs`
Font Awesome fa-css3 | `fa-fa-css3`
Font Awesome fa-cube | `fa-fa-cube`
Font Awesome fa-cubes | `fa-fa-cubes`
Font Awesome fa-cutlery | `fa-fa-cutlery`
Font Awesome fa-dashcube | `fa-fa-dashcube`
Font Awesome fa-database | `fa-fa-database`
Font Awesome fa-delicious | `fa-fa-delicious`
Font Awesome fa-desktop | `fa-fa-desktop`
Font Awesome fa-deviantart | `fa-fa-deviantart`
Font Awesome fa-diamond | `fa-fa-diamond`
Font Awesome fa-digg | `fa-fa-digg`
Font Awesome fa-dot-circle-o | `fa-fa-dot-circle-o`
Font Awesome fa-download | `fa-fa-download`
Font Awesome fa-dribbble | `fa-fa-dribbble`
Font Awesome fa-dropbox | `fa-fa-dropbox`
Font Awesome fa-drupal | `fa-fa-drupal`
Font Awesome fa-eject | `fa-fa-eject`
Font Awesome fa-ellipsis-h | `fa-fa-ellipsis-h`
Font Awesome fa-ellipsis-v | `fa-fa-ellipsis-v`
Font Awesome fa-empire | `fa-fa-empire`
Font Awesome fa-envelope | `fa-fa-envelope`
Font Awesome fa-envelope-o | `fa-fa-envelope-o`
Font Awesome fa-envelope-square | `fa-fa-envelope-square`
Font Awesome fa-eraser | `fa-fa-eraser`
Font Awesome fa-eur | `fa-fa-eur`
Font Awesome fa-exchange | `fa-fa-exchange`
Font Awesome fa-exclamation | `fa-fa-exclamation`
Font Awesome fa-exclamation-circle | `fa-fa-exclamation-circle`
Font Awesome fa-exclamation-triangle | `fa-fa-exclamation-triangle`
Font Awesome fa-expand | `fa-fa-expand`
Font Awesome fa-expeditedssl | `fa-fa-expeditedssl`
Font Awesome fa-external-link | `fa-fa-external-link`
Font Awesome fa-external-link-square | `fa-fa-external-link-square`
Font Awesome fa-eye | `fa-fa-eye`
Font Awesome fa-eye-slash | `fa-fa-eye-slash`
Font Awesome fa-eyedropper | `fa-fa-eyedropper`
Font Awesome fa-facebook | `fa-fa-facebook`
Font Awesome fa-facebook-official | `fa-fa-facebook-official`
Font Awesome fa-facebook-square | `fa-fa-facebook-square`
Font Awesome fa-fast-backward | `fa-fa-fast-backward`
Font Awesome fa-fast-forward | `fa-fa-fast-forward`
Font Awesome fa-fax | `fa-fa-fax`
Font Awesome fa-female | `fa-fa-female`
Font Awesome fa-fighter-jet | `fa-fa-fighter-jet`
Font Awesome fa-file | `fa-fa-file`
Font Awesome fa-file-archive-o | `fa-fa-file-archive-o`
Font Awesome fa-file-audio-o | `fa-fa-file-audio-o`
Font Awesome fa-file-code-o | `fa-fa-file-code-o`
Font Awesome fa-file-excel-o | `fa-fa-file-excel-o`
Font Awesome fa-file-image-o | `fa-fa-file-image-o`
Font Awesome fa-file-o | `fa-fa-file-o`
Font Awesome fa-file-pdf-o | `fa-fa-file-pdf-o`
Font Awesome fa-file-powerpoint-o | `fa-fa-file-powerpoint-o`
Font Awesome fa-file-text | `fa-fa-file-text`
Font Awesome fa-file-text-o | `fa-fa-file-text-o`
Font Awesome fa-file-video-o | `fa-fa-file-video-o`
Font Awesome fa-file-word-o | `fa-fa-file-word-o`
Font Awesome fa-files-o | `fa-fa-files-o`
Font Awesome fa-film | `fa-fa-film`
Font Awesome fa-filter | `fa-fa-filter`
Font Awesome fa-fire | `fa-fa-fire`
Font Awesome fa-fire-extinguisher | `fa-fa-fire-extinguisher`
Font Awesome fa-firefox | `fa-fa-firefox`
Font Awesome fa-flag | `fa-fa-flag`
Font Awesome fa-flag-checkered | `fa-fa-flag-checkered`
Font Awesome fa-flag-o | `fa-fa-flag-o`
Font Awesome fa-flask | `fa-fa-flask`
Font Awesome fa-flickr | `fa-fa-flickr`
Font Awesome fa-floppy-o | `fa-fa-floppy-o`
Font Awesome fa-folder | `fa-fa-folder`
Font Awesome fa-folder-o | `fa-fa-folder-o`
Font Awesome fa-folder-open | `fa-fa-folder-open`
Font Awesome fa-folder-open-o | `fa-fa-folder-open-o`
Font Awesome fa-font | `fa-fa-font`
Font Awesome fa-fonticons | `fa-fa-fonticons`
Font Awesome fa-forumbee | `fa-fa-forumbee`
Font Awesome fa-forward | `fa-fa-forward`
Font Awesome fa-foursquare | `fa-fa-foursquare`
Font Awesome fa-frown-o | `fa-fa-frown-o`
Font Awesome fa-futbol-o | `fa-fa-futbol-o`
Font Awesome fa-gamepad | `fa-fa-gamepad`
Font Awesome fa-gavel | `fa-fa-gavel`
Font Awesome fa-gbp | `fa-fa-gbp`
Font Awesome fa-genderless | `fa-fa-genderless`
Font Awesome fa-get-pocket | `fa-fa-get-pocket`
Font Awesome fa-gg | `fa-fa-gg`
Font Awesome fa-gg-circle | `fa-fa-gg-circle`
Font Awesome fa-gift | `fa-fa-gift`
Font Awesome fa-git | `fa-fa-git`
Font Awesome fa-git-square | `fa-fa-git-square`
Font Awesome fa-github | `fa-fa-github`
Font Awesome fa-github-alt | `fa-fa-github-alt`
Font Awesome fa-github-square | `fa-fa-github-square`
Font Awesome fa-globe | `fa-fa-globe`
Font Awesome fa-google | `fa-fa-google`
Font Awesome fa-google-plus | `fa-fa-google-plus`
Font Awesome fa-google-plus-square | `fa-fa-google-plus-square`
Font Awesome fa-google-wallet | `fa-fa-google-wallet`
Font Awesome fa-graduation-cap | `fa-fa-graduation-cap`
Font Awesome fa-gratipay | `fa-fa-gratipay`
Font Awesome fa-h-square | `fa-fa-h-square`
Font Awesome fa-hacker-news | `fa-fa-hacker-news`
Font Awesome fa-hand-lizard-o | `fa-fa-hand-lizard-o`
Font Awesome fa-hand-o-down | `fa-fa-hand-o-down`
Font Awesome fa-hand-o-left | `fa-fa-hand-o-left`
Font Awesome fa-hand-o-right | `fa-fa-hand-o-right`
Font Awesome fa-hand-o-up | `fa-fa-hand-o-up`
Font Awesome fa-hand-paper-o | `fa-fa-hand-paper-o`
Font Awesome fa-hand-peace-o | `fa-fa-hand-peace-o`
Font Awesome fa-hand-pointer-o | `fa-fa-hand-pointer-o`
Font Awesome fa-hand-rock-o | `fa-fa-hand-rock-o`
Font Awesome fa-hand-scissors-o | `fa-fa-hand-scissors-o`
Font Awesome fa-hand-spock-o | `fa-fa-hand-spock-o`
Font Awesome fa-hdd-o | `fa-fa-hdd-o`
Font Awesome fa-header | `fa-fa-header`
Font Awesome fa-headphones | `fa-fa-headphones`
Font Awesome fa-heart | `fa-fa-heart`
Font Awesome fa-heart-o | `fa-fa-heart-o`
Font Awesome fa-heartbeat | `fa-fa-heartbeat`
Font Awesome fa-history | `fa-fa-history`
Font Awesome fa-home | `fa-fa-home`
Font Awesome fa-hospital-o | `fa-fa-hospital-o`
Font Awesome fa-hourglass | `fa-fa-hourglass`
Font Awesome fa-hourglass-end | `fa-fa-hourglass-end`
Font Awesome fa-hourglass-half | `fa-fa-hourglass-half`
Font Awesome fa-hourglass-o | `fa-fa-hourglass-o`
Font Awesome fa-hourglass-start | `fa-fa-hourglass-start`
Font Awesome fa-houzz | `fa-fa-houzz`
Font Awesome fa-html5 | `fa-fa-html5`
Font Awesome fa-i-cursor | `fa-fa-i-cursor`
Font Awesome fa-ils | `fa-fa-ils`
Font Awesome fa-inbox | `fa-fa-inbox`
Font Awesome fa-indent | `fa-fa-indent`
Font Awesome fa-industry | `fa-fa-industry`
Font Awesome fa-info | `fa-fa-info`
Font Awesome fa-info-circle | `fa-fa-info-circle`
Font Awesome fa-inr | `fa-fa-inr`
Font Awesome fa-instagram | `fa-fa-instagram`
Font Awesome fa-internet-explorer | `fa-fa-internet-explorer`
Font Awesome fa-ioxhost | `fa-fa-ioxhost`
Font Awesome fa-italic | `fa-fa-italic`
Font Awesome fa-joomla | `fa-fa-joomla`
Font Awesome fa-jpy | `fa-fa-jpy`
Font Awesome fa-jsfiddle | `fa-fa-jsfiddle`
Font Awesome fa-key | `fa-fa-key`
Font Awesome fa-keyboard-o | `fa-fa-keyboard-o`
Font Awesome fa-krw | `fa-fa-krw`
Font Awesome fa-language | `fa-fa-language`
Font Awesome fa-laptop | `fa-fa-laptop`
Font Awesome fa-lastfm | `fa-fa-lastfm`
Font Awesome fa-lastfm-square | `fa-fa-lastfm-square`
Font Awesome fa-leaf | `fa-fa-leaf`
Font Awesome fa-leanpub | `fa-fa-leanpub`
Font Awesome fa-lemon-o | `fa-fa-lemon-o`
Font Awesome fa-level-down | `fa-fa-level-down`
Font Awesome fa-level-up | `fa-fa-level-up`
Font Awesome fa-life-ring | `fa-fa-life-ring`
Font Awesome fa-lightbulb-o | `fa-fa-lightbulb-o`
Font Awesome fa-line-chart | `fa-fa-line-chart`
Font Awesome fa-link | `fa-fa-link`
Font Awesome fa-linkedin | `fa-fa-linkedin`
Font Awesome fa-linkedin-square | `fa-fa-linkedin-square`
Font Awesome fa-linux | `fa-fa-linux`
Font Awesome fa-list | `fa-fa-list`
Font Awesome fa-list-alt | `fa-fa-list-alt`
Font Awesome fa-list-ol | `fa-fa-list-ol`
Font Awesome fa-list-ul | `fa-fa-list-ul`
Font Awesome fa-location-arrow | `fa-fa-location-arrow`
Font Awesome fa-lock | `fa-fa-lock`
Font Awesome fa-long-arrow-down | `fa-fa-long-arrow-down`
Font Awesome fa-long-arrow-left | `fa-fa-long-arrow-left`
Font Awesome fa-long-arrow-right | `fa-fa-long-arrow-right`
Font Awesome fa-long-arrow-up | `fa-fa-long-arrow-up`
Font Awesome fa-magic | `fa-fa-magic`
Font Awesome fa-magnet | `fa-fa-magnet`
Font Awesome fa-male | `fa-fa-male`
Font Awesome fa-map | `fa-fa-map`
Font Awesome fa-map-marker | `fa-fa-map-marker`
Font Awesome fa-map-o | `fa-fa-map-o`
Font Awesome fa-map-pin | `fa-fa-map-pin`
Font Awesome fa-map-signs | `fa-fa-map-signs`
Font Awesome fa-mars | `fa-fa-mars`
Font Awesome fa-mars-double | `fa-fa-mars-double`
Font Awesome fa-mars-stroke | `fa-fa-mars-stroke`
Font Awesome fa-mars-stroke-h | `fa-fa-mars-stroke-h`
Font Awesome fa-mars-stroke-v | `fa-fa-mars-stroke-v`
Font Awesome fa-maxcdn | `fa-fa-maxcdn`
Font Awesome fa-meanpath | `fa-fa-meanpath`
Font Awesome fa-medium | `fa-fa-medium`
Font Awesome fa-medkit | `fa-fa-medkit`
Font Awesome fa-meh-o | `fa-fa-meh-o`
Font Awesome fa-mercury | `fa-fa-mercury`
Font Awesome fa-microphone | `fa-fa-microphone`
Font Awesome fa-microphone-slash | `fa-fa-microphone-slash`
Font Awesome fa-minus | `fa-fa-minus`
Font Awesome fa-minus-circle | `fa-fa-minus-circle`
Font Awesome fa-minus-square | `fa-fa-minus-square`
Font Awesome fa-minus-square-o | `fa-fa-minus-square-o`
Font Awesome fa-mobile | `fa-fa-mobile`
Font Awesome fa-money | `fa-fa-money`
Font Awesome fa-moon-o | `fa-fa-moon-o`
Font Awesome fa-motorcycle | `fa-fa-motorcycle`
Font Awesome fa-mouse-pointer | `fa-fa-mouse-pointer`
Font Awesome fa-music | `fa-fa-music`
Font Awesome fa-neuter | `fa-fa-neuter`
Font Awesome fa-newspaper-o | `fa-fa-newspaper-o`
Font Awesome fa-object-group | `fa-fa-object-group`
Font Awesome fa-object-ungroup | `fa-fa-object-ungroup`
Font Awesome fa-odnoklassniki | `fa-fa-odnoklassniki`
Font Awesome fa-odnoklassniki-square | `fa-fa-odnoklassniki-square`
Font Awesome fa-opencart | `fa-fa-opencart`
Font Awesome fa-openid | `fa-fa-openid`
Font Awesome fa-opera | `fa-fa-opera`
Font Awesome fa-optin-monster | `fa-fa-optin-monster`
Font Awesome fa-outdent | `fa-fa-outdent`
Font Awesome fa-pagelines | `fa-fa-pagelines`
Font Awesome fa-paint-brush | `fa-fa-paint-brush`
Font Awesome fa-paper-plane | `fa-fa-paper-plane`
Font Awesome fa-paper-plane-o | `fa-fa-paper-plane-o`
Font Awesome fa-paperclip | `fa-fa-paperclip`
Font Awesome fa-paragraph | `fa-fa-paragraph`
Font Awesome fa-pause | `fa-fa-pause`
Font Awesome fa-paw | `fa-fa-paw`
Font Awesome fa-paypal | `fa-fa-paypal`
Font Awesome fa-pencil | `fa-fa-pencil`
Font Awesome fa-pencil-square | `fa-fa-pencil-square`
Font Awesome fa-pencil-square-o | `fa-fa-pencil-square-o`
Font Awesome fa-phone | `fa-fa-phone`
Font Awesome fa-phone-square | `fa-fa-phone-square`
Font Awesome fa-picture-o | `fa-fa-picture-o`
Font Awesome fa-pie-chart | `fa-fa-pie-chart`
Font Awesome fa-pied-piper | `fa-fa-pied-piper`
Font Awesome fa-pied-piper-alt | `fa-fa-pied-piper-alt`
Font Awesome fa-pinterest | `fa-fa-pinterest`
Font Awesome fa-pinterest-p | `fa-fa-pinterest-p`
Font Awesome fa-pinterest-square | `fa-fa-pinterest-square`
Font Awesome fa-plane | `fa-fa-plane`
Font Awesome fa-play | `fa-fa-play`
Font Awesome fa-play-circle | `fa-fa-play-circle`
Font Awesome fa-play-circle-o | `fa-fa-play-circle-o`
Font Awesome fa-plug | `fa-fa-plug`
Font Awesome fa-plus | `fa-fa-plus`
Font Awesome fa-plus-circle | `fa-fa-plus-circle`
Font Awesome fa-plus-square | `fa-fa-plus-square`
Font Awesome fa-plus-square-o | `fa-fa-plus-square-o`
Font Awesome fa-power-off | `fa-fa-power-off`
Font Awesome fa-print | `fa-fa-print`
Font Awesome fa-puzzle-piece | `fa-fa-puzzle-piece`
Font Awesome fa-qq | `fa-fa-qq`
Font Awesome fa-qrcode | `fa-fa-qrcode`
Font Awesome fa-question | `fa-fa-question`
Font Awesome fa-question-circle | `fa-fa-question-circle`
Font Awesome fa-quote-left | `fa-fa-quote-left`
Font Awesome fa-quote-right | `fa-fa-quote-right`
Font Awesome fa-random | `fa-fa-random`
Font Awesome fa-rebel | `fa-fa-rebel`
Font Awesome fa-recycle | `fa-fa-recycle`
Font Awesome fa-reddit | `fa-fa-reddit`
Font Awesome fa-reddit-square | `fa-fa-reddit-square`
Font Awesome fa-refresh | `fa-fa-refresh`
Font Awesome fa-registered | `fa-fa-registered`
Font Awesome fa-renren | `fa-fa-renren`
Font Awesome fa-repeat | `fa-fa-repeat`
Font Awesome fa-reply | `fa-fa-reply`
Font Awesome fa-reply-all | `fa-fa-reply-all`
Font Awesome fa-retweet | `fa-fa-retweet`
Font Awesome fa-road | `fa-fa-road`
Font Awesome fa-rocket | `fa-fa-rocket`
Font Awesome fa-rss | `fa-fa-rss`
Font Awesome fa-rss-square | `fa-fa-rss-square`
Font Awesome fa-rub | `fa-fa-rub`
Font Awesome fa-safari | `fa-fa-safari`
Font Awesome fa-scissors | `fa-fa-scissors`
Font Awesome fa-search | `fa-fa-search`
Font Awesome fa-search-minus | `fa-fa-search-minus`
Font Awesome fa-search-plus | `fa-fa-search-plus`
Font Awesome fa-sellsy | `fa-fa-sellsy`
Font Awesome fa-server | `fa-fa-server`
Font Awesome fa-share | `fa-fa-share`
Font Awesome fa-share-alt | `fa-fa-share-alt`
Font Awesome fa-share-alt-square | `fa-fa-share-alt-square`
Font Awesome fa-share-square | `fa-fa-share-square`
Font Awesome fa-share-square-o | `fa-fa-share-square-o`
Font Awesome fa-shield | `fa-fa-shield`
Font Awesome fa-ship | `fa-fa-ship`
Font Awesome fa-shirtsinbulk | `fa-fa-shirtsinbulk`
Font Awesome fa-shopping-cart | `fa-fa-shopping-cart`
Font Awesome fa-sign-in | `fa-fa-sign-in`
Font Awesome fa-sign-out | `fa-fa-sign-out`
Font Awesome fa-signal | `fa-fa-signal`
Font Awesome fa-simplybuilt | `fa-fa-simplybuilt`
Font Awesome fa-sitemap | `fa-fa-sitemap`
Font Awesome fa-skyatlas | `fa-fa-skyatlas`
Font Awesome fa-skype | `fa-fa-skype`
Font Awesome fa-slack | `fa-fa-slack`
Font Awesome fa-sliders | `fa-fa-sliders`
Font Awesome fa-slideshare | `fa-fa-slideshare`
Font Awesome fa-smile-o | `fa-fa-smile-o`
Font Awesome fa-sort | `fa-fa-sort`
Font Awesome fa-sort-alpha-asc | `fa-fa-sort-alpha-asc`
Font Awesome fa-sort-alpha-desc | `fa-fa-sort-alpha-desc`
Font Awesome fa-sort-amount-asc | `fa-fa-sort-amount-asc`
Font Awesome fa-sort-amount-desc | `fa-fa-sort-amount-desc`
Font Awesome fa-sort-asc | `fa-fa-sort-asc`
Font Awesome fa-sort-desc | `fa-fa-sort-desc`
Font Awesome fa-sort-numeric-asc | `fa-fa-sort-numeric-asc`
Font Awesome fa-sort-numeric-desc | `fa-fa-sort-numeric-desc`
Font Awesome fa-soundcloud | `fa-fa-soundcloud`
Font Awesome fa-space-shuttle | `fa-fa-space-shuttle`
Font Awesome fa-spinner | `fa-fa-spinner`
Font Awesome fa-spoon | `fa-fa-spoon`
Font Awesome fa-spotify | `fa-fa-spotify`
Font Awesome fa-square | `fa-fa-square`
Font Awesome fa-square-o | `fa-fa-square-o`
Font Awesome fa-stack-exchange | `fa-fa-stack-exchange`
Font Awesome fa-stack-overflow | `fa-fa-stack-overflow`
Font Awesome fa-star | `fa-fa-star`
Font Awesome fa-star-half | `fa-fa-star-half`
Font Awesome fa-star-half-o | `fa-fa-star-half-o`
Font Awesome fa-star-o | `fa-fa-star-o`
Font Awesome fa-steam | `fa-fa-steam`
Font Awesome fa-steam-square | `fa-fa-steam-square`
Font Awesome fa-step-backward | `fa-fa-step-backward`
Font Awesome fa-step-forward | `fa-fa-step-forward`
Font Awesome fa-stethoscope | `fa-fa-stethoscope`
Font Awesome fa-sticky-note | `fa-fa-sticky-note`
Font Awesome fa-sticky-note-o | `fa-fa-sticky-note-o`
Font Awesome fa-stop | `fa-fa-stop`
Font Awesome fa-street-view | `fa-fa-street-view`
Font Awesome fa-strikethrough | `fa-fa-strikethrough`
Font Awesome fa-stumbleupon | `fa-fa-stumbleupon`
Font Awesome fa-stumbleupon-circle | `fa-fa-stumbleupon-circle`
Font Awesome fa-subscript | `fa-fa-subscript`
Font Awesome fa-subway | `fa-fa-subway`
Font Awesome fa-suitcase | `fa-fa-suitcase`
Font Awesome fa-sun-o | `fa-fa-sun-o`
Font Awesome fa-superscript | `fa-fa-superscript`
Font Awesome fa-table | `fa-fa-table`
Font Awesome fa-tablet | `fa-fa-tablet`
Font Awesome fa-tachometer | `fa-fa-tachometer`
Font Awesome fa-tag | `fa-fa-tag`
Font Awesome fa-tags | `fa-fa-tags`
Font Awesome fa-tasks | `fa-fa-tasks`
Font Awesome fa-taxi | `fa-fa-taxi`
Font Awesome fa-television | `fa-fa-television`
Font Awesome fa-tencent-weibo | `fa-fa-tencent-weibo`
Font Awesome fa-terminal | `fa-fa-terminal`
Font Awesome fa-text-height | `fa-fa-text-height`
Font Awesome fa-text-width | `fa-fa-text-width`
Font Awesome fa-th | `fa-fa-th`
Font Awesome fa-th-large | `fa-fa-th-large`
Font Awesome fa-th-list | `fa-fa-th-list`
Font Awesome fa-thumb-tack | `fa-fa-thumb-tack`
Font Awesome fa-thumbs-down | `fa-fa-thumbs-down`
Font Awesome fa-thumbs-o-down | `fa-fa-thumbs-o-down`
Font Awesome fa-thumbs-o-up | `fa-fa-thumbs-o-up`
Font Awesome fa-thumbs-up | `fa-fa-thumbs-up`
Font Awesome fa-ticket | `fa-fa-ticket`
Font Awesome fa-times | `fa-fa-times`
Font Awesome fa-times-circle | `fa-fa-times-circle`
Font Awesome fa-times-circle-o | `fa-fa-times-circle-o`
Font Awesome fa-tint | `fa-fa-tint`
Font Awesome fa-toggle-off | `fa-fa-toggle-off`
Font Awesome fa-toggle-on | `fa-fa-toggle-on`
Font Awesome fa-trademark | `fa-fa-trademark`
Font Awesome fa-train | `fa-fa-train`
Font Awesome fa-transgender | `fa-fa-transgender`
Font Awesome fa-transgender-alt | `fa-fa-transgender-alt`
Font Awesome fa-trash | `fa-fa-trash`
Font Awesome fa-trash-o | `fa-fa-trash-o`
Font Awesome fa-tree | `fa-fa-tree`
Font Awesome fa-trello | `fa-fa-trello`
Font Awesome fa-tripadvisor | `fa-fa-tripadvisor`
Font Awesome fa-trophy | `fa-fa-trophy`
Font Awesome fa-truck | `fa-fa-truck`
Font Awesome fa-try | `fa-fa-try`
Font Awesome fa-tty | `fa-fa-tty`
Font Awesome fa-tumblr | `fa-fa-tumblr`
Font Awesome fa-tumblr-square | `fa-fa-tumblr-square`
Font Awesome fa-twitch | `fa-fa-twitch`
Font Awesome fa-twitter | `fa-fa-twitter`
Font Awesome fa-twitter-square | `fa-fa-twitter-square`
Font Awesome fa-umbrella | `fa-fa-umbrella`
Font Awesome fa-underline | `fa-fa-underline`
Font Awesome fa-undo | `fa-fa-undo`
Font Awesome fa-university | `fa-fa-university`
Font Awesome fa-unlock | `fa-fa-unlock`
Font Awesome fa-unlock-alt | `fa-fa-unlock-alt`
Font Awesome fa-upload | `fa-fa-upload`
Font Awesome fa-usd | `fa-fa-usd`
Font Awesome fa-user | `fa-fa-user`
Font Awesome fa-user-md | `fa-fa-user-md`
Font Awesome fa-user-plus | `fa-fa-user-plus`
Font Awesome fa-user-secret | `fa-fa-user-secret`
Font Awesome fa-user-times | `fa-fa-user-times`
Font Awesome fa-users | `fa-fa-users`
Font Awesome fa-venus | `fa-fa-venus`
Font Awesome fa-venus-double | `fa-fa-venus-double`
Font Awesome fa-venus-mars | `fa-fa-venus-mars`
Font Awesome fa-viacoin | `fa-fa-viacoin`
Font Awesome fa-video-camera | `fa-fa-video-camera`
Font Awesome fa-vimeo | `fa-fa-vimeo`
Font Awesome fa-vimeo-square | `fa-fa-vimeo-square`
Font Awesome fa-vine | `fa-fa-vine`
Font Awesome fa-vk | `fa-fa-vk`
Font Awesome fa-volume-down | `fa-fa-volume-down`
Font Awesome fa-volume-off | `fa-fa-volume-off`
Font Awesome fa-volume-up | `fa-fa-volume-up`
Font Awesome fa-weibo | `fa-fa-weibo`
Font Awesome fa-weixin | `fa-fa-weixin`
Font Awesome fa-whatsapp | `fa-fa-whatsapp`
Font Awesome fa-wheelchair | `fa-fa-wheelchair`
Font Awesome fa-wifi | `fa-fa-wifi`
Font Awesome fa-wikipedia-w | `fa-fa-wikipedia-w`
Font Awesome fa-windows | `fa-fa-windows`
Font Awesome fa-wordpress | `fa-fa-wordpress`
Font Awesome fa-wrench | `fa-fa-wrench`
Font Awesome fa-xing | `fa-fa-xing`
Font Awesome fa-xing-square | `fa-fa-xing-square`
Font Awesome fa-y-combinator | `fa-fa-y-combinator`
Font Awesome fa-yahoo | `fa-fa-yahoo`
Font Awesome fa-yelp | `fa-fa-yelp`
Font Awesome fa-youtube | `fa-fa-youtube`
Font Awesome fa-youtube-play | `fa-fa-youtube-play`
Font Awesome fa-youtube-square | `fa-fa-youtube-square`
Font Awesome fa-glass | `fa-fa-glass`

