.. _api_Animator:

Animator
========

Inherited: None

.. _api_Animator_description:

Description
-----------

The animation controller allows to control different animation states from AnimationStateMachine assets. To use any animations in the Thunder Engine the Animator must be attached to a root Actor in the hierarchy. The animation controller processes an AnimationStateMachine resource type. The animation controller can use parametric values to decide when transition between states must happen.



.. _api_Animator_public:

Public Methods
--------------

+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`crossFade<api_Animator_crossFade>` (const std::string & state, float  duration)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`crossFadeHash<api_Animator_crossFadeHash>` (int  hash, float  duration)          |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                        int | :ref:`duration<api_Animator_duration>` () const                                        |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`rebind<api_Animator_rebind>` ()                                                  |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setBool<api_Animator_setBool>` (const std::string & name, bool  value)           |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setBoolHash<api_Animator_setBoolHash>` (int  hash, bool  value)                  |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloat<api_Animator_setFloat>` (const std::string & name, float  value)        |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloatHash<api_Animator_setFloatHash>` (int  hash, float  value)               |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setInteger<api_Animator_setInteger>` (const std::string & name, int32_t  value)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setIntegerHash<api_Animator_setIntegerHash>` (int  hash, int32_t  value)         |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setState<api_Animator_setState>` (const std::string & state)                     |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateHash<api_Animator_setStateHash>` (int  hash)                             |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateMachine<api_Animator_setStateMachine>` (AnimationStateMachine * machine) |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`AnimationStateMachine<api_AnimationStateMachine>` * | :ref:`stateMachine<api_Animator_stateMachine>` () const                                |
+------------------------------------------------------------+----------------------------------------------------------------------------------------+



.. _api_Animator_static:

Static Methods
--------------

None

.. _api_Animator_methods:

Methods Description
-------------------

.. _api_Animator_crossFade:

 void **Animator::crossFade** (std::string & *state*, float  *duration*)

Smoothly changes current *state* using crossfade interpolation from the previous *state* to the new *state* with *duration* (in milliseconds).

----

.. _api_Animator_crossFadeHash:

 void **Animator::crossFadeHash** (int  *hash*, float  *duration*)

Smoothly changes current state using crossfade interpolation from the previous state to the new state (using the *hash* of state) with *duration* (in milliseconds).

----

.. _api_Animator_duration:

 int **Animator::duration** () const

Returns duration of the animation clip for the current state.

----

.. _api_Animator_rebind:

 void **Animator::rebind** ()

Rebinds all animated properties with Animator.

----

.. _api_Animator_setBool:

 void **Animator::setBool** (std::string & *name*, bool  *value*)

Sets the new boolean *value* for the parameter with the *name*.

----

.. _api_Animator_setBoolHash:

 void **Animator::setBoolHash** (int  *hash*, bool  *value*)

Sets the new boolean *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_setFloat:

 void **Animator::setFloat** (std::string & *name*, float  *value*)

Sets the new floating-point *value* for the parameter with the *name*.

----

.. _api_Animator_setFloatHash:

 void **Animator::setFloatHash** (int  *hash*, float  *value*)

Sets the new floating-point *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_setInteger:

 void **Animator::setInteger** (std::string & *name*, int32_t  *value*)

Sets the new integer *value* for the parameter with the *name*.

----

.. _api_Animator_setIntegerHash:

 void **Animator::setIntegerHash** (int  *hash*, int32_t  *value*)

Sets the new integer *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_setState:

 void **Animator::setState** (std::string & *state*)

Changes the current *state* of *state* machine immediately.

----

.. _api_Animator_setStateHash:

 void **Animator::setStateHash** (int  *hash*)

Changes the current state (using the *hash* of state) of state machine immediately.

----

.. _api_Animator_setStateMachine:

 void **Animator::setStateMachine** (:ref:`AnimationStateMachine<api_AnimationStateMachine>` * *machine*)

Sets animation state *machine* which will be attached to this Animator.


**Note:** The state *machine* will move to the initial state automatically during the call of this function.


**See also** stateMachine().

----

.. _api_Animator_stateMachine:

 :ref:`AnimationStateMachine<api_AnimationStateMachine>` * **Animator::stateMachine** () const

Returns AnimationStateMachine resource attached to this Animator.

**See also** setStateMachine().


