const Input = ({
  style,
  label,
  type,
  id,
  autoComplete = "off",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div style={style} className="login-input-component">
      <label className="login-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="login-input"
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
