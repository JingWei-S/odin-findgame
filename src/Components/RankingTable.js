const RankingTable = (props) => {
  const { isPopupVisible, setPopupVisible, tableData } = props;

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };



  return (
    <div className="container">
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p onClick={togglePopup}>❌</p>
            <h1>Leaderboard</h1>
            <table className="leader-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Time (sec)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{row.name}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RankingTable;
