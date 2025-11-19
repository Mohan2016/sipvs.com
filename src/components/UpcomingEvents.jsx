import React from "react";
import "animate.css";
// import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const events = [
    {
      img: "/images/01.png",
      day: "30",
      month: "May",
      time: "10:00 am - 3:00 pm",
      title: "Nullam id varius nunc id varius nunc",
      author: "John Wood",
      location: "New York City",
    },
    {
      img: "/images/02.png",
      day: "27",
      month: "July",
      time: "9:00 am - 4:00 pm",
      title: "Nullam id varius nunc id varius nunc",
      author: "John Wood",
      location: "New York City",
    },
    {
      img: "/images/03.png",
      day: "22",
      month: "Jun",
      time: "11:00 am - 4:00 pm",
      title: "Nullam id varius nunc id varius nunc",
      author: "John Wood",
      location: "New York City",
    },
  ];

  return (
    <section className="events_section py-5">
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              <h2 className="font_style10">Upcoming Events</h2>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>

        {/* Event boxes */}
        <div className="row justify-content-center">
          {events.map((event, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="event_box content_box animate__animated animate__fadeInUp animate__delay-1s">
                
                <div className="content_img">
                  <a href="#">
                    <img src={event.img} alt="event_img" />
                  </a>

                  <div className="event_date">
                    <h5>
                      <span>{event.day}</span> {event.month}
                    </h5>
                    <span className="event_time">{event.time}</span>
                  </div>
                </div>

                <div className="content_desc">
                  <h4 className="content_title">
                    <a href="#">{event.title}</a>
                  </h4>

                  <ul className="content_meta">
                    <li>
                      <i className="ti-user"></i> {event.author}
                    </li>
                    <li>
                      <i className="ti-location-pin"></i> {event.location}
                    </li>
                  </ul>

                  <p>
                    If you are going to use a passage of Lorem Ipsum you need to be sure
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;
