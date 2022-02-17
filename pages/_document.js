import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        // TODO: the image
        return (
            <Html>
                <Head>
                    <title>McGill AI Learnathon</title>
                    <meta name="title" content="McGill AI Learnathon" />
                    <meta
                        name="description"
                        content="An undergraduate AI research conference"
                    />

                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://mcgillailearn.com"
                    />
                    <meta property="og:title" content="McGill AI Learnathon" />
                    <meta
                        property="og:description"
                        content="An undergraduate AI research conference"
                    />
                    {/* <meta property="og:image" content={imagePath} /> */}

                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://mcgillailearn.com"
                    />
                    <meta
                        property="twitter:title"
                        content="McGill AI Learnathon"
                    />
                    <meta
                        property="twitter:description"
                        content="An undergraduate AI research conference"
                    />
                    {/* <meta property="twitter:image" content={imagePath} /> */}

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/meta/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/meta/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/meta/favicon-16x16.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        name="keywords"
                        content="learnathon, AI, ML, MAIS, McGill, artificial intelligence, machine learning, university, society"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta name="language" content="English" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
