import styles from '../styles/FAQ.module.scss';
import Accordion from './Accordion';

const FAQs = [
    {
        question: 'Who can participate?',
        answer: 'Everybody! The event is open to everyone interested in learning more about AI. We strongly encourage applicants who identify as Indigenous, Black, Latinx, women/non-binary, queer, disabled, or otherwise underrepresented in tech to attend.',
    },
    { question: 'foo', answer: 'bar baz' },
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
