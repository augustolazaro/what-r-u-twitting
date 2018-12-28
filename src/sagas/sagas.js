import { call, put, takeLatest } from 'redux-saga/effects'

import {
  setUserTimelineFailure,
  setUserTimelineSuccess,
  TIMELINE,
} from '../reducers/reducers'

const requestUserTimelineSaga = function* requestUserTimelineSaga(action) {
  // const { screenName } = action

  const uri = 'http://localhost:4000/'
  const options = {
    method: 'GET',
    headers: {},
    json: true,
    mode: 'cors',
  }

  try {
    const result = yield call(fetch, uri, options)
    const data = yield result.json()

    yield put(setUserTimelineSuccess(data))
  } catch (err) {
    yield put(setUserTimelineFailure(err))
  }
}

export default function* () {
  yield takeLatest(TIMELINE.REQUEST, requestUserTimelineSaga)
}
