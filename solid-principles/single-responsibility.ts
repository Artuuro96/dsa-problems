import bcrypt from 'bcrypt';

class User {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
  email: string;
  password: string;
}

/*
In this example, we are giving to the class UserRegistry and its method createUser 2 resposibilities
1. Create new user
2. Encrypt the password
Which is breaking up the first principle (Single Responsiblity)
*/
class UserRegistry {
  public createUser(email: string, password: string): User {
    const salt = bcrypt.genSaltSync(10);
    const passwordEncrypted = bcrypt.hashSync(password, salt);
    const user = new User(email, passwordEncrypted);
    return user
  }
}


/*
To be aligned with the Single Reponsibility principle we can split responsibilities
*/

class Security {
  static encrypt(str: string): string {
    const salt = bcrypt.genSaltSync(10);
    const strEncrypted = bcrypt.hashSync(str, salt);
    return strEncrypted;
  }
}


class UserRegistry1 {
  public createUser(email: string, password: string): User {
    const passwordEncrypted = Security.encrypt(password);
    const user = new User(email, passwordEncrypted);
    return user
  }
}

const userRegistry1 = new UserRegistry1();
console.log(userRegistry1.createUser('Arturo', 'password'));


