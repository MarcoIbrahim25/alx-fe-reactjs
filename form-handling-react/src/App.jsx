import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <div
        style={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
        }}
      >
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}
