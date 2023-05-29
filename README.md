
# User Managment API

> This project is  User Managment API with CRUD (Create, Read , Update , Delete) methods to store user data and retrive it from MYSQL database.
For use this api need a key for authorization.


## Built With

- Major languages: Node.js , Mysql.

<!-- ## Live Demo
[Live Demo Link]() -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
Before attempting to get a copy of this, you should know(have) how to do the following:
- How to use the command line interface(CLI)
- Know how to navigate directories or folders at the CLI.
- Know how to get the URL(https/ssh) of a repository on GitHub.
- You should have a code editor installed, preferably VsCode.

### Setup
 In desired folder or directory in the CLI, run the command:
>                   git clone (https://github.com/shaqayq/management_system_api.git)
-Navigate into the cloned folder or repository by running the command:
>                   cd <folder/name of the repository>
- If VsCode is your default code editor, run:
>                   npm start
- You are all setup!

## EndPoints
**Access key**
- Get all users list:
>      http://localhost:2222/api/v1/session/newAuth

**For users**
- Get all users list:
>        http://localhost:2222/api/v1/users

- Create new user:
>      http://localhost:2222/api/v1/users/newUser

- Filter user data by columns:
>     http://localhost:2222/api/v1/users/FilterItem?Column_name

- Get ,Delete and Update  user by id:(use suite HTTP request methods for each function)
>     http://localhost:2222/api/v1/users/user_id



## Authors

👤 **Shaqayq**

- GitHub: [Shaqayq](https://github.com/Shaqayq)
- Twitter: [DarwaziShaqayq](https://twitter.com/DarwaziShaqayq)
- LinkedIn:  [shaqayq-darwazi](https://www.linkedin.com/in/shaqayq-darwazi/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

-Hat tip to anyone whose code was used
- Inspiration
- etc
## 📝 License

This project is [MIT](./MIT.md) licensed.

