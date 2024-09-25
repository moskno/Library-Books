var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFromJsonFile } from "../DAL/jsonUsers.js";
import axios from "axios";
const BASE_URL = process.env.BASE_URL || 'https://freetestapi.com/api/v1';
export const bookListUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield readFromJsonFile();
    const user = users.find((u) => u.id === id);
    if (!user) {
        throw new Error("User not found.");
    }
    const booksByUser = user.books;
    if (!booksByUser) {
        throw new Error("No books found for this user.");
    }
    return booksByUser;
});
export const bookCreateUser = (userId, bookName) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield readFromJsonFile();
    axios({
        method: 'post',
        url: './BASE_URL/books',
        data: {
            name: bookName
        }
    })
        .then(function (response) {
    });
});
// bookCreateUser
//     const {name, age, email, password} = req.body;
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = {id: UUID4(), name, age, email, password: hashedPassword};
//     users.push(newUser);
//     res.status(201).json(newUser); 
// }
// bookUpdateUser
// const user_update = (req, res) => {
//     const userId = req.params.id;
//     const {name, age, email, password} = req.body;
//     const userIndex = users.findIndex(u => u.id === userId);
//     if(userIndex === -1){
//         res.status(404).send('User not found')
//     }else{
//         const updateUser = users[userIndex];
//         updateUser.name = name || updateUser.name;
//         updateUser.age = age || updateUser.age;
//         updateUser.email = email || updateUser.email;
//         if(password){
//             updateUser.password = bcrypt.hashSync(password, 10);
//         }
//         res.json(updateUser);
//     }
// }
// bookDeleteUser
// const user_delete = (req, res) => {
//     const userId = req.params.id;
//     const userIndex = users.findIndex(u => u.id === userId);
//     if(userIndex === -1){
//         res.status(404).send('User not found')
//     }else{
//         users.splice(userIndex, 1);
//         res.send('User deleted');
//     }
// }
