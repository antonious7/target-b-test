/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  Formik, ErrorMessage, Form, Field,
} from 'formik';
import * as Yup from 'yup';
// eslint-disable-next-line import/no-extraneous-dependencies
import get from 'lodash.get';
import s from './TextInput.scss';
import TEXT_QUERY from './TEXT_INPUT.graphql';
import UPDATE_TEXT_MUTATION from './UPDATE_TEXT_INPUT.graphql';
import {
  UpdateTextMutation,
  UpdateTextMutationVariables,
  TextQuery,
  TextQueryVariables,
} from '../../../__generated__/typescript-operations';

interface InitialValuesI {
  text: string;
}
interface HandleUpdateTextI {
  id: string;
  values: InitialValuesI;
  updateTextMutation: Function;
  resetForm: Function;
}

const handleTextUpdate: Function = async ({
  id,
  values,
  updateTextMutation,
  resetForm,
}: HandleUpdateTextI) => {
  const updateTextResult: Promise<UpdateTextMutation> = await updateTextMutation({
    variables: {
      id,
      input: {
        ...values,
      },
    },
  });

  if (get(updateTextResult, 'data.text')) {
    resetForm();
  }

  return updateTextResult;
};

const TextInput: React.FunctionComponent = () => {
  const [updateTextMutation] = useMutation<UpdateTextMutation, UpdateTextMutationVariables>(
    UPDATE_TEXT_MUTATION,
  );
  const { data, loading, error } = useQuery<TextQuery, TextQueryVariables>(TEXT_QUERY);

  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;

  const initialValues: InitialValuesI = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    text: data!.text!.text,
  };

  return (
    <div className={s.TextInput}>
      <div className={s.TextInput__SubscriptionWrapper}>
        <div>
          <h2>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            industries for previewing layouts and visual mockups.
          </h2>
          <Formik
            initialValues={initialValues}
            // eslint-disable-next-line max-len
            onSubmit={async (values, { resetForm }): Promise<UpdateTextMutation> => handleTextUpdate({
              id: data?.text?.id,
              values,
              updateTextMutation,
              resetForm,
            })}
            validationSchema={Yup.object().shape({
              text: Yup.string()
                .required('You can\'t sumbit empty strings'),
            })}
          >
            <Form>
              <div className={s.TextInput__Row}>
                <label htmlFor="text">Text value</label>
                <Field
                  id="text"
                  name="text"
                  type="text"
                />
                <button type="submit" className={s.TextInput__SubmitButton}>
                  Update text
                </button>
              </div>
              <div className={s.TextInput__FieldErrorRow}>
                <ErrorMessage name="text" component="div" className={s.TextInput__FieldError} />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
