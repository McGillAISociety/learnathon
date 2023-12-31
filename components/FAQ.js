import styles from '../styles/FAQ.module.scss';
import Accordion from './Accordion';

const FAQs = [
    {
        question: 'Who can participate?',
        answer: 'Everybody! The event is open to everyone interested in learning more about AI. We strongly encourage applicants who identify as Indigenous, Black, Latinx, women/non-binary, queer, disabled, or otherwise underrepresented in tech to attend.',
    },
    {
        question: 'Is this event in person or virtual?',
        answer: "The Learnathon is now back in person this year! We have a truly incredible program this year that you won't want to miss!",
    },
    {
        question: 'Do I have to pay to attend the Learnathon?',
        answer: 'Nope, the Learnathon is completely free to attend. All you need to do is register to confirm your spot!',
    },
    {
        question: 'Do I have to learn anything in advance?',
        answer: 'Some basic math or computer science background may be useful for our more advanced technical talks and panels but is absolutely not necessary!',
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
