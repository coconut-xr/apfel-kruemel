import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
export interface TwitterVideoEmbedProps {
    /**
     * Id of video tweet.
     */
    id: string;
    /**
     * Placeholder while tweet is loading
     */
    placeholder?: string | React.ReactNode;
    /**
     * Function to execute after load, return html element
     */
    onLoad?: (element: any) => void;
}
declare const TwitterVideoEmbed: (props: TwitterVideoEmbedProps) => any;
export default TwitterVideoEmbed;
