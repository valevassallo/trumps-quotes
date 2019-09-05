const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

// Quote Type
const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        value: { type: GraphQLString },
        _embedded: { 
            type: new GraphQLObjectType({
                name: 'Embedded',
                fields: () => ({
                    source: { type: GraphQLList(new GraphQLObjectType({
                        name: 'Source',
                        fields: () => ({
                            url: { type: GraphQLString}
                        })
                    }))}
                })
            })
        }
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