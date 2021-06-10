import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { IssueHead, IssueBottom, IssueItemWrapper } from './styles';

const IssueItem = ({ item }) => {
    const date = dayjs(item.created_at);
    return (
        <IssueItemWrapper>
            <IssueHead>
                <Link to={`/detail/${item.number}`}>
                    <h2><span>{item.number}</span> <strong>{item.title}</strong></h2>
                    <p>댓글 : <strong>{item.comments}</strong></p>
                </Link>
            </IssueHead>
            <IssueBottom>
                <p>작성자 : <strong>{item.user.login}</strong></p>
                <p>작성일 : <strong>{date.format('YYYY년 MM월 DD일')}</strong></p>
            </IssueBottom>
        </IssueItemWrapper>
    )
}

export default IssueItem;