.. _api_AnimationController:
AnimationController Class
================

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_AnimationController_description:
Description
-----------

Manages all animations in the engine.

The animation controller allows to control different animation states from AnimationStateMachine assets. To use any animations in the Thunder Engine the AnimationController must be attached to a root Actor in the hierarchy. The animation controller processes an AnimationStateMachine resource type. The animation controller can use parametric values to decide when transition between states must happen.



.. _api_AnimationController_public:
Public Methods
--------------

+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                                           | :ref:`AnimationController<api_AnimationController_AnimationController>` ()                         |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                                           | :ref:`~AnimationController<api_AnimationController_~AnimationController>` ()                       |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                 :ref:`AnimationClip<api_AnimationClip>` * | :ref:`clip<api_AnimationController_clip>` () const                                                 |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`crossFade<api_AnimationController_crossFade>` (const char * state, float  duration)          |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`crossFade<api_AnimationController_crossFade>` (int  hash, float  duration)                   |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`duration<api_AnimationController_duration>` () const                                         |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`position<api_AnimationController_position>` () const                                         |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setBool<api_AnimationController_setBool>` (const char * name, bool  value)                   |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setBool<api_AnimationController_setBool>` (int  hash, bool  value)                           |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setClip<api_AnimationController_setClip>` (AnimationClip * clip)                             |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFloat<api_AnimationController_setFloat>` (const char * name, float  value)                |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFloat<api_AnimationController_setFloat>` (int  hash, float  value)                        |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setInteger<api_AnimationController_setInteger>` (const char * name, int  value)              |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setInteger<api_AnimationController_setInteger>` (int  hash, int  value)                      |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setPosition<api_AnimationController_setPosition>` (int  position)                            |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setState<api_AnimationController_setState>` (const char * state)                             |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setState<api_AnimationController_setState>` (int  hash)                                      |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setStateMachine<api_AnimationController_setStateMachine>` (AnimationStateMachine * resource) |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
| :ref:`AnimationStateMachine<api_AnimationStateMachine>` * | :ref:`stateMachine<api_AnimationController_stateMachine>` () const                                 |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+

.. _api_AnimationController_static:
Static Methods
--------------

+-------------------------------------------------------------------+----------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_AnimationController_properties>` () |
+-------------------------------------------------------------------+----------------------------------------------------------+

.. _api_AnimationController_methods:
Methods Description
-------------------

.. _api_AnimationController_AnimationController:

**AnimationController::AnimationController** ()

Default constructs an instance of AnimationController.

----

.. _api_AnimationController_~AnimationController:

**AnimationController::~AnimationController** ()

Destroys the instance of AnimationController. The destructor is virtual.

----

.. _api_AnimationController_clip:

:ref:`AnimationClip<api_AnimationClip>` * **AnimationController::clip** () const

Returns AnimationClip for the current state.

**See also** setClip().

----

.. _api_AnimationController_crossFade:

:ref:`void<api_void>`  **AnimationController::crossFade** (:ref:`char<api_char>` * *state*, :ref:`float<api_float>`  *duration*)

Smoothly changes current *state* using crossfade interpolation from the previous *state* to the new *state* with *duration* (in milliseconds).

----

.. _api_AnimationController_crossFade:

:ref:`void<api_void>`  **AnimationController::crossFade** (:ref:`int<api_int>`  *hash*, :ref:`float<api_float>`  *duration*)

Smoothly changes current state using crossfade interpolation from the previous state to the new state (using the *hash* of state) with *duration* (in milliseconds).

----

.. _api_AnimationController_duration:

:ref:`int<api_int>`  **AnimationController::duration** () const

Returns duration of the animation clip for the current state.

----

.. _api_AnimationController_position:

:ref:`int<api_int>`  **AnimationController::position** () const

Returns the position (in milliseconds) of animation for the current state.

**See also** setPosition().

----

.. _api_AnimationController_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **AnimationController::properties** ()

----

.. _api_AnimationController_setBool:

:ref:`void<api_void>`  **AnimationController::setBool** (:ref:`char<api_char>` * *name*, :ref:`bool<api_bool>`  *value*)

Sets the new boolean *value* for the parameter with the *name*.

----

.. _api_AnimationController_setBool:

:ref:`void<api_void>`  **AnimationController::setBool** (:ref:`int<api_int>`  *hash*, :ref:`bool<api_bool>`  *value*)

Sets the new boolean *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setClip:

:ref:`void<api_void>`  **AnimationController::setClip** (:ref:`AnimationClip<api_AnimationClip>` * *clip*)

Forcefully sets animation *clip* over any state.

**See also** *clip*().

----

.. _api_AnimationController_setFloat:

:ref:`void<api_void>`  **AnimationController::setFloat** (:ref:`char<api_char>` * *name*, :ref:`float<api_float>`  *value*)

Sets the new floating-point *value* for the parameter with the *name*.

----

.. _api_AnimationController_setFloat:

:ref:`void<api_void>`  **AnimationController::setFloat** (:ref:`int<api_int>`  *hash*, :ref:`float<api_float>`  *value*)

Sets the new floating-point *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setInteger:

:ref:`void<api_void>`  **AnimationController::setInteger** (:ref:`char<api_char>` * *name*, :ref:`int<api_int>`  *value*)

Sets the new integer *value* for the parameter with the *name*.

----

.. _api_AnimationController_setInteger:

:ref:`void<api_void>`  **AnimationController::setInteger** (:ref:`int<api_int>`  *hash*, :ref:`int<api_int>`  *value*)

Sets the new integer *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setPosition:

:ref:`void<api_void>`  **AnimationController::setPosition** (:ref:`int<api_int>`  *position*)

Sets the *position* (in milliseconds) of animation for the current state.

**See also** *position*().

----

.. _api_AnimationController_setState:

:ref:`void<api_void>`  **AnimationController::setState** (:ref:`char<api_char>` * *state*)

Changes the current *state* of *state* machine immediately.

----

.. _api_AnimationController_setState:

:ref:`void<api_void>`  **AnimationController::setState** (:ref:`int<api_int>`  *hash*)

Changes the current state (using the *hash* of state) of state machine immediately.

----

.. _api_AnimationController_setStateMachine:

:ref:`void<api_void>`  **AnimationController::setStateMachine** (:ref:`AnimationStateMachine<api_AnimationStateMachine>` * *resource*)

Sets AnimationStateMachine *resource* which will be attached to this AnimationController.

**Note:** The state machine will move to the initial state automatically during the call of this function.

**See also** stateMachine().

----

.. _api_AnimationController_stateMachine:

:ref:`AnimationStateMachine<api_AnimationStateMachine>` * **AnimationController::stateMachine** () const

Returns AnimationStateMachine resource attached to this AnimationController.

**See also** setStateMachine().

----


