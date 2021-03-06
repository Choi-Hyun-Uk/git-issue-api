import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import ReactMarkDown from 'react-markdown';

import { IssueBottom, IssueDetailWrapper, IssueDetailHeader } from '../components/styles';

const Detail = () => {
    const { id } = useParams();
    const [issueDetail, setIssueDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const date = dayjs(issueDetail?.created_at);

    useEffect(() => {
        const fetchIssue = async () => {
            const response = await axios.get(`https://api.github.com/repos/angular/angular-cli/issues/${id}`);
            setIssueDetail(response.data);
            setLoading(true);
        };
        fetchIssue();
    }, []);

    if (!loading) return null;

    return (
        <IssueDetailWrapper>
            <IssueDetailHeader>
                <h2>
                    <span>{issueDetail.number}</span>
                    <strong>{issueDetail.title}</strong>
                </h2>
                <div>댓글 <strong>{issueDetail.comments}개</strong></div>
            </IssueDetailHeader>
            <IssueBottom>
                <p>작성자 : <strong>{issueDetail.user.login}</strong></p>
                <p>작성일 : <strong>{date.format('YYYY년 MM월 DD일')}</strong></p>
            </IssueBottom>
            <ReactMarkDown className="mark-down">{issueDetail.body}</ReactMarkDown>
        </IssueDetailWrapper>
    )
}

export default Detail;