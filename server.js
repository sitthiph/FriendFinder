const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");
const data = require("./app/data/friends");

const PersonType = new GraphQLObjectType({
    name: "Person",
    description: "Person's information",
    fields: () => ({
        name: {type: GraphQLNonNull(GraphQLString)},
        photo: {type: GraphQLNonNull(GraphQLString)},
        scores: {type: GraphQLList(GraphQLInt)}
    })
});
const RootQuery = new GraphQLObjectType({
    name: "query",
    description: "Root Query",
    fields: () => ({
        persons: {
            type: new GraphQLList(PersonType),
            description: "List of all person",
            resolve: () => data.data
        },
        person: {
            type: PersonType,
            description: "A single person",
            args: {
                name: {type: GraphQLString}
            },
            resolve: (parents, args) => data.data.find(person => person.name === args.name)
        }
    })
});

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields: () => ({
        addPerson: {
            type: PersonType,
            description: "Add a new Person",
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                photo: {type: GraphQLNonNull(GraphQLString)},
                scores: {type: GraphQLNonNull(GraphQLList(GraphQLInt))}
            },
            resolve: (parents, args) => {
                let newBook = {
                    "name": args.name,
                    "photo": args.photo,
                    "scores": args.scores
                };
                data.data.push(newBook);
                return newBook;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
});

app.use("/graphql", expressGraphQL({
    graphiql: true,
    schema: schema
}));
app.listen(5000., () => console.log("server is now running on http://localhost:5000"));

