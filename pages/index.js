import Head from 'next/head'
import Header from '@components/nav/header/Header'
import Footer from '@components/nav/Footer'
import Main from '@components/Main'

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container mx-auto app-container">
      <Head>
        <title>ev-Comparator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-light-gray">
        <Main/>
      </main>

    </div>
    <Footer />
    </>
  )
}
