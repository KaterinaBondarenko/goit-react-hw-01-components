import Profile from './components/social-profile/Profile';

import user from './components/social-profile/user.json';

export default function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}
