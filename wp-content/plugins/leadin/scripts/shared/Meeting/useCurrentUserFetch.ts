import { useEffect, useState } from 'react';
import { createMeetingUser, getMeetingUser } from '../../api/hubspotPluginApi';
import { getOrCreateMeetingUser } from '../../api/wordpressMeetingsApiClient';
import { useThirdPartyCookiesEnabled } from '../../utils/useThirdPartyCookiesEnabled';

let user: any = null;

const defaultUserPayload = {
  meetingsUserBlob: {
    calendarSettings: {
      provider: 'GOOGLE',
      email: null,
      calendarAccountId: null,
      ewsUri: null,
      username: null,
    },
    brandSettings: null,
  },
  namespace: null,
};

export default function useCurrentUserFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);
  const [creating, setCreating] = useState(false);
  const cookiesEnabled = useThirdPartyCookiesEnabled();

  const createUser = () => {
    if (!user) {
      setCreating(true);
    }
  };

  const reload = () => {
    user = null;
    setLoading(true);
    setError(null);
  };

  useEffect(() => {
    if (loading && !user) {
      const loadMeetingUser = () =>
        !cookiesEnabled
          ? getOrCreateMeetingUser(defaultUserPayload)
          : getMeetingUser();

      loadMeetingUser()
        .then((data: any) => {
          user = data;
        })
        .catch((e: Error) => {
          if (e && !/status 404/gi.test(e.message)) {
            setError(e);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [loading, cookiesEnabled, setError]);

  useEffect(() => {
    if (creating && !user) {
      createMeetingUser(defaultUserPayload)
        .then((data: any) => {
          user = data;
        })
        .catch((e: Error) => setError(e))
        .finally(() => {
          setCreating(false);
        });
    } else {
      setCreating(false);
    }
  }, [creating, setError]);

  return [user, loading || creating, error, createUser, reload];
}
