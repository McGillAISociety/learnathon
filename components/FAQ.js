import styles from '../styles/FAQ.module.scss';
import Accordion from './Accordion';

const FAQs = [
    {
        question: 'Who can participate?',
        answer: 'Everybody! The event is open to everyone interested in learning more about AI. We strongly encourage applicants who identify as Indigenous, Black, Latinx, women/non-binary, queer, disabled, or otherwise underrepresented in tech to attend.',
    },
    {
        question: 'Is this a virtual event?',
        answer: "Unfortunately, due to the pandemic, the learnathon will be online again this year (hopefully for the last time). We will be using the Hoppin platform. No matter the format, we have a truly incredible slate of programming that you won't want to miss!",
    },
    {
        question: 'Does the conference cost money?',
        answer: 'Nope!',
    },
    {
        question: 'Do I have to learn anything in advance?',
        answer: 'Some basic math or computer science background may be useful for our more advanced programming but absolutely is not necessary.',
    },
];

export default function FAQ() {
    return (
        <section>
            <h2>Frequently Asked Questions</h2>
            <div className="flex-center">
                <div className={styles['accordions']}>
                    {FAQs.map((faq, index) => (
                        <Accordion key={index} label={faq.question}>
                            <small>{faq.answer}</small>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
}
