import Head from 'next/head'
import Header from '@components/nav/header/Header'
import Footer from '@components/nav/Footer'

function PageWrapper(Component){
    return () => (
        <>
        <Header/>
        <div className="container mx-auto app-container">
          <Head>
            <title>ev-Comparator</title>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <main className="bg-light-gray">
            <Component/>
          </main>
    
        </div>
        <Footer />
        </>
    );
}

export default PageWrapper;