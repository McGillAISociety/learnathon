import styles from '../styles/Sponsors.module.scss';

const sponsors = [
    //{ name: 'sama', url: 'https://www.sama.com/careers', imgWidth: 300 },
    /*{
        name: 'intact',
        url: 'https://careers.intactfc.com/intactinsurance/ca/en',
        imgWidth: 300,}
    */,
    { name: 'cae', url: 'https://www.cae.com/careers/', imgWidth: 200 },
    {
        name: 'squarepoint',
        url: 'https://www.squarepoint-capital.com/',
        imgWidth: 150,
    },
];

export default function Sponsors() {
    return (
        <section>
            <h2>Sponsors</h2>
            <div className="flex-center">
                <div className={styles['sponsor-logos']}>
                    <p>
                        A big thank you to our amazing sponsors, without which
                        the Learnathon would be impossible!
                    </p>

                    <div className="flex-center">
                        {sponsors.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`/images/sponsors/${sponsor.name}.png`}
                                    alt={`${sponsor.name} logo`}
                                    width={sponsor.imgWidth}
                                />
                            </a>
                        ))}
                    </div>
                    <p>
                        Want to see your logo here? It's not too late to&nbsp;
                        <a href="mailto:mcgillaicontact@gmail.com">
                            sponsor the Learnathon
                        </a>
                        !
                    </p>
                </div>
            </div>
        </section>
    );
}
