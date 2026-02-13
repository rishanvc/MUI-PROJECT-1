import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import profilePic from "../assets/images/profile-pic.png";
import jammukashmir from "../assets/images/jammu.jpg";

const Post = ({ post }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar src={post.profilePic} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />

      <CardMedia
        component="img"
        height="250"
        src={post.image}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.caption}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>

        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};


export default Post
