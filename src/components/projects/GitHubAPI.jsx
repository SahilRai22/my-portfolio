// GitHubAPI.js
import React, { useEffect, useState } from 'react';
import './gitHubAPI.css';

export default function GitHubAPI() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/SahilRai22/repos?per_page=9&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          // Handle end of repos if needed
        } else {
          setUser([...user, ...data]);
        }
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  return (
    <section className='repo-container'>
      <div className='repo-cards'>
        {user.map((userElement) => (
          <div className='repo-card' key={userElement.id}>
            <h2 className='repo-name'>{userElement.name}</h2>
            <p className='language'>
              Language:{' '}
              {userElement.language === null ? 'none' : userElement.language}
            </p>
            <p className='date'>Start date & time: {userElement.created_at}</p>
            <p className='visibility'>Visibility: {userElement.visibility}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
