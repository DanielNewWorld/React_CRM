import React from 'react';
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
                   pageSize={props.pageSize}
                   login={props.login}
                   password={props.password}
        />

        <div>
            {props.data.map(u => <User user={u}
                                       key={u._id}
                                       pageSize={props.pageSize}
                                       currentPage={props.currentPage}
                                       onDeleteUser={props.onDeleteUser}
                                       onUpdateUser={props.onUpdateUser}
                                       login={props.login}
                                       password={props.password}
                />
            )}</div>

        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
                   pageSize={props.pageSize}
                   login={props.login}
                   password={props.password}
        />
    </div>
}

export default Users;