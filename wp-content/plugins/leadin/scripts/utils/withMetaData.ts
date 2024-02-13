import { withSelect, withDispatch } from '@wordpress/data';

const applyWithSelect = withSelect((select: Function, props: any): any => {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[
      props.metaKey
    ],
  };
});

const applyWithDispatch = withDispatch(
  (dispatch: Function, props: any): any => {
    return {
      setMetaValue(value: string) {
        dispatch('core/editor').editPost({ meta: { [props.metaKey]: value } });
      },
    };
  }
);

function apply<T>(el: T): T {
  return applyWithSelect(applyWithDispatch(el));
}

export default apply;
