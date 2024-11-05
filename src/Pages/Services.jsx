import { useEffect } from "react";
import SubscriptionsSection from "../Components/ServicesPage/SubscriptionsSection/SubscriptionsSection";

export default function Services() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    return(
        <>
        <SubscriptionsSection />
        </>
    )
}