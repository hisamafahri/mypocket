/* eslint-disable import/prefer-default-export */
import { cn } from "../../lib/utils/helpers";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("animate-pulse rounded-md bg-primary/5", className)}
    {...props}
  />
);

export { Skeleton };
