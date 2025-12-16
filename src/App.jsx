import SignupFormComponent from "./sign-up-form/signup-form-component.jsx";
import AdminSignupComponent from "./sign-up-form/admin-signup-component.jsx";

function App() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      gap: '40px', 
      padding: '40px 20px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <SignupFormComponent />
      <AdminSignupComponent />
    </div>
  );
}

export default App;