// src/types/react-pageflip.d.ts
declare module 'react-pageflip' {
  import * as React from 'react';

  export interface PageFlip {
    flipNext(): void;
    flipPrev(): void;
    turnToPage(page: number): void;
    getPageCount(): number;
  }

  export interface HTMLFlipBookProps {
    width?: number;
    height?: number;
    size?: string;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onFlip?: (e: { data: number }) => void;
    /** ✅ Added missing prop */
    children?: React.ReactNode;
  }

  export type HTMLFlipBookType = {
    pageFlip(): PageFlip;
  };

  const HTMLFlipBook: React.ForwardRefExoticComponent<
    HTMLFlipBookProps & React.RefAttributes<HTMLFlipBookType>
  >;

  export default HTMLFlipBook;
}
