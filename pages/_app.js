import Head from 'next/head';
import '../styles/app.scss';
import Footer from '../components/Footer';

// TODO: navbar (including MAIS logo)
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>McGill AI Learnathon</title>
            </Head>
            <div id="background" />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
