import { type ReactNode, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "none";
type AnimationType = "fade" | "slide" | "zoom" | "scale" | "blur" | "flip";
type Easing = "ease" | "ease-in" | "ease-out" | "ease-in-out" | "bounce" | "elastic";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  animation?: AnimationType;
  easing?: Easing;
  threshold?: number;
  once?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
  onReveal?: () => void;
}

const DIRECTION_OFFSET: Record<Direction, string> = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "-translate-x-12",
  right: "translate-x-12",
  none: "",
};

const DIRECTION_REVERSE: Record<Direction, string> = {
  up: "translate-y-0",
  down: "translate-y-0",
  left: "translate-x-0",
  right: "translate-x-0",
  none: "",
};

const ANIMATION_STYLES: Record<AnimationType, string> = {
  fade: "",
  slide: "",
  zoom: "scale-95",
  scale: "scale-90",
  blur: "blur-md",
  flip: "rotate-y-90",
};

const EASING_STYLES: Record<Easing, string> = {
  ease: "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  animation = "slide",
  easing = "ease-out",
  threshold = 0.1,
  once = true,
  stagger = false,
  staggerDelay = 100,
  onReveal,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once });
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (inView && !hasRevealed) {
      setHasRevealed(true);
      if (onReveal) onReveal();
    }
  }, [inView, hasRevealed, onReveal]);

  const isVisible = inView || (once && hasRevealed);
  const isSlideAnimation = animation === "slide" || animation === "fade";
  const offsetClass = isSlideAnimation ? DIRECTION_OFFSET[direction] : "";
  const reverseClass = isSlideAnimation ? DIRECTION_REVERSE[direction] : "";
  const animationClass = ANIMATION_STYLES[animation];
  const easingClass = EASING_STYLES[easing];

  // For stagger children
  const childrenArray = stagger ? React.Children.toArray(children) : null;

  if (stagger && childrenArray) {
    return (
      <div ref={ref} className={className}>
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className={`transition-all duration-${duration} ${easingClass} will-change-transform ${
              isVisible
                ? `opacity-100 ${reverseClass} ${animation === "zoom" ? "scale-100" : ""} ${
                    animation === "scale" ? "scale-100" : ""
                  } ${animation === "blur" ? "blur-0" : ""} ${
                    animation === "flip" ? "rotate-y-0" : ""
                  }`
                : `opacity-0 ${offsetClass} ${animationClass} ${
                    animation === "flip" ? "rotate-y-90" : ""
                  }`
            }`}
            style={{
              transitionDelay: `${delay + index * staggerDelay}ms`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`transition-all will-change-transform ${className} ${easingClass} ${
        isVisible
          ? `opacity-100 ${reverseClass} ${animation === "zoom" ? "scale-100" : ""} ${
              animation === "scale" ? "scale-100" : ""
            } ${animation === "blur" ? "blur-0" : ""} ${
              animation === "flip" ? "rotate-y-0" : ""
            }`
          : `opacity-0 ${offsetClass} ${animationClass} ${
              animation === "flip" ? "rotate-y-90" : ""
            }`
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Sub-components for different animation presets
export function FadeIn(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="fade" direction="none" />;
}

export function SlideUp(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="slide" direction="up" />;
}

export function SlideLeft(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="slide" direction="left" />;
}

export function SlideRight(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="slide" direction="right" />;
}

export function ZoomIn(props: Omit<RevealProps, "animation">) {
  return <Reveal {...props} animation="zoom" direction="none" />;
}

export function ScaleIn(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="scale" direction="none" />;
}

export function BlurIn(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="blur" direction="none" />;
}

export function FlipIn(props: Omit<RevealProps, "animation" | "direction">) {
  return <Reveal {...props} animation="flip" direction="none" />;
}

// Stagger wrapper for multiple children
export function StaggerReveal({
  children,
  ...props
}: Omit<RevealProps, "stagger" | "staggerDelay">) {
  return (
    <Reveal {...props} stagger staggerDelay={100}>
      {children}
    </Reveal>
  );
}