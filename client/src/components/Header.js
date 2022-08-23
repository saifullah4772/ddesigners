import React, { useEffect, useState } from 'react';
import Images from './ProjectImages';
const Header = () => {
  const [userName, setUserName] = useState('');
  const [check, setCheck] = useState(false);

  const HeaderData = async () => {
    const res = await fetch('/getdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await res.json();
    setUserName(data.name);
    setCheck(true);
  };

  useEffect(() => {
    HeaderData();
  }, []);
  return (
    <>
      <header className="header">
        <div className="header_left">
          <h5>Welcome</h5>
          <h1>{userName}</h1>
          <h2>
            {check
              ? 'We are the MERN Developers'
              : 'Happy, to see you Back'}
          </h2>
        </div>
        <div className="header_right">
          <div className="img">
            <img src={Images[0].img} alt="Header_view" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
