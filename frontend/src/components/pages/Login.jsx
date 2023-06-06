
import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/signup')
      .then((result) => {
        result.json().then((res) => {
          setData(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  
  const handleLogin = () => {
    const data = { email, password };

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        if (result.status === true && result.code === 200) {
          console.log(result.data);
          window.localStorage.setItem('auth', JSON.stringify(true));
        window.localStorage.setItem('userid', JSON.stringify(result.data.email));
          alert(result.message);
          navigate('/category');
        } else {
          alert(result.message);
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row py-3 a1">
          <div className="col-sm-2"></div>
          <div className="col-sm-4 b1">
            <center>
              <h1 style={{ color: 'red' }}>Login</h1>
              <input
                type="email"
                className="form-control w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
              <br />
              <input
                type="password"
                className="form-control w-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
              <br />
              <div>
               
                <button onClick={handleLogin} className="form-control btn btn-danger w-100">Login</button>
              
              </div>
              <br />
              <h5 className="text-light">
                Don't have an account? <a href="/sign">Sign Up Here</a>
              </h5>
            </center>
          </div>
          <div className="col-sm-4">
            <img
              src="https://img.freepik.com/free-vector/social-media-ad-online-advertising-smm-network-announcement-media-content-followers-activity-geodata-internet-manager-cartoon-character_335657-2572.jpg"
              className="w-75"
            />
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
