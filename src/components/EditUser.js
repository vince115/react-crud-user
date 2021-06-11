import React,{ useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link ,useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [ selectedUser, setSelectedUser ] = useState({
        id:'',
        name:''
    }); 
    const history = useHistory();
    const currentUserId= props.match.params.id;

    useEffect(()=>{
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
        //console.log('selectedUser',selectedUser)
    },[currentUserId, users])
   

    const onChange = (e) =>{
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push('/');
    }
    return (
        <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" onChange={onChange} value={selectedUser.name} placeholder="Enter Name" ></Input>
          </FormGroup>
          <Button type="submit" color="primary" >Save</Button>
          <Link to="/" className="btn btn-danger m-2">Cancel</Link>
      </Form>
    )
}
