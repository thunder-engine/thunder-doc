.. _api_BaseLight:
BaseLight Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_BaseLight_description:
Description
-----------

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_BaseLight_public:
Public Methods
--------------

+-----------------------------+-----------------------------------------------------------------------------+
|     :ref:`float<api_float>` | :ref:`bias<api_BaseLight_bias>` () const                                    |
+-----------------------------+-----------------------------------------------------------------------------+
|     :ref:`float<api_float>` | :ref:`brightness<api_BaseLight_brightness>` () const                        |
+-----------------------------+-----------------------------------------------------------------------------+
|       :ref:`bool<api_bool>` | :ref:`castShadows<api_BaseLight_castShadows>` () const                      |
+-----------------------------+-----------------------------------------------------------------------------+
| :ref:`Vector4<api_Vector4>` | :ref:`color<api_BaseLight_color>` () const                                  |
+-----------------------------+-----------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setBias<api_BaseLight_setBias>` (const float  bias)                   |
+-----------------------------+-----------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setBrightness<api_BaseLight_setBrightness>` (const float  brightness) |
+-----------------------------+-----------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setCastShadows<api_BaseLight_setCastShadows>` (const bool  shadows)   |
+-----------------------------+-----------------------------------------------------------------------------+
|       :ref:`void<api_void>` | :ref:`setColor<api_BaseLight_setColor>` (const Vector4 & color)             |
+-----------------------------+-----------------------------------------------------------------------------+



.. _api_BaseLight_static:
Static Methods
--------------

None

.. _api_BaseLight_methods:
Methods Description
-------------------

.. _api_BaseLight_bias:

:ref:`float<api_float>`  **BaseLight::bias** () const

Returns shadow map bias value.

**See also** setBias().

----

.. _api_BaseLight_brightness:

:ref:`float<api_float>`  **BaseLight::brightness** () const

Returns a brightness of emitting light.

**See also** setBrightness().

----

.. _api_BaseLight_castShadows:

:ref:`bool<api_bool>`  **BaseLight::castShadows** () const

Returns true if the light source can cast shadows; otherwise returns false.

**See also** setCastShadows().

----

.. _api_BaseLight_color:

:ref:`Vector4<api_Vector4>`  **BaseLight::color** () const

Returns a color of emitting light.

**See also** setColor().

----

.. _api_BaseLight_setBias:

:ref:`void<api_void>`  **BaseLight::setBias** (:ref:`float<api_float>`  *bias*)

Changes shadow map *bias* value. You can use this value to mitigate the shadow map acne effect.

**See also** *bias*().

----

.. _api_BaseLight_setBrightness:

:ref:`void<api_void>`  **BaseLight::setBrightness** (:ref:`float<api_float>`  *brightness*)

Changes a *brightness* of emitting light.

**See also** *brightness*().

----

.. _api_BaseLight_setCastShadows:

:ref:`void<api_void>`  **BaseLight::setCastShadows** (:ref:`bool<api_bool>`  *shadows*)

Enables or disables cast *shadows* ability for the light source.

**See also** castShadows().

----

.. _api_BaseLight_setColor:

:ref:`void<api_void>`  **BaseLight::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes a *color* of emitting light.

**See also** *color*().

----


