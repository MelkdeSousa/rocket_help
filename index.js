import 'core-js/full/symbol/async-iterator'
import { registerRootComponent } from 'expo'

import { ExpoSQLiteAdapter } from '@aws-amplify/datastore-storage-adapter/ExpoSQLiteAdapter'
import { Amplify, DataStore } from 'aws-amplify'
import App from './src/App'
import config from './src/aws-exports'

Amplify.configure(config)

DataStore.configure({
    storageAdapter: ExpoSQLiteAdapter,
})
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
