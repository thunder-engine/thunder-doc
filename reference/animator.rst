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
|                                                       void | :ref:`crossFade<api_Animator_4bde87a9>` (const TString & state, float  duration) |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`crossFadeHash<api_Animator_8473605d>` (int  hash, float  duration)         |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setBool<api_Animator_3140a6b7>` (const TString & name, bool  value)        |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setBoolHash<api_Animator_054f86e3>` (int  hash, bool  value)               |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloat<api_Animator_6b821fd0>` (const TString & name, float  value)      |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setFloatHash<api_Animator_e985b3fc>` (int  hash, float  value)             |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setInteger<api_Animator_2796c85f>` (const TString & name, int32_t  value)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setIntegerHash<api_Animator_724fa3d9>` (int  hash, int32_t  value)         |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setState<api_Animator_b4fe9d01>` (const TString & state)                   |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateHash<api_Animator_92e7cba8>` (int  hash)                           |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|                                                       void | :ref:`setStateMachine<api_Animator_b4c6e930>` (AnimationStateMachine * machine)  |
+------------------------------------------------------------+----------------------------------------------------------------------------------+
|  :ref:`AnimationStateMachine<api_AnimationStateMachine>` * | :ref:`stateMachine<api_Animator_d749a02c>` () const                              |
+------------------------------------------------------------+----------------------------------------------------------------------------------+



.. _api_Animator_static:

Static Methods
--------------

None

.. _api_Animator_methods:

Methods Description
-------------------

.. _api_Animator_4bde87a9:

 void **Animator::crossFade** (:ref:`TString<api_TString>` & *state*, float  *duration*)

Smoothly changes current *state* using crossfade interpolation from the previous *state* to the new *state* with normalized *duration* time.

----

.. _api_Animator_8473605d:

 void **Animator::crossFadeHash** (int  *hash*, float  *duration*)

Smoothly changes current state using crossfade interpolation from the previous state to the new state (using the *hash* of state) with normalized *duration* time.

----

.. _api_Animator_3140a6b7:

 void **Animator::setBool** (:ref:`TString<api_TString>` & *name*, bool  *value*)

Sets the new boolean *value* for the parameter with the *name*.

----

.. _api_Animator_054f86e3:

 void **Animator::setBoolHash** (int  *hash*, bool  *value*)

Sets the new boolean *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_6b821fd0:

 void **Animator::setFloat** (:ref:`TString<api_TString>` & *name*, float  *value*)

Sets the new floating-point *value* for the parameter with the *name*.

----

.. _api_Animator_e985b3fc:

 void **Animator::setFloatHash** (int  *hash*, float  *value*)

Sets the new floating-point *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_2796c85f:

 void **Animator::setInteger** (:ref:`TString<api_TString>` & *name*, int32_t  *value*)

Sets the new integer *value* for the parameter with the *name*.

----

.. _api_Animator_724fa3d9:

 void **Animator::setIntegerHash** (int  *hash*, int32_t  *value*)

Sets the new integer *value* for the parameter using the *hash* of state as the name.

----

.. _api_Animator_b4fe9d01:

 void **Animator::setState** (:ref:`TString<api_TString>` & *state*)

Changes the current *state* of *state* machine immediately.

----

.. _api_Animator_92e7cba8:

 void **Animator::setStateHash** (int  *hash*)

Changes the current state (using the *hash* of state) of state machine immediately.

----

.. _api_Animator_b4c6e930:

 void **Animator::setStateMachine** (:ref:`AnimationStateMachine<api_AnimationStateMachine>` * *machine*)

Sets animation state *machine* which will be attached to this Animator.


**Note:** The state *machine* will move to the initial state automatically during the call of this function.


**See also** stateMachine().

----

.. _api_Animator_d749a02c:

 :ref:`AnimationStateMachine<api_AnimationStateMachine>` * **Animator::stateMachine** () const

Returns AnimationStateMachine resource attached to this Animator.

**See also** setStateMachine().


