var fsm0 = {
    "@initial": ""
};

var fsm1 = {
    "@initial": "initial_state",
    "state": [
        {
            "@name": "state11"
        }
    ]
};

var fsm2 = {
    "@initial": "initial_state",
    "state": [
        {
            "@name": "state21",
            "@entering": "entering_state21",
            "transition": [
                {
                    "@action": "transition211_action",
                    "@target": "state22"
                },
                {
                    "@action": "transition212_action",
                    "@target": "state23"
                }
            ]
        },
        {
            "@name": "state22",
            "@exiting": "exiting_state22",
            "transition": [
                {
                    "@action": "transition221_action",
                    "@target": "state23"
                }
            ]
        },
        {
            "@name": "state23",
            "@changed": "changed_state23",
            "transition": [
                {
                    "@action": "transition231_action",
                    "@target": "state21"
                }
            ]
        }
    ]
};

var fsm3 = {
    "@initial": "state21",
    "state": [
        {
            "@name": "state21",
            "@entering": "entering_state21",
            "transition": [
                {
                    "@action": "transition211_action",
                    "@target": "state22"
                },
                {
                    "@action": "transition212_action",
                    "@target": "state23"
                }
            ]
        },
        {
            "@name": "state22",
            "@exiting": "exiting_state22",
            "transition": [
                {
                    "@action": "transition221_action",
                    "@target": "state23"
                }
            ]
        },
        {
            "@name": "state23",
            "@changed": "changed_state23",
            "transition": [
                {
                    "@action": "transition231_action",
                    "@target": "state21"
                }
            ]
        },
        {
            "@name": "state24",
            "transition": [
                {
                    "@action": "abc",
                    "@target": "nowwhere"
                }
            ]
        },
    ]
};
        
var fsm4 = {
           "@initial": "closed",
           "state": [
              {
                 "@name": "closed",
                 "transition": [
                    {
                       "@action": "open",
                       "@target": "opened"
                    },
                    {
                       "@action": "lock",
                       "@target": "locked"
                    }
                 ]
              },
              {
                 "@name": "locked",
                 "transition": [
                    {
                        "@action": "unlock",
                        "@target": "closed"
                    }
                 ]
              },
              {
                 "@name": "opened",
                 "transition": [
                    {
                    "@action": "close",
                    "@target": "closed"
                    }
                  ]
              }
           ]
        };

var fsm5 = {
    "state": [
        {
            "@name": "closed",
            "transition": [
                {
                    "@action": "open",
                    "@target": "opened"
                }
            ]
        }
    ]
}

QUnit.module("FSMInjectorTest");

QUnit.test("Test initial", function(assert) {
    var injector = new puremvc.statemachine.FSMInjector(fsm5);
    assert.ok(true, "true");
});

QUnit.test("Test FSMInjectorTest", function(assert) {
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm0);
    assert.ok(fsm_injector, "fsm_injector is defined");
    assert.ok(fsm_injector instanceof puremvc.statemachine.FSMInjector, "instanceof FSMInjector");
    assert.ok(fsm_injector.fsm, "fsm is defined");
    assert.equal(typeof fsm_injector.fsm, "object", "fsm is object");
    
    fsm_injector = new puremvc.statemachine.FSMInjector(fsm1);
    assert.ok(fsm_injector, "fsm_injector is defined");
    assert.ok(fsm_injector instanceof puremvc.statemachine.FSMInjector, "instanceof FSMInjector");
    assert.ok(fsm_injector.fsm, "fsm is defined");
    assert.equal(typeof fsm_injector.fsm, "object", "fsm is object");
    assert.ok(fsm_injector.fsm["@initial"], "initial exists");
    assert.equal(fsm_injector.fsm["@initial"], "initial_state", "inital state is initial_state");
    
    assert.ok(fsm_injector.fsm.state, "state exists");
    assert.equal(typeof fsm_injector.fsm.state, "object", "State is array");
    assert.ok(fsm_injector.fsm.state[0], "state[0] exists");
    assert.ok(fsm_injector.fsm.state[0], "state[0] exists");
    assert.ok(fsm_injector.fsm.state[0]["@name"], "state[0]['@name'] exists");
    assert.equal(fsm_injector.fsm.state[0]["@name"], "state11", "state[0]['@name'] is state11");
    
    
    fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    assert.ok(fsm_injector, "fsm_injector is defined");
    assert.ok(fsm_injector instanceof puremvc.statemachine.FSMInjector, "instanceof FSMInjector");
    assert.ok(fsm_injector.fsm, "fsm is defined");
    assert.equal(typeof fsm_injector.fsm, "object", "fsm is object");
    assert.ok(fsm_injector.fsm["@initial"], "initial exists");
    assert.equal(fsm_injector.fsm["@initial"], "initial_state", "inital state is initial_state");
    
    assert.ok(fsm_injector.fsm.state, "state exists");
    //state 0
    var state = fsm_injector.fsm.state[0];
    assert.equal(typeof state, "object", "State is array");
    assert.ok(state, "state[0] exists");
    assert.ok(state, "state[0] exists");
    assert.ok(state["@name"], "state[0]['@name'] exists");
    assert.equal(state["@name"], "state21", "state[0]['@name'] is state11");
    
    assert.equal(state["@entering"], "entering_state21", "entering_state21");
    
    assert.ok(state.transition, "transition ok");
    assert.equal(state.transition.length, 2, "length is 2");
    
    var transition = state.transition[0];
    assert.ok(transition, "transition ok");
    assert.equal(transition['@action'], "transition211_action", "transition action transition211_action");
    assert.equal(transition['@target'], "state22", "transition target state22");
    
    transition = state.transition[1];
    assert.ok(transition, "transition ok");
    assert.equal(transition['@action'], "transition212_action", "transition action transition212_action");
    assert.equal(transition['@target'], "state23", "transition target state23");
    
    //state 1
    var state = fsm_injector.fsm.state[1];
    assert.equal(typeof state, "object", "State is array");
    assert.ok(state, "state[1] exists");
    assert.ok(state, "state[1] exists");
    assert.ok(state["@name"], "state[0]['@name'] exists");
    assert.equal(state["@name"], "state22", "state[1]['@name'] is state22");
    
    assert.equal(state["@exiting"], "exiting_state22", "exiting_state22");
    
    assert.ok(state.transition, "transition ok");
    assert.equal(state.transition.length, 1, "length is 1");
    
    var transition = state.transition[0];
    assert.ok(transition, "transition ok");
    assert.equal(transition['@action'], "transition221_action", "transition action transition221_action");
    assert.equal(transition['@target'], "state23", "transition target state23");
    
});

QUnit.test("Test testMethods", function(assert) {
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    assert.equal(typeof fsm_injector.inject, "function", "inject");
    assert.equal(typeof fsm_injector.getStates, "function", "getStates");
    assert.equal(typeof fsm_injector.createState, "function", "createState");
    assert.equal(typeof fsm_injector.isInitial, "function", "isInitial");
});

QUnit.test("testIsInitial", function(assert) {
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    var state1 = new puremvc.statemachine.State("state1");
    
    assert.equal(fsm_injector.isInitial(state1.name), false, "state1 is not initial");
    
    var state1 = new puremvc.statemachine.State("initial_state");
    assert.equal(fsm_injector.isInitial(state1.name), true, "initialstate is not initial_state");
});

QUnit.test("testCreateState", function(assert) {
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    var state = fsm_injector.createState(fsm_injector.fsm.state[0]);
    
    assert.ok(state, "state is ok");
    assert.equal(state.name, "state21", "state name is state21");
    assert.equal(state.entering, "entering_state21", "entering is entering_state21");
    assert.ok(state.transitions, "transitions ok");
    
    var transition = fsm_injector.fsm.state[0].transition[0];
    assert.equal(state.getTarget(transition['@action']), transition['@target'], "action = target");
    
    var transition = fsm_injector.fsm.state[0].transition[1];
    assert.equal(state.getTarget(transition['@action']), transition['@target'], "action = target");
});

QUnit.test("testTransitionTofsm4", function(assert){
    var facade = puremvc.Facade.getInstance("key2");
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm4);
    
    fsm_injector.initializeNotifier("key2");
    fsm_injector.inject();
    assert.ok(true);
    
    //console.log(fsm_injector.stateList);
    
    //facade.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, "open");
    //facade.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, "lock");
});

QUnit.test("testStates", function(assert) {
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    var states = fsm_injector.getStates();
    
    assert.ok(states, "states exists");
    assert.equal(states.length, 3, "3 states");
    
    for(var i=0; i<3; i++) {
        assert.ok(states[i] instanceof puremvc.statemachine.State, "instance State");
        assert.equal(states[i].name, "state2" + (i+1), "names ok");
    }
});

QUnit.test("testInject", function(assert){
    var facade = puremvc.Facade.getInstance("key2");
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm2);
    
    fsm_injector.initializeNotifier("key2");
    fsm_injector.inject();
    var mediator = facade.retrieveMediator(puremvc.statemachine.StateMachine.NAME);
    assert.ok(mediator, "mediator exists");
});

QUnit.test("testTransitionTofsm3", function(assert){
    var facade = puremvc.Facade.getInstance("key2");
    var fsm_injector = new puremvc.statemachine.FSMInjector(fsm3);
    
    fsm_injector.initializeNotifier("key2");
    fsm_injector.inject();
    assert.ok(true);
    
    facade.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, "transition211_action");
});
