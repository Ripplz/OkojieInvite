import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Guest from "./Guest";

const Guests = props => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch("https://okojieinviteserver.now.sh/guests", { method: "GET" })
      .then(response => response.json())
      .then(data => {
        if (data) setGuests(data);
        else toast("You don't have any RSVPs yet!");
        if (data.length <= 0) toast("You don't have any RSVPs yet!");
      })
      .catch(err => {
        toast("You don't have any RSVPs yet!");
        console.error(err);
      });
  }, []);

  return (
    <div className="main">
      <ul>
        {guests &&
          guests.map((guest, index) => <Guest key={index} guest={guest} />)}
      </ul>
    </div>
  );
};

export default Guests;
