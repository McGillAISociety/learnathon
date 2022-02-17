import Head from 'next/head';
import '../styles/app.scss';

// TODO: navbar
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>McGill AI Learnathon</title>
            </Head>
            <div id="background" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
