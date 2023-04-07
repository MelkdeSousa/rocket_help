import { registerRootComponent } from 'expo'

import { Amplify } from 'aws-amplify'
import App from './src/App'
import config from './src/aws-exports'

Amplify.configure(config)
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
