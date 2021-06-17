import { useEffect, useState } from 'react';
import axios from 'axios';

const useIssueList = ( pageNumber ) => {
    const [issue, setIssue] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    console.log('pageNumber :', pageNumber);
    useEffect(() => {
        // const issueListApi = async () => {
        //     const issues = [];
        //     setLoading(true);
        //     setHasMore(false);
        //     try {
        //         const response = await axios.get(`https://api.github.com/repos/angular/angular-cli/issues?per_page=30&page=${pageNumber}`, {
        //             headers: { Authorization: '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' },
        //         });
        //         issues.push(response.data);
        //         setIssue((prevIssue) => {
        //             return [...new Set([...prevIssue, ...response.data])];
        //         });
        //         console.log('issues :', issues);
        //         setLoading(false);
        //         setHasMore(true);
        //     } catch(error) {
        //         console.log(error);
        //         setError(true);
        //         setLoading(false);
        //         setHasMore(false);
        //     }
        // }
        const issueListApi = () => {
            setLoading(true);
            setHasMore(false);
            return new Promise((resolve, reject) => {
                axios.get(`https://api.github.com/repos/angular/angular-cli/issues?per_page=30&page=${pageNumber}`, {
                    headers: { Authorization: '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' },
                })
                .then((res) => {
                    setIssue((prevIssue) => {
                        return [...new Set([...prevIssue, ...res.data])];
                    });
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setLoading(false);
                    setHasMore(true);
                })
            }
        )}
        issueListApi();
    }, [pageNumber]);

    return { issue, loading, error, hasMore }
}   

export default useIssueList;