const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
    uri: "http://localhost:5000/graphql",
});

/**
 * Summary. Returns the whole entire List of People with all of the info.
 */
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        fetch({
            query: "{persons {name photo scores} }",
        }).then(result => {
            res.json(result.data);
        });
    });

    /**
     * Summary. Add need Friends.
     */
    app.post("/api/friends", function (req, res) {
        let q = `mutation { addPerson (name: "${req.body.name}" photo: "${req.body.photo}" scores: [${req.body.scores}] ) {name photo scores} } `;
        fetch({
            query: q,
        }).then(result => {
            fetch({
                query: "{persons {name photo scores} }",
            }).then(result => {
                var frienddb = result.data.persons;
                var bfIndex = -1, bfScore = 100;
                for(let i = 0; i < (frienddb.length - 1); i++) {
                    let currentScore = 0;
                    for(let j = 0; j < 10; j++)
                        currentScore += Math.abs((frienddb[i].scores[j] - req.body.scores[j]));
                    if(currentScore < bfScore)
                        bfIndex = i;
                }
                res.json(frienddb[bfIndex]);
            });
        });
    });
};