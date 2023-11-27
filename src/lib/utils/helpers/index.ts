import { intervalToDuration } from "date-fns";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getDurationText = (opts: {
  start: string;
  end: string;
}): string => {
  const interval = intervalToDuration({
    start: new Date(opts.start),
    end: new Date(opts.end),
  });

  return `${interval.hours} hour ${
    interval.minutes && interval.minutes > 0 ? `${interval.minutes} minute` : ""
  }`;
};

export const weightFormatter = (number: number) =>
  `${number.toLocaleString("en-US")}`;

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
