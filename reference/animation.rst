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
|                                      uint32_t | :ref:`currentLoop<api_Animation_13ea2497>` () const             |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                      uint32_t | :ref:`currentTime<api_Animation_75da31c0>` () const             |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`duration<api_Animation_39458b10>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          bool | :ref:`isValid<api_Animation_a1b9c834>` () const                 |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`loopCount<api_Animation_a12efd9c>` () const               |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                      uint32_t | :ref:`loopTime<api_Animation_a840b79f>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`pause<api_Animation_3cd10b4a>` ()                         |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`resume<api_Animation_1be9c5da>` (bool  ignore = false)    |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setCurrentTime<api_Animation_d1ec2074>` (uint32_t  msecs) |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setLoopCount<api_Animation_d4c9f768>` (int32_t  loops)    |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`setValid<api_Animation_ef07429b>` (bool  valid)           |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`start<api_Animation_210e983b>` ()                         |
+-----------------------------------------------+-----------------------------------------------------------------+
|  :ref:`Animation::State<api_Animation_State>` | :ref:`state<api_Animation_392e7458>` () const                   |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                          void | :ref:`stop<api_Animation_1a9c7bde>` ()                          |
+-----------------------------------------------+-----------------------------------------------------------------+
|                                       int32_t | :ref:`totalDuration<api_Animation_2d3f1458>` () const           |
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

.. _api_Animation_13ea2497:

 uint32_t **Animation::currentLoop** () const

Returns the number of repetitions of animation which already has played.

----

.. _api_Animation_75da31c0:

 uint32_t **Animation::currentTime** () const

Returns the current time (in milliseconds) in scope of current loop.

**See also** setCurrentTime().

----

.. _api_Animation_39458b10:

 int32_t **Animation::duration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_Animation_a1b9c834:

 bool **Animation::isValid** () const

Returns true in case of animation is valid; otherwise returns false.

----

.. _api_Animation_a12efd9c:

 int32_t **Animation::loopCount** () const

Returns the number of repetitions of animation; -1 in case of infinite animation.

**See also** setLoopCount().

----

.. _api_Animation_a840b79f:

 uint32_t **Animation::loopTime** () const

Returns the current time for the current loop (in milliseconds).

----

.. _api_Animation_3cd10b4a:

 void **Animation::pause** ()

Stops the animation.


**Note:** Animation CAN be continued by resume().


----

.. _api_Animation_1be9c5da:

 void **Animation::resume** (bool  *ignore* = false)

Continues the animation which was paused earlier. Flag *ignore* can help to skip pause check.

----

.. _api_Animation_d1ec2074:

 void **Animation::setCurrentTime** (uint32_t  *msecs*)

Sets the new position of animation to provided *msecs* position.


**Note:** If new position placed outside of current loop; Then current loop will be changed to appropriate.


**See also** currentTime().

----

.. _api_Animation_d4c9f768:

 void **Animation::setLoopCount** (int32_t  *loops*)

Sets the new number of *loops* of animation; -1 in case of infinite animation.

**See also** loopCount().

----

.. _api_Animation_ef07429b:

 void **Animation::setValid** (bool  *valid*)

Sets the *valid* state of animation. The invalid animations will not affect anything.

**See also** isValid().

----

.. _api_Animation_210e983b:

 void **Animation::start** ()

Starts the animation from the beginning.

----

.. _api_Animation_392e7458:

 :ref:`Animation::State<api_Animation::State>`  **Animation::state** () const

Returns the current state of animation.

----

.. _api_Animation_1a9c7bde:

 void **Animation::stop** ()

Stops the animation.


**Note:** Animation can't be continued.


----

.. _api_Animation_2d3f1458:

 int32_t **Animation::totalDuration** () const

Returns the duration (in milliseconds) in total as sum of durations for all loops.


**Note:** Returns -1 in case of infinite animation.



