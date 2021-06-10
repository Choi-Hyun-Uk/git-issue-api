import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IssueItem from '../components/issueItem';
import { IssueWrapper, AdBanner } from './styles';

const Home = () => {
    const [issue, setIssue] = useState([]);
    const [firstNumer, setFirstNumber] = useState(0);
    const [lastNumer, setLastNumber] = useState(4);

    useEffect(() => {
        const fetchIssue = async () => {
            const response = await axios.get('https://api.github.com/repos/angular/angular-cli/issues?state=open');
            setIssue(response.data);
        };
        fetchIssue();
    }, []);

    const issuePage = issue.sort((prev, next) => next.comments - prev.comments).slice(firstNumer, lastNumer);
    console.log(issuePage);
    
    return (
        <>
            <IssueWrapper>
                <h1>angular issue</h1>
                <ul>
                    {issuePage.map((item) => (
                        <IssueItem key={item.id} item={item} />
                    ))}
                </ul>
                <AdBanner>
                    <a href="https://thingsflow.com/ko/homea">
                        <img src="http://placehold.it/500x100?text=ad" alt="광고배너이미지" />
                    </a>
                </AdBanner>
            </IssueWrapper>
        </>
    )
}

export default Home;