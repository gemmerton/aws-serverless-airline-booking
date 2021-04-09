import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import Analytics from '@aws-amplify/analytics'
//import { Analytics } from '@aws-amplify'
import awsconfig from '../../aws-exports'
import '@aws-amplify/ui-vue'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Analytics.configure(awsconfig)

Amplify.Logger.LOG_LEVEL = process.env.LOG_LEVEL || 'INFO'
