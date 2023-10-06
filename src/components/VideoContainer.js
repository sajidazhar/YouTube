import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard ,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const {searchQuery} = useSelector(state => state.search);

  useEffect(() => {
    getVideos();
  }, []);

  const getSearchResults = async (searchParams) => {
    const API_KEY = "AIzaSyCiYJIH3BWo6wE2n1IhPOXB_9-yyzmCf2U";
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchParams}&type=video&part=snippet&maxResults=50`);
    const json = await data.json()
    setVideos(json.items.map(el => {
      return {
        ...el,
        id: el.id.videoId
      }
    }));
  }

  useEffect(() => {
    if (searchQuery) {
      getSearchResults(searchQuery)
    }
  }, [searchQuery])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
    {videos[0] && <AdVideoCard info={videos[0]} />}

      {videos.map((video) => {
        console.log(video, 'this is video')
        return <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
      }
      )}
    </div>
  );
};

export default VideoContainer;