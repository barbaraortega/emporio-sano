import NavBar from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main>
      <h1 className="nombrePagina"> Emporio Sano y feliz</h1>
      <NavBar />
      {children}
    </main>
  );
};
