import React, { useEffect } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { getActivities } from "../api";
import "./GetAllActivities.css";

const ShowActivityCards = (props) => {
  const { activities, setActivities } = props;

    useEffect(() => {
      getActivities()
        .then((activities) => {
          setActivities(activities);
        })
        .catch(console.error);
    });

    const renderCard = (activity, index) => {
      return (
        <div className="card-container">
      <Card className="card">
        <CardImg top width="50%" src="https://pics.freeicons.io/uploads/icons/png/9835516671598536281-512.png" alt="" />
        <CardBody key={index}>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          <CardText>{activity.description}</CardText>
          <Button>Edit Routine</Button>
        </CardBody>
      </Card>
      </div>
      );
    };
    const mappedActivities = activities.map(renderCard);

    return <div className="App">
      {mappedActivities}</div>;
  };

export default ShowActivityCards;