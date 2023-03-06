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
                            <h5><strong>Event Title: </strong>{speaker.subheading} </h5>
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
                <small>...and many more coming soon!</small>
            </center>
        </section>
    );
}
