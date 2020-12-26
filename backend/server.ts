import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import puppeteer from "puppeteer";
const scrollPageToBottom = require("puppeteer-autoscroll-down");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get(
    "/news",
    async (req: Request, res: Response): Promise<void> => {
        const getFromTVN = async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://tvn24.pl/polska", { waitUntil: "load" });

            // get all visible headings from tvn/polska
            let headings = await page.$$eval(".heading", (headingsText) => {
                return headingsText.map((txt) => txt.textContent.trim());
            });

            // collecting urls for articles
            const urls = await page.$$eval(".teaser-wrapper", (teaser) => {
                return teaser.map((t) =>
                    t.children[0].children[0].children[0].children[0].getAttribute(
                        "href"
                    )
                );
            });

            // // Scroll to the bottom of the page with puppeteer-autoscroll-down
            await scrollPageToBottom(page);

            // collecting imgs for articles
            let images = await page.$$eval(
                ".default-teaser__image",
                (imgSrc) => {
                    return imgSrc.map((i) => i.getAttribute("src"));
                }
            );

            browser.close();

            const newsFromTVN = new Map();

            headings.forEach((header, index) => {
                if (images[index] && index < 10) {
                    newsFromTVN.set(header, [images[index], urls[index]]);
                }
            });

            return newsFromTVN;
        };

        const getFromTVP = async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://www.tvp.info/191866/polska", {
                waitUntil: "load",
            });

            // get all visibile headings
            let headings = await page.$$eval(
                ".main-mesh-box__title",
                (headingsText) => {
                    return headingsText.map((txt) => txt.textContent.trim());
                }
            );

            // collecting imgs for articles
            let images = await page.$$eval(".img-responsive", (imgSrc) => {
                return imgSrc.map((i) => i.getAttribute("src"));
            });

            // collecting urls for articles
            let urls = await page.$$eval(".main-mesh-box__image", (url) => {
                return url.map((u) => u.getAttribute("href"));
            });

            browser.close();
            const newsFromTVP = new Map();
            headings.forEach((header, index) => {
                if (images[index] && index < 10) {
                    newsFromTVP.set(header, [
                        images[index + 1],
                        urls[index + 1],
                    ]);
                }
            });

            return newsFromTVP;
        };

        const tvn = await getFromTVN();
        const tvp = await getFromTVP();

        res.json({ tvn: [...tvn], tvp: [...tvp] });
    }
);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
