import { Button, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function RecommendationRequestForm({ initialContents, submitAction, buttonLabel = "Create" }) {

    // Stryker disable all
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm(
        { defaultValues: initialContents || {}, }
    );
    // Stryker restore all

    const navigate = useNavigate();

    // For explanation, see: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
    // Note that even this complex regex may still need some tweaks

    // Stryker disable next-line Regex
    const isodate_regex = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/i;

    // Stryker disable next-line all
    const email_ragex = /[\w.]+@([\w]+\.)+[\w-]{2,4}/;
    const bool_ragex = /(true|false)/i;

    return (

        <Form onSubmit={handleSubmit(submitAction)}>


            <Row>

                {initialContents && (
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="id">Id</Form.Label>
                            <Form.Control
                                data-testid="RecommendationRequestForm-id"
                                id="id"
                                type="text"
                                {...register("id")}
                                value={initialContents.id}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                )}

                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="requesterEmail">Requester Email</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-requesterEmail"
                            id="requesterEmail"
                            type="text"
                            isInvalid={Boolean(errors.requesterEmail)}
                            {...register("requesterEmail", { required: true, pattern: email_ragex })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.requesterEmail && 'Requester Email is required. '}
                            {errors.requesterEmail?.type === 'pattern' && 'Requester Email must in the form of an email, e.g. sample@email.com'}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="professorEmail">Professor Email</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-professorEmail"
                            id="professorEmail"
                            type="text"
                            isInvalid={Boolean(errors.professorEmail)}
                            {...register("professorEmail", { required: true, pattern: email_ragex })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.professorEmail && 'Professor Email is required. '}
                            {errors.professorEmail?.type === 'pattern' && 'Professor Email must in the form of an email, e.g. sample@email.com'}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="explanation">Explanation</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-explanation"
                            id="explanation"
                            type="text"
                            isInvalid={Boolean(errors.explanation)}
                            {...register("explanation", {
                                required: "Explanation is required."
                            })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.explanation?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="dateRequested">Date Requested (iso format)</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-dateRequested"
                            id="dateRequested"
                            type="datetime-local"
                            isInvalid={Boolean(errors.dateRequested)}
                            {...register("dateRequested", { required: true, pattern: isodate_regex })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dateRequested && 'Request Date is required. '}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="dateNeeded">Date Needed (iso format)</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-dateNeeded"
                            id="dateNeeded"
                            type="datetime-local"
                            isInvalid={Boolean(errors.dateNeeded)}
                            {...register("dateNeeded", { required: true, pattern: isodate_regex })}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.dateNeeded && 'Needed Date is required. '}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="done">Done</Form.Label>
                        <Form.Control
                            data-testid="RecommendationRequestForm-done"
                            id="done"
                            type="text"
                            isInvalid={Boolean(errors.done)}
                            {...register("done", { required: true,  pattern: bool_ragex})}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.done && 'Done is required.'}
                            {errors.done?.type === 'pattern' && 'Done must be true or false'}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col> 
            </Row>

            <Row>
                <Col>
                    <Button
                        type="submit"
                        data-testid="RecommendationRequestForm-submit"
                    >
                        {buttonLabel}
                    </Button>
                    <Button
                        variant="Secondary"
                        onClick={() => navigate(-1)}
                        data-testid="RecommendationRequestForm-cancel"
                    >
                        Cancel
                    </Button>
                </Col>
            </Row>
        </Form>

    )
}

export default RecommendationRequestForm;
