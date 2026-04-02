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

+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`crossFade<api_Animator_e594cf72>` (const TString & state, float  duration) |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`crossFadeHash<api_Animator_a037b15c>` (int  hash, float  duration)         |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setBool<api_Animator_105afe73>` (const TString & name, bool  value)        |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setBoolHash<api_Animator_1e8340b5>` (int  hash, bool  value)               |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloat<api_Animator_a9c7de80>` (const TString & name, float  value)      |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloatHash<api_Animator_03cd542a>` (int  hash, float  value)             |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setInteger<api_Animator_1ec6ba84>` (const TString & name, int32_t  value)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setIntegerHash<api_Animator_c759a48e>` (int  hash, int32_t  value)         |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setState<api_Animator_ed5b467a>` (const TString & state)                   |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateHash<api_Animator_945cd260>` (int  hash)                           |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateMachine<api_Animator_d31f5e6b>` (AnimationStateMachine * machine)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|  :ref:`AnimationStateMachine<api_AnimationStateMachine>` * | :ref:`stateMachine<api_Animator_ca9e08f4>` () const                              |
+------------------------------------------------------------+----------------------------------------------------------------------------------+



.. _api_Animator_static:

Static Methods
--------------

None

.. _api_Animator_methods:

Methods Description
-------------------

.. _api_Animator_e594cf72:

 void **Animator::crossFade** (:ref:`TString<api_TString>` & *state*, float  *duration*)

Smoothly changes current *state* using crossfade interpolation from the previous *state* to the new *state* with normalized *duration* time.

----

.. _api_Animator_a037b15c:

 void **Animator::crossFadeHash** (int  *hash*, float  *duration*)

Smoothly changes current state using crossfade interpolation from the previous state to the new state (using the *hash* of state) with normalized *duration* time.

----

.. _api_Animator_105afe73:

 void **Animator::setBool** (:ref:`TString<api_TString>` & *name*, bool  *value*)

Sets the new boolean *value* for the parameter with the name.

----

.. _api_Animator_1e8340b5:

 void **Animator::setBoolHash** (int  *hash*, bool  *value*)

Sets the new boolean *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_a9c7de80:

 void **Animator::setFloat** (:ref:`TString<api_TString>` & *name*, float  *value*)

Sets the new floating-point *value* for the parameter with the name.

----

.. _api_Animator_03cd542a:

 void **Animator::setFloatHash** (int  *hash*, float  *value*)

Sets the new floating-point *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_1ec6ba84:

 void **Animator::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t  *value*)

Sets the new integer *value* for the parameter with the name.

----

.. _api_Animator_c759a48e:

 void **Animator::setIntegerHash** (int  *hash*, int32_t  *value*)

Sets the new integer *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_ed5b467a:

 void **Animator::setState** (:ref:`TString<api_TString>` & *state*)

Changes the current *state* of *state* machine immediately.

----

.. _api_Animator_945cd260:

 void **Animator::setStateHash** (int  *hash*)

Changes the current state (using the *hash* of state) of state machine immediately.

----

.. _api_Animator_d31f5e6b:

 void **Animator::setStateMachine** (:ref:`AnimationStateMachine<api_AnimationStateMachine>` * *machine*)

Sets animation state *machine* which will be attached to this Animator.


**Note:** The state *machine* will move to the initial state automatically during the call of this function.


**See also** stateMachine().

----

.. _api_Animator_ca9e08f4:

 :ref:`AnimationStateMachine<api_AnimationStateMachine>` * **Animator::stateMachine** () const

Returns AnimationStateMachine resource attached to this Animator.

**See also** setStateMachine().


