import { UserProvider } from "./hooks/useAuth";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <UserProvider>
        <Layout />
      </UserProvider>
    </>
  );
}

export default App;
