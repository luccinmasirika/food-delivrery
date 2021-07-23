import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";

export default function Download(){
    return (
        <Layout>
            <Header parent='Home' content='Download' title='Edit Download Section' create={false} />
            
        <Footer />
        </Layout>
    )
}