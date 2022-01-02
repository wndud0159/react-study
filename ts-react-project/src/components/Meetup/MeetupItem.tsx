import { VFC } from "react";

interface Props {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const MeetupItem: VFC<Props> = ({ id, title, image, address, description }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>{title}</div>
        <div>{address}</div>
        <div>{description}</div>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </div>
  );
};
export default MeetupItem;
