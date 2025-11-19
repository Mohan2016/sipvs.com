import React from "react";
import CountUp from "react-countup";
// import "./CounterSection.css";

const CounterSection = () => {
  const counters = [
    {
      id: 1,
      icon: "bi-people-fill",
      number: 1800,
      suffix: "+",
      label: "Students",
      delay: "0.1s",
    },
    {
      id: 2,
      icon: "bi-journal-bookmark-fill",
      number: 70,
      suffix: "",
      label: "Courses",
      delay: "0.2s",
    },
    {
      id: 3,
      icon: "bi-person-badge-fill",
      number: 700,
      suffix: "+",
      label: "Certified Teachers",
      delay: "0.3s",
    },
    {
      id: 4,
      icon: "bi-trophy-fill",
      number: 1200,
      suffix: "+",
      label: "Award Winning",
      delay: "0.4s",
    },
  ];

  return (
    <section
      className="counter_section"
      style={{
        backgroundImage: `url("/assets/images/pattern_bg5.png")`,
      }}
    >
      <div className="container">
        <div className="row">

          {counters.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-3 col-6">
              <div
                className="box_counter fadeInUp"
                style={{ animationDelay: item.delay }}
              >
                {/* Bootstrap Icon */}
                <div className="counter_icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="counter_content">
                  <h3 className="counter_text">
                    <CountUp end={item.number} duration={2.5} />
                    {item.suffix}
                  </h3>
                  <p>{item.label}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CounterSection;
