import AppDispatcher from '../dispatcher/AppDispatcher.js';

class AppActions {

    submitArticle(data) {
        console.log('action submit');
        AppDispatcher.dispatch({
            actionType: 'SUBMIT_ARTICLE',
            value: data
        });

        AppDispatcher.dispatch({
            actionType: 'APPROVE_ARTICLE',
            value: data
        });
    }

    removeArticle(key)
    {
        console.log('action remove');
         AppDispatcher.dispatch({
            actionType: 'REMOVE_ARTICLE',
            value: key
        });
    }
}

export default new AppActions();