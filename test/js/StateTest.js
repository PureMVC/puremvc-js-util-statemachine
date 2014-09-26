QUnit.module("State Test");

QUnit.test("Test Constructors", function(assert) {
    var state = new puremvc.statemachine.State("state1");
    assert.ok(state, "Expecting $state to be defined");
    assert.ok(state instanceof puremvc.statemachine.State, "state instanceof puremvc.statemachine.State");
    assert.equal(state.name, "state1", "Expecting state.name to be 'state1'");
    assert.equal(state.entering, null, "Expecting state.entering to be null");
    assert.equal(state.exiting, null, "Expecting state.exiting to be null");
    assert.equal(state.changed, null, "Expecting state.changed to be null");
    assert.ok(state.transitions, "Expecting state.transitions to be ok");
    
    var state = new puremvc.statemachine.State("state1", "entering", "exiting", "changed");
    assert.ok(state, "Expecting $state to be defined");
    assert.equal(state.name, "state1", "Expecting state.name to be 'state1'");
    assert.equal(state.entering, "entering", "Expecting state.entering to be null");
    assert.equal(state.exiting, "exiting", "Expecting state.exiting to be null");
    assert.equal(state.changed, "changed", "Expecting state.changed to be null");
    assert.ok(state.transitions, "Expecting state.transitions to be ok");
});

QUnit.test("Test Methods", function(assert) {
    var state = new puremvc.statemachine.State("state1");
    assert.equal(typeof state.defineTrans, "function", "defineTrans");
    assert.equal(typeof state.removeTrans, "function", "defineTrans");
    assert.equal(typeof state.getTarget, "function", "defineTrans");
});

QUnit.test("Test DefineTrans", function(assert) {
    var state = new puremvc.statemachine.State("state1");
    state.defineTrans("action", "target");
    assert.equal(state.transitions["action"], "target", "Expecting state.transitions['action'] to be 'target'");
    
    //redefining if it still exists
    state.defineTrans("action", "target");
    assert.equal(state.transitions["action"], "target", "Expecting state.transitions['action'] to be 'target'");
});

QUnit.test("Test RemoveTrans", function(assert) {
    var state = new puremvc.statemachine.State("state1");
    state.defineTrans("action", "target");
    assert.equal(state.transitions["action"], "target", "Expecting state.transitions['action'] to be 'target'");
    state.removeTrans("action");
    assert.equal(state.transitions["action"], null, "Expecting state.transitions['action'] to be null");
    
    //test removal of non existing action does not crash
    state.removeTrans("action1");
    assert.ok(true, "Expecting removal not to crash");
});

QUnit.test("Test GetTarget", function(assert) {
    var state = new puremvc.statemachine.State("state1");
    state.defineTrans("action", "target");
    var target = state.getTarget("action");
    assert.equal(target, "target", "Expecting target to be 'target'");
    
    target = state.getTarget("action1");
    assert.ok(target === null, "Expecting defined target to be null")
});