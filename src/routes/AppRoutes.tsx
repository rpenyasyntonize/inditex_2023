import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import DetailViewPage from "../pages/Detail/DetailViewPage";
import DetailEpisode from "../pages/Detail/DetailEpisode";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast/:podcastId" element={<DetailViewPage />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<DetailEpisode />}
        />
      </ReactRoutes>
    </Router>
  );
};

export default AppRoutes;
