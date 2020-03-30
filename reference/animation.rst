.. _api_Animation:
Animation Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Animation_description:
Description
-----------

The Animation class provides base class interface for animations.

The Animation class contain basic state machine to control animation processing.



.. _api_Animation_public:
Public Methods
--------------

+-----------------------------------------------+------------------------------------------------------------------+
|                                               | :ref:`Animation<api_Animation_Animation>` ()                     |
+-----------------------------------------------+------------------------------------------------------------------+
|                                               | :ref:`~Animation<api_Animation_~Animation>` ()                   |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`currentLoop<api_Animation_currentLoop>` () const           |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`currentTime<api_Animation_currentTime>` () const           |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`duration<api_Animation_duration>` () const                 |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`bool<api_bool>` | :ref:`isValid<api_Animation_isValid>` () const                   |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`loopCount<api_Animation_loopCount>` () const               |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`loopDuration<api_Animation_loopDuration>` () const         |
+-----------------------------------------------+------------------------------------------------------------------+
|                           :ref:`int<api_int>` | :ref:`loopTime<api_Animation_loopTime>` () const                 |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`pause<api_Animation_pause>` ()                             |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`resume<api_Animation_resume>` ()                           |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setCurrentTime<api_Animation_setCurrentTime>` (int  msecs) |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setLoopCount<api_Animation_setLoopCount>` (int  loops)     |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`setValid<api_Animation_setValid>` (bool  valid)            |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`start<api_Animation_start>` ()                             |
+-----------------------------------------------+------------------------------------------------------------------+
| :ref:`Animation::State<api_Animation::State>` | :ref:`state<api_Animation_state>` () const                       |
+-----------------------------------------------+------------------------------------------------------------------+
|                         :ref:`void<api_void>` | :ref:`stop<api_Animation_stop>` ()                               |
+-----------------------------------------------+------------------------------------------------------------------+

.. _api_Animation_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Animation_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Animation_properties>` () |
+-------------------------------------------------------------------+------------------------------------------------+

.. _api_Animation_methods:
Methods Description
-------------------

.. _api_Animation_Animation:

**Animation::Animation** ()

Default constructs an instance of Animation.

----

.. _api_Animation_~Animation:

**Animation::~Animation** ()

Destroys the instance of Animation. The destructor is virtual.

----

.. _api_Animation_currentLoop:

:ref:`int<api_int>`  **Animation::currentLoop** () const

Returns the number of repetitions of animation which already has played.

----

.. _api_Animation_currentTime:

:ref:`int<api_int>`  **Animation::currentTime** () const

Returns the current time (in milliseconds) in scope of current loop.

**See also** setCurrentTime().

----

.. _api_Animation_duration:

:ref:`int<api_int>`  **Animation::duration** () const

Returns the duration (in milliseconds) in total as sum of durations for all loops.

**Note:** Returns -1 in case of infinite animation.

----

.. _api_Animation_isValid:

:ref:`bool<api_bool>`  **Animation::isValid** () const

Returns true in case of animation is valid; otherwise returns false.

----

.. _api_Animation_loopCount:

:ref:`int<api_int>`  **Animation::loopCount** () const

Returns the number of repetitions of animation; -1 in case of infinite animation.

**See also** setLoopCount().

----

.. _api_Animation_loopDuration:

:ref:`int<api_int>`  **Animation::loopDuration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_Animation_loopTime:

:ref:`int<api_int>`  **Animation::loopTime** () const

Returns the current time for the current loop (in milliseconds).

----

.. _api_Animation_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Animation::methods** ()

----

.. _api_Animation_pause:

:ref:`void<api_void>`  **Animation::pause** ()

Stops the animation.

**Note:** Animation CAN be continued by resume().

----

.. _api_Animation_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Animation::properties** ()

----

.. _api_Animation_resume:

:ref:`void<api_void>`  **Animation::resume** ()

Continues the animation which was paused earlier.

----

.. _api_Animation_setCurrentTime:

:ref:`void<api_void>`  **Animation::setCurrentTime** (:ref:`int<api_int>`  *msecs*)

Sets the new position of animation to provided *msecs* position.

**Note:** If new position placed outside of current loop; Then current loop will be changed to appropriate.

**See also** currentTime().

----

.. _api_Animation_setLoopCount:

:ref:`void<api_void>`  **Animation::setLoopCount** (:ref:`int<api_int>`  *loops*)

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


