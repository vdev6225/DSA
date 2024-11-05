import { useEffect } from "react";
import NoImg from "../../assets/img/no-image.jpg";
import "./ContactUs.css";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactUsMissionSection from "./ContactUsMissionSection/ContactUsMissionSection";
import ContactUsServiceSection from "./ContactUsServiceSection/ContactUsServiceSection";
export default function ContactUs() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    return (
        <>
            <ContactUsBanner />
            <ContactUsMissionSection />
            <ContactUsServiceSection />
            <ContactUsForm />
        </>
    )
}