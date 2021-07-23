import * as React from 'react'
import Layout from '../components/layout'

const FunPage = () => {
  return (
    <Layout pageTitle="Just For Fun">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=hmfrismxu3" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
    </Layout>
  )
}

export default FunPage