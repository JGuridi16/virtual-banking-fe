import { Navigate, Route, Routes } from "react-router-dom";
import Queues from "./queues";

export default function MainRouter () {
  return (
    <div className="app_main">
      <Routes>
        <Route path="/queues/*" element={<Queues />} />
        <Route path="/" element={<Navigate to="queues" />} />
      </Routes>
    </div>
  );
}
