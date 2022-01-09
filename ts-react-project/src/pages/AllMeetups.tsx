import { useEffect, useState } from "react";
import MeetupList from "../components/Meetup/MeetupList";
import Meetup from "../models/meetup";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_FIREBASE_URL + "/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meetupData: Meetup[] = [];
        for (const key in data) {
          meetupData.push({
            id: key,
            ...data[key],
          });
        }
        setMeetups(meetupData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" text-2xl py-5 w-8/12 font-bold">All Meetups</div>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetups;
