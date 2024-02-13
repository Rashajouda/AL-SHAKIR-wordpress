import { useEffect, useState } from 'react';
import { IForm } from '../../api/hubspotApiClient';
import { getForm } from '../../api/hubspotPluginApi';
import { oauth } from '../../constants/leadinConfig';

// TODO: This hook will dissapear when OAuth rolls out.
export default function useForm(id: string, name: string) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<null | IForm>(null);

  useEffect(() => {
    if (!id || oauth) {
      if (name) {
        setForm({ guid: id, name });
      } else {
        setForm(null);
      }
      setLoading(false);
    } else {
      getForm(id)
        .then((response: IForm) => {
          setForm(response);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, name, setForm]);

  return { loading, form, setLoading };
}
