import { Route, Routes } from "react-router-dom";
import SmartQueue from "../../views/smartqueue";

export default function Queues () {
  return (
    <Routes>
      <Route path="/" element={<SmartQueue />} />
    </Routes>
  );
}
