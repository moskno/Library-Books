import { Book, User } from "../models/types";
import { readFromJsonFile, writeUserToJsonFile } from "../DAL/jsonUsers.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const BASE_URL = process.env.BASE_URL || 'https://freetestapi.com/api/v1';



export const bookListUser = async (id: string): Promise<Book[]> => {
  const users: User[] = await readFromJsonFile();
  const user = users.find((u) => u.id === id);
  if(!user){
    throw new Error("User not found.");
  }

  const booksByUser: Book[]| undefined = user.books
  
  if(!booksByUser){
    throw new Error("No books found for this user.");
  }
  return booksByUser;
};

export const bookCreateUser = async(userId:string, bookName:string):promise<void> => {
    const users: User[] = await readFromJsonFile();
    axios({
        method: 'post',
        url: './BASE_URL/books',
        data: {
            name: bookName
        }
      })
      .then(function (response){
        
      });
}


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



