import styles from '../styles/Speakers.module.scss';

// failed attempt to use a component libary: https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-basic-example-swg0y?file=/src/index.tsx
// import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

// import {
//     BsFillArrowLeftSquareFill,
//     BsFillArrowRightSquareFill,
// } from 'react-icons/bs';

// function Arrow({ children, disabled, onClick }) {
//     return (
//         <button
//             disabled={disabled}
//             onClick={onClick}
//             style={{
//                 cursor: 'pointer',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 right: '1%',
//                 opacity: disabled ? '0' : '1',
//                 userSelect: 'none',
//             }}
//         >
//             {children}
//         </button>
//     );
// }

// function LeftArrow() {
//     const {
//         isFirstItemVisible,
//         scrollPrev,
//         visibleItemsWithoutSeparators,
//         initComplete,
//     } = React.useContext(VisibilityContext);

//     const [disabled, setDisabled] = React.useState(
//         !initComplete || (initComplete && isFirstItemVisible)
//     );
//     React.useEffect(() => {
//         if (visibleItemsWithoutSeparators.length) {
//             setDisabled(isFirstItemVisible);
//         }
//     }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

//     return (
//         <Arrow disabled={disabled} onClick={() => scrollPrev()}>
//             <BsFillArrowLeftSquareFill size={50} color="white" />
//         </Arrow>
//     );
// }

// function RightArrow() {
//     const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
//         React.useContext(VisibilityContext);
//     const [disabled, setDisabled] = React.useState(
//         !visibleItemsWithoutSeparators.length && isLastItemVisible
//     );
//     React.useEffect(() => {
//         if (visibleItemsWithoutSeparators.length) {
//             setDisabled(isLastItemVisible);
//         }
//     }, [isLastItemVisible, visibleItemsWithoutSeparators]);

//     return (
//         <Arrow disabled={disabled} onClick={() => scrollNext()}>
//             <BsFillArrowRightSquareFill />
//         </Arrow>
//     );
// }

// function onWheel(apiObj, ev) {
//     const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//     if (isThouchpad) {
//         ev.stopPropagation();
//         return;
//     }

//     if (ev.deltaY < 0) {
//         apiObj.scrollNext();
//     } else if (ev.deltaY > 0) {
//         apiObj.scrollPrev();
//     }
// }

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
            <div className="flex-center">
                <div className={`flex-center ${styles['speakers']}`}>
                    {speakers.map((speaker, index) => (
                        <div className={styles['speaker']} key={index}>
                            <h4>{speaker.name}</h4>
                            <h5>{speaker.subheading}</h5>
                            <img src={speaker.image} alt={speaker.name} />
                            <p>{speaker.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <center>
                <small>...and more to come!</small>
            </center>
        </section>
    );
}
