.. _api_Animation:

Animation Class
===============

Inherited: :doc:`Object<api_Object>`

.. _api_Animation_description:

Description
-----------

The Animation class contain basic state machine to control animation processing.



.. _api_Animation_public:

Public Methods
--------------

+------------------------------------------------+------------------------------------------------------------------+
|                                            int | :ref:`currentLoop<api_Animation_currentLoop>` () const           |
+------------------------------------------------+------------------------------------------------------------------+
|                                            int | :ref:`currentTime<api_Animation_currentTime>` () const           |
+------------------------------------------------+------------------------------------------------------------------+
|                                        int32_t | :ref:`duration<api_Animation_duration>` () const                 |
+------------------------------------------------+------------------------------------------------------------------+
|                                           bool | :ref:`isValid<api_Animation_isValid>` () const                   |
+------------------------------------------------+------------------------------------------------------------------+
|                                        int32_t | :ref:`loopCount<api_Animation_loopCount>` () const               |
+------------------------------------------------+------------------------------------------------------------------+
|                                            int | :ref:`loopTime<api_Animation_loopTime>` () const                 |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`pause<api_Animation_pause>` ()                             |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`resume<api_Animation_resume>` ()                           |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`setCurrentTime<api_Animation_setCurrentTime>` (int  msecs) |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`setLoopCount<api_Animation_setLoopCount>` (int32_t  loops) |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`setValid<api_Animation_setValid>` (bool  valid)            |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`start<api_Animation_start>` ()                             |
+------------------------------------------------+------------------------------------------------------------------+
|  :ref:`Animation::State<api_Animation::State>` | :ref:`state<api_Animation_state>` () const                       |
+------------------------------------------------+------------------------------------------------------------------+
|                                           void | :ref:`stop<api_Animation_stop>` ()                               |
+------------------------------------------------+------------------------------------------------------------------+
|                                        int32_t | :ref:`totalDuration<api_Animation_totalDuration>` () const       |
+------------------------------------------------+------------------------------------------------------------------+

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

.. _api_Animation_currentLoop:

 int **Animation::currentLoop** () const

Returns the number of repetitions of animation which already has played.

----

.. _api_Animation_currentTime:

 int **Animation::currentTime** () const

Returns the current time (in milliseconds) in scope of current loop.

**See also** setCurrentTime().

----

.. _api_Animation_duration:

 int32_t **Animation::duration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_Animation_isValid:

 bool **Animation::isValid** () const

Returns true in case of animation is valid; otherwise returns false.

----

.. _api_Animation_loopCount:

 int32_t **Animation::loopCount** () const

Returns the number of repetitions of animation; -1 in case of infinite animation.

**See also** setLoopCount().

----

.. _api_Animation_loopTime:

 int **Animation::loopTime** () const

Returns the current time for the current loop (in milliseconds).

----

.. _api_Animation_pause:

 void **Animation::pause** ()

Stops the animation.

**Note:** Animation CAN be continued by resume().

----

.. _api_Animation_resume:

 void **Animation::resume** ()

Continues the animation which was paused earlier.

----

.. _api_Animation_setCurrentTime:

 void **Animation::setCurrentTime** (int  *msecs*)

Sets the new position of animation to provided *msecs* position.

**Note:** If new position placed outside of current loop; Then current loop will be changed to appropriate.

**See also** currentTime().

----

.. _api_Animation_setLoopCount:

 void **Animation::setLoopCount** (int32_t  *loops*)

Sets the new number of *loops* of animation; -1 in case of infinite animation.

**See also** loopCount().

----

.. _api_Animation_setValid:

 void **Animation::setValid** (bool  *valid*)

Sets the *valid* state of animation. The invalid animations will not affect anything.

**See also** isValid().

----

.. _api_Animation_start:

 void **Animation::start** ()

Starts the animation from the beginning.

----

.. _api_Animation_state:

 :ref:`Animation::State<api_Animation::State>` **Animation::state** () const

Returns the current state of animation.

----

.. _api_Animation_stop:

 void **Animation::stop** ()

Stops the animation.

**Note:** Animation can't be continued.

----

.. _api_Animation_totalDuration:

 int32_t **Animation::totalDuration** () const

Returns the duration (in milliseconds) in total as sum of durations for all loops.

**Note:** Returns -1 in case of infinite animation.


