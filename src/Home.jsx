import React, { useState, useRef, useCallback } from 'react';
import { IssueWrapper } from './styles';
import useIssueList from '../api/api';
import IssueItem from '../components/IssueItem';
import AdBanner from '../components/adBanner';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {issue, loading, error, hasMore} = useIssueList(pageNumber);
    const ob = useRef();

    const lastElementObserver = useCallback(node => {
        if (loading) return;
        if (ob.current) {
            // console.log('ob.current :', ob.current);
            // 감시 대상이 브라우저 view에 들어올 경우 연결 중지
            // 이유는 현재 감시대상을 중지하고, 추가 목록을 불러오면서 마지막 광고배너 <li>에 감시 대상으로 옮기기 위해
            ob.current.disconnect();
        }
        // 초기에는 undefinde 값을 가지고 있지만, rendering 후
        // lastElementObserver를 가지고 있는 요소 발견 시 IntersectionObserver 인스턴스 생성
        ob.current = new IntersectionObserver((entries) => {
            // entries[0] - 현재 감시 중인 요소 중 0번째
            // isIntersecting - 브라우저 모니터상에 노출되면 true
            // hasMore - 더 불러오기 가능 여부
            // console.log('entries :', entries);
            if (entries[0].isIntersecting && hasMore && issue.length < 120) {
                setPageNumber(prev => prev + 1);
            }
        });
        if (node) {
            // redering 중 lastElementObserver 가지고 있는 태그가 있다면 파라미터로 node에 태그 요소가 들어옴
            // 들어오게 되고, if(node)가 true가 되는 동시에 observer.current.observe(node); 즉, 감시 대상으로 잡기 시작
            // console.log('node :', node);
            ob.current.observe(node);
        }
    }, [loading, hasMore, pageNumber, ob]);

    // console.log(issue);
    
    return (
        <>
            <IssueWrapper>
                <h1>angular issue</h1>
                <ul>
                    {issue.map((item, index) =>
                        (index+1) % 10 === 0
                        ? (
                            <div key={item.id}>
                                <AdBanner lastElementObserver={lastElementObserver} length={issue.length} index={index} />
                                <IssueItem item={item} />
                            </div>
                        )
                        : <IssueItem key={item.number} item={item} />
                    )}
                </ul>
            </IssueWrapper>
        </>
    )
}

export default Home;