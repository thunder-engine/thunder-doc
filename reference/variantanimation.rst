.. _api_VariantAnimation:
VariantAnimation Class
================

Inherited: :ref:`Animation<api_Animation>`

.. _api_VariantAnimation_description:
Description
-----------

The VariantAnimation is a base class for all animation tracks.

This class allows to change values in time. VariantAnimation uses key-frame animation mechanism. Developers should specify sequence of key values wich pair of point in time and key value. While animation is playing specific interpolation function moves from one key-frame to another and changing controled value.

List of supported Variant types for animation:



.. _api_VariantAnimation_public:
Public Methods
--------------

+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                                             | :ref:`VariantAnimation<api_VariantAnimation_VariantAnimation>` ()                           |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                                             | :ref:`~VariantAnimation<api_VariantAnimation_~VariantAnimation>` ()                         |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                 :ref:`Variant<api_Variant>` | :ref:`currentValue<api_VariantAnimation_currentValue>` () const                             |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
| :ref:`AnimationCurve<api_AnimationCurve>` * | :ref:`curve<api_VariantAnimation_curve>` (int  component = 0) const                         |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                         :ref:`int<api_int>` | :ref:`loopDuration<api_VariantAnimation_loopDuration>` () const                             |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setCurrentTime<api_VariantAnimation_setCurrentTime>` (int  msecs)                     |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setCurrentValue<api_VariantAnimation_setCurrentValue>` (const Variant & value)        |
+---------------------------------------------+---------------------------------------------------------------------------------------------+
|                       :ref:`void<api_void>` | :ref:`setCurve<api_VariantAnimation_setCurve>` (AnimationCurve * curve, int  component = 0) |
+---------------------------------------------+---------------------------------------------------------------------------------------------+

.. _api_VariantAnimation_static:
Static Methods
--------------

None

.. _api_VariantAnimation_methods:
Methods Description
-------------------

.. _api_VariantAnimation_VariantAnimation:

**VariantAnimation::VariantAnimation** ()

Default constructs an instance of VariantAnimation.

----

.. _api_VariantAnimation_~VariantAnimation:

**VariantAnimation::~VariantAnimation** ()

Destroys the instance of VariantAnimation. The destructor is virtual.

----

.. _api_VariantAnimation_currentValue:

:ref:`Variant<api_Variant>`  **VariantAnimation::currentValue** () const

Returns the current value for the animated Variant.

**See also** setCurrentValue().

----

.. _api_VariantAnimation_curve:

:ref:`AnimationCurve<api_AnimationCurve>` * **VariantAnimation::curve** (:ref:`int<api_int>`  *component* = 0) const

**See also** setCurve().

----

.. _api_VariantAnimation_loopDuration:

:ref:`int<api_int>`  **VariantAnimation::loopDuration** () const

Returns the duration of the animation (in milliseconds).

----

.. _api_VariantAnimation_setCurrentTime:

:ref:`void<api_void>`  **VariantAnimation::setCurrentTime** (:ref:`int<api_int>`  *msecs*)

This is an overloaded function.

This function interpolates animated Variant value from one KeyFrame to another.

----

.. _api_VariantAnimation_setCurrentValue:

:ref:`void<api_void>`  **VariantAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Sets the new current *value* for the animated Variant.

**See also** currentValue().

----

.. _api_VariantAnimation_setCurve:

:ref:`void<api_void>`  **VariantAnimation::setCurve** (:ref:`AnimationCurve<api_AnimationCurve>` * *curve*, :ref:`int<api_int>`  *component* = 0)

Sets the new sequence of the key frames as *curve* for the provided conponent.

**See also** *curve*().

----


