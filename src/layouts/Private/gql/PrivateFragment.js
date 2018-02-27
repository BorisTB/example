import { graphql } from 'react-relay'

export default graphql`
  fragment PrivateFragment_viewer on Viewer {
    user {
      id
    }
  }
`
