import axios from "axios";

interface INews {
    tvn: object;
    tvp: object;
}

const getNews = async () => {
    let res = await axios.get("http://localhost:8080/news");
    console.log(res.status);
};

export default getNews;
