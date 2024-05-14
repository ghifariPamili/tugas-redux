import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from '/Project/tugasMsib/tugas-redux/tugas-redux/src/redux/slices/userSlice';

function UserComponent() {
    const userData = useSelector((state) => state.user.data);
    const isLoading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Details</h2>
            {userData?.map((item) => (
                <div key={item.id}>
                    <span>Name: {item.name}</span>
                    <span> - </span>
                    <span>Email: {item.email}</span>
                </div>
            ))}
            <h1>The Maverick - Group 14 A Morning</h1>
        </div>
    );
}

export default UserComponent;
























// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUser } from "/Project/latihan/latihan-redux/node_modules/redux/slices/userSlice";

// function UserComponent() {
//     const userData = useSelector((state) => state.user.data);
//     const isLoading = useSelector((state) => state.user.loading);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchUser());
//     }, [dispatch]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     console.log(userData);

// return (
//     <div>
//         <h2>User Details</h2>
//         {userData?.map((item) => (
//             <div key={item.id}>
//                 <span>Name: {item.name}</span>
//                 <span> - </span>
//                 <span>Email: {item.email}</span>
//             </div>
//         ))}
//     </div>
//     );
// }
// export default UserComponent;