import * as React from 'react';

// modules
import useSWR from 'swr';

const getMessages = () => {
  return new Promise((resolve, reject) => {
    console.log('fetch');
    resolve('ok');
  });
};

function Profile() {
  const { data } = useSWR<string>('/api/user', getMessages, { suspense: true });
  return <div>hello, {data}</div>;
}

function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Profile />
    </React.Suspense>
  );
}

export default App;
