import React, { useEffect, useState } from "react";
import "./App.css";
import { NewsTile } from "./components";
import getNews from "./utils/API";
import axios from "axios";

function App() {
    const [tvn, setTvn] = useState<[]>();
    const [tvp, setTvp] = useState<[]>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            let res = await axios.get("http://localhost:8080/news");

            console.log(res.data.tvn);

            setTvn(res.data.tvn);
            setTvp(res.data.tvp);
            setIsLoaded(true);
        })();
    }, []);
    return isLoaded ? (
        <div className="App">
            <div className="tvp">
                <h3>TVP wiadomości</h3>
                {tvp?.map((p) =>
                    console.log(
                        "TITLE: " + p[0],
                        "PICTURE: " + p[1][0],
                        "URL: " + `https://www.tvp.info${p[1][1]}`
                    )
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
