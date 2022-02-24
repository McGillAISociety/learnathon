import styles from '../styles/Info.module.scss';

const infoThings = [
    {
        title: 'AI for everyone',
        text: (
            <>
                Our day-long program has a <b>beginner track</b> with talks
                focused on introductory AI concepts, an <b>advanced track</b>{' '}
                for specialized topics as well as a <b>sponsor track</b> with
                industry-focused talks.
            </>
        ),
        icon: '/images/icons/calendar.png',
    },
    {
        title: 'Expert Speakers',
        text: (
            <>
                We have invited a slate of <b>industry and research leaders</b>
                &nbsp; to host a range of technical talks and moderated panels.
            </>
        ),
        icon: '/images/icons/people.png',
    },
    {
        title: 'Career Opportunities',
        text: (
            <>
                Though the Hopin online platform, there will be ample
                opportunity to meet others with an interest in AI! What's more,
                the conference will wrap up with a <b>1:1 networking session</b>
                !
            </>
        ),
        icon: '/images/icons/briefcase.png',
    },
];

export default function Info() {
    return (
        <section>
            <h2>An Undergraduate AI Conference</h2>
            <p>
                Join some of the most curious students and acclaimed AI
                researchers in Montreal for a <b>6-hour virtual conference</b>.
                The McGill AI Society has organized a series of talks and events
                open to interested, curious, and ambitious students ranging from
                high school to the graduate level, completely{' '}
                <b>free of charge</b>! Come learn about AI and meet other
                like-minded students! Registration includes the following:
            </p>
            <div className={`flex-center ${styles['info']}`}>
                {infoThings.map((info, index) => (
                    <div className={styles['info__thing']} key={index}>
                        <div className="flex-center">
                            <img src={info.icon} alt="" />
                        </div>
                        <h3>{info.title}</h3>
                        <p>{info.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
