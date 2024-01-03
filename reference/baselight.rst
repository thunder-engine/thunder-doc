.. _api_BaseLight:

BaseLight Class
===============

Inherited: :doc:`NativeBehaviour<api_NativeBehaviour>`

.. _api_BaseLight_description:

Description
-----------

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_BaseLight_public:

Public Methods
--------------

+------------------------------+-----------------------------------------------------------------------------+
|                        float | :ref:`brightness<api_BaseLight_brightness>` () const                        |
+------------------------------+-----------------------------------------------------------------------------+
|                         bool | :ref:`castShadows<api_BaseLight_castShadows>` () const                      |
+------------------------------+-----------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_BaseLight_color>` () const                                  |
+------------------------------+-----------------------------------------------------------------------------+
|                          int | :ref:`lightType<api_BaseLight_lightType>` () const                          |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setBrightness<api_BaseLight_setBrightness>` (const float  brightness) |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setCastShadows<api_BaseLight_setCastShadows>` (const bool  shadows)   |
+------------------------------+-----------------------------------------------------------------------------+
|                         void | :ref:`setColor<api_BaseLight_setColor>` (const Vector4  color)              |
+------------------------------+-----------------------------------------------------------------------------+



.. _api_BaseLight_static:

Static Methods
--------------

None

.. _api_BaseLight_methods:

Methods Description
-------------------

.. _api_BaseLight_brightness:

 float **BaseLight::brightness** () const

Returns a brightness of emitting light.

**See also** setBrightness().

----

.. _api_BaseLight_castShadows:

 bool **BaseLight::castShadows** () const

Returns true if the light source can cast shadows; otherwise returns false.

**See also** setCastShadows().

----

.. _api_BaseLight_color:

 :ref:`Vector4<api_Vector4>` **BaseLight::color** () const

Returns a color of emitting light.

**See also** setColor().

----

.. _api_BaseLight_lightType:

 int **BaseLight::lightType** () const

Return a type of the light. Fot more details refer to BaseLight::LightType

----

.. _api_BaseLight_setBrightness:

 void **BaseLight::setBrightness** (float  *brightness*)

Changes a *brightness* of emitting light.

**See also** *brightness*().

----

.. _api_BaseLight_setCastShadows:

 void **BaseLight::setCastShadows** (bool  *shadows*)

Enables or disables cast *shadows* ability for the light source.

**See also** castShadows().

----

.. _api_BaseLight_setColor:

 void **BaseLight::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes a *color* of emitting light.

**See also** *color*().


