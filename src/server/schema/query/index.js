const { GraphQLObjectType } = require('graphql');
const User = require('./user');

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    User,
  },
});
