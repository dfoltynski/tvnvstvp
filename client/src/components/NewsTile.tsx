import React from "react";
import "../App.css";

interface INewsTypes {
    title: string;
    imgSrc: string;
    articleUrl: string;
}

const NewsTile: React.FC<INewsTypes> = ({ title, imgSrc, articleUrl }) => {
    return (
        <button>
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <a href={articleUrl} target="_blank" rel="noreferrer">
                <p>Przeczytaj</p>
            </a>
        </button>
    );
};

export default NewsTile;
