import Header from "../Components/Header";
import Layout from "../Components/Layout";
import SideBar from "../Components/SideBar";
import Utama from "../Components/Utama";
function Home() {
    return ( 
        <>
            <Layout>
                <Header/>
                <Utama/>
            </Layout>
        </>
     );
}

export default Home;