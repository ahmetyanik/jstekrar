import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DataStore from "../DataStore";

export default function ActionAreaCard() {
  const { city, cityInfos } = React.useContext(DataStore);

  console.log(cityInfos)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.piri.net/mnresize/840/-/resim/imagecrop/2022/05/09/11/39/resized_c92e8-2762cc86havadurumu.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {(cityInfos?.main?.temp - 273.15).toFixed()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
