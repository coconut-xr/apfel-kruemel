import React from 'react';
declare global {
    interface Window {
        twttr: any;
    }
}
interface JSONObject {
    [k: string]: any;
}
export interface TwitterTimelineEmbedBase {
    /**
     * Additional options to pass to twitter widget plugin
     */
    options?: JSONObject;
    /**
     * Automatically fit into parent container height
     */
    autoHeight?: boolean;
    /**
     * With dark or light theme
     */
    theme?: 'dark' | 'light';
    /**
     * With custom link colors. Note: Only Hex colors are supported.
     */
    linkColor?: string;
    /**
     * With custom border colors. Note: Only Hex colors are supported.
     */
    borderColor?: string;
    /**
     * Hide the header from timeline
     */
    noHeader?: boolean;
    /**
     * Hide the footer from timeline
     */
    noFooter?: boolean;
    /**
     * Hide the border from timeline
     */
    noBorders?: boolean;
    /**
     * Hide the scrollbars
     */
    noScrollbar?: boolean;
    /**
     * Enable Transparancy
     */
    transparent?: boolean;
    /**
     * Custom language code. Supported codes here: https://developer.twitter.com/en/docs/twitter-for-websites/twitter-for-websites-supported-languages/overview.html
     */
    lang?: string;
    /**
     * ariaPolite
     */
    ariaPolite?: 'polite' | 'assertive' | 'rude';
    /**
     * Limit of tweets to be shown
     */
    tweetLimit?: number;
    /**
     * Placeholder while tweet is loading
     */
    placeholder?: string | React.ReactNode;
    /**
     * Function to execute after load, return html element
     */
    onLoad?: (element: any) => void;
}
export interface TwitterTimelineEmbedSourceScreenName extends TwitterTimelineEmbedBase {
    /**
     * This can be either of profile, likes
     */
    sourceType: 'profile' | 'likes';
    /**
     * username of twitter handle as String
     */
    screenName: string;
}
export interface TwitterTimelineEmbedSourceUserId extends TwitterTimelineEmbedBase {
    /**
     * This can be either of profile, likes
     */
    sourceType: 'profile' | 'likes';
    /**
     * UserId of twitter handle as number
     */
    userId: string;
}
export interface TwitterTimelineEmbedSourceTimeline extends TwitterTimelineEmbedBase {
    /**
     * This can be either of timeline
     */
    sourceType: 'timeline';
    /**
     * To show list, unique list id
     * Also used with collections, in that case its valid collection id
     */
    id: string;
}
export interface TwitterTimelineEmbedSourceTimelineWidget extends TwitterTimelineEmbedBase {
    /**
     * This can be either of timeline
     */
    sourceType: 'timeline';
    /**
     * To show list, unique list id
     * Also used with collections, in that case its valid collection id
     */
    widgetId: string;
}
export interface TwitterTimelineEmbedSourceList extends TwitterTimelineEmbedBase {
    /**
     * This can be either of list
     */
    sourceType: 'list';
    /**
     * To show list, used along with slug
     */
    ownerScreenName: string;
    /**
     * To show list, used along with ownerScreenName
     */
    slug: string;
}
export interface TwitterTimelineEmbedSourceListId extends TwitterTimelineEmbedBase {
    /**
     * This can be either of list
     */
    sourceType: 'list';
    /**
     * To show list, unique list id
     * Also used with collections, in that case its valid collection id
     */
    id: string | number;
}
export interface TwitterTimelineEmbedSourceCollectionId extends TwitterTimelineEmbedBase {
    /**
     * This can be collection
     */
    sourceType: 'collection';
    /**
     * To show list, unique list id
     * Also used with collections, in that case its valid collection id
     */
    id: string | number;
}
export interface TwitterTimelineEmbedSourceCollectionUrl extends TwitterTimelineEmbedBase {
    /**
     * This can be collection
     */
    sourceType: 'collection';
    /**
     * To show list, unique list url
     * Also used with collections, in that case its valid collection id
     */
    url: string;
}
export interface TwitterTimelineEmbedSourceUrl extends TwitterTimelineEmbedBase {
    /**
     * This can be url
     */
    sourceType: 'url';
    /**
     * To show twitter content with url.
     * Supported content includes profiles, likes, lists, and collections.
     */
    url: string;
}
export interface TwitterTimelineEmbedSourceWidget extends TwitterTimelineEmbedBase {
    /**
     * This can be widget
     */
    sourceType: 'widget';
    /**
     * To show custom widget
     */
    widgetId: string;
}
export declare type TwitterTimelineEmbedPropsType = TwitterTimelineEmbedSourceScreenName | TwitterTimelineEmbedSourceUserId | TwitterTimelineEmbedSourceTimeline | TwitterTimelineEmbedSourceTimelineWidget | TwitterTimelineEmbedSourceList | TwitterTimelineEmbedSourceListId | TwitterTimelineEmbedSourceCollectionId | TwitterTimelineEmbedSourceCollectionUrl | TwitterTimelineEmbedSourceUrl | TwitterTimelineEmbedSourceWidget;
declare const TwitterTimelineEmbed: (props: TwitterTimelineEmbedPropsType) => any;
export default TwitterTimelineEmbed;
