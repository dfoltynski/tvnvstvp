import React, { useState } from "react";

interface IRef {
    sliderRef: React.RefObject<HTMLSpanElement>;
    tvpRef: React.RefObject<HTMLParagraphElement>;
    tvnRef: React.RefObject<HTMLParagraphElement>;
}

const Slider: React.FC<IRef> = ({ sliderRef, tvpRef, tvnRef }) => {
    const [tvnOrtvp, setTvnOrtvp] = useState<boolean>(false);

    const switchToTVNorTVP = (): void => {
        const tvnNode = tvnRef.current;
        const tvpNode = tvpRef.current;
        const sliderNode = sliderRef.current;

        if (tvnOrtvp) {
            if (sliderNode && tvpNode && tvnNode) {
                tvpNode.style.color = "#91b8ff";
                tvnNode.style.color = "#1c386b";
                sliderNode.style.transform = "translateX(0)";
            }
        } else {
            if (sliderNode && tvpNode && tvnNode) {
                tvpNode.style.color = "#1c386b";
                tvnNode.style.color = "#91b8ff";
                sliderNode.style.transform = "translateX(100%)";
            }
        }

        setTvnOrtvp(!tvnOrtvp);
    };

    return (
        <div className="switch-container" onClick={switchToTVNorTVP}>
            <label className="switch">
                <span ref={sliderRef} className="switch-input"></span>
                <p ref={tvpRef} className="switch-label">
                    TVP
                </p>
                <input type="checkbox" />
                <p ref={tvnRef} className="switch-label">
                    TVN
                </p>
            </label>
        </div>
    );
};

export default Slider;
