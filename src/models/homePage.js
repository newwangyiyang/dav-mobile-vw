export default {
    namespace: 'homePage',
    state: {
        title: 'Home',
        formData: {}
    },
    reducers: {
        getFormData(state, {payload: formData}) {
            state.formData = formData;
            console.log(state);
            return {...state};
        }
    },
    effects: {
        *postFormData({payload}, {select, put}) {
            yield put({type: 'getFormData', payload});
            yield select(({indexPage}) => {
                console.log(indexPage);
            });
        }
    }
};