import React, { useEffect, useState, createRef } from "react";
import "./App.css";
import { NewsTile, Slider } from "./components";
import axios from "axios";

function App() {
    const [tvn, setTvn] = useState<[]>();
    const [tvp, setTvp] = useState<[]>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const tvnRef = createRef<HTMLSpanElement>();
    const tvpRef = createRef<HTMLSpanElement>();
    const sliderRef = createRef<HTMLSpanElement>();

    useEffect(() => {
        (async () => {
            let res = await axios.get("http://localhost:8080/news");

            setTvn(res.data.tvn);
            setTvp(res.data.tvp);
            setIsLoaded(true);
            console.log(window.innerWidth);
        })();
    }, []);

    return isLoaded ? (
        <div className="App">
            <div className="tvp">
                {window.innerWidth <= 425 ? (
                    <Slider
                        sliderRef={sliderRef}
                        tvpRef={tvpRef}
                        tvnRef={tvnRef}
                    />
                ) : (
                    <h3>TVP wiadomości</h3>
                )}
                {tvp?.map((p) => (
                    <NewsTile
                        title={p[0]}
                        imgSrc={p[1][0]}
                        articleUrl={"https://www.tvp.info" + p[1][1]}
                    />
                ))}
            </div>
            <div className="tvn">
                <h3>TVN wiadomości</h3>
                {tvn?.map((p) => (
                    <NewsTile
                        title={p[0]}
                        imgSrc={p[1][0]}
                        articleUrl={p[1][1]}
                    />
                ))}
            </div>
        </div>
    ) : (
        <div>Loading</div>
    );
}

export default App;
