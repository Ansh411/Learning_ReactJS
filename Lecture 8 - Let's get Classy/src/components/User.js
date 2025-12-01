import { useDebugValue, useEffect, useState } from "react";


const User = () => {
    const [userInfo, setUserInfo] = useState({name : "Dummy" , location: "Default"});

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {

        const data = await fetch("https://api.github.com/users/Ansh411");

        const json = await data.json();

        setUserInfo(json);
    };

    const {name , location, avatar_url} = userInfo

        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : Ansh411</h4>
            </div>
        )

};

export default User;