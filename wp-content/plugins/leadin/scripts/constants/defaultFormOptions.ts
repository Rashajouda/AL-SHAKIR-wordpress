import { __ } from '@wordpress/i18n';

const REGISTRATION_FORM = 'REGISTRATION_FORM';
const CONTACT_US_FORM = 'CONTACT_US_FORM';
const NEWSLETTER_FORM = 'NEWSLETTER_FORM';
const SUPPORT_FORM = 'SUPPORT_FORM';
const EVENT_FORM = 'EVENT_FORM';

export type FormType =
  | typeof REGISTRATION_FORM
  | typeof CONTACT_US_FORM
  | typeof NEWSLETTER_FORM
  | typeof SUPPORT_FORM
  | typeof EVENT_FORM;

export const DEFAULT_OPTIONS = {
  label: __('Templates', 'leadin'),
  options: [
    { label: __('Registration Form', 'leadin'), value: REGISTRATION_FORM },
    { label: __('Contact us Form', 'leadin'), value: CONTACT_US_FORM },
    { label: __('Newsletter sign-up Form', 'leadin'), value: NEWSLETTER_FORM },
    { label: __('Support Form', 'leadin'), value: SUPPORT_FORM },
    { label: __('Event Registration Form', 'leadin'), value: EVENT_FORM },
  ],
};

export function isDefaultForm(value: FormType) {
  return (
    value === REGISTRATION_FORM ||
    value === CONTACT_US_FORM ||
    value === NEWSLETTER_FORM ||
    value === SUPPORT_FORM ||
    value === EVENT_FORM
  );
}

const defaultProps = {
  action: '',
  method: 'POST',
  cssClass: 'hs-form stacked',
  redirect: '',
  submitText: 'Submit',
  followUpId: '',
  notifyRecipients: '',
  leadNurturingCampaignId: '',
  performableHtml: '',
  migratedFrom: '',
  ignoreCurrentValues: false,
  metaData: [
    { name: 'lang', value: 'en' },
    { name: 'embedType', value: 'REGULAR' },
  ],
  deletable: true,
  cloneable: true,
  captchaEnabled: false,
  inlineMessage: 'Thanks for submitting the form.',
  tmsId: '',
  campaignGuid: '',
  formType: 'HUBSPOT',
  editable: true,
  themeName: 'canvas',
  parentId: 0,
  isPublished: true,
  style:
    '{"fontFamily":"arial, helvetica, sans-serif","backgroundWidth":"100%","labelTextColor":"#33475b","linkColor":"#0000EE","clickedLinkColor":"#551A8B","labelTextSize":"13px","helpTextColor":"#7C98B6","helpTextSize":"11px","legalConsentTextColor":"#33475b","legalConsentTextSize":"14px","thankYouTextColor":"#33475b","thankYouTextSize":"16px","submitColor":"#ff7a59","submitAlignment":"left","submitFontColor":"#ffffff","submitSize":"12px","paginationProgressColor":"#598aff","paginationProgressTextColor":"#33475b","paginationProgressShow":true,"paginationProgressTransition":"fade","paginationProgressTheme":"default","paginationContentUseScroll":false,"paginationContentScrollHeight":"100%"}',
};

const emailFieldDef = {
  name: 'email',
  label: 'Email',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const firsNameFieldDef = {
  name: 'firstname',
  label: 'First Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const lastNameFieldDef = {
  name: 'lastname',
  label: 'Last Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const messageFieldDef = {
  name: 'message',
  label: 'Message',
  type: 'string',
  fieldType: 'textarea',
  description: '',
  groupName: 'contact_activity',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const phoneNumberFieldDef = {
  name: 'phone',
  label: 'Phone Number',
  type: 'string',
  fieldType: 'phonenumber',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const ticketNameFieldDef = {
  name: 'subject',
  label: 'Ticket name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'ticketinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'TICKET',
  metaData: [],
  objectTypeId: '0-5',
};

const tickedDescFieldDef = {
  name: 'content',
  label: 'Ticket description',
  type: 'string',
  fieldType: 'textarea',
  description: '',
  groupName: 'ticketinformation',
  displayOrder: -1,
  required: true,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'TICKET',
  metaData: [],
  objectTypeId: '0-5',
};

const companyNameFieldDef = {
  name: 'company',
  label: 'Company Name',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const jobTitleFieldDef = {
  name: 'jobtitle',
  label: 'Job Title',
  type: 'string',
  fieldType: 'text',
  description: '',
  groupName: 'contactinformation',
  displayOrder: -1,
  required: false,
  selectedOptions: [],
  options: [],
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
  enabled: true,
  hidden: false,
  defaultValue: '',
  isSmartField: false,
  unselectedLabel: '',
  placeholder: '',
  dependentFieldFilters: [],
  labelHidden: false,
  propertyObjectType: 'CONTACT',
  metaData: [],
  objectTypeId: '0-1',
};

const FORMS_TYPES = {
  [REGISTRATION_FORM]: {
    name: 'New registration form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [phoneNumberFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
    ],
  },
  [CONTACT_US_FORM]: {
    name: 'New contact us form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [messageFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
    ],
  },
  [NEWSLETTER_FORM]: {
    name: 'New newsletter sign-up form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
    ],
  },
  [SUPPORT_FORM]: {
    name: 'New support form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [ticketNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [tickedDescFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
    ],
  },
  [EVENT_FORM]: {
    name: 'New event registration form',
    formFieldGroups: [
      {
        fields: [companyNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
      {
        fields: [jobTitleFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT' },
        isPageBreak: false,
      },
    ],
  },
};

export function getFormDef(type: FormType) {
  const { locale = 'en-us' } = Intl.DateTimeFormat().resolvedOptions();
  const today = new Date();
  const selectedForm = FORMS_TYPES[type];
  return {
    ...defaultProps,
    ...selectedForm,
    name: `${selectedForm.name} (${today.toLocaleDateString(locale, {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })}) `,
  };
}

export type IFormTypeDefinition = ReturnType<typeof getFormDef>;
