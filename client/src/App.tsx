import { UserProvider } from "./hooks/useAuth";
import { Layout } from "@/components";

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
