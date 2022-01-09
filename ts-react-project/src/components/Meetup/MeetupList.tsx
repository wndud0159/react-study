import { VFC } from "react";
import Meetup from "../../models/meetup";
import MeetupItem from "./MeetupItem";

interface Props {
  meetups: Meetup[];
}

const MeetupList: VFC<Props> = ({ meetups }) => {
  return (
    <div>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id!} title={meetup.title} image={meetup.image} description={meetup.description} address={meetup.address} />
      ))}
    </div>
  );
};

export default MeetupList;
