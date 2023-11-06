const articlesFixtures = {
    oneArticle:
    {
        id: 1,
        title: "event1",
        url: "nytimes.com",
        explanation: "example",
        email: "author@nytimes.com",
        dateAdded: "",
    },
    threeArticles: [
        {
            id: 1,
            title: "event1",
            url: "nytimes.com",
            explanation: "example",
            email: "author@nytimes.com",
            dateAdded: "2023-05-31T00:00:00",
        },
        {
            id: 2,
            title: "event2",
            url: "latimes.com",
            explanation: "also an example",
            email: "writer@latimes.com",
            dateAdded: "2010-01-01T01:23:45",
        },
        {
            id: 3,
            title: "event3",
            url: "washingtonpost.com",
            explanation: "still an example",
            email: "poet@washingtonpost.com",
            dateAdded: "2003-05-31T00:00:00",
        },
    ],
};

export { articlesFixtures };
