import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterMentionButtonProps {
    /**
     * Username to which you will need to tweet
     */
    screenName: string;
    /**
     * Additional options for overriding config.
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
declare const TwitterMentionButton: (props: TwitterMentionButtonProps) => any;
export default TwitterMentionButton;
