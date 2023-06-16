import { RouteObject, Navigate } from "react-router-dom";
import React from "react";
// import Discover from "@/views/discover";
// import Download from "@/views/download";
// import Personal from "@/views/personal";
// import Follow from "@/views/follow";

// lazy load
const Discover = React.lazy(() => import("@/views/discover"));
const Download = React.lazy(() => import("@/views/download"));
const Personal = React.lazy(() => import("@/views/personal"));
const Follow = React.lazy(() => import("@/views/follow"));
const Recommend = React.lazy(() => import("@/views/discover/c-views/recommend"));
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking"));
const Playlist = React.lazy(() => import("@/views/discover/c-views/playlist"));
const Station = React.lazy(() => import("@/views/discover/c-views/station"));
const Player = React.lazy(() => import("@/views/discover/c-views/player"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/playlist",
        element: <Playlist />
      },
      {
        path: "/discover/station",
        element: <Station />
      },
      {
        path: "/discover/player",
        element: <Player />
      }
    ]
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/personal",
    element: <Personal />
  },
  {
    path: "/follow",
    element: <Follow />
  }
];

export default routes;
