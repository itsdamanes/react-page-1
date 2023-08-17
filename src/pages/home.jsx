import { Section2 } from "./../components/section-2";
import { Section } from "./../components/section";
import { Header } from "./../components/header"
import { Footer } from "./../components/footer";
import { NavBar } from "./../components/navbar";
import { Section3 } from "./../components/section-3";
export default function Home(){
    return (
        <>

        {/* <!-- Navigation--> */}
        <NavBar />
        {/*<!-- Header-->*/}
       <Header title="hola mundo" />
        {/*<!-- Content section 1-->*/}
        <Section />
        {/*<!-- Content section 2-->*/}
        <Section2 />
       
        {/*<!-- Content section 3-->*/}
        <Section3 />
        <Section3 />
        <Section3 />
        <Section3 />

       {/*<!-- Footer-->*/}
       <Footer />

    </>    

    );
}