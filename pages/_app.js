import App, {Container} from 'next/app'
import React from 'react'
import Layout from '../src/styles/Layout'
import Header from '../src/components/Header/Header';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Header />
    <Component {...pageProps} />
  </Layout>
)

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // console.log('here')
    // console.log(ctx)
    return {pageProps}
}

export default MyApp

// export default class MyApp extends App {
//   static async getInitialProps ({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }
//     console.log('here')
//     console.log(ctx)
//     return {pageProps}
//   }

//   render () {
//     // console.log(this.props)
//     const {Component, pageProps} = this.props
//     return (
//       <Layout>
//         <Header />
//         <Component {...pageProps} />
//       </Layout>
//     )
//   }
// }