# RAUTZ (Ghanian cocoa farmers)
![Overview](docs/Screenshot_1.png)
## Summary
Interactive [vue](https://vuejs.org/) storytelling website which shows insights in the livelyhood of Ghanian cocoa farmers.   
[check the live prototype here](https://rautz.netlify.com)

## Table of Contents
- [Install](#install)
- [Prototype](#prototype)
- [Process](#process)
  - [Concept](#concept)
  - [Code](#code-journey)
- [To do](#to-do)
- [Credits](#credits)

## Install
```bash
# Install necessary packages
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build
```

## Prototype
[check the live prototype here](https://rautz.netlify.com)

![Overview](docs/Screenshot_2.png)

## Process
### Concept
The Amsterdam office of [UTZ](https://utz.org/) asked us to create an interactive product based on a dataset of Ghanian Farmers by [KIT](https://kit.nl/). Their main envisioned goal was to end op with a product that showed insights in the lives of these farmers and ended with an income per family member.

The choices made in the design process can be read [here](https://paper.dropbox.com/doc/RAUTZ-Design-Rationale--AWN7V3rp4OwVb8dJBZT3OCinAg-k8FvG4Em2rRDUc5nbkd92).

### Code Journey
I chose to work with [vue.js](https://vuejs.org) in this project since the design showed a lot of potential for reusable components. Furthermore, there were multiple forms and graphs in the design that all responded to eachother, so some form of global state was necessary. This prompted me to immediately set up the project with vue.
As a third project in [vue.js](https://vuejs.org) a lot of the former problems I had with setting up the project and maintaining state went a lot more smooth.
I initiated the project with vue-cli and vuex (state) and was able to start prototyping immediately.
In former projects where I worked with forms which set state and listened to it as well I used to write really cumbersome code to make sure all forms which edit the same properties were in sync.
This time around it was really simple by updating all inputs with the same name, which correspond to the property in the state that has the same name.

The graphs were made using [D3.js](https://d3js.org). Since the design asked for the updating of graphs in a smooth matter, i felt like this was the best option since D3 has so many options.
Choosing D3 proved to save time as well, since I wrote code for bar charts and stacked bar charts in a dynamic way in previous projects.

## To do
- [ ] Default select all filter options to prevent people from selecting a too small selection of farmers
- [ ] More testing to fix user experience issues
- [ ] Some more code cleanup

## Credits
- [Matthias Leuhof](https://github.com/MatthiasLeuhof) - Illustrations, data editing & concepting
- [Sam Hofman](https://github.com/labraksam) - UI Design & concepting
- [Angelique Janssen](https://github.com/angeliquejanssen) - UI Design & data editing
