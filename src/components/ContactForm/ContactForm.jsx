import { Formik, Field } from "formik";
import { StyledForm, ButtomStyle } from "./StyledForm";
import { nanoid } from "nanoid";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

export const ContactForm = ({ onAdd }) => {
    
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
                id: '',
            }}
            onSubmit={(values, { resetForm }) => {
                onAdd({ ...values, id: nanoid() });
                resetForm();
            }}
            validationSchema={schema}
        >
            <StyledForm>
                <label>Name</label>
                <Field
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>Number</label>
                <Field
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <ButtomStyle type="submit">Add contact</ButtomStyle>
            </StyledForm>
        </Formik>
    );
};