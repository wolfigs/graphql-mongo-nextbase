import dbConnect from "../lib/dbConnect";
import Users from "../models/Users";
import {Mutation} from "@apollo/client/react/components";

export const resolvers = {
  Query: {

    // async viewer(_parent, _args, _context, _info) {
    //   return { id: 1, name: 'Sathnindu Kottage', status: 'cached' }
    // },

    async viewer(_, {ID}) {
      await dbConnect();
      return Users.findById(ID);
    },
    async getUsers(_) {
      await dbConnect();
      return Users.find().sort({_id: -1});
    },
  },
  Mutation: {

  }
}
