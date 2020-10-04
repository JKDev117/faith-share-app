/*
    Idle Service
    this service manages when a user has gone idle (not interacting with the page).
*/

let _timeoutId;
let _idleCallback = null;
let _notIdleEvents = ['mousdown', 'mousemove', 'keypress', 'scroll', 'touchsmart'];
let _IDLE_TIME_IN_MS = 30 * 60 * 1000; //min * sec * millisec

const IdleService = {

    setIdleCallback(idleCallback) {
        /* store a callback to call when the user goes idle */
        _idleCallback = idleCallback;
    },
    /* called when a user interacts with the page */
    resetIdleTimer(ev) {
        /* remove any timeouts as the user just interacted */
        clearTimeout(_timeoutId);
        /* queue the callback to happen _IDLE_TIME_IN_MS minutes from now */
        _timeoutId = setTimeout(_idleCallback, _IDLE_TIME_IN_MS);
    },


    



}