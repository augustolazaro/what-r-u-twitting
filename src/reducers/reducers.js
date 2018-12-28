export const TIMELINE = {
  REQUEST: 'Timeline/REQUEST',
  SUCCESS: 'Timeline/SUCCESS',
  FAILURE: 'Timeline/FAILURE',
}

const initialState = {
  tweets: [],
  error: null,
  isLoading: false,
}

export const requestUserTimeline = (screenName: string) => ({
  type: TIMELINE.REQUEST,
  screenName,
})

export const setUserTimelineSuccess = (data) => ({
  type: TIMELINE.SUCCESS,
  data,
})

export const setUserTimelineFailure = (error: string) => ({
  type: TIMELINE.FAILURE,
  error,
})

export default function(state = initialState, action) {
  switch (action.type) {
    case TIMELINE.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case TIMELINE.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    case TIMELINE.SUCCESS:
      return {
        ...state,
        tweets: action.data,
        isLoading: false,
        error: null,
      }

    default:
      return state
  }
}
