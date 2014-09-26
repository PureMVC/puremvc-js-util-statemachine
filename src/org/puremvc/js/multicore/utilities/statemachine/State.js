/*
  PureMVC JS Utility - StateMachine
  Copyright (c) 2014 Saad Shams, Cliff Hall
  Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

/**
 * Constructor
 *
 * Defines a State.
 * @method State
 * @param {string} name id the id of the state
 * @param {string} entering an optional notification name to be sent when entering this state
 * @param {string} exiting an optional notification name to be sent when exiting this state
 * @param {string} changed an optional notification name to be sent when fully transitioned to this state
 * @return 
 */

function State(name, entering, exiting, changed) {  
    this.name = name;
    if(entering) this.entering = entering;
    if(exiting) this.exiting = exiting;
    if(changed) this.changed = changed;
    this.transitions = {};
}

/**
 * Define a transition.
 * @method defineTrans
 * @param {string} action the name of the StateMachine.ACTION Notification type.
 * @param {string} target the name of the target state to transition to.
 * @return 
 */
State.prototype.defineTrans = function(action, target) {
    if(this.getTarget(action) != null) return;
    this.transitions[action] = target;
}

/**
 * Remove a previously defined transition.
 * @method removeTrans
 * @param {string} action
 * @return 
 */
State.prototype.removeTrans = function(action) {
    delete this.transitions[action];
}

/**
 * Get the target state name for a given action.
 * @method getTarget
 * @param {string} action
 * @return State
 */
State.prototype.getTarget = function(action) {
    return this.transitions[action] ? this.transitions[action] : null;
}

// The state name
State.prototype.name = null;

// The notification to dispatch when entering the state
State.prototype.entering = null;

// The notification to dispatch when exiting the state
State.prototype.exiting = null;

// The notification to dispatch when the state has actually changed
State.prototype.changed = null;

/**
 *  Transition map of actions to target states
 */ 
State.prototype.transitions = null;