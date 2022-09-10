# Google Auth Firebase React Native Expo

In this app we have implemented the sign in through Google Authentication.

First we have to install the following packages
```
expo install expo-auth-session expo-random
expo install expo-web-browser

// firebase
expo install firebase

// for building on android
expo install expo-updates
```

Then go to **app.json** file in your react native project and add the **bundleIdentifier** for **iOS** and **package** for **android**

Both **bundleIdentifier** and **package** for iOS and android respectively will be same. They will be in the following format
```
com.<Anything>.<AppName>
```
![](/readmeImages/1.png)

Then go to **firebase** and make a project over there. After the project is created successfully. Make the web, iOS and android app in it.

## Web
For the Web app just write the app nickname and Resgister the app. No need to set up firebase hosting. And then for the Add Firebase SDK part copy the code and make a **firebase.js** file in root directory of your react native project and paste the code in it. Add the auth and db configuration in this file. Then click Continue to console. The web part is finished. Now add aonther app. And this time it is iOS

## iOS
For the iOS app copy the **bundleIdentifier** that you have saved in the **app.json** file and paste it in the Apple bundle ID and then register the app. Download the config file and save it in the root directory of your react native project. And then skip the other parts and click Continue to console. Now add another app which will be android.

## Android
Similary for the android app copy the **package** that you have saved in the **app.json** file and paste it in the Android package name. 
Now as we are using Google Auth so we have to enter the signing certificate SHA-1 as well. For getting the SHA-1 follow the steps. Go to your terminal

```
expo credentials:manager -p android
y > Update upload Keystore > Generate new keystore > Go back to experience overview
```

Then scroll up and you will find the Hashes. Pick the first one that is **Google Certificate Fingerprint** and paste it in your firebase signing certificate SHA-1

Register the app and then download the google-service.json file and put it in your react native project root directory. Skip the other steps and Continue to console