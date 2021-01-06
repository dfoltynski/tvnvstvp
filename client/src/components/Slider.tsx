import React, { useState, createRef } from "react";

interface IRef {
    tvpNodeRef: React.RefObject<HTMLParagraphElement>;
    tvnNodeRef: React.RefObject<HTMLParagraphElement>;
}

const Slider: React.FC<IRef> = ({ tvnNodeRef, tvpNodeRef }) => {
    const [tvnOrtvp, setTvnOrtvp] = useState<boolean>(false);

    const tvnParagraphRef = createRef<HTMLParagraphElement>();
    const tvpParagraphRef = createRef<HTMLParagraphElement>();
    const sliderRef = createRef<HTMLSpanElement>();

    const switchToTVNorTVP = (): void => {
        const tvnParagraph = tvnParagraphRef.current;
        const tvpParagraph = tvpParagraphRef.current;
        const sliderNode = sliderRef.current;

        const tvnNode = tvnNodeRef.current;
        const tvpNode = tvpNodeRef.current;

        if (tvnOrtvp) {
            if (
                sliderNode &&
                tvpParagraph &&
                tvnParagraph &&
                tvnNode &&
                tvpNode
            ) {
                console.log("tvp");

                tvpParagraph.style.color = "#91b8ff";
                tvnParagraph.style.color = "#1c386b";
                sliderNode.style.transform = "translateX(0)";
                tvnNode.style.transform = "translateX(-100%)";
            }
        } else {
            if (
                sliderNode &&
                tvpParagraph &&
                tvnParagraph &&
                tvnNode &&
                tvpNode
            ) {
                console.log(tvnNode);

                console.log("tvn");
                tvpParagraph.style.color = "#1c386b";
                tvnParagraph.style.color = "#91b8ff";
                sliderNode.style.transform = "translateX(100%)";
                tvnNode.style.transform = "translateX(0)";
            }
        }

        setTvnOrtvp(!tvnOrtvp);
    };

    return (
        <div className="switch-container" onClick={switchToTVNorTVP}>
            <label className="switch">
                <span ref={sliderRef} className="switch-input"></span>
                <p ref={tvpParagraphRef} className="switch-label">
                    TVP
                </p>
                <input type="checkbox" />
                <p ref={tvnParagraphRef} className="switch-label">
                    TVN
                </p>
            </label>
        </div>
    );
};

export default Slider;
