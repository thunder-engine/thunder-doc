.. _api_AnimationStateMachine:
AnimationStateMachine Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_AnimationStateMachine_description:
Description
-----------

AnimationStateMachine resource contains information about animation states and transition rules.



.. _api_AnimationStateMachine_public:
Public Methods
--------------

+---------------------------------------------+----------------------------------------------------------------------------------+
|                                             | :ref:`AnimationStateMachine<api_AnimationStateMachine_AnimationStateMachine>` () |
+---------------------------------------------+----------------------------------------------------------------------------------+
| :ref:`AnimationState<api_AnimationState>` * | :ref:`findState<api_AnimationStateMachine_findState>` (int  hash) const          |
+---------------------------------------------+----------------------------------------------------------------------------------+
| :ref:`AnimationState<api_AnimationState>` * | :ref:`initialState<api_AnimationStateMachine_initialState>` () const             |
+---------------------------------------------+----------------------------------------------------------------------------------+

.. _api_AnimationStateMachine_enums:
Public Enums
--------------

.. _api_AnimationStateMachine_VariableMap:
**enum AnimationStateMachine::VariableMap**



.. _api_AnimationStateMachine_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_AnimationStateMachine_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_AnimationStateMachine_properties>` () |
+-------------------------------------------------------------------+------------------------------------------------------------+

.. _api_AnimationStateMachine_methods:
Methods Description
-------------------

.. _api_AnimationStateMachine_AnimationStateMachine:

**AnimationStateMachine::AnimationStateMachine** ()

Default constructs an instance of AnimationStateMachine.

----

.. _api_AnimationStateMachine_findState:

:ref:`AnimationState<api_AnimationState>` * **AnimationStateMachine::findState** (:ref:`int<api_int>`  *hash*) const

Returns a state for the provided *hash*.

----

.. _api_AnimationStateMachine_initialState:

:ref:`AnimationState<api_AnimationState>` * **AnimationStateMachine::initialState** () const

Returns an initial state for the state machine.

----

.. _api_AnimationStateMachine_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **AnimationStateMachine::methods** ()

----

.. _api_AnimationStateMachine_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **AnimationStateMachine::properties** ()

----


