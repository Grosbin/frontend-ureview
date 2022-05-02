import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { assets } from "../../../helpers/assets";

import { ScrollPanel } from "primereact/scrollpanel";
import { startDataActivity } from "../../../actions/activity";
import { useNavigate } from "react-router-dom";
import { ActivityCard } from "../../Activity/ActivityCard";

export const Activity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activities } = useSelector((state) => state.activities);
  const { hourVoae, comments } = useSelector((state) => state.statistics);
  const { uid } = useSelector((state) => state.auth);

  const course =
    activities.filter(
      (activity) =>
        activity.type === "course" && activity.userActivity._id === uid
    ) || [];
  const events =
    activities.filter(
      (activity) =>
        activity.type === "events" && activity.userActivity._id === uid
    ) || [];
  console.log(course);
  console.log(events);

  useEffect(() => {
    console.log("Acitivdades");
  }, []);

  const handleActivity = (activity) => {
    dispatch(startDataActivity(activity, false));
    console.log(activity.name);
    if (activity.type === "events") {
      navigate("evento-informacion");
    }
    if (activity.type === "course") {
      navigate("curso-informacion");
    }
  };

  const activityTemplate = (activity) => {
    return (
      <div className="activity-item grid">
        <div className="flex flex-wrap card-container">
          <div className="flex align-items-center justify-content-center bg-blue-100 font-bold text-white m-2 border-round">
            <div className="header__card mb-3">
              <div className="header__card">
                <img
                  className="p-carousel-img"
                  alt="Card"
                  src={assets(
                    `${
                      activity.type === "course"
                        ? "./banner-01.png"
                        : `./${activity.ambit?.ambit}.png`
                    }`
                  )}
                />
                <h2 className="text-blue-50 texto-header">{activity.name}</h2>
              </div>
              <div className="flex">
                <div className="flex-1 flex align-content-center justify-content-center">
                  <div>
                    <h4 className="mb-1 text-900">{activity.user?.name}</h4>
                    <h6 className="mt-0 mb-3 text-900">
                      {activity.user?.email}
                    </h6>
                  </div>
                </div>
                <div>
                  <Button
                    label="Abrir"
                    className="p-button-success mr-3 mt-1 small"
                    onClick={() => handleActivity(activity)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex align-items-center justify-content-center">
            <div className="scrollpanel-demo">
              <div className="card ">
                <ScrollPanel className="scroll-panel__card custombar1">
                  <div style={{ padding: "1em", lineHeight: "1.5" }}>
                    {activity.description ? (
                      <p
                        className="card__description m-0"
                        style={{ lineHeight: "1.5" }}
                      >
                        {activity.description}
                      </p>
                    ) : (
                      <p
                        className="card__description m-0 text-blue-600"
                        style={{ lineHeight: "1.5" }}
                      >{`Esta actividad no cuenta con una descripción. Puede mandar un correo a ${activity.user?.email} y consultar más detalles sobre la misma.`}</p>
                    )}
                  </div>
                </ScrollPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const headerCourse = (
    <div>
      <h1 className=" mt-0 mb-0">Cursos</h1>
    </div>
  );

  const headerEvent = (
    <div>
      <h1 className=" mt-0 mb-0">Eventos</h1>
    </div>
  );

  return (
    <div className="main">
      <div className="grid">
        <ActivityCard
          title={"Cursos"}
          count={course.length}
          icon={"pi-book text-blue-500"}
        />

        <ActivityCard
          title={"Eventos"}
          count={events.length}
          icon={"pi-bookmark text-orange-500"}
        />

        <ActivityCard
          title={"Total horas  Art.140"}
          count={hourVoae}
          icon={"pi-clock text-cyan-500"}
        />

        <ActivityCard
          title={"Comentarios"}
          count={comments}
          icon={"pi-comment text-purple-500"}
        />
      </div>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-12">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-center">
              <div
                className="card flex justify-content-center"
                style={{ maxWidth: "100%" }}
              >
                <Carousel
                  value={events}
                  numVisible={1}
                  numScroll={1}
                  orientation="vertical"
                  verticalViewPortHeight="400px"
                  itemTemplate={activityTemplate}
                  header={headerEvent}
                  circular
                  autoplayInterval={4000}
                  style={{ width: "100%", marginTop: "1em" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-12">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-center">
              <div
                className="card flex justify-content-center"
                style={{ maxWidth: "100%" }}
              >
                <Carousel
                  value={course}
                  numVisible={1}
                  numScroll={1}
                  orientation="vertical"
                  verticalViewPortHeight="400px"
                  itemTemplate={activityTemplate}
                  header={headerCourse}
                  circular
                  autoplayInterval={3000}
                  style={{ width: "100%", marginTop: "1em" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
