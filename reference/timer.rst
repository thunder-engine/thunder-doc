.. _api_Timer:
Timer Class
================

Inherited: None

.. _api_Timer_description:
Description
-----------

The Timer class helps to make your game more smooth and accurate. This class is used in all systems which doing any animation Using deltaTime() method developers are able to calculate a logic based on delays for example shots or movements of your character. Time scale value can be used for the slow-motion effects because it applied for all deltaTime() values.



.. _api_Timer_public:
Public Methods
--------------

None



.. _api_Timer_static:
Static Methods
--------------

+-------------------------+----------------------------------------------------+
| :ref:`float<api_float>` | :ref:`deltaTime<api_Timer_deltaTime>` ()           |
+-------------------------+----------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`init<api_Timer_init>` ()                     |
+-------------------------+----------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`reset<api_Timer_reset>` ()                   |
+-------------------------+----------------------------------------------------+
| :ref:`float<api_float>` | :ref:`scale<api_Timer_scale>` ()                   |
+-------------------------+----------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setScale<api_Timer_setScale>` (float  scale) |
+-------------------------+----------------------------------------------------+
| :ref:`float<api_float>` | :ref:`time<api_Timer_time>` ()                     |
+-------------------------+----------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`update<api_Timer_update>` ()                 |
+-------------------------+----------------------------------------------------+

.. _api_Timer_methods:
Methods Description
-------------------

.. _api_Timer_deltaTime:

:ref:`float<api_float>`  **Timer::deltaTime** ()

Returns the time in seconds since the last frame.

**Note:** This value is updated in each frame. In case of calling multiple times in a single frame will return the same result.

----

.. _api_Timer_init:

:ref:`void<api_void>`  **Timer::init** ()

Initialize the Timer module.

**Note:** This method calls internally and must not be called manually.

----

.. _api_Timer_reset:

:ref:`void<api_void>`  **Timer::reset** ()

Resets all Timer related variables.

**Note:** Usually, this method calls internally and must not be called manually.

----

.. _api_Timer_scale:

:ref:`float<api_float>`  **Timer::scale** ()

Return the time scale at which the time is passing.

**See also** setScale().

----

.. _api_Timer_setScale:

:ref:`void<api_void>`  **Timer::setScale** (:ref:`float<api_float>`  *scale*)

Sets the time *scale* at which the time is passing.

**See also** *scale*().

----

.. _api_Timer_time:

:ref:`float<api_float>`  **Timer::time** ()

Returns the time in seconds since the start of the game.

**Note:** This value is updated in each frame. In case of calling multiple times in a single frame will return the same result.

----

.. _api_Timer_update:

:ref:`void<api_void>`  **Timer::update** ()

Updates all Timer related variables.

**Note:** Usually, this method calls internally and must not be called manually.

----


