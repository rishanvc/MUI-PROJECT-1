import { Box } from "@mui/material";
import React from "react";
import Post from "./Posts";
import profilePic from "../assets/images/profile-pic.png";
import jammukashmir from "../assets/images/jammu.jpg";
import mohanlal from "../assets/images/mohanlal.jpg"
import prithvi from "../assets/images/prithvi.jpg"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"

const posts = [
  {
    id: 1,
    name: "Muhammed",
    date: "Dec 14, 2025",
    caption: "Beautiful winter in Kashmir ❄️",
    image: jammukashmir,
    profilePic: profilePic,
  },
  {
    id: 2,
    name: "Mohanlal",
    date: "Jan 2, 2026",
    caption: "Morning vibes 🌄",
    image: img1,
    profilePic: mohanlal,
  },
  {
    id: 3,
    name: "Binshad",
    date: "Feb 10, 2026",
    caption: "Travel diaries ✈️",
    image: img2,
    profilePic: prithvi,
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
