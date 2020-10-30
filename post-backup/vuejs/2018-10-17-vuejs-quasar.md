---
layout: post
title: "(VueJS) Quasar framework 적용하기"
date: 2018-10-17 17:35:00
author: gloria
categories: frontend
tags: javascript quasar
---

[TOC]

## Configuration

- vue-cli 3.x.x

  ```bash
  $ vue --version
  3.0.5
  ```



## Installation

#### Quasar plugin 설치

```bash
$ vue add quasar

📦  Installing vue-cli-plugin-quasar...

yarn add v1.9.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ vue-cli-plugin-quasar@0.17.1
info All dependencies
└─ vue-cli-plugin-quasar@0.17.1
✨  Done in 4.61s.
✔  Successfully installed plugin: vue-cli-plugin-quasar

? Select Quasar Theme: Material Design
? Allow Quasar to replace App.vue, About.vue, Home.vue and (if available) router.js? Yes
? Import all Quasar components, directives and plugins? No
? Use RTL support? No
? Choose Icon Set Fontawesome
? Quasar i18n lang - one from https://github.com/quasarframework/quasar/tree/dev/i18n en-us
? Select features: IE11 support, Roboto font, Material Icons, Fontawesome

🚀  Invoking generator for vue-cli-plugin-quasar...
📦  Installing additional dependencies...

yarn install v1.9.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Saved lockfile.
✨  Done in 7.31s.
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-quasar
   The following files have been updated / added:

     src/components/HelloWorld.vue
     src/styles/quasar.styl
     src/styles/quasar.variables.styl
     babel.config.js
     package.json
     public/favicon.ico
     src/App.vue
     src/assets/logo.png
     src/main.js
     yarn.lock

   You should review these changes with git diff and commit them.

 INFO  quasar  
             Documentation can be found at: https://quasar-framework.org
                                                                        
Quasar is relying on donations to evolve. We'd be very grateful if you can
                 take a look at: https://www.patreon.com/quasarframework
                                            Any amount is very welcomed.
If invoices are required, please first contact razvan.stoenescu@gmail.com
                                                                        
             Please give us a star on Github if you appreciate our work:
                               https://github.com/quasarframework/quasar
                                                                        
                                                    Enjoy! - Quasar Team
```





## Reference

- https://quasar-framework.org/guide/index.html#Vue-CLI-3-plugin

