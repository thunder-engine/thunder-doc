.. _api_Timer:

Timer
=====

Inherited: None

.. _api_Timer_description:

Description
-----------

The Timer class helps to make your game more smooth and accurate. This class is used in all systems which doing any animation. Using deltaTime() method developers are able to calculate a logic based on delays for example shots or movements of your character. Time scale value can be used for the slow-motion effects because it applied for all deltaTime() values.



.. _api_Timer_public:

Public Methods
--------------

None



.. _api_Timer_static:

Static Methods
--------------

+--------+----------------------------------------------------+
|  float | :ref:`deltaTime<api_Timer_deltaTime>` ()           |
+--------+----------------------------------------------------+
|  float | :ref:`scale<api_Timer_scale>` ()                   |
+--------+----------------------------------------------------+
|   void | :ref:`setScale<api_Timer_setScale>` (float  scale) |
+--------+----------------------------------------------------+
|  float | :ref:`time<api_Timer_time>` ()                     |
+--------+----------------------------------------------------+

.. _api_Timer_methods:

Methods Description
-------------------

.. _api_Timer_deltaTime:

 float **Timer::deltaTime** ()

Returns the time in seconds since the last frame.

**Note:** This value is updated in each frame. In case of calling multiple times in a single frame will return the same result.

----

.. _api_Timer_scale:

 float **Timer::scale** ()

Return the time scale at which the time is passing.

**See also** setScale().

----

.. _api_Timer_setScale:

 void **Timer::setScale** (float  *scale*)

Sets the time *scale* at which the time is passing.

**See also** *scale*().

----

.. _api_Timer_time:

 float **Timer::time** ()

Returns the time in seconds since the start of the game.

**Note:** This value is updated in each frame. In case of calling multiple times in a single frame will return the same result.


