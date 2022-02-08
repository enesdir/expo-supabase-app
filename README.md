# Expo Supabase Demo App

Typescript Template starter with React Navigation Bottom Tabs and Supabase auth using Redux toolkit

## Stack

This application uses the following technologies

- [React Native](https://reactnative.dev/) - ReactJS-based framework that can use native platform capabilities
- [Expo](https://expo.dev/) - Toolset for building and delivering RN apps
- [React Navigation(v6)](https://reactnavigation.org/) - Routing and navigation
- [NativeBase(v3)](https://nativebase.io/) - Accessible component library
- [Redux Toolkit](https://redux-toolkit.js.org/) - Global state management
- [Supabase](https://supabase.io/) - Authentications & Database & Storage
- [react-native-community/datetimepicker](https://www.npmjs.com/package/@react-native-community/datetimepicker) -React Native Date Picker

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   yarn global add expo-cli
   ```

3. Download this repo
4. Install deps

   ```sh
   yarn
   ```

5. Please follow the instructions in the [Supabase Setup](#Supabase-Setup) area.

6. This project can be run from the Expo client app. Start the environtment

   ```sh
   yarn start
   ```

## Supabase Setup

### 1. Create new project

   Sign up to Supabase - [https://app.supabase.io](https://app.supabase.io) and create a new project. Wait for your database to start.

### 2. Run "User Management" Quickstart

   Once your database has started, run the "User Management Starter" quickstart. Inside of your project, enter the `SQL editor` tab and go to  the `/backend` folder until you see `schema.sql` file.

### 3. Get the URL and Key

   Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key, you'll need these in the next step.

   The `anon` key is your client-side API key. It allows "anonymous access" to your database, until the user has logged in. Once they have logged in, the keys will switch to the user's own login token. This enables row level security for your data.

   **_NOTE_**: The `service_role` key has full access to your data, bypassing any security policies. These keys have to be kept secret and are meant to be used in server environments and never on a client or browser.

### 4. Env vars

   Copy a file in this folder `.env.example` to `.env` or `.env.local`

   ```
   EXPO_APP_SUPABASE_URL=
   EXPO_APP_SUPABASE_ANON_KEY=
   ```

   Populate this file with your URL and Key.

## How to dev

This project can be run from the Expo client app.

```sh
yarn
yarn start
```

# File Managements

These are the folders and the functionality all in `src/`

```jsx
/assets -> for media such as images, etc
/src/components -> for components
/src/hooks -> for React Hooks
/src/navigations -> for React Navigation
/src/screens -> for Screens
/src/stores -> for Redux
/src/themes -> for theme configurations
/src/types -> for type definitions
```

Made with :heartbeat: by [Enes Esen](https://github.com/codenuru)
