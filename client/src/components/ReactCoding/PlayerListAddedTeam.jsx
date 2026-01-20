import React, { useState } from 'react';
import './style.css';

const PLAYERS = [
  { id: 1, name: 'Rohit', role: 'Batsman' },
  { id: 2, name: 'Virat', role: 'Batsman' },
  { id: 3, name: 'Gill', role: 'Batsman' },
  { id: 4, name: 'Surya', role: 'Batsman' },
  { id: 5, name: 'Iyer', role: 'Batsman' },

  { id: 6, name: 'Bumrah', role: 'Bowler' },
  { id: 7, name: 'Shami', role: 'Bowler' },
  { id: 8, name: 'Siraj', role: 'Bowler' },
  { id: 9, name: 'Kuldeep', role: 'Bowler' },
  { id: 10, name: 'Chahal', role: 'Bowler' },

  { id: 11, name: 'Hardik', role: 'All-rounder' },
  { id: 12, name: 'Jadeja', role: 'All-rounder' },
  { id: 13, name: 'Axar', role: 'All-rounder' },

  { id: 14, name: 'Pant', role: 'Wicket Keeper' },
  { id: 15, name: 'KL Rahul', role: 'Wicket Keeper' },
];

const Max_size = 11;
const role_limit = 3;
const role = ['All-rounder', 'Wicket Keeper', 'Bowler', 'Batsman'];

export default function App() {
  const [team, setTeam] = useState([]);

  const roleCount = team.reduce((acc, curr) => {
    acc[curr.role] = (acc[curr.role] || 0) + 1;
    return acc;
  }, {});

  const isFullteam = team.length === Max_size;
  const isRoleLimitExceeded = (role) => roleCount[role] >= role_limit;

  const isPlayerSelected = (_id) => team.some((item) => item.id === _id);

  const handleAdd = (player) => {
    if (isFullteam) return;
    if (isPlayerSelected(player.id)) return;
    if (isRoleLimitExceeded(player.role)) return;

    team.find((item) => {
      if (item.id === player.id) {
        setIsDisable(true);
      }
    });

    setTeam([...team, player]);
  };

  const handleRemove = (_id) => {
    let removed = team.filter((item) => item.id != _id);
    setTeam(removed);
  };

  return (
    <div>
      <span> Player added - {team.length + '/' + Max_size} </span>
      <span>
        {' '}
        Batsman added - {(roleCount['Batsman'] || 0) + '/' + role_limit}{' '}
      </span>
      <span>
        {' '}
        Bowler added - {(roleCount['Bowler'] || 0) + '/' + role_limit}{' '}
      </span>
      {/* <span> Batsman added - {roleCount['Batsman'] + '/' + role_limit} </span> */}
      {isFullteam && <div>{'Stop adding player team is full'} </div>}
      <h1>Player Panel</h1>

      <ul>
        {PLAYERS.length > 0 &&
          PLAYERS.map((item) => (
            <li>
              <div>
                {' '}
                {/* {item.role} added - {roleCount[item.role] + '/' + role_limit}{' '} */}
              </div>
              {item.name} {item.role}{' '}
              <button
                disabled={
                  isFullteam ||
                  isPlayerSelected(item.id) ||
                  isRoleLimitExceeded(item.role)
                }
                onClick={() => handleAdd(item)}
              >
                {' '}
                Add{' '}
              </button>
            </li>
          ))}
      </ul>

      <h1>Team Panel</h1>
      <ul>
        {team.length > 0 &&
          team.map((item) => (
            <li>
              {item.name} {item.role}{' '}
              <button onClick={() => handleRemove(item.id)}> Remove </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

/**
 * 1.  show all available player - name , role ,action -add
 *
 *
 */
