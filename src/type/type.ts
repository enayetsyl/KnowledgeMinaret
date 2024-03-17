import exp from "constants";

export type TracingBeamProps = {
  children: React.ReactNode;
  className?: string;
}

export type HoverEffectProps = {
  items: {
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
}

export type MenuItemProps = {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export type MenuProps = {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
}

export type CardProps = {
  className?: string;
  children: React.ReactNode;
}

export type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
}

export type CardDescriptionProps =  {
  className?: string;
  children: React.ReactNode;
}

export type TypewriterEffectProps = {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export type TypewriterEffectSmoothProps = {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export type CardStackCardProps = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export type CardStackProps =  {
  items: CardStackCardProps[];
  offset?: number;
  scaleFactor?: number;
}

export type StickyScrollProps = {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}

export type AnimatedTooltipProps = {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}

export type FloatingNavProps = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}

export type LampContainerProps = {
  children: React.ReactNode;
  className?: string;
}

export type LayoutGridCardProps = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export type ParallaxScrollProps = {
  images: string[];
  className?: string;
}

export type ButtonProps = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export type ButtonMovingBorderProps = {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}

export type ButtonsCardProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
}

export type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link: string;
}

export type ImagesSliderProps = {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}

export type SpotlightProps = {
  className?: string;
  fill?: string;
}; 

export type MaskContainerProps = {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}

export type GoodDeedCardProps = {
  title: string;
  paragraph: string;
  href: string
}

export type TextRevealCardProps = {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}

export type TextRevealCardTitleProps = {
  children: React.ReactNode;
  className?: string;
}

export type TextRevealCardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
}

export type EvervaultCardProps =  {
  text?: string;
  className?: string;
}


export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};


export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};


export interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}