const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

// Quote Type
const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        value: { type: GraphQLString }
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        quote: {
            type: QuoteType,
            resolve(parent, args) {
                return axios.get('https://api.tronalddump.io/random/quote')
                    .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})