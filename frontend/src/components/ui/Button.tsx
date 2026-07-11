import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`lumora-button ${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;