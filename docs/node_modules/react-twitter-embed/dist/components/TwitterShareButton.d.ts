import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterShareButtonProps {
    /**
     * Url for sharing
     */
    url: string;
    /**
     * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
     */
    options?: JSONObject;
    /**
     * Placeholder while tweet is loading
     */
    placeholder?: string | React.ReactNode;
    /**
     * Function to execute after load, return html element
     */
    onLoad?: (element: any) => void;
}
declare const TwitterShareButton: (props: TwitterShareButtonProps) => any;
export default TwitterShareButton;
