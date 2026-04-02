.. _api_BaseLight:

BaseLight
=========

Inherited: None

.. _api_BaseLight_description:

Description
-----------


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_BaseLight_public:

Public Methods
--------------

+------------------------------+------------------------------------------------------------------------+
|                        float | :ref:`brightness<api_BaseLight_f3a06e89>` () const                     |
+------------------------------+------------------------------------------------------------------------+
|                         bool | :ref:`castShadows<api_BaseLight_65dce210>` () const                    |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`color<api_BaseLight_93c4f861>` () const                          |
+------------------------------+------------------------------------------------------------------------+
|                          int | :ref:`lightType<api_BaseLight_83ad2614>` () const                      |
+------------------------------+------------------------------------------------------------------------+
|                         void | :ref:`setBrightness<api_BaseLight_8df69c32>` (const float  brightness) |
+------------------------------+------------------------------------------------------------------------+
|                         void | :ref:`setCastShadows<api_BaseLight_3ef6d871>` (const bool  shadows)    |
+------------------------------+------------------------------------------------------------------------+
|                         void | :ref:`setColor<api_BaseLight_3102f7ab>` (const Vector4  color)         |
+------------------------------+------------------------------------------------------------------------+



.. _api_BaseLight_static:

Static Methods
--------------

None

.. _api_BaseLight_methods:

Methods Description
-------------------

.. _api_BaseLight_f3a06e89:

 float **BaseLight::brightness** () const

Returns a brightness of emitting light.

**See also** setBrightness().

----

.. _api_BaseLight_65dce210:

 bool **BaseLight::castShadows** () const

Returns true if the light source can cast shadows; otherwise returns false.

**See also** setCastShadows().

----

.. _api_BaseLight_93c4f861:

 :ref:`Vector4<api_Vector4>`  **BaseLight::color** () const

Returns a color of emitting light.

**See also** setColor().

----

.. _api_BaseLight_83ad2614:

 int **BaseLight::lightType** () const

Return a type of the light. Fot more details refer to BaseLight::LightType

----

.. _api_BaseLight_8df69c32:

 void **BaseLight::setBrightness** (float  *brightness*)

Changes a *brightness* of emitting light.

**See also** *brightness*().

----

.. _api_BaseLight_3ef6d871:

 void **BaseLight::setCastShadows** (bool  *shadows*)

Enables or disables cast *shadows* ability for the light source.

**See also** castShadows().

----

.. _api_BaseLight_3102f7ab:

 void **BaseLight::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes a *color* of emitting light.

**See also** *color*().


