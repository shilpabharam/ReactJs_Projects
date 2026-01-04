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
  const [isDisable, setIsDisable] = useState(false);

  const roleCount = team.reduce((acc, curr) => {
    acc[curr.role] = (acc[curr.role] || 0) + 1;
    return acc;
  }, {});

  const isFullteam = team.length === Max_size;
  const idRoleLimitExe = (role) => {
    return roleCount[role] >= role_limit;
  };

  const handleAdd = (player) => {
    if (isFullteam) return;
    console.log('idRoleLimitExe(', idRoleLimitExe(player.role));
    if (idRoleLimitExe(player.role)) return;

    team.find((item) => {
      item.id === player.id && setIsDisable(true);
    });

    // if (isDisable) return;

    setTeam([...team, player]);
  };

  const handleRemove = (_id) => {
    let removed = team.filter((item) => item.id != _id);
    setTeam(removed);
  };

  return (
    <div>
      <div> </div>
      <h1>Left Panel</h1>
      {isFullteam && <div>{'Stop adding player team is full'} </div>}
      <ul>
        {PLAYERS.length > 0 &&
          PLAYERS.map((item) => (
            <li>
              {item.name} {item.role}{' '}
              <button disabled={isDisable} onClick={() => handleAdd(item)}>
                {' '}
                Add{' '}
              </button>
            </li>
          ))}
      </ul>

      <h1>Right Panel</h1>
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
