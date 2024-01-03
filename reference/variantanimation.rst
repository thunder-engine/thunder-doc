.. _api_VariantAnimation:

VariantAnimation Class
======================

Inherited: :doc:`Animation<api_Animation>`

.. _api_VariantAnimation_description:

Description
-----------

This class allows to change values in time. VariantAnimation uses key-frame animation mechanism. Developers should specify sequence of key values which pair of point in time and key value. While animation is playing specific interpolation function moves from one key-frame to another and changing controled value.

List of supported Variant types for animation:


MetaType::BOOLEAN
MetaType::INTEGER
MetaType::FLOAT
MetaType::VECTOR2
MetaType::VECTOR3
MetaType::VECTOR4




.. _api_VariantAnimation_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------------------+
|  :ref:`Variant<api_Variant>` | :ref:`currentValue<api_VariantAnimation_currentValue>` () const                                 |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                      int32_t | :ref:`duration<api_VariantAnimation_duration>` () const                                         |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setCurrentTime<api_VariantAnimation_setCurrentTime>` (int  position)                      |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setCurrentValue<api_VariantAnimation_setCurrentValue>` (const Variant & value)            |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setCurve<api_VariantAnimation_setCurve>` (AnimationCurve * curve, int32_t  component = 0) |
+------------------------------+-------------------------------------------------------------------------------------------------+
|                         void | :ref:`setDuration<api_VariantAnimation_setDuration>` (int32_t  duration)                        |
+------------------------------+-------------------------------------------------------------------------------------------------+



.. _api_VariantAnimation_static:

Static Methods
--------------

None

.. _api_VariantAnimation_methods:

Methods Description
-------------------

.. _api_VariantAnimation_currentValue:

 :ref:`Variant<api_Variant>` **VariantAnimation::currentValue** () const

Returns the current value for the animated Variant.

**See also** setCurrentValue().

----

.. _api_VariantAnimation_duration:

 int32_t **VariantAnimation::duration** () const

Reimplements: Animation::duration() const.

Returns the duration of the animation (in milliseconds).

**See also** setDuration().

----

.. _api_VariantAnimation_setCurrentTime:

 void **VariantAnimation::setCurrentTime** (int  *position*)

This is an overloaded function.

This function interpolates animated Variant value from one KeyFrame to another at *position* in milliseconds.

----

.. _api_VariantAnimation_setCurrentValue:

 void **VariantAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Sets the new current *value* for the animated Variant.

**See also** currentValue().

----

.. _api_VariantAnimation_setCurve:

 void **VariantAnimation::setCurve** (:ref:`AnimationCurve<api_AnimationCurve>` * *curve*, int32_t  *component* = 0)

Sets the new sequence of the key frames as *curve* for the provided *component*.

----

.. _api_VariantAnimation_setDuration:

 void **VariantAnimation::setDuration** (int32_t  *duration*)

Sets a new *duration* of the animation in milliseconds.

**See also** *duration*().


