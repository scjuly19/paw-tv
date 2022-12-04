import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

type props = {
  title: string;
  views: string;
  timeUpload: string;
};
export const VideoCard = (props: props) => {
  const { title, views, timeUpload } = props;
  return (
    <Card className="video-card-wrapper">
      <CardMedia
        component="img"
        height="220"
        image="/images/thumbnail-1.jpg"
        alt="Video"
      />
      <CardContent>
        <h4>{title}</h4>
        <p>{`${views} | ${timeUpload}`}</p>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained">
          Watch Now
        </Button>
      </CardActions>
    </Card>
  );
};
