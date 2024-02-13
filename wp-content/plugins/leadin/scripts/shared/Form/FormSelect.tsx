import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import {
  monitorFormCreatedFromTemplate,
  monitorFormCreationFailed,
} from '../../api/hubspotPluginApi';
import {
  createForm,
  fetchForms as searchFormsOAuth,
  IForm,
} from '../../api/hubspotApiClient';
import useForm from './useForm';
import FormSelector from './FormSelector';
import LoadingBlock from '../Common/LoadingBlock';
import { __ } from '@wordpress/i18n';
import {
  DEFAULT_OPTIONS,
  FormType,
  getFormDef,
  isDefaultForm,
} from '../../constants/defaultFormOptions';
import ErrorHandler from '../Common/ErrorHandler';

const mapForm = (form: IForm) => ({
  label: form.name,
  value: form.guid,
});

interface IFormSelectProps {
  formId: string;
  formName: string;
  handleChange: Function;
  origin: 'gutenberg' | 'elementor';
}

interface IFormError {
  status: number;
}

export default function FormSelect({
  formId,
  formName,
  handleChange,
  origin = 'gutenberg',
}: IFormSelectProps) {
  const { form, loading, setLoading } = useForm(formId, formName);
  const [searchformError, setSearchFormError] = useState<null | IFormError>(
    null
  );

  const loadOptions = debounce(
    (search: string, callback: Function) => {
      searchFormsOAuth(search)
        .then(forms => callback([...forms.map(mapForm), DEFAULT_OPTIONS]))
        .catch(error => setSearchFormError(error));
    },
    300,
    { trailing: true }
  );

  const value = form ? mapForm(form) : null;

  const handleLocalChange = (option: { value: FormType }) => {
    if (isDefaultForm(option.value)) {
      setLoading(true);
      monitorFormCreatedFromTemplate(option.value, origin);
      createForm(getFormDef(option.value))
        .then(({ guid, name }) => handleChange({ value: guid, label: name }))
        .catch(error => {
          setSearchFormError(error);
          monitorFormCreationFailed({ ...error, type: option.value }, origin);
        })
        .finally(() => setLoading(false));
    } else {
      handleChange(option);
    }
  };

  const formApiError = searchformError;

  return loading ? (
    <LoadingBlock />
  ) : !formApiError ? (
    <FormSelector
      loadOptions={loadOptions}
      onChange={(option: { value: FormType }) => handleLocalChange(option)}
      value={value}
    />
  ) : (
    <ErrorHandler
      status={formApiError.status}
      resetErrorState={() => setSearchFormError(null)}
      errorInfo={{
        header: __('There was a problem retrieving your forms', 'leadin'),
        message: __(
          'Please refresh your forms or try again in a few minutes.',
          'leadin'
        ),
        action: __('Refresh forms', 'leadin'),
      }}
    />
  );
}
