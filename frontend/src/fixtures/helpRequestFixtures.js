const helpRequestsFixtures = {
    oneRequest: {
        "id": 1,
        "requesterEmail": "cgaucho1@ucsb.edu",
        "teamId": "f23-6pm-4",
        "tableOrBreakoutRoom": "10",
        "requestTime": "2023-10-26T14:30:00",
        "explanation": "Need help with Swagger-ui",
        "solved": false
    },
    threeRequests: [
        {
            "id": 1,
            "requesterEmail": "cgaucho1@ucsb.edu",
            "teamId": "f23-6pm-4",
            "tableOrBreakoutRoom": "10",
            "requestTime": "2023-10-26T14:30:00",
            "explanation": "Need help with Swagger-ui",
            "solved": false
        },
        {
            "id": 2,
            "requesterEmail": "cgaucho2@ucsb.edu",
            "teamId": "f23-6pm-3",
            "tableOrBreakoutRoom": "9",
            "requestTime": "2023-10-17T14:15:00",
            "explanation": "Dokku problems",
            "solved": false
        },
        {
            "id": 3,
            "requesterEmail": "cgaucho3@ucsb.edu",
            "teamId": "f23-7pm-4",
            "tableOrBreakoutRoom": "5",
            "requestTime": "2023-11-02T15:00:00",
            "explanation": "Merge conflict",
            "solved": false
        }
    ]
};


export { helpRequestsFixtures };