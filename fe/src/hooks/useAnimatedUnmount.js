import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedRefElement = useRef();

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleRemoveAnimation() {
      setShouldRender(false);
    }

    const elementRef = animatedRefElement.current;

    if (!visible && elementRef) {
      elementRef.addEventListener('animationend', handleRemoveAnimation);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleRemoveAnimation);
      }
    };
  }, [visible]);

  return {
    shouldRender,
    animatedRefElement,
  };
}
