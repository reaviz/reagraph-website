import { animate } from "motion/react";
import { useEffect, useRef } from "react";

export interface CountInputs {
  /**
   * Number to animate to
   */
  to: number;

  /**
   * Number to animate from. Defaults 0.
   */
  from?: number;

  /**
   * Duration of the animation in seconds. Defaults 1.
   */
  duration?: number;

  /**
   * Delay of the animation. Defaults 0.
   */
  delay?: number;

  /**
   * Localize the number. Defaults true.
   */
  format?: boolean;

  /**
   * Number of decimal places. Defaults 0.
   */
  decimalPlaces?: number;

  /**
   * Prefix the number with a string or number.
   */
  prefix?: string | number;

  /**
   * Suffix the number with a string or number.
   */
  suffix?: string | number;
}

export const useCount = ({
  from = 0,
  to,
  duration = 1,
  delay = 0,
  prefix,
  suffix,
  decimalPlaces = 0,
  format = true,
}: CountInputs) => {
  const nodeRef = useRef<any | null>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from!, to, {
      duration,
      delay,
      onUpdate(value) {
        let formatted: number | string = value;
        if (decimalPlaces) {
          formatted = Number(value.toFixed(decimalPlaces));
        } else {
          formatted = Number(value.toFixed(0));
        }

        if (format) {
          formatted = formatted.toLocaleString();
        }

        if (node) {
          if (prefix) {
            formatted = `${prefix}${formatted}`;
          }
          if (suffix) {
            formatted = `${formatted}${suffix}`;
          }

          node.textContent = formatted as string;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, duration, delay, decimalPlaces, format, prefix, suffix]);

  return nodeRef;
};
