import React, { useEffect, useState, useCallback } from 'react';
import useCurrentUserFetch from './useCurrentUserFetch';
import useMeetingsFetch from './useMeetingsFetch';

interface IMeetingsContextWrapperState {
  loading: boolean;
  error: any;
  meetings: any[];
  currentUser: any;
  meetingUsers: any;
  selectedMeeting: string;
}

interface IMeetingsContext extends IMeetingsContextWrapperState {
  reload: Function;
}

interface IMeetingsContextWrapperProps {
  url: string;
}

export const MeetingsContext = React.createContext<IMeetingsContext>({
  loading: true,
  error: null,
  meetings: [],
  currentUser: null,
  meetingUsers: {},
  selectedMeeting: '',
  reload: () => {},
});

export default function MeetingsContextWrapper({
  url,
  children,
}: React.PropsWithChildren<IMeetingsContextWrapperProps>) {
  const [state, setState] = useState<IMeetingsContextWrapperState>({
    loading: true,
    error: null,
    meetings: [],
    currentUser: null,
    meetingUsers: {},
    selectedMeeting: url,
  });

  const [
    { meetings, meetingUsers },
    loadingMeetings,
    errorMeeting,
    reloadMeetings,
  ] = useMeetingsFetch();

  const [
    currentUser,
    loadingUser,
    errorUser,
    createUser,
    reloadUser,
  ] = useCurrentUserFetch();

  const reload = useCallback(() => {
    reloadUser();
    reloadMeetings();
  }, [reloadUser, reloadMeetings]);

  useEffect(() => {
    if (!state.loading && !state.error && state.meetings.length === 0) {
      createUser();
    }
  }, [state, createUser]);

  useEffect(() => {
    if (
      !state.loading &&
      !state.error &&
      state.currentUser &&
      state.meetings.length === 0
    ) {
      reloadMeetings();
    }
  }, [state, reloadMeetings]);

  useEffect(() => {
    setState(previous => ({
      ...previous,
      loading: loadingUser || loadingMeetings,
      currentUser,
      meetings,
      meetingUsers: meetingUsers.reduce((p, c) => ({ ...p, [c.id]: c }), {}),
      error: errorMeeting || errorUser,
      selectedMeeting: url,
    }));
  }, [
    loadingUser,
    loadingMeetings,
    currentUser,
    meetings,
    meetingUsers,
    errorMeeting,
    errorUser,
    url,
    setState,
  ]);

  return (
    <MeetingsContext.Provider value={{ ...state, reload }}>
      {children}
    </MeetingsContext.Provider>
  );
}
