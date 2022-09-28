const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
        }
    Mutation: {
            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);
    
                return { token, user };
            },
            login: async (parent, { email, password}) => {
                const user = await User.findOne({ email });

            saveBook: async (parent, { book }, context) => {
                if (context.user) {
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: context.user._id },