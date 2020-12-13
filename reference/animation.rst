.. _api_Animation:
Animation Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Animation_description:
Description
-----------

The Animation class contain basic state machine to control animation processing.



.. _api_Animation_public:
Public Methods
--------------

+-----------------------------------------------+-----------------------------------------------------------------------+
|                 :ref:`uint32_t<api_uint32_t>` | :ref:`currentLoop<api_Animation_currentLoop>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                 :ref:`uint32_t<api_uint32_t>` | :ref:`currentTime<api_Animation_currentTime>` () const                |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                   :ref:`int32_t<api_int32_t>` | :ref:`duration<api_Animation_duration>` () const                      |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`bool<api_bool>` | :ref:`isValid<api_Animation_isValid>` () const                        |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                   :ref:`int32_t<api_int32_t>` | :ref:`loopCount<api_Animation_loopCount>` () const                    |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                   :ref:`int32_t<api_int32_t>` | :ref:`loopDuration<api_Animation_loopDuration>` () const              |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                 :ref:`uint32_t<api_uint32_t>` | :ref:`loopTime<api_Animation_loopTime>` () const                      |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`pause<api_Animation_pause>` ()                                  |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`resume<api_Animation_resume>` ()                                |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setCurrentTime<api_Animation_setCurrentTime>` (uint32_t  msecs) |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setLoopCount<api_Animation_setLoopCount>` (int32_t  loops)      |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setValid<api_Animation_setValid>` (bool  valid)                 |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`start<api_Animation_start>` ()                                  |
+-----------------------------------------------+-----------------------------------------------------------------------+
| :ref:`Animation::State<api_Animation::State>` | :ref:`state<api_Animation_state>` () const                            |
+-----------------------------------------------+-----------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`stop<api_Animation_stop>` ()                                    |
+-----------------------------------------------+-----------------------------------------------------------------------+

.. _api_Animation_enums:
Public Enums
--------------

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

:ref:`uint32_t<api_uint32_t>`  **Animation::currentLoop** () const

Returns the number of repetitions of animation which already has played.

----

.. _api_Animation_currentTime:

:ref:`uint32_t<api_uint32_t>`  **Animation::currentTime** () const

Returns the current time (in milliseconds) in scope of current loop.

**See also** setCurrentTime().

----

.. _api_Animation_duration:

:ref:`int32_t<api_int32_t>`  **Animation::duration** () const

Returns the duration (in milliseconds) in total as sum of durations for all loops.

**Note:** Returns -1 in case of infinite animation.

----

.. _api_Animation_isValid:

:ref:`bool<api_bool>`  **Animation::isValid** () const

Returns true in case of animation is valid; otherwise returns false.

----

.. _api_Animation_loopCount:

:ref:`int32_t<api_int32_t>`  **Animation::loopCount** () const

Returns the number of repetitions of animation; -1 in case of infinite animation.

**See also** setLoopCount().

----

.. _api_Animation_loopDuration:

:ref:`int32_t<api_int32_t>`  **Animation::loopDuration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_Animation_loopTime:

:ref:`uint32_t<api_uint32_t>`  **Animation::loopTime** () const

Returns the current time for the current loop (in milliseconds).

----

.. _api_Animation_pause:

:ref:`void<api_void>`  **Animation::pause** ()

Stops the animation.

**Note:** Animation CAN be continued by resume().

----

.. _api_Animation_resume:

:ref:`void<api_void>`  **Animation::resume** ()

Continues the animation which was paused earlier.

----

.. _api_Animation_setCurrentTime:

:ref:`void<api_void>`  **Animation::setCurrentTime** (:ref:`uint32_t<api_uint32_t>`  *msecs*)

Sets the new position of animation to provided *msecs* position.

**Note:** If new position placed outside of current loop; Then current loop will be changed to appropriate.

**See also** currentTime().

----

.. _api_Animation_setLoopCount:

:ref:`void<api_void>`  **Animation::setLoopCount** (:ref:`int32_t<api_int32_t>`  *loops*)

Sets the new number of *loops* of animation.

**See also** loopCount().

----

.. _api_Animation_setValid:

:ref:`void<api_void>`  **Animation::setValid** (:ref:`bool<api_bool>`  *valid*)

Sets the *valid* state of animation. The invalid animations will not affect anything.

**See also** isValid().

----

.. _api_Animation_start:

:ref:`void<api_void>`  **Animation::start** ()

Starts the animation from the beginning.

----

.. _api_Animation_state:

:ref:`Animation::State<api_Animation::State>`  **Animation::state** () const

Returns the current state of animation.

----

.. _api_Animation_stop:

:ref:`void<api_void>`  **Animation::stop** ()

Stops the animation.

**Note:** Animation can't be continued.

----


