import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<div>movies</div>} />
          <Route path="movies" element={<div>movies</div>} />
        </Route>
      </Routes>
    </div>
  );
};
