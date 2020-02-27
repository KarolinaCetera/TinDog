import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './DogForm.scss';
import * as Yup from 'yup';

const DogForm = () => {

    return (
        <Formik
            initialValues = {{ name: '', picture: '', age: 1, health: 'healthy', children: 'yes', otherPets: 'yes', food: 'normal diet', cleanness: 'totally trained', activity: 'low', 'vaccination': 'yes', character: 'shy' }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .required('Required'),
                picture: Yup.string()
                    .required('Required'),
                age: Yup.number()
                    .moreThan(0, 'Insert digit higher than 0')
            })}

            onSubmit={(values, {setSubmitting, resetForm}, initialValues) => {
                let {name, picture, age, health, children, otherPets, food, cleanness, activity, character} = values;
                const dog = {
                    name,
                    picture,
                    age,
                    features: [
                        {
                            type: 'Health',
                            value: health
                        },
                        {
                            type: 'Children',
                            value: children
                        },
                        {
                            type: 'Other pets',
                            value: otherPets
                        },
                        {
                            type: 'Food',
                            value: food
                        },
                        {
                            type: 'Cleanness',
                            value: cleanness
                        },
                        {
                            type: 'Activity',
                            value: activity
                        },
                        {
                            type: 'Character',
                            value: character
                        }
                    ]
                };
                fetch('https://tin-dog.firebaseio.com/dogs.json', {
                    method: "POST",
                    body: JSON.stringify(dog),
                    headers: {
                        "Content-Type": "application/json"
                    }
                    })
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        } else {
                            throw new Error('Błąd sieci!')
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });

                setTimeout(() => {
                    setSubmitting(false);
                    resetForm(initialValues)
                    alert('You just added dog!');
                }, 400);
                }}>
            <Form className="form">
                <div className="form-part">
                    <label htmlFor="name">Dog Name</label>
                    <Field className="form-input" name="name" type="text" />
                    <h3 className="error"><ErrorMessage name="name" /></h3>
                </div>
                <div className="form-part">
                    <label htmlFor="picture">Dog Picture (URL)</label>
                    <Field className="form-input" name="picture" type="text" />
                    <h3 className="error"><ErrorMessage name="picture" /></h3>
                </div>
                <div className="form-part">
                    <label htmlFor="age">Age</label>
                    <Field className="form-input number" name="age" type="number" />
                    <h3 className="error"><ErrorMessage name="age" /></h3>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.health">Health condition:</label>
                    <Field name="feature.health" as="select" className="form-select">
                        <option value="healthy">Healthy</option>
                        <option value="require special treatment">Require special treatment</option>
                        <option value="require meds">Reqiure meds</option>
                        <option value="terminally ill">Terminally ill</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.children">Accepts children:</label>
                    <Field name="feature.children" as="select" className="form-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.otherPets">Accepts other pets:</label>
                    <Field name="feature.otherPets" as="select" className="form-select">
                        <option className="form-option" value="yes">Yes</option>
                        <option className="form-option" value="no">No</option>
                        <option className="form-option" value="only cats">Only cats</option>
                        <option className="form-option" value="only dogs">Only dogs</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.food">Nutrition rules:</label>
                    <Field name="feature.food" as="select" className="form-select">
                        <option className="form-option" value="normal diet">Normal diet</option>
                        <option className="form-option" value="special diet">Special diet</option>
                        <option className="form-option" value="require special diet">Require special diet</option>
                        <option className="form-option" value="require low-fat diet">Require low-fat diet</option>
                        <option className="form-option" value="require low-carb diet">Require low-carb diet</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.cleanness">Cleanness train:</label>
                    <Field name="feature.cleanness" as="select" className="form-select">
                        <option value="totally trained">Totally trained</option>
                        <option value="require training">Require training</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.activity">Activity:</label>
                    <Field name="feature.activity" as="select" className="form-select">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.vaccination">Vaccination:</label>
                    <Field name="feature.vaccination" as="select" className="form-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Field>
                </div>
                <div className="form-part">
                    <label htmlFor="feature.character">Character:</label>
                    <Field name="feature.character" as="select" className="form-select">
                        <option value="shy">Shy</option>
                        <option value="nervous">Nervous</option>
                        <option value="happy">Happy</option>
                        <option value="calm">Calm</option>
                        <option value="enthusiastic">Enthusiastic</option>
                    </Field>
                </div>
                <button type="submit" className="form-submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default DogForm;
