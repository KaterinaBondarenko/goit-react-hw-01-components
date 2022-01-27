import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistic';
import FriendList from './components/friend-list/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';

import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction/transactions.json';

import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
