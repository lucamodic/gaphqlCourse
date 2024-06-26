const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type User {
        _id: ID!
        email: String!
        name: String!
        password: String
    }

    input UserInputData {    
        email: String!
        name: String!
        password: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        mutation: RootMutation
    }

`)