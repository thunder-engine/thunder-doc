.. _api_Animation:

Animation
=========

Inherited: None

.. _api_Animation_description:

Description
-----------

The Animation class contain basic state machine to control animation processing.



.. _api_Animation_public:

Public Methods
--------------

+-----------------------------------------------+-----------------------------------------------------------------+
|                                      uint32_t | :ref:`currentLoop<api_Animation_609315d8>` () const             |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                      uint32_t | :ref:`currentTime<api_Animation_a9276e45>` () const             |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`duration<api_Animation_f2704a8d>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          bool | :ref:`isValid<api_Animation_81c73b02>` () const                 |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`loopCount<api_Animation_e8917a60>` () const               |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                      uint32_t | :ref:`loopTime<api_Animation_a0c9b7f6>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`pause<api_Animation_ba53780d>` ()                         |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`resume<api_Animation_af6310ed>` (bool  ignore = false)    |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setCurrentTime<api_Animation_b9e7248f>` (uint32_t  msecs) |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setLoopCount<api_Animation_178ab92d>` (int32_t  loops)    |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setValid<api_Animation_4517ac32>` (bool  valid)           |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`start<api_Animation_52fc8716>` ()                         |
+-----------------------------------------------+-----------------------------------------------------------------+
|  :ref:`Animation::State<api_Animation_State>` | :ref:`state<api_Animation_e28b90dc>` () const                   |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`stop<api_Animation_e97cb1d3>` ()                          |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`totalDuration<api_Animation_4c896dfb>` () const           |
+-----------------------------------------------+-----------------------------------------------------------------+

.. _api_Animation_enums:

Public Enums
------------

.. _api_Animation_State:

**enum Animation::State**

This enum defines the state of animation track.

+--------------------+-------+--------------------------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                                      |
+--------------------+-------+--------------------------------------------------------------------------------------------------+
| Animation::STOPPED | 0     | Animation stopped if start() is triggered the animation will start from beginning.               |
+--------------------+-------+--------------------------------------------------------------------------------------------------+
| Animation::RUNNING | 1     | Animation is playing.                                                                            |
+--------------------+-------+--------------------------------------------------------------------------------------------------+
|  Animation::PAUSED | 2     | Animation paused if resume() is triggered the animation will continue from place before pause(). |
+--------------------+-------+--------------------------------------------------------------------------------------------------+



.. _api_Animation_static:

Static Methods
--------------

None

.. _api_Animation_methods:

Methods Description
-------------------

.. _api_Animation_609315d8:

 uint32_t **Animation::currentLoop** () const

Returns the number of repetitions of animation which already has played.

----

.. _api_Animation_a9276e45:

 uint32_t **Animation::currentTime** () const

Returns the current time (in milliseconds) in scope of current loop.

**See also** setCurrentTime().

----

.. _api_Animation_f2704a8d:

 int32_t **Animation::duration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_Animation_81c73b02:

 bool **Animation::isValid** () const

Returns true in case of animation is valid; otherwise returns false.

----

.. _api_Animation_e8917a60:

 int32_t **Animation::loopCount** () const

Returns the number of repetitions of animation; -1 in case of infinite animation.

**See also** setLoopCount().

----

.. _api_Animation_a0c9b7f6:

 uint32_t **Animation::loopTime** () const

Returns the current time for the current loop (in milliseconds).

----

.. _api_Animation_ba53780d:

 void **Animation::pause** ()

Stops the animation.


**Note:** Animation CAN be continued by resume().


----

.. _api_Animation_af6310ed:

 void **Animation::resume** (bool  *ignore* = false)

Continues the animation which was paused earlier. Flag *ignore* can help to skip pause check.

----

.. _api_Animation_b9e7248f:

 void **Animation::setCurrentTime** (uint32_t  *msecs*)

Sets the new position of animation to provided *msecs* position.


**Note:** If new position placed outside of current loop; Then current loop will be changed to appropriate.


**See also** currentTime().

----

.. _api_Animation_178ab92d:

 void **Animation::setLoopCount** (int32_t  *loops*)

Sets the new number of *loops* of animation; -1 in case of infinite animation.

**See also** loopCount().

----

.. _api_Animation_4517ac32:

 void **Animation::setValid** (bool  *valid*)

Sets the *valid* state of animation. The invalid animations will not affect anything.

**See also** isValid().

----

.. _api_Animation_52fc8716:

 void **Animation::start** ()

Starts the animation from the beginning.

----

.. _api_Animation_e28b90dc:

 :ref:`Animation::State<api_Animation::State>`  **Animation::state** () const

Returns the current state of animation.

----

.. _api_Animation_e97cb1d3:

 void **Animation::stop** ()

Stops the animation.


**Note:** Animation can't be continued.


----

.. _api_Animation_4c896dfb:

 int32_t **Animation::totalDuration** () const

Returns the duration (in milliseconds) in total as sum of durations for all loops.


**Note:** Returns -1 in case of infinite animation.



