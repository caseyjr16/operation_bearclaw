var React = require('react');
var App = React.createClass({
  getInitialState: function() {
    return {
      members: []
    };
  },
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
  },
  render: function() {
    return (
        <div className="Users">
          <h1>Users</h1>
          {this.state.members.map(member =>
            <div key={member.id}>{member.name} {member.surname} - {member.email}</div>
          )}
        </div>
    );
  }
});

module.exports = App;