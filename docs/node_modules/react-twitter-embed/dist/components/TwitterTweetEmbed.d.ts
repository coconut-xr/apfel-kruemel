import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterTweetEmbedProps {
    /**
     * Tweet id that needs to be shown
     */
    tweetId: string;
    /**
     * Additional options to pass to twitter widget plugin
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
declare const TwitterTweetEmbed: (props: TwitterTweetEmbedProps) => any;
export default TwitterTweetEmbed;
