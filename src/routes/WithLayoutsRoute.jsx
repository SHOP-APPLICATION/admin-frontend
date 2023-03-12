import React from 'react'
import { Route } from 'react-router-dom'
import Main from '../Layouts'
const WithLayoutsRoute = ({ component: Component, rest }) => {
  return (
    <Route
    {...rest}
    render={(routeProps) => (
      <Main>
        <Component {...routeProps} />
      </Main>
    )}
  />
  )
}

export default WithLayoutsRoute