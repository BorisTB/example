import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { getAuthToken } from './utils/auth'

function fetchQuery (operation, variables) {
  return fetch(process.env.REACT_APP_DEV_API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ getAuthToken() }`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  }, error => {
    return error
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
  network,
  store,
})

export default environment
