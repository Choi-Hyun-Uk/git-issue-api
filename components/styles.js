import styled from 'styled-components';

export const IssueItemWrapper = styled.li`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
`

export const IssueHead = styled.div`
    margin-bottom: 1rem;
    & a{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;        
    }   
    & h2 {
        font-size: 1rem;
        & span {
            display: inline-block;
            width: 60px;
        }
    }
    & p {
        font-size: 0.75rem;
        margin-right: 1rem;
    }
`

export const IssueBottom = styled.div`
    display: flex;
    & p {
        font-size: 0.75rem;
        margin-right: 1rem;
    }
    & span {
        font-size: 0.75rem;
    }
`

export const IssueDetailWrapper = styled.div`
    padding: 2rem;
    & .mark-down {
        padding: 2rem 0;
        margin-top: 2rem;
        border-top: 1px solid #ccc;
        font-size: 1rem;
    }
`

export const IssueDetailHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & h2 {
        margin-bottom: 0.5rem;
        & span {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }
    & div {
        font-size: 1rem;
    }
`

export const BannerWrapper = styled.li`
    text-align: center;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    & img {
        vertical-align: bottom;
    }
`