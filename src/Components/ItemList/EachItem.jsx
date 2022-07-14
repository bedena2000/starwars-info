import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./EachItem.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

export default function MediaCard({ itemInfo }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="each-item">
      <CardMedia
        component="img"
        height="140"
        image={`${itemInfo.image}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {itemInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {itemInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button size="small">Add to Favourite</Button>
        </Link>
        <Link to={`${itemInfo.id}`}>
          <Button size="small">Read More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
