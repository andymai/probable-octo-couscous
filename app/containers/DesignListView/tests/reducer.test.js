import { fromJS } from 'immutable';
import designListViewReducer from '../reducer';

describe('designListViewReducer', () => {
  it('returns the initial state', () => {
    expect(designListViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
