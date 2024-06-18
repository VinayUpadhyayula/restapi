import express from 'express';
import { deleteUsers, getAllUsers, updateUser} from '../controllers/users';
import { isAuthentication, isOwner} from '../middlewares/index';

export default (router:express.Router)=>{
    router.get('/users', isAuthentication, getAllUsers);
    router.delete('/user/:id',isAuthentication, isOwner,deleteUsers);
    router.patch('/user/:id',isAuthentication, isOwner,updateUser)
}