import React from 'react';
import { BannerWrapper } from './styles';

const AdBanner = ({ lastElementObserver, length, index }) => {
    if (length === index + 1) {
        return (
            <BannerWrapper ref={lastElementObserver}>
                <a href="https://thingsflow.com/ko/homea">
                    <img src="http://placehold.it/500x100?text=ad" alt="광고배너이미지" />
                </a>
            </BannerWrapper>
        )
    }
    return(
        <BannerWrapper>
            <a href="https://thingsflow.com/ko/homea">
                <img src="http://placehold.it/500x100?text=ad" alt="광고배너이미지" />
            </a>
        </BannerWrapper>
    )
}

export default AdBanner;