import "./Input.css";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email";
  disabled?: boolean;
  error?: string;
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
}: InputProps) {
  return (
    <div className="lumora-input-container">
      {label && (
        <label className="lumora-label">
          {label}
        </label>
      )}

      <input
        className={`lumora-input ${error ? "error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && (
        <p className="lumora-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;