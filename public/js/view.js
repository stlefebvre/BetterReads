/*

Goodreads API docs: https://www.goodreads.com/api/index#reviews.list

xml-js npm converter: https://www.npmjs.com/package/xml-js

*/

require("dotenv").config();

$(document).ready(function () {
    $("#search-btn").on("click", function (event) {
        var url = "https://www.goodreads.com/review/list?v=2";
        var searchInput = $("#searchInput").val();
        var list = $("#list").val();
        var author = $("#author").val().trim();
        var genre = $("#genre").val().trim();
        var numPages = $("#numPages").val();
        url += '?' + $.param({
            'v': "2",
            'id': "27136019",
            'sort': "title",
            'search[query]': searchInput,
            'per_page': 50,
            'num_pages': numPages,
        });
    });
});