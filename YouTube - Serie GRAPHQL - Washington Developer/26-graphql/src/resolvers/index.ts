interface User {
  id: number;
  name: string;
  email: string;
}

let dataUsers: User[] = [];
const USER_ADDED = "USER_ADDED";

export default {
  Query: {
    users: () => dataUsers,
  },
  Mutation: {
    createUser: (_, { data }, { pub }) => {
      const newUser = { ...data, id: dataUsers.length + 1 };
      dataUsers.push(newUser);
      pub.publish(USER_ADDED, {
        userAdded: newUser,
      });
      return newUser;
    },
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, context) => {
        return context.pub.asyncIterator([USER_ADDED]);
      },
    },
  },
};
