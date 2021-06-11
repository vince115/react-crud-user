import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const UserList = () => {
    const { users ,removeUser} = useContext(GlobalContext);
    console.log(users);

    return (
        <ListGroup className="rounded-0">
            {users.length > 0 ?( 
            <>
            {users.map(user => (
                <ListGroupItem className="d-flex justify-content-between ">
                    <strong className="mt-2">{user.name}</strong>
                    <div className="">
                        <Link className="btn btn-warning m-1" to={`/edit/${user.id}`}>Edit</Link>
                        <Button onClick={()=>removeUser(user.id)} className="m-1" color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
            </>
            ):( <h4 className="text-center">No User</h4>)}
        </ListGroup>
    )
}
