import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import ArticlesForm from "main/components/Articles/ArticlesForm";
import { BrowserRouter as Router } from "react-router-dom";
import { articlesFixtures } from "fixtures/articlesFixtures";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));


describe("ArticlesForm tests", () => {

    test("renders correctly", async () => {

        render(
            <Router  >
                <ArticlesForm />
            </Router>
        );
        await screen.findByText(/Title/);
        await screen.findByText(/URL/);
        await screen.findByText(/Explanation/);
        await screen.findByText(/Email/);
        await screen.findByText(/Date Added/);
        await screen.findByText(/Create/);
    });


    test("renders correctly when passing in an Article", async () => {

        render(
            <Router  >
                <ArticlesForm initialContents={articlesFixtures.oneArticle} />
            </Router>
        );
        await screen.findByTestId(/ArticlesForm-id/);
        expect(screen.getByText(/Id/)).toBeInTheDocument();
        expect(screen.getByTestId(/ArticlesForm-id/)).toHaveValue("1");
    });


    describe("Correct error messages on bad inputs for email", () => {
        test("Generic bad-input", async () => {

            render(
                <Router  >
                    <ArticlesForm />
                </Router>
            );
            await screen.findByTestId("ArticlesForm-dateAdded");
            const emailField = screen.getByTestId("ArticlesForm-email");
            const submitButton = screen.getByTestId("ArticlesForm-submit");

            fireEvent.change(emailField, { target: { value: 'bad-input' } });
            fireEvent.click(submitButton);

            await screen.findByText(/Email must be a valid email address/);
        });

        test("Bad domain name", async () => {

            render(
                <Router  >
                    <ArticlesForm />
                </Router>
            );
            await screen.findByTestId("ArticlesForm-dateAdded");
            const emailField = screen.getByTestId("ArticlesForm-email");
            const submitButton = screen.getByTestId("ArticlesForm-submit");

            fireEvent.change(emailField, { target: { value: 'hi@email.notadomain' } });
            fireEvent.click(submitButton);

            await screen.findByText(/Email must be a valid email address/);
        });


    });

    describe("Correct Error messages on bad input for URL", () => {
        test("Generic bad input", async () => {

            render(
                <Router  >
                    <ArticlesForm />
                </Router>
            );
            await screen.findByTestId("ArticlesForm-dateAdded");
            const urlField = screen.getByTestId("ArticlesForm-url");
            const submitButton = screen.getByTestId("ArticlesForm-submit");

            fireEvent.change(urlField, { target: { value: 'bad-input' } });
            fireEvent.click(submitButton);

            await screen.findByText(/URL must be a valid web address/);
        });

        test("Bad domain name", async () => {

            render(
                <Router  >
                    <ArticlesForm />
                </Router>
            );
            await screen.findByTestId("ArticlesForm-dateAdded");
            const urlField = screen.getByTestId("ArticlesForm-url");
            const submitButton = screen.getByTestId("ArticlesForm-submit");

            fireEvent.change(urlField, { target: { value: 'email.notadomain' } });
            fireEvent.click(submitButton);

            await screen.findByText(/URL must be a valid web address/);
        });
    });






    test("Correct Error messages on missing input", async () => {

        render(
            <Router  >
                <ArticlesForm />
            </Router>
        );
        await screen.findByTestId("ArticlesForm-submit");
        const submitButton = screen.getByTestId("ArticlesForm-submit");

        fireEvent.click(submitButton);

        await screen.findByText(/Title is required./);
        expect(screen.getByText(/URL is required./)).toBeInTheDocument();
        expect(screen.getByText(/Email is required./)).toBeInTheDocument();
        expect(screen.getByText(/Explanation is required./)).toBeInTheDocument();
        expect(screen.getByText(/Date Added is required./)).toBeInTheDocument();

    });

    test("No Error messsages on good input", async () => {

        const mockSubmitAction = jest.fn();


        render(
            <Router  >
                <ArticlesForm submitAction={mockSubmitAction} />
            </Router>
        );
        await screen.findByTestId("ArticlesForm-title");


        const titleField = screen.getByTestId("ArticlesForm-title")
        const urlField = screen.getByTestId("ArticlesForm-url");
        const emailField = screen.getByTestId("ArticlesForm-email");
        const explanationField = screen.getByTestId("ArticlesForm-explanation");
        const dateAddedField = screen.getByTestId("ArticlesForm-dateAdded");
        const submitButton = screen.getByTestId("ArticlesForm-submit");

        fireEvent.change(titleField, { target: { value: 'event1' } });
        fireEvent.change(urlField, { target: { value: 'nytimes.com' } });
        fireEvent.change(emailField, { target: { value: 'author@nytimes.com' } });
        fireEvent.change(explanationField, { target: { value: 'example' } });
        fireEvent.change(dateAddedField, { target: { value: '2022-01-02T12:00:00' } });
        fireEvent.click(submitButton);

        await waitFor(() => expect(mockSubmitAction).toHaveBeenCalled());

        expect(screen.queryByText(/Email must be a valid email address/)).not.toBeInTheDocument();
        expect(screen.queryByText(/URL must be a valid web address/)).not.toBeInTheDocument();

    });


    test("that navigate(-1) is called when Cancel is clicked", async () => {

        render(
            <Router  >
                <ArticlesForm />
            </Router>
        );
        await screen.findByTestId("ArticlesForm-cancel");
        const cancelButton = screen.getByTestId("ArticlesForm-cancel");

        fireEvent.click(cancelButton);

        await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith(-1));

    });

});


