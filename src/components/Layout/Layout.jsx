import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const wrapper = {
   display: 'flex',
   flexDirection: 'column',
   height: '100vh',
};

const btn = {
   display: 'block',
   margin: '20px auto',
   padding: '10px 20px',
   background: '#00a9c7',
}

const Layout = () => {

   const { text: {idText}, image: {idImg} } = useSelector(state => state);

   return(
      <div style={wrapper}>
         <Header />
         <Outlet />
         {idText && idImg && (
            <Link style={btn} to={`singleCard/${idText}/${idImg}`}>
               Поделиться
            </Link>
         )}
         <Footer />
      </div>
   );
}

export default Layout;

