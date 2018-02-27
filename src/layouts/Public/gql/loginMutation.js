import { commitMutation, graphql } from 'react-relay'
import environment from '../../../relayEnvironment'

const mutation = graphql`
  mutation loginMutation($username: String!, $password: String!) {
    data: login(username: $username, password: $password) {
      isLoggedIn
      user {
        id
        token
      }
    }
  }
`

export default ({ username, password }) => {
  const variables = {
    username,
    password
  }

  return new Promise((resolve, reject) => {
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          resolve(response)
        },
        onError: error => {
          reject(error.source.errors)
        },
        updater: proxyStore => {
          const viewerProxy = proxyStore.get('client:root:viewer')
          // Hotfix for mock version
          viewerProxy.setValue(true, 'isLoggedIn')
        }
      }
    )
  })
}
