import Relay from 'react-relay'

import Private from './Private'
import PrivateFragment from './gql/PrivateFragment'

export default Relay.createFragmentContainer(Private, PrivateFragment)
