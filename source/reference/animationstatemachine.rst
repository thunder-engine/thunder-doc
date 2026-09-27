.. _api_AnimationStateMachine:

AnimationStateMachine
=====================

Inherited: :ref:`Resource<api_Resource>`

.. _api_AnimationStateMachine_description:

Description
-----------



.. _api_AnimationStateMachine_public:

Public Methods
--------------

+----------------------------------------------+------------------------------------------------------------------------+
|  :ref:`AnimationState<api_AnimationState>` * | :ref:`findState<api_AnimationStateMachine_7b0f31c5>` (int  hash) const |
+----------------------------------------------+------------------------------------------------------------------------+
|  :ref:`AnimationState<api_AnimationState>` * | :ref:`initialState<api_AnimationStateMachine_5304ed78>` () const       |
+----------------------------------------------+------------------------------------------------------------------------+



.. _api_AnimationStateMachine_static:

Static Methods
--------------

None

.. _api_AnimationStateMachine_methods:

Methods Description
-------------------

.. _api_AnimationStateMachine_7b0f31c5:

 :ref:`AnimationState<api_AnimationState>` * **AnimationStateMachine::findState** (int  *hash*) const

Returns a state for the provided hash.

----

.. _api_AnimationStateMachine_5304ed78:

 :ref:`AnimationState<api_AnimationState>` * **AnimationStateMachine::initialState** () const

Returns an initial state for the state machine.


