import { IFormTypeDefinition } from '../constants/defaultFormOptions';
import { makeProxyRequest } from './wordpressApiClient';

const FORMS_PATH = `/forms/v2/forms`;

export interface IForm {
  guid: string;
  name: string;
}

interface IFormSearchQueryParam {
  offset: number;
  limit: number;
  formTypes: string[];
  name__contains?: string;
}

export function fetchForms(searchQuery = '', offset = 0, limit = 10) {
  const queryParams: IFormSearchQueryParam = {
    offset,
    limit,
    formTypes: ['HUBSPOT'],
  };

  if (searchQuery) {
    queryParams.name__contains = searchQuery;
  }

  return makeProxyRequest('get', FORMS_PATH, {}, queryParams).then(
    (forms: IForm[]) => {
      const filteredForms: IForm[] = [];

      forms.forEach(currentForm => {
        const { guid, name } = currentForm;
        filteredForms.push({ name, guid });
      });

      return filteredForms;
    }
  );
}

export function createForm(payload: IFormTypeDefinition) {
  return makeProxyRequest('post', FORMS_PATH, payload);
}
