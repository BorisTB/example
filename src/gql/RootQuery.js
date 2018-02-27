import { graphql } from 'react-relay'

export default graphql`
  query RootQuery {
    viewer {
      isLoggedIn
      locale
    }
  }
`
