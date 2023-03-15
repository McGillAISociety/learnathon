import styles from '../styles/Speakers.module.scss';
import React, { useState } from "react";

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
        name: 'Bang Liu',
        subheading: 'Talk is Not Cheap, Hand Me the Tools: Augmenting Language Models with Tools for More Effective Problem-Solving',
        description:
            'Bang Liu is an Assistant Professor in the Department of Computer Science and Operations Research (DIRO) at the University of Montreal. He is a core member of the RALI laboratory (Applied Research in Computer Linguistics) of DIRO, an associate member of Mila – Quebec Artificial Intelligence Institute, and a Canada CIFAR AI (CCAI) Chair. His research interests primarily lie in the areas of natural language processing (NLP), multimodal and embodied learning, and AI + X (e.g, material science, health). ',
        eventDescription:
            'Large language models have garnered significant attention in recent years for their remarkable capabilities. However, while language models have proven to be useful in various applications, they often fall short when it comes to complex tasks like mathematical problem-solving. In this talk, we will delve into recent research that combines language models with external tools to address this limitation. Our discussion will center on the potential benefits of this approach, and how it could open up new avenues for language models to be applied in professional settings.',
        image: '/images/speakers/liu.png',
    },
    {
        name: 'Ziang Xiao',
        subheading: 'Seeing Us through Machine: Designing and Building AI to Understand Humans',
        description:
            'Ziang Xiao is a Post Doc at MSR and an Assistant Professor at the CS department of Johns Hopkins University. Broadly, his work lies in the intersection of HCI, NLP, and Social Psychology. His research is motivated by the fundamental question of understanding human behaviors at scale. His current work aims to generate theories about human-AI interaction and AI-powered research tools for social science studies.',
        eventDescription:
            'Many societal issues, such as health care, voting, etc., require decision-makers to study their stakeholders to design interventions or make a policy change. How do we conduct robust, generalizable, and engaging studies about human behavior? In this talk, I will share my vision of the role of AI in the quest to understand humans and how we could approach such a future. I will introduce my work on designing and building conversational AI to conduct engaging surveys and collect high-quality information. I will first demonstrate the effectiveness of conversational AIs in transforming online survey experiences through a field study. Then, I will present a human-in-the-loop framework to create more effective interview chatbots with active listening skills. In the end, I will talk about my future research perspectives on designing and developing human-centered AI to understand humans for social change.',
        image: '/images/speakers/ziangxiao.jpg',
    },
    {
        name: 'Yue Li',
        subheading: 'Deep embedded topic model for single-cell genomic data',
        description:
            'Yue Li is a Assistant Professor, School of Computer Science, McGill University. He obtained a PhD degree in Computer Science and Computational Biology at University of Toronto in 2014. Prior to joining McGill, he was a postdoctoral associate at Computer Science and Artificial Intelligence Laboratory (CSAIL) at MIT (2015-2018). He is also Canada Research Chair (Tier 2) in Machine learning for Genomics and Healthcare, and an associate member at Mila - Quebec AI Institute.',
        eventDescription:
            "Dr. Li's presentation will be an overview of his research, which is focused on developing interpretable probabilistic learning models and deep learning models to model genetic, epigenetic, electronic health record, and single-cell genomic data. Systematically integrating multimodal and longitudinal data has impactful applications in computational medicine including building intelligent clinical recommender systems, forecasting patient health trajectories, personalized polygenic risk predictions, characterizing multi-trait functional genetic mutations, and dissecting cell-type-specific regulatory elements that are underpin complex traits and diseases in human. His program covers three main research areas involving applied machine learning in (1) healthcare and public health, (2) computational genomics, and (3) population genetics.",
        image: '/images/speakers/yueli.jpeg',
    },
    {
        name: 'Glen Berseth',
        subheading: 'Developing Robots that Autonomously Learn and Plan in the Real World',
        description:
            'Glen Berseth is an assistant professor at the Université de Montréal, a core academic member of the Mila - Quebec AI Institute, Canada CIFAR AI chair, and co-director of the Robotics and Embodied AI Lab (REAL). He was a Postdoctoral Researcher at Berkeley Artificial Intelligence Research (BAIR), working with Sergey Levine. His previous and current research has focused on solving sequential decision-making problems (planning) for real-world autonomous learning systems (robots). The specific of his research has covered the areas of human-robot collaboration, reinforcement, continual-, meta-, multi-agent, and hierarchical learning. Dr. Berseth has published across the top venues in robotics, machine learning, and computer animation in his work. He also teaches a course on robot learning at Université de Montréal and Mila, covering the most recent research on machine learning techniques for creating generalist robots.',
        eventDescription:
            "While humans plan and solve tasks with ease, simulated and robotics agents struggle to reproduce the same fidelity, robustness and skill. For example, humans can grow to perform incredible gymnastics, prove that black holes exist, and produce works of art, all starting from the same base learning system. I will present recent work and a roadmap on how to create robotic agents that not only solve many of the tasks we commonly perform but can also be used to help us solve scientific problems we don’t have the answers for. To enable this learning, the agent needs to (1) be able to collect a large amount of experience, (2) train its model to best reuse this experience, and (3) optimize general objectives for understanding, controlling, and changing its environment.",
        image: '/images/speakers/glen.jpeg',
    }
];

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className={`${styles['readMore']}`}>
        <strong>
          {isReadMore ? "...read more" : " show less"}
          </strong>
        </span>
        
      </p>
    );
  };

export default function Speakers() {
    return (
        <section>
            <h2>Speakers</h2>
            
            <div className="flex-center">
                <div className={`flex-center ${styles['speakers']}`}>
                    {speakers.map((speaker, index) => (
                        <div className={styles['speaker']} key={index}>
                            <h4>{speaker.name}</h4>
                            <h5>{speaker.subheading} </h5>
                            <img src={speaker.image} alt={speaker.name} />
                            <p><strong>Speaker Description: </strong>
                                <ReadMore>
                                    {speaker.description}
                                </ReadMore>
                            </p>
                            <p>
                                <strong>Event Description: </strong>
                                <ReadMore>
                                    {speaker.eventDescription}
                                </ReadMore>
                            </p> 
                        </div>
                    ))}
                    </div>
            </div>
            <center>
                <small>...and more!</small>
            </center>
        </section>
    );
}
