# SimpleTimeLogger
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#react-native-info">React Native Info</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Project screenshots

<p align="center">
  <img width="200" alt="Start time log" src="https://user-images.githubusercontent.com/79904790/132345700-07d53d69-96eb-427a-b61a-19b35cb85110.png">
  <img width="200" alt="End time log" src="https://user-images.githubusercontent.com/79904790/132345582-255b6978-1a97-41f7-b6bb-fd478bb40caa.png">
  <img width="200" alt="Time log list" src="https://user-images.githubusercontent.com/79904790/132346016-6bb2b02e-209d-4138-99ee-0a5548cb3664.png">
  <img width="200" alt="Time log details" src="https://user-images.githubusercontent.com/79904790/132346100-30c04363-7fa8-40ac-bdcf-a6bea75c849f.png">
 </p>



### Built With

List of major frameworks.

* [React Native](https://reactnative.dev/)

<!-- GETTING STARTED -->
## Getting Started

Make sure to go through [React Native environment setup](https://reactnative.dev/docs/environment-setup) thoroughly.

### Prerequisites

#### Here is detailed info on how to set up your envierment: [React Native environment setup](https://reactnative.dev/docs/environment-setup)

Tested working environment:
* Node: 15.3.0
* Yarn: 1.22.10
* IOS Platforms: iOS 14.2, DriverKit 20.0
* CocoaPods: 1.10.1
* Android SDK:
  * API Levels: 23, 28, 29, 30
  * Build Tools: 28.0.3, 29.0.2, 30.0.2, 30.0.3

For more - look into <a href="#react-native-info">React Native Info</a> section. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Orutsu/SimpleTimeLogger.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Instal Cocoapods
   ```sh
    cd ios && pod install
   ```
   
   
## Usage

* IOS
   ```sh
   yarn ios
   ```
* Android
   ```sh
   yarn android
   ```

## Contributing
Be shure to use conventional commits and branch naming 
Ex: 
Branch: `feat/new-item-added`
Commit message: `feat: new item added`

For additional info take a look on [conventional commits docs](https://www.conventionalcommits.org/en/v1.0.0/#summary)

<!-- CONTACT -->
## Contact

Orest Krasnevych - [Orutsu](https://github.com/Orutsu) - or4uk15@gmail.com


## React Native Info
### Here is output of `react-native info` CLI output

```bash
System:
    OS: macOS 11.2.3
    CPU: (4) x64 Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz
    Memory: 27.79 MB / 8.00 GB
    Shell: 5.8 - /bin/zsh
  Binaries:
    Node: 15.3.0 - /var/folders/y7/zp8qbs7j6hgc9t5jx5m7c96h0000gn/T/yarn--1631018540265-0.024466411750057926/node
    Yarn: 1.22.10 - /var/folders/y7/zp8qbs7j6hgc9t5jx5m7c96h0000gn/T/yarn--1631018540265-0.024466411750057926/yarn
    npm: 7.0.14 - /usr/local/bin/npm
    Watchman: 4.9.0 - /usr/local/bin/watchman
  Managers:
    CocoaPods: 1.10.1 - /usr/local/bin/pod
  SDKs:
    iOS SDK:
      Platforms: iOS 14.2, DriverKit 20.0, macOS 11.0, tvOS 14.2, watchOS 7.1
    Android SDK:
      API Levels: 23, 28, 29, 30
      Build Tools: 28.0.3, 29.0.2, 30.0.2, 30.0.3
      System Images: android-30 | Google APIs Intel x86 Atom, android-30 | Google Play Intel x86 Atom
      Android NDK: Not Found
  IDEs:
    Android Studio: 4.1 AI-201.8743.12.41.6953283
    Xcode: 12.2/12B45b - /usr/bin/xcodebuild
  Languages:
    Java: 1.8.0_282 - /usr/bin/javac
  npmPackages:
    @react-native-community/cli: Not Found
    react: 17.0.2 => 17.0.2 
    react-native: 0.65.1 => 0.65.1 
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
  ```
