import dva from 'dva';
import './assets/css/reset.css';
// 1. Initialize
const app = dva({
    onError(e, dispatch) { //统一处理异常的位置
        console.log(e.message);
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/indexPage').default);
app.model(require('./models/homePage').default);


// 4. Router
app.router(require('./router').default);


// 5. Start
app.start('#root');
