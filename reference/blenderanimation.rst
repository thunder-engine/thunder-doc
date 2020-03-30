.. _api_BlenderAnimation:
BlenderAnimation Class
================

Inherited: :ref:`Animation<api_Animation>`

.. _api_BlenderAnimation_description:
Description
-----------

The BlenderAnimation class provides mechanism for blending of an animation tracks.

The BlenderAnimation helps to developers to mix animation tracks with various mixing parameters.



.. _api_BlenderAnimation_public:
Public Methods
--------------

+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                             | :ref:`BlenderAnimation<api_BlenderAnimation_BlenderAnimation>` ()                                     |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                             | :ref:`~BlenderAnimation<api_BlenderAnimation_~BlenderAnimation>` ()                                   |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
| :ref:`AnimationCurve<api_AnimationCurve>` * | :ref:`beginCurve<api_BlenderAnimation_beginCurve>` (int  component = 0) const                         |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                 :ref:`Variant<api_Variant>` | :ref:`defaultValue<api_BlenderAnimation_defaultValue>` ()                                             |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
| :ref:`AnimationCurve<api_AnimationCurve>` * | :ref:`endCurve<api_BlenderAnimation_endCurve>` (int  component = 0) const                             |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                         :ref:`int<api_int>` | :ref:`loopDuration<api_BlenderAnimation_loopDuration>` () const                                       |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setBeginCurve<api_BlenderAnimation_setBeginCurve>` (AnimationCurve * curve, int  component = 0) |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setCurrentTime<api_BlenderAnimation_setCurrentTime>` (int  msecs)                               |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setCurrentValue<api_BlenderAnimation_setCurrentValue>` (const Variant & value)                  |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setDefaultValue<api_BlenderAnimation_setDefaultValue>` (const Variant & value)                  |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setEndCurve<api_BlenderAnimation_setEndCurve>` (AnimationCurve * curve, int  component = 0)     |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setOffset<api_BlenderAnimation_setOffset>` (float  offset)                                      |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setTransitionTime<api_BlenderAnimation_setTransitionTime>` (float  time)                        |
+---------------------------------------------+-------------------------------------------------------------------------------------------------------+

.. _api_BlenderAnimation_static:
Static Methods
--------------

None

.. _api_BlenderAnimation_methods:
Methods Description
-------------------

.. _api_BlenderAnimation_BlenderAnimation:

**BlenderAnimation::BlenderAnimation** ()

Default constructs an instance of BlenderAnimation.

----

.. _api_BlenderAnimation_~BlenderAnimation:

**BlenderAnimation::~BlenderAnimation** ()

Destroys the instance of BlenderAnimation. The destructor is virtual.

----

.. _api_BlenderAnimation_beginCurve:

:ref:`AnimationCurve<api_AnimationCurve>` * **BlenderAnimation::beginCurve** (:ref:`int<api_int>`  *component* = 0) const

**See also** setBeginCurve().

----

.. _api_BlenderAnimation_defaultValue:

:ref:`Variant<api_Variant>`  **BlenderAnimation::defaultValue** ()

Returns the default value for the animated curve. This value will be used if no animation data is available at the current time frame.

**See also** setDefaultValue().

----

.. _api_BlenderAnimation_endCurve:

:ref:`AnimationCurve<api_AnimationCurve>` * **BlenderAnimation::endCurve** (:ref:`int<api_int>`  *component* = 0) const

**See also** setEndCurve().

----

.. _api_BlenderAnimation_loopDuration:

:ref:`int<api_int>`  **BlenderAnimation::loopDuration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_BlenderAnimation_setBeginCurve:

:ref:`void<api_void>`  **BlenderAnimation::setBeginCurve** (:ref:`AnimationCurve<api_AnimationCurve>` * *curve*, :ref:`int<api_int>`  *component* = 0)

**See also** beginCurve().

----

.. _api_BlenderAnimation_setCurrentTime:

:ref:`void<api_void>`  **BlenderAnimation::setCurrentTime** (:ref:`int<api_int>`  *msecs*)

This is an overloaded function.

This function interpolates animated Variant value from one KeyFrame to another.

----

.. _api_BlenderAnimation_setCurrentValue:

:ref:`void<api_void>`  **BlenderAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Sets the new current *value* for the animated Variant.

----

.. _api_BlenderAnimation_setDefaultValue:

:ref:`void<api_void>`  **BlenderAnimation::setDefaultValue** (:ref:`Variant<api_Variant>` & *value*)

Sets the default *value* for the animated curve. This *value* will be used if no animation data is available at the current time frame.

**See also** defaultValue().

----

.. _api_BlenderAnimation_setEndCurve:

:ref:`void<api_void>`  **BlenderAnimation::setEndCurve** (:ref:`AnimationCurve<api_AnimationCurve>` * *curve*, :ref:`int<api_int>`  *component* = 0)

**See also** endCurve().

----

.. _api_BlenderAnimation_setOffset:

:ref:`void<api_void>`  **BlenderAnimation::setOffset** (:ref:`float<api_float>`  *offset*)

----

.. _api_BlenderAnimation_setTransitionTime:

:ref:`void<api_void>`  **BlenderAnimation::setTransitionTime** (:ref:`float<api_float>`  *time*)

----


