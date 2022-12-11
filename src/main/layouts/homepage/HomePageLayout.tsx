import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./homepage.css";
import { VideoCard } from "../../components/VideoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomePageLayout = () => {
  const arr = new Array(4).fill(1);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="banner-container">
        <img src="/images/cover.jpg" alt="Banner" className="responsive-img" />
        <div className="banner-text-block">
          <h4 className="heading">READY FOR SOME LAUGHTER</h4>
          <p>Watch funny dog videos from all around the world!</p>
          <Button variant="contained" style={{ marginTop: 10 }}>
            Watch now
          </Button>
        </div>
      </div>
      <div className="content-wrapper">
        <h4 className="heading" style={{ marginBottom: 5 }}>
          Must Watch Videos
        </h4>
        <Carousel
          showDots={true}
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {arr.map((item, index) => (
            <VideoCard
              title="TRY NOT TO LAUGH"
              views="6K Views"
              timeUpload="4 hours ago"
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
