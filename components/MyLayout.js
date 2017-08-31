import Head from 'next/head'
import stylesheet from '../styles/index.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
