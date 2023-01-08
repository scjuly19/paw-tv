import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { VideoCard } from "../../components/VideoCard";

export const VideosPageLayout = () => {
  const arr = new Array(4).fill(1);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div>
            <h2>Dog falls into the trap</h2>
            <p>By Doggos</p>
            <div style={{ marginTop: 10 }}>
              <video controls width={"100%"}>
                <source
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                  type="video/mp4"
                />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </div>
            <Button key="like" startIcon={<ThumbUpOffAltIcon />}>
              Like
            </Button>
            <Button key="dislike" startIcon={<ThumbDownOffAltIcon />}>
              Dislike
            </Button>
            <Button key="watch later" startIcon={<FavoriteBorderIcon />}>
              Add to Watch Later
            </Button>
            <Button key="add to playlist" startIcon={<PlaylistAddIcon />}>
              Add to Playlist
            </Button>
            <p>10k views. 13 hours ago</p>
            <h3>Description</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>Must Watch</h2>
          <div style={{ marginTop: 30 }}>
            {arr.map((item, index) => (
              <Grid item key={index}>
                <VideoCard
                  title="TRY NOT TO LAUGH"
                  views="6K Views"
                  timeUpload="4 hours ago"
                  key={index}
                  onClick={() => {}}
                />
              </Grid>
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
