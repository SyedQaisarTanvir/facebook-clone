import React, { useEffect, useState } from "react";
import "../Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";
import { getDatabase } from "firebase/database";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const data = onSnapshot(postCollectionRef, (snapshot) => {
    // Create an array of post objects by mapping through the snapshot documents
    const postsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setPosts(postsData);
  });

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profileImage={post.data.profileImage}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
}

export default Feed;
