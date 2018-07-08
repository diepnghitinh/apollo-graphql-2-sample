import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import 'cross-fetch/polyfill'
import App from 'next/app'
import { Router } from 'next/router'
import React, { Component } from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import getDisplayName from 'react-display-name'

// Shares the browser ApolloClient instance between pages.
let browserApolloClient

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: process.env.API_URI })
  })

export default Composed =>
  class WithData extends Component {
    constructor(props) {
      super(props)

      // Set the ApolloClient instance used in render().
      this.apolloClient =
        typeof window !== 'undefined'
          ? // Client: Shared instance, created at first render after SSR.
            (browserApolloClient =
              browserApolloClient || createApolloClient(props.cache))
          : // Server: Private instance for SSR.
            createApolloClient(props.cache)
    }

    static displayName = `WithApollo(${getDisplayName(Composed)})`

    static async getInitialProps(ctx) {
      // Use initial props from nested page decorators.
      const props = Composed.getInitialProps
        ? await Composed.getInitialProps(ctx)
        : {}

      // If server environment, preload the page.
      if (ctx.req) {
        const apolloClient = createApolloClient()

        try {
          await getDataFromTree(
            <App
              router={new Router(ctx.pathname, ctx.query, ctx.asPath)}
              pageProps={{ apolloClient, pageProps: props }}
              Component={this.renderPage}
            />
          )
        } catch (error) {
          // Prevent crash from GraphQL errors.
        }

        props.cache = apolloClient.cache.extract()
      }

      return props
    }

    static renderPage = ({ apolloClient, pageProps }) => (
      <ApolloProvider client={apolloClient}>
        <Composed {...pageProps} />
      </ApolloProvider>
    )

    render() {
      return this.constructor.renderPage({
        apolloClient: this.apolloClient,
        pageProps: this.props
      })
    }
  }
