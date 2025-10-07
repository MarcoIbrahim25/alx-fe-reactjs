import { useState } from "react";
import { fakeRegister } from "../api/mock";

const initial = { username: "", email: "", password: "" };

function validate(values) {
  const errors = {};
  const { username, email, password } = values;
  if (!username.trim()) errors.username = "Username is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Email format is invalid";
  if (!password) errors.password = "Password is required";
  else if (password.length < 6)
    errors.password = "Password must be at least 6 characters";
  return errors;
}

export default function RegistrationForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate(values);
    setErrors(eObj);
    setTouched({ username: true, email: true, password: true });
    if (Object.keys(eObj).length) return;
    try {
      setLoading(true);
      setStatus("");
      await fakeRegister(values);
      setStatus("Registered successfully 🎉");
      setValues(initial);
      setTouched({});
    } catch (err) {
      setStatus(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const showError = (name) => touched[name] && errors[name];
  const { username, email, password } = values;

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
      <h2>Controlled Registration Form</h2>

      <label>Username</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="e.g. marco"
      />
      {showError("username") && (
        <div style={{ color: "red", fontSize: 12 }}>{errors.username}</div>
      )}

      <label style={{ marginTop: 12 }}>Email</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="name@example.com"
      />
      {showError("email") && (
        <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
      )}

      <label style={{ marginTop: 12 }}>Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="min 6 characters"
      />
      {showError("password") && (
        <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
      )}

      <button type="submit" disabled={loading} style={{ marginTop: 16 }}>
        {loading ? "Submitting..." : "Register"}
      </button>

      {status && (
        <div style={{ marginTop: 10, fontSize: 13 }}>
          <strong>Status:</strong> {status}
        </div>
      )}
    </form>
  );
}
