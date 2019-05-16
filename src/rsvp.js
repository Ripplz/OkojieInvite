import React, { useState } from "react";
import alarm_icon from "./images/alarm-clock.png";
import calendar from "./images/calendar.png";
import location from "./images/maps-and-flags.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rsvp() {
  const [guest, setGuest] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState("");

  const submit = event => {
    var submitToastId = toast("Submitting...", { autoClose: false });
    const newGuest = {
      guest,
      additionalGuests,
      timestamp: new Date().getTime()
    };
    fetch("https://okojieinviteserver.now.sh/rsvp", {
      body: JSON.stringify(newGuest),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        toast.dismiss(submitToastId);
        toast(
          "Your RSVP has been successfully submitted. See you on the 15th!"
        );
      })
      .catch(err => console.error(err));
    event.preventDefault();
  };

  return (
    <div className="main">
      <div id="hearts">
        <div className="heart" />
        <div className="heart" />
      </div>
      <div id="hearts">
        <div className="heart" />
      </div>
      <h2 className="center_text">
        Julius and Christiana
        <br />
        are celebrating
        <br />
        45 Years of Bliss
      </h2>
      <div id="details">
        <div className="detail">
          <img src={calendar} width="24" height="24" className="detail_icon" alt="" />
          <span className="detail_text">Saturday 15th of June, 2019</span>
        </div>
        <div className="detail">
          <img
            src={alarm_icon}
            width="24"
            height="24"
            className="detail_icon" alt=""
          />
          <span className="detail_text">4:00 PM</span>
        </div>
        <div className="detail">
          <img src={location} width="24" height="24" className="detail_icon" alt="" />
          <span className="detail_text">Hilton Maidstone</span>
        </div>
      </div>
      <h2 id="rsvp">RSVP</h2>
      <form onSubmit={submit}>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          name="guest"
          value={guest}
          onChange={event => setGuest(event.target.value)}
          required
          placeholder="Your Name..."
        />
        <label htmlFor="additional_guests">Bringing additional guests?</label>
        <input
          type="text"
          name="additional_guests"
          value={additionalGuests}
          onChange={event => setAdditionalGuests(event.target.value)}
          placeholder="Enter names here..."
        />
        <button id="button">I'm Coming!</button>
      </form>
    </div>
  );
}

export default Rsvp;
