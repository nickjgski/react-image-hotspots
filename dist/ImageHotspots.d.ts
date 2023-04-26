export default ImageHotspots;
declare class ImageHotspots extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        container: {
            width: any;
            height: any;
            ratio: any;
            orientation: any;
            background: any;
        };
        image: {
            initialWidth: any;
            initialHeight: any;
            width: any;
            height: any;
            scale: any;
            ratio: any;
            orientation: any;
            offsetX: any;
            offsetY: any;
        };
        minimap: {
            initialSize: number;
            width: any;
            height: any;
            guideWidth: any;
            guideHeight: any;
            offsetX: number;
            offsetY: number;
        };
        hideFullscreenControl: boolean;
        hideZoomControls: boolean;
        hideMinimap: boolean;
        resizable: any;
        draggable: any;
        cursorX: any;
        cursorY: any;
        mcursorX: any;
        mcursorY: any;
        dragging: any;
        isGuideDragging: any;
        hotspots: any[];
    };
    container: React.RefObject<any>;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    startDrag: (event: any, element: any) => void;
    whileDrag: (event: any) => void;
    stopDrag: () => void;
    onImageLoad: ({ target: image }: {
        target: any;
    }) => void;
    onWindowResize: () => void;
    toggleFullscreen: () => void;
    zoom: (scale: any) => void;
    requestFullscreen: (element: any) => void;
    exitFullscreen: () => void;
    render: () => JSX.Element;
}
declare namespace ImageHotspots {
    namespace propTypes {
        const src: PropTypes.Requireable<string>;
        const alt: PropTypes.Requireable<string>;
        const hotspots: PropTypes.Requireable<any[]>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
//# sourceMappingURL=ImageHotspots.d.ts.map