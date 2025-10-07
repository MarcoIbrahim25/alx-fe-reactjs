import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fakeRegister } from "../api/mock";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={async (values, actions) => {
        try {
          actions.setStatus("");
          await fakeRegister(values);
          actions.resetForm();
          actions.setStatus("Registered successfully 🎉");
        } catch (err) {
          actions.setStatus(err.message || "Registration failed");
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form style={{ maxWidth: 420 }}>
          <h2>Formik Registration Form</h2>

          <label>Username</label>
          <Field name="username" type="text" placeholder="e.g. marco" />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red", fontSize: 12 }}
          />

          <label style={{ marginTop: 12 }}>Email</label>
          <Field name="email" type="email" placeholder="name@example.com" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: "red", fontSize: 12 }}
          />

          <label style={{ marginTop: 12 }}>Password</label>
          <Field
            name="password"
            type="password"
            placeholder="min 6 characters"
          />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red", fontSize: 12 }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ marginTop: 16 }}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>

          {status && (
            <div style={{ marginTop: 10, fontSize: 13 }}>
              <strong>Status:</strong> {status}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
