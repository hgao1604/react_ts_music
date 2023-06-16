import React, { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

const Discover = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/station">主播电台</Link>
        <Link to="/discover/player">歌手</Link>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Discover;
