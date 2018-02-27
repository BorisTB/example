import React from 'react'
import { QueryRenderer } from 'react-relay'

import environment from '../relayEnvironment'

const withQuery = (query, variables) =>
  (WrappedComponent, Loading, ErrorHandler) => (
    <QueryRenderer
      environment={ environment }
      query={ query }
      variables={ variables }
      render={({ error, props }) => {
        if (error) {
          return ErrorHandler
            ? <ErrorHandler error={ error } />
            : <div>{ error.message }</div>
        } else if (props) {
          return <WrappedComponent {...props} />
        } else {
          return Loading ? <Loading /> : <div>Loading...</div>
        }
      }}
    />
  )

export default withQuery
