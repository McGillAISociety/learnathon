import '../styles/app.scss';

// TODO: navbar
// TODO; animation in the background
function MyApp({ Component, pageProps }) {
    return (
        <>
            <div id="background" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
