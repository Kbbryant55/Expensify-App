import  { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE'});
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('Should generate text filter action object', () => {
    const action = setTextFilter('WATER');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'WATER'
    });
});

test('Should generate text filter action object with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});