import '../styles/app.scss';

// TODO: navbar
function MyApp({ Component, pageProps }) {
    return (
        <>
            <div id="background" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
