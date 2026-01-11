import styles from '../../styles/Speakers.module.scss';
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
        name: 'Blake Richards',
        subheading: 'Life is computation',
        description:
            "Blake Richards is Research Scientist Manager with the Paradigms of Intelligence team at Google, and an Associate Professor in the School of Computer Science and Department of Neurology and Neurosurgery at McGill University. He is also a Core Faculty Member at Mila. Richards’ research lies at the intersection of neuroscience and AI. His laboratory investigates universal principles of intelligence that apply to both natural and artificial agents. He has received several awards for his work, including the NSERC Arthur B. McDonald Fellowship in 2022, the Canadian Association for Neuroscience Young Investigator Award in 2019, and a Canada CIFAR AI Chair in 2018. Richards was a Banting Postdoctoral Fellow at SickKids Hospital from 2011 to 2013. He obtained his PhD in neuroscience from the University of Oxford in 2010, and his BSc in cognitive science and AI from the University of Toronto in 2004.",
        eventDescription:
            'The development of modern AI systems has been shaped by a great deal of inspiration from neuroscience, and biology more generally. Why is that? In this talk I will go over the reasons that biological systems can themselves be understood as engaging in computation, and highlight the reasons why inspiration from natural computation will be likely to continue to shape AI development in the future.',
        image: '/images/speakers/blake.jpg',
    },
    {
        name: 'Liam Paull',
        subheading: 'Open-vocabulary structured scene representations for generalizable zero-shot robotic task execution',
        description:
            "Liam Paull is an associate professor in the computer science department at the University of Montreal and a co-founder of the Montreal Robotics and Embodied AI Lab (REAL). His research focuses building scene representations, modeling of uncertainty, and robot learning through reinforcement and imitaiton learning.  He is also a co-creator of Duckietown, a worldwide robotics education initiative.",
        eventDescription:
            'Recently developed open-vocabulary foundation model representations have the potential to increase robots\’ abilities to perform complex reasoning and task execution in complex environments. This can be achieved in various ways. In this talk we will discuss how using the scene graph as a scaffolding provides a good tradeoff between data efficiency (often allowing zero shot transfer) and generalizability of the robot task performance to new settings. ',
        image: '/images/speakers/liam.png',
    },
    {
        name: 'Oumar Kaba',
        subheading: 'Making sense of matter with machine learning',
        description:
            "Sékou-Oumar Kaba is a Ph.D. candidate in Computer Science at Mila and McGill University working at the intersection of AI, physics, and materials science. Before that he completed a master in theoretical condensed matter physics. During his PhD he worked in Microsoft Research's AI for science team. His research looks at how concepts like symmetry and geometry can help us design more robust and reliable deep learning models in predictive and generative settings.",
        eventDescription:
            'Physics gives us powerful first-principle models, but many real-world problems involve scales and interactions that are difficult to capture exactly. Machine learning can act as a complementary tool, learning effective models from data while still respecting underlying physical structure. In this talk, I will show how machine learning can be used in materials physics through two types of problems: predicting properties of materials using graph neural networks, and the harder “inverse problem” of generating materials with desired properties using diffusion models. I will conclude with perspectives on how experimental data can be integrated into this AI pipeline.',
        image: '/images/speakers/oumar.jpeg',
    },
    
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
