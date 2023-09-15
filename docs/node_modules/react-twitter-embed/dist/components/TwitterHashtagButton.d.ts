import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterHashtagButtonProps {
    /**
     * Tag name for hashtag button
     */
    tag: string;
    /**
     * Additional options to be added to the button
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
declare const TwitterHashtagButton: (props: TwitterHashtagButtonProps) => any;
export default TwitterHashtagButton;
