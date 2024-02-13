import React, { useState, useEffect, Fragment } from 'react';
import { portalId } from '../../constants/leadinConfig';
import ElementorBanner from '../Common/ElementorBanner';
import { fetchForms, IForm } from '../../api/hubspotApiClient';
import UISpinner from '../../shared/UIComponents/UISpinner';
import { __ } from '@wordpress/i18n';

interface FormOption {
  label: string;
  value: string;
}

type Options = FormOption[];

const mapForm = (form: IForm) => ({
  label: form.name,
  value: form.guid,
});

interface IElementorFormSelectProps {
  formId: string;
  setAttributes: Function;
}

export default function ElementorFormSelect({
  formId,
  setAttributes,
}: IElementorFormSelectProps) {
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const [forms, setForms] = useState<Options>([]);

  useEffect(() => {
    setLoading(true);
    fetchForms('', 0, 100)
      .then(data => {
        setForms(data.map(mapForm));
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [setForms]);

  return (
    <Fragment>
      {loading ? (
        <div>
          <UISpinner />
        </div>
      ) : hasError ? (
        <ElementorBanner type="danger">
          {__(
            'Please refresh your forms or try again in a few minutes.',
            'leadin'
          )}
        </ElementorBanner>
      ) : (
        <select
          value={formId}
          onChange={event => {
            const selectedForm = forms.find(
              form => form.value === event.target.value
            );
            if (selectedForm) {
              setAttributes({
                portalId,
                formId: selectedForm.value,
                formName: selectedForm.label,
              });
            }
          }}
        >
          <option value="" disabled={true} selected={true}>
            {__('Search for a form', 'leadin')}
          </option>
          {forms.map(form => (
            <option key={form.value} value={form.value}>
              {form.label}
            </option>
          ))}
        </select>
      )}
    </Fragment>
  );
}
