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
|                                     :ref:`void<api_void>` | :ref:`crossFade<api_AnimationController_crossFade>` (const std::string & state, float  duration)   |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`crossFadeHash<api_AnimationController_crossFadeHash>` (int  hash, float  duration)           |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                       :ref:`int<api_int>` | :ref:`duration<api_AnimationController_duration>` () const                                         |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setBool<api_AnimationController_setBool>` (const std::string & name, bool  value)            |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setBoolHash<api_AnimationController_setBoolHash>` (int  hash, bool  value)                   |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setClip<api_AnimationController_setClip>` (AnimationClip * clip)                             |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFloat<api_AnimationController_setFloat>` (const std::string & name, float  value)         |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setFloatHash<api_AnimationController_setFloatHash>` (int  hash, float  value)                |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setInteger<api_AnimationController_setInteger>` (const std::string & name, int32_t  value)   |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setIntegerHash<api_AnimationController_setIntegerHash>` (int  hash, int32_t  value)          |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setState<api_AnimationController_setState>` (const std::string & state)                      |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setStateHash<api_AnimationController_setStateHash>` (int  hash)                              |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
|                                     :ref:`void<api_void>` | :ref:`setStateMachine<api_AnimationController_setStateMachine>` (AnimationStateMachine * resource) |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+
| :ref:`AnimationStateMachine<api_AnimationStateMachine>` * | :ref:`stateMachine<api_AnimationController_stateMachine>` () const                                 |
+-----------------------------------------------------------+----------------------------------------------------------------------------------------------------+



.. _api_AnimationController_static:
Static Methods
--------------

+-------------------------------------------------------------------+----------------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_AnimationController_methods>` ()       |
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

:ref:`void<api_void>`  **AnimationController::crossFade** (:ref:`std::string<api_std::string>` & *state*, :ref:`float<api_float>`  *duration*)

Smoothly changes current *state* using crossfade interpolation from the previous *state* to the new *state* with *duration* (in milliseconds).

----

.. _api_AnimationController_crossFadeHash:

:ref:`void<api_void>`  **AnimationController::crossFadeHash** (:ref:`int<api_int>`  *hash*, :ref:`float<api_float>`  *duration*)

Smoothly changes current state using crossfade interpolation from the previous state to the new state (using the *hash* of state) with *duration* (in milliseconds).

----

.. _api_AnimationController_duration:

:ref:`int<api_int>`  **AnimationController::duration** () const

Returns duration of the animation clip for the current state.

----

.. _api_AnimationController_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **AnimationController::methods** ()

----

.. _api_AnimationController_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **AnimationController::properties** ()

----

.. _api_AnimationController_setBool:

:ref:`void<api_void>`  **AnimationController::setBool** (:ref:`std::string<api_std::string>` & *name*, :ref:`bool<api_bool>`  *value*)

Sets the new boolean *value* for the parameter with the *name*.

----

.. _api_AnimationController_setBoolHash:

:ref:`void<api_void>`  **AnimationController::setBoolHash** (:ref:`int<api_int>`  *hash*, :ref:`bool<api_bool>`  *value*)

Sets the new boolean *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setClip:

:ref:`void<api_void>`  **AnimationController::setClip** (:ref:`AnimationClip<api_AnimationClip>` * *clip*)

Forcefully sets animation *clip* over any state.

**See also** *clip*().

----

.. _api_AnimationController_setFloat:

:ref:`void<api_void>`  **AnimationController::setFloat** (:ref:`std::string<api_std::string>` & *name*, :ref:`float<api_float>`  *value*)

Sets the new floating-point *value* for the parameter with the *name*.

----

.. _api_AnimationController_setFloatHash:

:ref:`void<api_void>`  **AnimationController::setFloatHash** (:ref:`int<api_int>`  *hash*, :ref:`float<api_float>`  *value*)

Sets the new floating-point *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setInteger:

:ref:`void<api_void>`  **AnimationController::setInteger** (:ref:`std::string<api_std::string>` & *name*, :ref:`int32_t<api_int32_t>`  *value*)

Sets the new integer *value* for the parameter with the *name*.

----

.. _api_AnimationController_setIntegerHash:

:ref:`void<api_void>`  **AnimationController::setIntegerHash** (:ref:`int<api_int>`  *hash*, :ref:`int32_t<api_int32_t>`  *value*)

Sets the new integer *value* for the parameter using the *hash* of state as the name.

----

.. _api_AnimationController_setState:

:ref:`void<api_void>`  **AnimationController::setState** (:ref:`std::string<api_std::string>` & *state*)

Changes the current *state* of *state* machine immediately.

----

.. _api_AnimationController_setStateHash:

:ref:`void<api_void>`  **AnimationController::setStateHash** (:ref:`int<api_int>`  *hash*)

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


