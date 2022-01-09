import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/Meetup/NewMeetupForm";
import Meetup from "../models/meetup";

const NewMeetup = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData: Meetup) => {
    fetch(process.env.REACT_APP_FIREBASE_URL + `/meetup.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" text-2xl  w-8/12 py-5 font-bold">New Meetups</div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
