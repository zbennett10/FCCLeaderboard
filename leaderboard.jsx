var Leaderboard = React.createClass({
    getInitialState: function() {
        return {
            camperData: []
        }
    },
  
    componentDidMount: function() {  
        axios
          .get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
          .then(data => {
              this.setState({camperData: data.data});
          })
    },
  
    sortRecent: function() {
        axios
          .get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
          .then(data => {
              this.setState({camperData: data.data});
          });
    },
  
    sortAllTime: function() {
        axios
            .get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
            .then(data => {
                this.setState({camperData: data.data});
            })
    },

    render: function() {
        return (
          <div>
            <h1 className="heading">Free Code Camp - Camper Leaderboard</h1>
            <table className="table">
              <tr>
                <th className="tablehead">Username</th>
                <th className="tablehead center alltime" onClick={this.sortAllTime}>All-Time</th>
                <th className=" tablehead center recent" onClick={this.sortRecent}>Recent</th>
              </tr>
        {this.state.camperData.map(a =>  
            <tr>
              <td className="usernames tabledata">{a.username}</td>
                <td className="alltimePoints center tabledata">{a.alltime}</td>
                <td className="recentPoints center tabledata">{a.recent}</td>
              </tr>      
          )}
        </table>
      </div>
      ); 
    } 
});

ReactDOM.render(<Leaderboard/>, document.getElementById("container"));
