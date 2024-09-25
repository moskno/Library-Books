var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bookListUser, bookCreateUser, bookUpdateUser, bookDeleteUser } from "../services/bookService.js";
export const bookList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    if (!userId) {
        res.status(400).json({ error: "Id are required." });
        return;
    }
    const userBooks = yield bookListUser(userId);
    res.status(200).json({ userbooks: userBooks });
});
export const bookAdding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, bookName } = req.body;
    if (!userId || !bookName) {
        res.status(400).json({ error: "Id and bookName are required." });
        return;
    }
    const bookDetails = yield bookCreateUser(userId, bookName);
    res.status(201).json({ bookdetails: bookDetails });
});
export const bookUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.id;
    const { userId } = req.body;
    if (!userId || !bookId) {
        res.status(400).json({ error: "Id and bookId are required." });
        return;
    }
    const bookUpdate = yield bookUpdateUser(userId, bookId);
    res.status(200).send("Update successful");
});
export const bookDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.id;
    const { userId } = req.body;
    if (!userId || !bookId) {
        res.status(400).json({ error: "Id and bookId are required." });
        return;
    }
    const bookDelete = yield bookDeleteUser(userId, bookId);
    res.status(200).send("The book has been removed from your list");
});
//     const {name, age, email, password} = req.body;
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = {id: UUID4(), name, age, email, password: hashedPassword};
//     users.push(newUser);
//     res.status(201).json(newUser); 
// }
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
