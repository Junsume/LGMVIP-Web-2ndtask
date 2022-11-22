import React from "react";
import './user.css';


const Users = ({loading, users}) => {
    return loading ? (
        <div id="main">

        </div>
    ) : (
        <div id="my">
            <div className="row" id="main">
            {users.map((user) => (
                <div className="person">
                    <div className="info">
                        <img src={user.avatar} alt={user.avatar} className="image"></img>
                        <h2><b>ID:{user.id}</b></h2>
                        <h3 className="name">
                            {user.first_name} {user.last_name}
                        </h3>
                        <p className="email"><i class="far fa-envalop">{user.email}</i></p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
};

export default Users;