import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: 200,
      borderRight: "1px solid #eee",
      padding: 20
    }}>
      <p><Link to="/">Dashboard</Link></p>
      <p><Link to="/assessment">Assessment</Link></p>
      <p><Link to="/routine">Routine</Link></p>
      <p><Link to="/progress">Progress</Link></p>
    </div>
  );
}
