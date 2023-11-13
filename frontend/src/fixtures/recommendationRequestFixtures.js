const recommendationRequestFixtures = {
    oneRequest: {
        "id": 1,
        "requesterEmail": "student1@email.com",
        "professorEmail": "professor1@email.com",
        "explanation": "letter for grad",
        "dateRequested": "2023-10-30T12:00:00",
        "dateNeeded": "2023-11-30T12:00:00",
        "done": false
    },
    threeRequests: [
        {
            "id": 1,
            "requesterEmail": "student2@email.com",
            "professorEmail": "professor2@email.com",
            "explanation": "letter for company",
            "dateRequested": "2023-10-30T12:00:00",
            "dateNeeded": "2023-11-30T12:00:00",
            "done": true
        },
        {
            "id": 2,
            "requesterEmail": "student3@email.com",
            "professorEmail": "professor3@email.com",
            "explanation": "letter for school",
            "dateRequested": "2023-10-30T12:00:00",
            "dateNeeded": "2023-11-30T12:00:00",
            "done": false
        },
        {
            "id": 3,
            "requesterEmail": "student4@email.com",
            "professorEmail": "professor4@email.com",
            "explanation": "letter for employeer",
            "dateRequested": "2023-10-30T12:00:00",
            "dateNeeded": "2023-11-30T12:00:00",
            "done": true
        }
    ]
};

export { recommendationRequestFixtures };