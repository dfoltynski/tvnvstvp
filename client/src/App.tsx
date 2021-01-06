import React, { useEffect, useState, createRef } from "react";
import "./App.css";
import { NewsTile, Slider } from "./components";
import axios from "axios";

function App() {
    const [tvn, setTvn] = useState<[]>();
    const [tvp, setTvp] = useState<[]>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const tvnRef = createRef<HTMLParagraphElement>();
    const tvpRef = createRef<HTMLParagraphElement>();
    const sliderRef = createRef<HTMLSpanElement>();

    useEffect(() => {
        // (async () => {
        //     let res = await axios.get("http://localhost:8080/news");

        //     setTvn(res.data.tvn);
        //     setTvp(res.data.tvp);
        //     setIsLoaded(true);
        // })();
        setIsLoaded(true);
    }, []);

    return isLoaded ? (
        <div className="App">
            <div className="tvptvn">
                {/* {window.innerWidth <= 425 ? (
                    <Slider
                        sliderRef={sliderRef}
                        tvpRef={tvpRef}
                        tvnRef={tvnRef}
                    />
                ) : null} */}
                {/* <Slider
                        sliderRef={sliderRef}
                        tvpRef={tvpRef}
                        tvnRef={tvnRef}
                    /> */}
                <div className="tvp">
                    <NewsTile
                        title={
                            '1. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            '2. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            '2. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            '2. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            '2. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            '2. Rada WUM odroczyła posiedzenie "do dnia dogłębnego zapoznania się z treścią raportu"'
                        }
                        imgSrc={
                            "https://tvn24.pl/najnowsze/cdn-zdjecie-g5f42x-wum-4920445/alternates/LANDSCAPE_840"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    {/* {window.innerWidth <= 425 ? null : (
                            <h3>TVP wiadomości</h3>
                        )}
                        <h3>TVP wiadomości</h3>
                        {tvp?.map((p) => (
                            <NewsTile
                                title={p[0]}
                                imgSrc={p[1][0]}
                                articleUrl={"https://www.tvp.info" + p[1][1]}
                            />
                        ))} */}
                </div>
                {/* <div className="tvn">
                        <h3>TVN wiadomości</h3> 
                        {window.innerWidth <= 425 ? null : (
                            <h3>TVN wiadomości</h3>
                        )}
                        {tvn?.map((p) => (
                            <NewsTile
                                title={p[0]}
                                imgSrc={p[1][0]}
                                articleUrl={p[1][1]}
                            />
                        ))}
                    </div> */}
                <div className="tvn">
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                    <NewsTile
                        title={
                            "Rektor Gaciong złapany na próbie wytropienia studentów prowadzących ZUM na WUM"
                        }
                        imgSrc={
                            "https://s3.tvp.pl/images2/3/5/f/uid_35f02ead40bf7d072e74f3f2cf09574a1609881358339_width_900_play_0_pos_0_gs_0_height_506_nikt-nie-moze-zarzucic-ze-sprzyjamy-jakiejs-opcji-politycznej-fot-forumforumgwiazdcompl.jpg"
                        }
                        articleUrl={"https://www.tvp.info"}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div>Loading</div>
    );
}

export default App;
