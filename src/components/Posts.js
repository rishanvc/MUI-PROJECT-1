import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import profilePic from "../assets/images/profile-pic.png";
import jammukashmir from "../assets/images/jammu.jpg";

const Posts = () => {
  return (
 
      <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"
            src={profilePic}
            >

          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Muhammed Rishan"
        subheader="December 14, 2025"
      />
      <CardMedia
        component="img"
        height="20%"
        src={jammukashmir}
        alt="Jammu & Kashmir"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         In December, Jammu and Kashmir experiences cold winter weather, with snowfall
          and sub-zero temperatures in the Kashmir Valley and cool to chilly conditions in the Jammu region.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
   
  )
}

export default Posts
