const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;
const _ = require('lodash');
const axios = require('axios');

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args){
        return axios.get(`http://localhost:3000/company/${parentValue.id}/users`)
        .then(({data}) => data)
      }
    }
  }) // closure
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args){
        console.log(parentValue, args)
        return axios.get(`http://localhost:3000/company/${parentValue.companyId}`)
        .then(({data}) => data)
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args){
        // console.log(parentValue);
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(({data}) => data)
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args){
        console.log(parentValue);
        if(typeof(args.id) === 'undefined') return axios.get(`http://localhost:3000/company/`)
        .then(({data}) => data)
        else return axios.get(`http://localhost:3000/company/${args.id}`)
          .then(({data}) => data)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
