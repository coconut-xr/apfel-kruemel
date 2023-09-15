import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterMomentShareProps {
    /**
     * id of Twitter moment to show
     */
    momentId: string;
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
declare const TwitterMomentShare: (props: TwitterMomentShareProps) => JSX.Element;
export default TwitterMomentShare;
