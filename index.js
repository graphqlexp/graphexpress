var express = require('express'),
graphqlHTTP = require('express-graphql'),
{ buildSchema } = require('graphql'),
schema = buildSchema(`
    type Query {
        hello: String
    }
`),
root = { hello: ()=>'Gello Woo' },
app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000,()=>console.log('Silakan browse ke localhost:4000/graphql'));
