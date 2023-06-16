import React, { Suspense } from "react";
import { useRoutes, Link } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/personal">我的音乐</Link>
        <Link to="/follow">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
