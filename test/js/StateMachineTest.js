QUnit.module("StateMachine Test");

QUnit.test("Test Constructors", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    
    assert.ok(stateMachine, "Expecting stateMachine to be defined");
    assert.ok(stateMachine instanceof puremvc.statemachine.StateMachine, "instanceof puremvc.statemachine.StateMachine");
    assert.equal(stateMachine.canceled, null, "Expecting stateMachine.canceled to be null");
    assert.equal(typeof stateMachine.states, "object", "Expecting stateMachine.states to be object");
});

QUnit.test("Test Methods", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    assert.equal(typeof stateMachine.registerState, "function", "registerState");
    assert.equal(typeof stateMachine.removeState, "function", "removeState");
    assert.equal(typeof stateMachine.transitionTo, "function", "transitionTo");
    assert.equal(typeof stateMachine.getCurrentState, "function", "getCurrentState");
});

QUnit.test("Test registerState", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    var state1 = new puremvc.statemachine.State("state1");
    stateMachine.registerState(state1);
    
    assert.equal(stateMachine.states[state1.name], state1, "state was registered");
    assert.equal(stateMachine.initial, null, "expecting stateMachine.initial to be null");
    
    //state1.registerState("state");
    //assert.ok(true, "Expecting crash");
});

QUnit.test("Test removeState", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    var state1 = new puremvc.statemachine.State("state1");
    stateMachine.registerState(state1);
    
    stateMachine.removeState(state1.name);
    assert.equal(stateMachine.states[state1.name], null, "expecting null after removeState");
    
    stateMachine.removeState(state1.name);
    assert.ok(true, "Expecting non existing state remove not to crash");
});

QUnit.test("Test getCurrentState", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    assert.equal(stateMachine.getCurrentState(), null, "Expecting current state to be null");
    
    var state1 = new puremvc.statemachine.State("state1");
    stateMachine.setCurrentState(state1);
    var currentState = stateMachine.getCurrentState();
    assert.ok(currentState, "Expecting currentState to be defined");
    assert.equal(currentState, state1, "Expecting currentState equal to state1");
});

QUnit.test("Test transitionTo", function(assert) {
    var stateMachine = new puremvc.statemachine.StateMachine();
    var state1 = new puremvc.statemachine.State();
    var facade = puremvc.Facade.getInstance("key1");
    
    stateMachine.initializeNotifier("key1");
    
    stateMachine.registerState(state1);
    stateMachine.setCurrentState(state1);
    stateMachine.transitionTo();
    assert.equal(stateMachine.getCurrentState(), state1, "Expecting getCurrentState to be state1");
    
    var state2 = new puremvc.statemachine.State("state2");
    stateMachine.registerState(state2, true);
    stateMachine.transitionTo(state2);
    assert.equal(stateMachine.getCurrentState(), state2, "Expecting getCurrentState to be state2");
});