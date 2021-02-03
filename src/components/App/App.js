import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionsHistory from '../TransactionsHistory/TransactionsHistory';
import transactions from '../../data/transactions.json';
import friends from '../../data/friends.json';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData}/>
      <FriendList friends={friends}/>
      <TransactionsHistory items={transactions}/>
    </>
  );
}
