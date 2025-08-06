import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import App from "../App";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/alfajores" element={<P.Alfajores />} />
      <Route path="/budines" element={<P.Alfajores />} />
      <Route path="/tortas" element={<P.Alfajores />} />
      <Route path="/peluditos" element={<P.Alfajores />} />
      <Route path="/cookies" element={<P.Alfajores />} />
      <Route path="/especiales" element={<P.Alfajores />} />
    </Routes>
  );
}
export default AppRouter;
