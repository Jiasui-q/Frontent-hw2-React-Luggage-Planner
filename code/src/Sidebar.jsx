export function Sidebar({ setPage, currentPage }) {
  return (
    <div className="sidebar">
      <p>LUGGAGE PLANNER ✈️</p>
      <ul>
        <li>
          <a
            href="#"
            className={currentPage === "luggage-overview" ? "active" : ""}
            onClick={() => {
              setPage("luggage-overview");
            }}
          >
            Luggage Types
          </a>
        </li>
        <li>
          <a
            href="#"
            className={currentPage === "planner" ? "active" : ""}
            onClick={() => {
              setPage("planner");
            }}
          >
            Planner
          </a>
        </li>
        <li>
          <a
            href="#"
            className={currentPage === "summary" ? "active" : ""}
            onClick={() => {
              setPage("summary");
            }}
          >
            Summary
          </a>
        </li>
      </ul>
    </div>
  );
}
