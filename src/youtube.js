import React, { useState, useEffect } from "react";
import Video from "./Video";

//https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=PL9Fw1J2bLM2FwcSUEVmjlNDGDIjgX1f4X&key=AIzaSyBdxvztZnz4ZOl-ShY06LoMVx8_UeGDZck

class Videos extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }
  async componentDidMount() {
    const url =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=PL9Fw1J2bLM2FwcSUEVmjlNDGDIjgX1f4X&key=AIzaSyBdxvztZnz4ZOl-ShY06LoMVx8_UeGDZck";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  // fetchVideo =() => {
  //     fetch("")
  //     .then(response=>response.json())
  //     .then(data=>{
  //         const result = data.items.map(item=>{
  //             var temp=this.state.videos;
  //             temp.push(item.contentDetails.videoId)
  //             this.setState({videos:temp});
  //         })
  //         // console.log(this.state.videos)
  //     })
  // }

  render() {
    const { videos } = this.state;
    const renderVideos = videos.map((video) => {
      return <Video key={video.contentDetails.videoId} video={video} />;
    });
    return <div>{renderVideos}</div>;
  }
}
// {this.state.videos.map((video) => (
//     <Video key={video.contentDetails.videoId} video={video} />
//   ))}
// class Video extends React.Component{
//     render(){
//         console.log(this.props.video)
//         return(
//             <div>
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/RU4fehH9Tdg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </div>
//         )
//     }
// }

// function Youtube(props){

//     const [videos,setVideos]=useState([])
//     useEffect(()=> {
//         fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=PL9Fw1J2bLM2FwcSUEVmjlNDGDIjgX1f4X&key=AIzaSyBdxvztZnz4ZOl-ShY06LoMVx8_UeGDZck")
//         .then(response=>response.json())
//         .then(data=>{
//             const result = data.items.map(item=>{
//                 return {video: item.contentDetails.videoId}
//             })
//             setVideos(result)
//         })
//     },[])

//         return(
//             <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/dqLgu2zAx2k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
//         )
// }
export default Videos;
