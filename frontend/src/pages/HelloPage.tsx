import React, { useEffect, useState } from 'react';

const HelloPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/hello')
      .then((res) => res.text())
      .then(setMessage)
      .catch((err) => {
        console.error(err);
        setMessage('Failed to load');
      });
  }, []);

  return <div>{message || 'Loading...'}</div>;
};

export default HelloPage;
