import React, { useEffect, useState } from 'react'
import User from './user';
import './styles.css'

const GithubFinder = () => {
    const [username, setUsername] = useState('HalimLuman')
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData(){
        setLoading(true);

        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json();
        
        if(data){
            setUserData(data);
            setLoading(false);
            setUsername('');
        }
    }

    useEffect(() => {
        fetchGithubUserData()
    },[])

    if(loading){
        return <h1>Loading Data ! Please wait</h1>
    }

    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input
                    name='search-by-username'
                    type='text'
                    placeholder='Search Github Username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData === null ? null : <User user={userData} />
            }
        </div>
    )
}

export default GithubFinder