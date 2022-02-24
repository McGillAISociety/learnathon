import styles from '../styles/Speakers.module.scss';

const speakers = [
    {
        name: 'Reihaneh Rabbany',
        subheading: 'Network Science, Data Mining',
        description:
            'Reihaneh is an Assistant Professor at the School of Computer Science, McGill University. Her research is at the intersection of network science, data mining and machine learning, with a focus on analyzing real-world interconnected data, and social good applications.',
        image: '/images/speakers/rabbany.png',
    },
    {
        name: 'Bang Liu',
        subheading: 'NLP, Data Mining',
        description:
            'Bang Liu is a Canada CIFAR AI Chair at Mila. He is an assistant professor in the Department of Computer Science and Operations Research (DIRO) at the University of Montreal. His research interests primarily lie in the areas of natural language processing (NLP), data mining, multimodal and multitask learning, AI + X (e.g., animation, VR, health). ',
        image: '/images/speakers/liu.png',
    },
    {
        name: 'Brennan Nichyporuk',
        subheading: 'Deep Learning for Medical Image Analysis',
        description:
            "Research Scientist, MILA; External Collaborator with McGill's Probabilistic Vision Group, a part of the McGill Centre for Intelligent machines. The focus of the group’s research is on developing probabilistic inference techniques for computer vision problems.",
        image: '/images/speakers/nichyporuk.png',
    },
    {
        name: 'McGill ProjectX Team',
        subheading: 'Healthcare Applications, Reinforcement Learning',
        description:
            "ProjectX is an annual machine learning competition with institutions like Yale, Cornell, UBC and more. This year's theme being healthcare, the McGill team won first place for their paper on applying deep reinforcement learning to improve mechanical ventilation! They will be giving a short talk about their project and answering your questions about how to get involved in AI research as an undergrad.",
        image: '/images/speakers/projectx.png',
    },
];

export default function Speakers() {
    return (
        <section>
            <h2>Speakers</h2>
            {/* {speakers.map((speaker, index) => (
                <div>
                    <h4>{speaker.name}</h4>
                    <h5>{speaker.subheading}</h5>
                    <p>{speaker.description}</p>
                    <img src={speaker.image} alt={speaker.name} />
                </div>
            ))} */}
        </section>
    );
}
