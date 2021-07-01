import React, { useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { getRoutines } from "../api";

const GetAllRoutines = (props) => {
    const { routines, setRoutines } = props;
  
    useEffect(() => {
      getRoutines()
        .then((Routines) => {
          setRoutines(Routines);
        })
        .catch(console.error);
    });
  
const renderRoutines = (routines, index) => {
    return (
        <div className="card-container">
      <Card className="card">
        <CardImg top width="50%" src="https://pics.freeicons.io/uploads/icons/png/11231259431621357744-512.png" alt="" />
        <CardBody key={index}>
          <CardTitle tag="h5">{routines.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{routines.creatorname}</CardSubtitle>
          <CardText>{routines.goal}</CardText>
          <Button>Add to Routine</Button>
        </CardBody>
      </Card>
      </div>
      );
};
  
const mappedRoutines = routines.map(renderRoutines);
    return <div className="App">
        {mappedRoutines}
          </div>
};

export default GetAllRoutines;