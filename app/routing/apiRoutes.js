const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
    uri: "http://localhost:5000/graphql",
});

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        fetch({
            query: "{persons {name photo scores} }",
        }).then(result => {
            console.log(result.data);
            res.json(result.data);
        });
    });

    app.post("/api/tables", function (req, res) {
        res.json(tableData);
    });
}