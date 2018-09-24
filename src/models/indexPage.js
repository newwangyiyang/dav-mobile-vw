import * as indexPageService from "../services/indexPage";

export default {
    namespace: 'indexPage',
    state: {
        title: '首页',
        list: []
    },
    reducers: {
        initList(state, {payload: data}) {
            state.list = data;
            return {...state};
        },
        deleteListItem(state, {payload: id}) {
            state.list = state.list.filter(v => v.id !== id);
            return {...state};
        }
    },
    effects: {
        *getList(action, {put, call}) {
            const data = yield call(indexPageService.getList);
            yield put({type: 'initList', payload: data});
        }
    }
};