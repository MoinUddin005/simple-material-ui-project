import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const HeaderCard = () => {
  return (
    <Card sx={{ maxWidth: 345, p: 1 }}>
      <CardMedia
        sx={{ height: 190, borderRadius: 1 }}
        image="https://www.cnet.com/a/img/resize/b77476ea32473eceb71cbfc24e70d054bf0a1a2a/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=360&width=640"
        title="green iguana"
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p:0,
          pt: 4
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
        <IconButton sx={{ border: "1px  solid #dddddd" }}>
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default HeaderCard;
