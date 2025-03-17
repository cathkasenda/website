
/**
 * Animation utility functions for pixel art style animations
 */

/**
 * Creates a typed-out text animation
 * @param text The text to type out
 * @param speed The speed of typing in milliseconds
 * @param callback Optional callback function after animation completes
 */
export const typeText = (
  text: string,
  speed: number = 50,
  callback?: () => void
) => {
  let i = 0;
  const textElement = document.createElement("span");
  const container = document.createElement("div");
  container.appendChild(textElement);
  
  const typing = setInterval(() => {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      if (callback) callback();
    }
  }, speed);
  
  return container;
};

/**
 * Creates a pixel art fade-in animation
 * @param element The element to animate
 * @param duration Animation duration in milliseconds
 */
export const pixelFadeIn = (element: HTMLElement, duration: number = 500) => {
  element.style.opacity = "0";
  element.style.transform = "scale(0.95)";
  element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  
  // Force a reflow
  void element.offsetWidth;
  
  element.style.opacity = "1";
  element.style.transform = "scale(1)";
};

/**
 * Creates a pixel bounce animation
 * @param element The element to animate
 * @param height The bounce height in pixels
 * @param duration Animation duration in milliseconds
 * @param infinite Whether the animation should loop infinitely
 */
export const pixelBounce = (
  element: HTMLElement,
  height: number = 8,
  duration: number = 2000,
  infinite: boolean = true
) => {
  element.style.animation = `pixelBounce ${duration}ms ease-in-out ${
    infinite ? "infinite" : ""
  }`;
  
  // Add the keyframes if they don't exist
  if (!document.querySelector("#pixel-bounce-keyframes")) {
    const style = document.createElement("style");
    style.id = "pixel-bounce-keyframes";
    style.textContent = `
      @keyframes pixelBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-${height}px); }
      }
    `;
    document.head.appendChild(style);
  }
};

/**
 * Creates a pixel shift animation (side to side)
 * @param element The element to animate
 * @param distance The shift distance in pixels
 * @param duration Animation duration in milliseconds
 */
export const pixelShift = (
  element: HTMLElement,
  distance: number = 2,
  duration: number = 3000
) => {
  element.style.animation = `pixelShift ${duration}ms ease-in-out infinite`;
  
  // Add the keyframes if they don't exist
  if (!document.querySelector("#pixel-shift-keyframes")) {
    const style = document.createElement("style");
    style.id = "pixel-shift-keyframes";
    style.textContent = `
      @keyframes pixelShift {
        0% { transform: translateX(0); }
        25% { transform: translateX(${distance}px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(-${distance}px); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }
};
