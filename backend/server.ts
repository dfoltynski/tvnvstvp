import express, { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import puppeteer from "puppeteer";
const scrollPageToBottom = require("puppeteer-autoscroll-down");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get(
    "/news",
    async (req: Request, res: Response): Promise<void> => {
        const getFromTVN = async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://tvn24.pl/", { waitUntil: "load" });

            // headings[0] - top story heading

            let headings = await page.$$eval(".heading", (headingsText) => {
                return headingsText.map((txt) => txt.textContent.trim());
            });

            let topStoryImage = await page.$$eval(
                ".top-story__image",
                (imgSrc) => {
                    return imgSrc.map((i) => i.getAttribute("src"));
                }
            );

            let topStoryURL = await page.$$eval(
                ".top-story-container",
                (url) => {
                    return url.map((u) =>
                        u.children[0].children[1].children[0].children[0].getAttribute(
                            "href"
                        )
                    );
                }
            );

            await page.evaluate(() => {
                window.scrollTo(0, window.scrollY);
            });

            const urls = await page.$$eval(".teaser-wrapper", (teaser) => {
                return teaser.map((t) =>
                    t.children[0].children[0].children[0].children[0].getAttribute(
                        "href"
                    )
                );
            });

            // // Scroll to the bottom of the page with puppeteer-autoscroll-down
            await scrollPageToBottom(page);

            let images = await page.$$eval(
                ".default-teaser__image",
                (imgSrc) => {
                    return imgSrc.map((i) => i.getAttribute("src"));
                }
            );

            browser.close();
            const newsFromTVN = new Map();
            headings.forEach((header, index) => {
                if (index === 0) {
                    newsFromTVN.set(header, [topStoryImage, topStoryURL]);
                } else if (images[index] && index < 10) {
                    newsFromTVN.set(header, [images[index], urls[index]]);
                }
            });
            return newsFromTVN;
        };

        const getFromTVP = async () => {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto("https://www.tvp.info/191866/polska", {
                waitUntil: "load",
            });

            // headings[0] - top story heading

            let headings = await page.$$eval(
                ".main-mesh-box__title",
                (headingsText) => {
                    return headingsText.map((txt) => txt.textContent.trim());
                }
            );

            let images = await page.$$eval(".img-responsive", (imgSrc) => {
                return imgSrc.map(
                    (i) => "https://www.tvp.info/" + i.getAttribute("src")
                );
            });

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

        console.log(tvn);
        console.log(tvp);

        res.status(200);
    }
);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
