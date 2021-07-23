import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";

export default function AppScreen(){
    return (
        <Layout>
            <Header parent='Home' content='AppScreen' title='Edit AppScreen Section' create={false} />
            
        <Footer />
        </Layout>
    )
}