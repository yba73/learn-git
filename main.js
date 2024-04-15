const products = [
  { title: "product 1 title" },
  { title: "product 2 price" },
  { title: "product 3 price" },
];

const checkFn = (Allproducts) => {
  return Allproducts.filter(
    (product) => product.title.toUpperCase().includes("PRODUCT 1") === true
  );
};
// console.log(checkFn(products));

class Users {
  username;
  email;
  constructor(usernameOne, emailOne) {
    username = usernameOne;
    email = emailOne;
  }
  print = () => {
    console.log(`username is ${username} and email is ${email}`);
  };
}

const userOne = new Users("yassine", "mail");

console.log(userOne.print());
