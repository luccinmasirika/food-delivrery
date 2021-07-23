import Footer from "../footer/Footer";
import Layout from "../Layout";
import Header from "../navBar/Header";

export default function Features(){
    return (
        <Layout>
            <Header parent='Home' content='Features' title='Edit Features Section' create={false} />
            
        <Footer />
        </Layout>
    )
}