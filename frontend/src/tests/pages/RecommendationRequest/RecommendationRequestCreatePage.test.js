<<<<<<< HEAD
import { render, waitFor, fireEvent, screen } from "@testing-library/react";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> 2a1fbdd (sg - #30 - added placeholder pages for recommendation requests + tests + add pages to App and AppNavBar)
import RecommendationRequestCreatePage from "main/pages/RecommendationRequest/RecommendationRequestCreatePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

<<<<<<< HEAD
const mockToast = jest.fn();
jest.mock('react-toastify', () => {
    const originalModule = jest.requireActual('react-toastify');
    return {
        __esModule: true,
        ...originalModule,
        toast: (x) => mockToast(x)
    };
});

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        Navigate: (x) => { mockNavigate(x); return null; }
    };
});

describe("RecommendationRequestCreatePage tests", () => {

    const axiosMock =new AxiosMockAdapter(axios);

    beforeEach(() => {
=======
describe("RecommendationRequestCreatePage tests", () => {

    const axiosMock = new AxiosMockAdapter(axios);

    const setupUserOnly = () => {
>>>>>>> 2a1fbdd (sg - #30 - added placeholder pages for recommendation requests + tests + add pages to App and AppNavBar)
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
<<<<<<< HEAD
    });

    test("renders without crashing", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationRequestCreatePage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

    test("when you fill in the form and hit submit, it makes a request to the backend", async () => {

        const queryClient = new QueryClient();
        const recommendationRequest = {
            id: 17,
            requesterEmail: "student1@email.com",
            professorEmail: "professor1@email.com",
            explanation: "for grad school",
            dateRequested: "2022-02-02T00:00",
            dateNeeded: "2022-02-02T00:00",
            done: "false"
        };

        axiosMock.onPost("/api/recommendationrequests/post").reply( 202, recommendationRequest );

=======
    };

    const queryClient = new QueryClient();
    test("Renders expected content", () => {
        // arrange

        setupUserOnly();
       
        // act
>>>>>>> 2a1fbdd (sg - #30 - added placeholder pages for recommendation requests + tests + add pages to App and AppNavBar)
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationRequestCreatePage />
                </MemoryRouter>
            </QueryClientProvider>
        );

<<<<<<< HEAD
        await waitFor(() => {
            expect(screen.getByTestId("RecommendationRequestForm-requesterEmail")).toBeInTheDocument();
        });

        const requesterEmailField = screen.getByTestId("RecommendationRequestForm-requesterEmail");
        const professorEmailField = screen.getByTestId("RecommendationRequestForm-professorEmail");
        const explanationField = screen.getByTestId("RecommendationRequestForm-explanation");
        const dateRequestedField = screen.getByTestId("RecommendationRequestForm-dateRequested");
        const dateNeededField = screen.getByTestId("RecommendationRequestForm-dateNeeded");
        const doneField = screen.getByTestId("RecommendationRequestForm-done");
        const submitButton = screen.getByTestId("RecommendationRequestForm-submit");

        fireEvent.change(requesterEmailField, { target: { value: 'student1@email.com' } });
        fireEvent.change(professorEmailField, { target: { value: 'professor1@email.com' } });
        fireEvent.change(explanationField, { target: { value: 'for grad school' } });
        fireEvent.change(dateRequestedField, { target: { value: '2022-02-02T00:00' } });
        fireEvent.change(dateNeededField, { target: { value: '2022-02-02T00:00' } });
        fireEvent.change(doneField, { target: { value: false } });

        expect(submitButton).toBeInTheDocument();

        fireEvent.click(submitButton);

        await waitFor(() => expect(axiosMock.history.post.length).toBe(1));

        expect(axiosMock.history.post[0].params).toEqual(
            {
            "requesterEmail": "student1@email.com",
            "professorEmail": "professor1@email.com",
            "explanation": "for grad school",
            "dateRequested": "2022-02-02T00:00",
            "dateNeeded": "2022-02-02T00:00",
            "done": "false"
        });

        expect(mockToast).toBeCalledWith("New recommendationRequest Created - id: 17 requester email: student1@email.com");
        expect(mockNavigate).toBeCalledWith({ "to": "/recommendationrequests" });
    });


=======
        // assert
        expect(screen.getByText("Create page not yet implemented")).toBeInTheDocument();
    });

>>>>>>> 2a1fbdd (sg - #30 - added placeholder pages for recommendation requests + tests + add pages to App and AppNavBar)
});


