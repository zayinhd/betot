
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", hasError = false, type = "text", ...props }, ref) => {
    const baseClasses =
      "w-full rounded-md border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors";
    const stateClasses = hasError
      ? "border-red-500 focus:ring-2 focus:ring-red-300"
      : "border-border focus:ring-2 focus:ring-primary/30";

    return (
      <input
        ref={ref}
        type={type}
        className={`${baseClasses} ${stateClasses} ${className}`.trim()}
        aria-invalid={hasError || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
