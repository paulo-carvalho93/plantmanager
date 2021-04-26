<div align="center">

<p align="center">
  <img alt="screenshot" src="./.github/assets/logo_plantmanager.png" />
<p>

<p align="center">	
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/paulo-carvalho93/plantmanager">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulo-carvalho93/plantmanager">
  
</p>

**PlantManager** is a project to help you take care of your plants and remind you with notifications the exact time to water your plants!

The project was developed during the fifth edition of _Next Level Week_, held by [Rocketseat](https://github.com/Rocketseat) between April 19th and 23th, 2021.

<p align="center">
  <img alt="screenshot" width="300px" src="./.github/assets/plantmanager_gif.gif" />
<p>

</div>

## Features

- Welcome Splash Screen
- Loading screen using Lottie animation by JSON file
- Input name to identify the user
- List of Plants and filters categories of which place of your home is recommended to put your favorite plant
- Pagination feature to limit 8 plants per view
- Schedule the best time to water your plants
- Remove an appointment by Swipe gesture
- Expo Notifications to remember you when to water your plants
- AsyncStorage to save all your appointments locally
- Menu using React Navigation Tabs

## Summary

- [Technology](#rocket-technology)
  - [Application](#iphone)
- [How to run](#boom-how-to-run)
  - [Mobile](#iphone)

## :rocket: Technology

<div align="center">

![react](https://img.shields.io/badge/react-61dafb?&logoColor=000&style=for-the-badge&logo=react)
![expo](https://img.shields.io/badge/expo-000020?&logoColor=FFF&style=for-the-badge&logo=expo)
![typescript](https://img.shields.io/badge/typescript-007acc?&logoColor=FFF&style=for-the-badge&logo=typescript)
![node](https://img.shields.io/badge/node.js-33933?&logoColor=FFF&style=for-the-badge&logo=node.js)

</div>

## :iphone: Application

The application was developed with [Typescript](https://www.typescriptlang.org/) using the framework [ReactJS](https://reactjs.org/) and [Expo](https://expo.io/).

The main libs use in this application was React Native AsyncStorage to save the appointments locally, React Navigation to control routes and tabs feature, Expo Notifications to make sure all the notifications will appear properly.
Also, Lottie React Native was used for loading effects with JSON file animation.

---

# :boom: How to run

- ### **Prerequisites**

  - It's **necessary** to have the last version of **[Node.js](https://nodejs.org/en/)** installed on the computer
  - It's **necessary** to have **[Git](https://git-scm.com/)** installed and configured on the computer
  - Also, It's **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - Finally, it is **essential** to have **[Expo](https://expo.io/)** installed globally on the machine.
  
Clone the repository:

```sh
  $ git clone https://github.com/paulo-carvalho93/plantmanager.git
```

### :iphone: Mobile


You need JSON-SERVER installed globally on your machine to get all the information from a fake backend. Follow the instructions below:

```
  # Install JSON-SERVER
  # Use one of the commands below depending which package manager you have.
  # YARN
  $ yarn global add json-server
  
  # NPM
  $ npm install -g json-server
  
```

After that, you just need to put the IP Address of your machine at api.ts:

```
 $ baseURL: 'http://YOUR_API_ADDRESS:3333'
```


Here, I'm assuming that you have Android/Iphone Emulator and Expo app is installed.
You can also use your smartphone, just download the EXPO app and read the QR code that is shown on Expo Dashboard.


```
  # Start JSON-SERVER
  $ json-server ./src/services/server.json --host YOUR_API_ADDRESS --port 3333 --delay 700
  
  # Start project
  $ expo start
```


---
