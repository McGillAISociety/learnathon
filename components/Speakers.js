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
        name: 'Yoshua Bengio',
        subheading: 'Future AI Risks',
        description:
            'Yoshua Bengio is Full Professor in the Department of Computer Science and Operations Research at Université de Montreal, as well as the Founder and Scientific Director of Mila and the Scientific Director of IVADO. Considered one of the world’s leaders in artificial intelligence and deep learning, he is the recipient of the 2018 A.M. Turing Award with Geoff Hinton and Yann LeCun, known as the Nobel prize of computing.',
        eventDescription:
            'Advances in AI offer great promises but with great power comes great responsibility. AI can already provide power to heal or to harm, providing great power - more so with future advances - to those controlling it, a possible threat to democracy, which is all about sharing power. In addition to the shorter term threats to national security and democracy due to the misuse of AI, there is the question of loss of control: there is for now no known way to build controllable AI, so how will we control entities that may one day be smarter than us? And if we figure it out, how do we make sure that everyone follows such safety protocols?',
        image: '/images/speakers/yoshua.png',
    },
    {
        name: 'Liam Paull',
        subheading: 'Learning World Representations for Robotics',
        description:
            "Liam Paull is an assistant professor at l'Université de Montréal and the head of the Montreal Robotics and Embodied AI Lab (REAL). His lab focuses on robotics problems including building representations of the world (such as for simultaneous localization and mapping), modeling of uncertainty, and building better workflows to teach robotic agents new tasks (such as through simulation or demonstration). He is a co-founder and director of the Duckietown Foundation, which is dedicated to making engaging robotics learning experiences accessible to everyone.",
        eventDescription:
            'One of the central questions for mobile robots is that of constructing a model of the world in which the robot is operating. In this talk, we will discuss this discuss an overview of this fundamental problem, followed by some methods in which state-of-the-art machine learning methods can be used to enhance the richness and usefulness of these representations.',
        image: '/images/speakers/liam.png',
    },
    {
        name: 'David Rolnick',
        subheading: 'Tackling Climate Change with Machine Learning',
        description:
            "David Rolnick is an Assistant Professor and Canada CIFAR AI Chair in the School of Computer Science at McGill University and Mila, and Co-founder and Chair of Climate Change AI. Dr. Rolnick is a former NSF Mathematical Sciences Postdoctoral Research Fellow, NSF Graduate Research Fellow, and Fulbright Scholar, and was named to the MIT Technology Review's 2021 list of '35 Innovators Under 35.'",
        eventDescription:
            'Machine learning (ML) can be a useful tool in helping society reduce greenhouse gas emissions and adapt to a changing climate. In this talk, we will explore opportunities and challenges in ML for climate action, from optimizing electrical grids to monitoring crop yield, with an emphasis on how to incorporate domain-specific knowledge into machine learning algorithms. We will also consider ways that ML is used in ways that contribute to climate change, and how to better align the use of ML overall with climate goals.',
        image: '/images/speakers/david.jpg',
    },
    {
        name: 'Steven Li',
        subheading: 'Building the Contact Center of the Future',
        description:
            "Steven Li is a principal AI engineering developer at the National Bank of Canada. At NBC, he focuses on the application of artificial intelligence in the financial domain to improve and to automate process flows for various departments ranging from contact centers to IT.",
        eventDescription:
            'Recent improvements in speech to text, generative AI and natural language processing/understanding have been critical to helping shape the future of contact centers. Join us for a deep dive into the driving factors for employing artificial intelligence in contact centers and what are its benefits.',
        image: '/images/speakers/steven.JPG',
    },
    // {
    //     name: 'Bang Liu',
    //     subheading: 'Talk is Not Cheap, Hand Me the Tools: Augmenting Language Models with Tools for More Effective Problem-Solving',
    //     description:
    //         'Bang Liu is an Assistant Professor in the Department of Computer Science and Operations Research (DIRO) at the University of Montreal. He is a core member of the RALI laboratory (Applied Research in Computer Linguistics) of DIRO, an associate member of Mila – Quebec Artificial Intelligence Institute, and a Canada CIFAR AI (CCAI) Chair. His research interests primarily lie in the areas of natural language processing (NLP), multimodal and embodied learning, and AI + X (e.g, material science, health). ',
    //     eventDescription:
    //         'Large language models have garnered significant attention in recent years for their remarkable capabilities. However, while language models have proven to be useful in various applications, they often fall short when it comes to complex tasks like mathematical problem-solving. In this talk, we will delve into recent research that combines language models with external tools to address this limitation. Our discussion will center on the potential benefits of this approach, and how it could open up new avenues for language models to be applied in professional settings.',
    //     image: '/images/speakers/liu.png',
    // },
    // {
    //     name: 'Ziang Xiao',
    //     subheading: 'Seeing Us through Machine: Designing and Building AI to Understand Humans',
    //     description:
    //         'Ziang Xiao is a Post Doc at MSR and an Assistant Professor at the CS department of Johns Hopkins University. Broadly, his work lies in the intersection of HCI, NLP, and Social Psychology. His research is motivated by the fundamental question of understanding human behaviors at scale. His current work aims to generate theories about human-AI interaction and AI-powered research tools for social science studies.',
    //     eventDescription:
    //         'Many societal issues, such as health care, voting, etc., require decision-makers to study their stakeholders to design interventions or make a policy change. How do we conduct robust, generalizable, and engaging studies about human behavior? In this talk, I will share my vision of the role of AI in the quest to understand humans and how we could approach such a future. I will introduce my work on designing and building conversational AI to conduct engaging surveys and collect high-quality information. I will first demonstrate the effectiveness of conversational AIs in transforming online survey experiences through a field study. Then, I will present a human-in-the-loop framework to create more effective interview chatbots with active listening skills. In the end, I will talk about my future research perspectives on designing and developing human-centered AI to understand humans for social change.',
    //     image: '/images/speakers/ziangxiao.jpg',
    // },
    // {
    //     name: 'Yue Li',
    //     subheading: 'Deep embedded topic model for single-cell genomic data',
    //     description:
    //         'Yue Li is a Assistant Professor, School of Computer Science, McGill University. He obtained a PhD degree in Computer Science and Computational Biology at University of Toronto in 2014. Prior to joining McGill, he was a postdoctoral associate at Computer Science and Artificial Intelligence Laboratory (CSAIL) at MIT (2015-2018). He is also Canada Research Chair (Tier 2) in Machine learning for Genomics and Healthcare, and an associate member at Mila - Quebec AI Institute.',
    //     eventDescription:
    //         "Dr. Li's presentation will be an overview of his research, which is focused on developing interpretable probabilistic learning models and deep learning models to model genetic, epigenetic, electronic health record, and single-cell genomic data. Systematically integrating multimodal and longitudinal data has impactful applications in computational medicine including building intelligent clinical recommender systems, forecasting patient health trajectories, personalized polygenic risk predictions, characterizing multi-trait functional genetic mutations, and dissecting cell-type-specific regulatory elements that are underpin complex traits and diseases in human. His program covers three main research areas involving applied machine learning in (1) healthcare and public health, (2) computational genomics, and (3) population genetics.",
    //     image: '/images/speakers/yueli.jpeg',
    // },
    // {
    //     name: 'Glen Berseth',
    //     subheading: 'Developing Robots that Autonomously Learn and Plan in the Real World',
    //     description:
    //         'Glen Berseth is an assistant professor at the Université de Montréal, a core academic member of the Mila - Quebec AI Institute, Canada CIFAR AI chair, and co-director of the Robotics and Embodied AI Lab (REAL). He was a Postdoctoral Researcher at Berkeley Artificial Intelligence Research (BAIR), working with Sergey Levine. His previous and current research has focused on solving sequential decision-making problems (planning) for real-world autonomous learning systems (robots). The specific of his research has covered the areas of human-robot collaboration, reinforcement, continual-, meta-, multi-agent, and hierarchical learning. Dr. Berseth has published across the top venues in robotics, machine learning, and computer animation in his work. He also teaches a course on robot learning at Université de Montréal and Mila, covering the most recent research on machine learning techniques for creating generalist robots.',
    //     eventDescription:
    //         "While humans plan and solve tasks with ease, simulated and robotics agents struggle to reproduce the same fidelity, robustness and skill. For example, humans can grow to perform incredible gymnastics, prove that black holes exist, and produce works of art, all starting from the same base learning system. I will present recent work and a roadmap on how to create robotic agents that not only solve many of the tasks we commonly perform but can also be used to help us solve scientific problems we don’t have the answers for. To enable this learning, the agent needs to (1) be able to collect a large amount of experience, (2) train its model to best reuse this experience, and (3) optimize general objectives for understanding, controlling, and changing its environment.",
    //     image: '/images/speakers/glen.jpeg',
    // }
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
                            <h6><strong>Speaker Description: </strong>
                                <ReadMore>
                                    {speaker.description}
                                </ReadMore>
                            </h6>
                            <h6>
                                <strong>Event Description: </strong>
                                <ReadMore>
                                    {speaker.eventDescription}
                                </ReadMore>
                            </h6> 
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
