import withQuery from './withHelpers/withQuery'
import RootQuery from './gql/RootQuery'
import Layout from './layouts'

export default () => withQuery(RootQuery)(Layout)
