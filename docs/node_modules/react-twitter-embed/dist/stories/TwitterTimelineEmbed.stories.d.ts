import './story.css';
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, import("@storybook/react").Args>;
export default _default;
export declare const TimelineProfileWithScreenName: any;
export declare const TimelineProfileWithUserId: any;
export declare const TimelineLikesWithScreenName: any;
export declare const TimelineLikesWithUserId: any;
export declare const TimelineListWithOwnerScreenNameSlug: any;
export declare const TimelineListWithListId: any;
export declare const TimelineCollection: any;
export declare const TimelineCollectionWithUrl: any;
export declare const TimelineUrlWithProfileUrl: any;
export declare const TimelineUrlWithListUrl: any;
export declare const TimelineUrlWithLikesUrl: any;
export declare const TimelineWidget: any;
export declare const TimelineAutoheight: {
    ({ sourceType, widgetId, autoHeight }: {
        sourceType: 'widget';
        widgetId: string;
        autoHeight: boolean;
    }): JSX.Element;
    args: {
        sourceType: string;
        widgetId: string;
        autoHeight: boolean;
    };
};
export declare const TimelineDarkTheme: any;
export declare const TimelineLightTheme: any;
export declare const TimelineCustomBorderColor: {
    ({ borderColors }: {
        borderColors: Array<string>;
    }): JSX.Element;
    args: {
        borderColors: string[];
    };
};
export declare const TimelineWithNoheader: {
    ({ noHeader }: {
        noHeader: boolean;
    }): JSX.Element;
    args: {
        noHeader: boolean;
    };
};
export declare const TimelineWithNofooter: {
    ({ noFooter }: {
        noFooter: boolean;
    }): JSX.Element;
    args: {
        noFooter: boolean;
    };
};
export declare const TimelineWithNoHeaderNoFooter: () => JSX.Element;
export declare const TimelineWithNoBorder: () => JSX.Element;
export declare const TimelineWithNoScrollbar: () => JSX.Element;
export declare const TimelineWithTransparentBackground: () => JSX.Element;
export declare const TimelineWithCustomLanguage: () => JSX.Element;
export declare const TimelineWithTextPlaceholder: any;
export declare const TimelineWithCustomPlaceholder: any;
export declare const TimelineWithOnload: any;
