import React, { useState, useEffect, useContext } from 'react';
import content from './content/content';
import { SpinnerContext } from './contexts/SpinnerContext';
import { LanguageContext } from './contexts/LanguageContext';

const username = `gschincariol`
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const capitalize = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const getMediumData = async () => {

    try {
        const response = await fetch(RSSConverter);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
};

const getMediumTexts = async () => {
    const feed = await getMediumData();
    const posts = await feed.items;
    return ([...posts]);
}

function Home() {
    const [lastTexts, setLastTexts] = useState();
    const { isLoading, toggleIsLoading } = useContext(SpinnerContext);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        toggleIsLoading(true);
        async function fetchData() {
            const data = await getMediumTexts();
            const textList = data.map(text => (
                <div className="lastTextItem" key={text.title}>
                    <a className="lastTextURL"
                        href={text.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <p className="textTitle">{capitalize(text.title.toLowerCase())}</p>
                    </a>
                </div>
            ))
            toggleIsLoading(false);
            setLastTexts(textList);
        }
        fetchData();
    }, []);
    return (
        <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            <div className="contentText d-flex justify-content-center flex-column flex-md-row mt-2">
                <div className="contentLeft col-md-5 me-md-2">
                    <img src="images/bio.jpeg" className="bioImg img-fluid float-start p-1 me-2 align-text-center" alt="" />
                    {content[language].home.main}
                </div>
                <div className="contentRight col-md-5 ms-md-2 mt-2 mt-md-0">
                    {content[language].home.lastTexts}
                    <div className="textsList">
                        {lastTexts}
                    </div>
                    <div className={`spinner spinner-border text-light ${isLoading ? 'null' : 'd-none'}`} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
