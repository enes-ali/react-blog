import React, { useState, useEffect } from 'react';

const MAX_LETTERS = 700;
const LETTERS_PER_ROW = 29;
const LETTER_WIDTH = 20;
const LETTER = "M";

const letters = new Array(MAX_LETTERS);

// Initially show 100 random letters
for(let i=0; i < 100; i++){
    let letter_idx = Math.floor(Math.random() * MAX_LETTERS);

    // each letter is 20px wide and each row is 1em height
    // our letters array is just an array not a matrix
    // so if we want to find the y coordinate of our letter
    // we need to find which row are we gonna place it first
    // to do that we can divide our index with LETTERS_PER_ROW
    // and round it. for example let's say that our index is 55,
    // 55 divided by 29 is 1.89 round it the result is 2 so
    // we are gonna place our LETTER to the second row
    // because each row is 1em, the second row will start from
    // 2em so our y coordinate is 2em
    let y = Math.round(letter_idx / LETTERS_PER_ROW);
    let x = letter_idx % LETTERS_PER_ROW;
    letters[letter_idx] = (<text key={letter_idx}
                                    x={ x * LETTER_WIDTH } y={`${y}em`}>{LETTER}</text>);
}

function removeRandomLetter(){
    letters[Math.floor(Math.random() * MAX_LETTERS)] = undefined;
}

function addRandomLetter(){
    let letter_idx = Math.floor(Math.random() * MAX_LETTERS);
    
    if(letters[letter_idx] !== undefined){
        letters[letter_idx] = undefined;
        return;
    }

    let y = Math.round(letter_idx / LETTERS_PER_ROW);
    let x = letter_idx % LETTERS_PER_ROW;
    letters[letter_idx] = <text key={letter_idx} x={ x * LETTER_WIDTH }
                                y={ `${y}em` }>{LETTER}</text>;
}


export default function BannerImage(){
    const [elements, setElements] = useState(letters);

    useEffect(() => {
        const addInterval = setInterval(() => {
            addRandomLetter();
            setElements([...letters]);
        }, 300);

        const removeInterval = setInterval(() => {
            removeRandomLetter();
            setElements([...letters]);
        }, 500);
        
        return () => {
            clearInterval(addInterval);
            clearInterval(removeInterval);
        }
    }, []);

    return(
        <div id="banner-image-wrapper">
            <svg id="banner-svg">
                {elements}
            </svg>
        </div>
    );
};