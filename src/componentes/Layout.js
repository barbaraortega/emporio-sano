import NavBar from './NavBar';


export const Layout = ({children}) => {
    return (
        <main> 
        <NavBar/>
        {children}
        </main>
    );
};

