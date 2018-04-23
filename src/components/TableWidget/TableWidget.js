import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTable } from '../../actions/index';
import tableMockData from '../../utils/tableMockData';

import './TableWidget.scss';

class TableWidget extends PureComponent {
  render() {
    const teamsSorted = tableMockData.teams.sort((a, b) => {
      return a.overall_league_position - b.overall_league_position;
    });
    const teamDetails = teamsSorted.map((team, i) => (
      <tr key={i} className={`team team__${team.team_name}`}>
        <td>{i + 1}</td>
        <td>{team.team_name}</td>
        <td>{team.overall_league_payed}</td>
        <td>{team.overall_league_W}</td>
        <td>{team.overall_league_D}</td>
        <td>{team.overall_league_L}</td>
        <td>{team.overall_league_GF}</td>
        <td>{team.overall_league_GA}</td>
        <td>{team.overall_league_PTS}</td>
      </tr>
    ));

    return (
      <table className="table-widget">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>GF</th>
            <th>GA</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          { teamDetails }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps, { fetchTable })(TableWidget);
