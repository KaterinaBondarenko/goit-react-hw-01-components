import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistic';
// import FriendList from './components/friend-list/FriendList';

import user from './components/social-profile/user.json';
import data from './components/statistics/data.json';
// import friends from './components/friend-list/friends.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} /> */}
    </>
  );
}
