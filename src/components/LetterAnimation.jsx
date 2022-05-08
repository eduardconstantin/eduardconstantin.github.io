import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
    // We'll do this to prevent wrapping of words using CSS
    return <span className="word-wrapper">{props.children}</span>;
};

// LetterAnimation
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const LetterAnimation = (props) => {

    const item = {
        hidden: {
            y: "120%",
            scale: 2,
            opacity: 0,
            color:  "#FF6A88",
            transition: { 
                ease: [0.455, 0.03, 0.515, 0.955], 
                duration: 0.8,
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            
            scale: [2, 0.7, 1],
            color: ["#85FFBD", "#FF6A88", "#FFFAFF"],
            transition: { 
                type: 'spring',
                damping: 13
            }
        }
    };

    const letter = {
        hidden: {
            y: "200%",
            opacity: 0,
            scale: 2,
            color:  "#009FB7",
            transition: { 
                duration: 0.2,
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: [1.5, 0.9, 1],
            color: ["#00D4F5","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)"],
            transition: { 
                staggerChildren: 0.04,
                type: 'spring',
                bounce: 0.3
            }
        }
    };

    //  Split each word of props.text into an array
    const splitWords = props.text.split(" ");

    // Create storage array
    const words = [];

    // Push each word into words array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    // Add a space ("\u00A0") to the end of each word
    words.map((word,i,arr) => {
        if(arr.length-1 !== i)
            return word.push("\u00A0");
        else
            return null;
    });

    return (
        <props.tag>
            
            {words.map((word, index) => {
            return (
                // Wrap each word in the Wrapper component
                
                <Wrapper key={index} >
                    {words[index].flat().map((element, index) => {
                        return (
                            <motion.span key={index} variants={letter} style={{ position: "relative"}}>
                                <motion.span
                                key={index}
                                style={{ position: "absolute", left: "0"}}
                                variants={letter}
                                >
                                    {element}
                                </motion.span>
                                <motion.span
                                key={index+1}
                                style={{ position: "absolute", left: "0"}}
                                variants={letter}
                                >
                                    {element}
                                </motion.span>

                                <motion.span
                                key={index+3}
                                style={{ display: "inline-block" }}
                                variants={item}
                                >
                                    {element}
                                </motion.span>
                                
                                <motion.span
                                key={index+2}
                                style={{ position: "absolute", left: "0"}}
                                variants={letter}
                                >
                                    {element}
                                </motion.span>
                            </motion.span>
                        );
                    })}
                </Wrapper>
            );
            })}
            
        </props.tag>
    );
};

export default LetterAnimation;
