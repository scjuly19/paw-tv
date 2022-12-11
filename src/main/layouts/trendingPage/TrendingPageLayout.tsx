import React from "react";
import { Box, Grid } from "@mui/material";
import { VideoCard } from "../../components/VideoCard";

export const TrendingPageLayout = () => {
  const arr = new Array(4).fill(1);

  return (
    <Box p={2}>
      <h2 className="heading">Trending Videos</h2>
      <Grid
        container
        rowSpacing={{ xs: 2, md: 4 }}
        columnSpacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {arr.map((item, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <VideoCard
              title="TRY NOT TO LAUGH"
              views="6K Views"
              timeUpload="4 hours ago"
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
