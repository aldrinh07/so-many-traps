var app = angular.module('reddit');

app.service('mainService', function() {

var data=[
    {
        author: "Ean",
        body:"wow",
        comments:[],
        karma: 0,
        timestamp: 12341234,
        title: "this is a post"
    },
    {
        author: "James",
        body:"This is good",
        comments:[],
        karma: 0,
        timestamp: 123411234234,
        title: "better post"
    }
]

this.getData = function() {
    return data
})
})