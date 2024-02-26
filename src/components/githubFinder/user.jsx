import React from 'react'
import './styles.css'

const User = ({ user }) => {
    const { avatar_url, url, followers, following, public_repos, name, login, created_at } = user;

    const createdDate = new Date(created_at);
    return (
        <div className='user'>
            <div>
                <img src={avatar_url} className='avatar' alt='User' />
            </div>
            <div className='name-container'>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined on &nbsp;
                    {`${createdDate.getDate()}`} &nbsp;
                    {`${createdDate.toLocaleString('en-us', { month: 'short' })}`} &nbsp;
                    {`${createdDate.getFullYear()}`} 
                </p>
                <div className='profile-info'>
                    <div>
                        <p>Public Repos</p>
                        <p>{public_repos}</p>
                    </div>
                    <div>
                        <p>Followers</p>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p>{following}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User