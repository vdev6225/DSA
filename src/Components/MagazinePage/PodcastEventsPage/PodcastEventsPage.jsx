import { useContext, useEffect, useState } from "react";
import NavigationSection from "../NavigationSection/NavigationSection";
import AboutEventSection from "./AboutEventSection/AboutEventSection";
import AttendanceSection from "./AttendanceSection/AttendanceSection";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import DsaAuditSection from "./DsaAuditSection/DsaAuditSection";
import EventsPage from "./EventsPage/EventsPage";
import PodcastAccordion from "./PodcastAccordion/PodcastAccordion";
import PodcastsSection from "./PodcastsSection/PodcastsSection";
import { store } from "../../../Helpers/Store/Store";
import PostApiCall from "../../../Helpers/Api/PostApi";
import "./PodcastEventsPage.css"
export default function PodcastEventsPage() {
  const { magazineType } = useContext(store)

  const [podCastData, setPodCastData] = useState([]);

  const getPodCastData = () => {
    PostApiCall.postRequest(
      {
        whereClause: ""
      },
      "GetPodcast"
    ).then((results) => {
      results.json().then((obj) => {
        if (results.status === 200 || results.status === 201) {
          setPodCastData(obj.data);
        } else {
          // notification.error({
          //   message: `Notification error`,
          //   description: obj.data,
          // });
        }
      })
    })
  }

  useEffect(() => {
    getPodCastData();
  }, [])
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
},[])

  const filteredpodcast = podCastData?.filter((item) => item?.fld_type === "Podcast")
  const filteredevents = podCastData?.filter((item) => item?.fld_type === "Event")
  const filteredeventsfeatured = podCastData?.filter((item) => item?.fld_type === "Event" && item?.fld_featured === "Yes")
  return (
    <>
      <NavigationSection />
      <DsaAuditSection />
      <CategoryFilter />
      {magazineType === "Podcast" ?
        <>
          <PodcastsSection />
          <PodcastAccordion podcastdata={filteredpodcast} />
          <AttendanceSection eventdata={filteredeventsfeatured} />
          <AboutEventSection eventdata={filteredeventsfeatured} />
        </>
        :
        <>
          <AttendanceSection eventdata={filteredeventsfeatured} />
          <AboutEventSection eventdata={filteredeventsfeatured} />
          <EventsPage eventdata={filteredevents} />
          <div className="event-page">
            <PodcastsSection />
          </div>
        </>}

    </>
  )
}