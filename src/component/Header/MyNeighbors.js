import React from "react";

let Neighbors = (props) => {
if(props.users.length ===0){
    props.setUsers(
        [
           { id: 1, photoURL: 'https://i.ytimg.com/vi/ySQj5l_8eIs/default.jpg', followed: false, fullName: 'Dmitriy', status: 'i am a boss', location: { city: 'Minsk', country: 'Belarus' } },
           { id: 2, photoURL: 'https://i.ytimg.com/vi/ySQj5l_8eIs/default.jpg', followed: true, fullName: 'Saha', status: 'i am a boss too', location: { city: 'Moscow', country: 'Russia' } },
           { id: 3, photoURL: 'https://i.ytimg.com/vi/ySQj5l_8eIs/default.jpg', followed: false, fullName: 'Andrew', status: 'i am a boss too ', location: { city: 'Kiev', country: 'Ukraina' } },

       ]
   )
}
    
    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Neighbors;
