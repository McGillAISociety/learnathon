import styles from '../styles/Info.module.scss';

// TODO: work more on these
const infoThings = [
    {
        title: 'A day of AI for everyone',
        text: (
            <>
                Our day-long program consistings of a <b>beginner track</b> with
                talks focused on more introductory AI concepts, an{' '}
                <b>advanced track</b> for more specialized topics as well as a
                sponsor track with more industry focused talks.
            </>
        ),
        icon: '/images/icons/calendar.png',
    },
    {
        title: 'Expert Speakers',
        text: 'Industry and research leaders will host a range of technical talks and moderated panels.',
        icon: '/images/icons/people.png',
    },
    {
        title: 'Career Opportunities',
        text: '1:1 networking with other attendees, speakers and sponsors',
        icon: '/images/icons/briefcase.png',
    },
];

export default function Info() {
    return (
        <section>
            <h2>An Undergraduate AI Conference</h2>
            <p>
                Join some of the most curious students and acclaimed AI
                researchers in Montreal for an 6-hour virtual conference. The
                McGill AI Society has organized a series of talks and events in
                the form of a conference, open to interested, curious, and
                ambitious students ranging from high school to the graduate
                level, completely free of charge! Come learn about AI and meet
                other like-minded students! Registration includes the following:
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
