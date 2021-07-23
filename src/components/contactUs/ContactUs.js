import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";

export default function ContactUs(){
    return (
        <Layout>
            <Header parent='Home' content='ContactUs' title='Edit ContactUs Section' create={false} />
            
        <Footer />
        </Layout>
    )
}