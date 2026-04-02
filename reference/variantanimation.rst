.. _api_VariantAnimation:

VariantAnimation
================

Inherited: None

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
MetaType::QUATERNION




.. _api_VariantAnimation_public:

Public Methods
--------------

+------------------------------+-------------------------------------------------------------------------------+
|  :ref:`Variant<api_Variant>` | :ref:`currentValue<api_VariantAnimation_f5c69da2>` () const                   |
+------------------------------+-------------------------------------------------------------------------------+
|                      int32_t | :ref:`duration<api_VariantAnimation_f3074a8e>` () const                       |
+------------------------------+-------------------------------------------------------------------------------+
|                         void | :ref:`setCurrentTime<api_VariantAnimation_67df59e4>` (uint32_t  position)     |
+------------------------------+-------------------------------------------------------------------------------+
|                         void | :ref:`setCurrentValue<api_VariantAnimation_694a58df>` (const Variant & value) |
+------------------------------+-------------------------------------------------------------------------------+
|                         void | :ref:`setCurve<api_VariantAnimation_269bc07f>` (const AnimationCurve & curve) |
+------------------------------+-------------------------------------------------------------------------------+
|                         void | :ref:`setDuration<api_VariantAnimation_2d15e860>` (int32_t  duration)         |
+------------------------------+-------------------------------------------------------------------------------+



.. _api_VariantAnimation_static:

Static Methods
--------------

None

.. _api_VariantAnimation_methods:

Methods Description
-------------------

.. _api_VariantAnimation_f5c69da2:

 :ref:`Variant<api_Variant>`  **VariantAnimation::currentValue** () const

Returns the current value for the animated Variant.

**See also** setCurrentValue().

----

.. _api_VariantAnimation_f3074a8e:

 int32_t **VariantAnimation::duration** () const

Reimplements: Animation::duration() const.

Returns the duration of the animation (in milliseconds).

**See also** setDuration().

----

.. _api_VariantAnimation_67df59e4:

 void **VariantAnimation::setCurrentTime** (uint32_t  *position*)

Reimplements: Animation::setCurrentTime(uint32_t msecs).

This is an overloaded function.

This function interpolates animated Variant value from one KeyFrame to another at *position* in milliseconds.

----

.. _api_VariantAnimation_694a58df:

 void **VariantAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Sets the new current *value* for the animated Variant.

**See also** currentValue().

----

.. _api_VariantAnimation_269bc07f:

 void **VariantAnimation::setCurve** (:ref:`AnimationCurve<api_AnimationCurve>` & *curve*)

Sets the new sequence of the key frames as *curve*.

----

.. _api_VariantAnimation_2d15e860:

 void **VariantAnimation::setDuration** (int32_t  *duration*)

Sets a new *duration* of the animation in milliseconds.

**See also** *duration*().


