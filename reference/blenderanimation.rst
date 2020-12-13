.. _api_BlenderAnimation:
BlenderAnimation Class
================

Inherited: :ref:`Animation<api_Animation>`

.. _api_BlenderAnimation_description:
Description
-----------

The BlenderAnimation helps to developers to mix animation tracks with various mixing parameters.



.. _api_BlenderAnimation_public:
Public Methods
--------------

+-----------------------------+--------------------------------------------------------------------------------------+
| :ref:`Variant<api_Variant>` | :ref:`defaultValue<api_BlenderAnimation_defaultValue>` ()                            |
+-----------------------------+--------------------------------------------------------------------------------------+
| :ref:`int32_t<api_int32_t>` | :ref:`loopDuration<api_BlenderAnimation_loopDuration>` () const                      |
+-----------------------------+--------------------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setCurrentTime<api_BlenderAnimation_setCurrentTime>` (uint32_t  posintion)     |
+-----------------------------+--------------------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setCurrentValue<api_BlenderAnimation_setCurrentValue>` (const Variant & value) |
+-----------------------------+--------------------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setDefaultValue<api_BlenderAnimation_setDefaultValue>` (const Variant & value) |
+-----------------------------+--------------------------------------------------------------------------------------+



.. _api_BlenderAnimation_static:
Static Methods
--------------

None

.. _api_BlenderAnimation_methods:
Methods Description
-------------------

.. _api_BlenderAnimation_defaultValue:

:ref:`Variant<api_Variant>`  **BlenderAnimation::defaultValue** ()

Returns the default value for the animated curve. This value will be used if no animation data is available at the current time frame.

**See also** setDefaultValue().

----

.. _api_BlenderAnimation_loopDuration:

:ref:`int32_t<api_int32_t>`  **BlenderAnimation::loopDuration** () const

Reimplements: Animation::loopDuration() const.

Returns the duration of the animation (in milliseconds).

----

.. _api_BlenderAnimation_setCurrentTime:

:ref:`void<api_void>`  **BlenderAnimation::setCurrentTime** (:ref:`uint32_t<api_uint32_t>`  *posintion*)

Reimplements: Animation::setCurrentTime(uint32_t msecs).

This is an overloaded function.

This function interpolates animated Variant value from one KeyFrame to another at *posintion* in milliseconds.

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


