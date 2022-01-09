import React, { FC, useRef } from "react";
import Meetup from "../../models/meetup";
import Card from "../UI/Card";

interface Props {
  onAddMeetup: (meetupData: Meetup) => void;
}

const NewMeetupForm: FC<Props> = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (titleInputRef.current && imageInputRef.current && addressInputRef.current && descriptionInputRef.current) {
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
      };

      props.onAddMeetup(meetupData);
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="text-left w-full px-2 py-3 font-semibold space-y-3">
        <div>
          <label htmlFor="">Meetup Title</label>
          <br />
          <input type="text" ref={titleInputRef} className="border w-full rounded-md" />
        </div>
        <div>
          <label htmlFor="">Meetup Image</label>
          <br />
          <input type="text" ref={imageInputRef} className="border w-full rounded-md" />
        </div>
        <div>
          <label htmlFor="">Meetup Address</label>
          <br />
          <input type="text" ref={addressInputRef} className="border w-full rounded-md" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <br />
          <textarea ref={descriptionInputRef} className="border rounded-md w-full resize-none" name="" id="" rows={4}></textarea>
        </div>
        <div className=" text-right">
          <button type="submit" className=" border rounded-md px-5 py-2 text-white font-bold bg-green-700">
            Add MeetUp
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
