.. _api_BaseLight:

BaseLight
=========

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_BaseLight_description:

Description
-----------


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_BaseLight_public:

Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------+
|                               float | :ref:`brightness<api_BaseLight_26af0951>` () const                     |
+-------------------------------------+------------------------------------------------------------------------+
|                                bool | :ref:`castShadows<api_BaseLight_a2c836fd>` () const                    |
+-------------------------------------+------------------------------------------------------------------------+
|         :ref:`Vector4<api_Vector4>` | :ref:`color<api_BaseLight_b18fda70>` () const                          |
+-------------------------------------+------------------------------------------------------------------------+
| const :ref:`Matrix4<api_Matrix4>` & | :ref:`cropMatrix<api_BaseLight_f840bc91>` (int  index)                 |
+-------------------------------------+------------------------------------------------------------------------+
|                                 int | :ref:`lightType<api_BaseLight_fc769521>` () const                      |
+-------------------------------------+------------------------------------------------------------------------+
|                                void | :ref:`setBrightness<api_BaseLight_57069e8f>` (const float  brightness) |
+-------------------------------------+------------------------------------------------------------------------+
|                                void | :ref:`setCastShadows<api_BaseLight_0691ed28>` (const bool  shadows)    |
+-------------------------------------+------------------------------------------------------------------------+
|                                void | :ref:`setColor<api_BaseLight_6d32471b>` (const Vector4  color)         |
+-------------------------------------+------------------------------------------------------------------------+
|                                 int | :ref:`tilesCount<api_BaseLight_72eb3c58>` () const                     |
+-------------------------------------+------------------------------------------------------------------------+



.. _api_BaseLight_static:

Static Methods
--------------

None

.. _api_BaseLight_methods:

Methods Description
-------------------

.. _api_BaseLight_26af0951:

 float **BaseLight::brightness** () const

Returns a brightness of emitting light.

**See also** setBrightness().

----

.. _api_BaseLight_a2c836fd:

 bool **BaseLight::castShadows** () const

Returns true if the light source can cast shadows; otherwise returns false.

**See also** setCastShadows().

----

.. _api_BaseLight_b18fda70:

 :ref:`Vector4<api_Vector4>`  **BaseLight::color** () const

Returns a color of emitting light.

**See also** setColor().

----

.. _api_BaseLight_f840bc91:

const :ref:`Matrix4<api_Matrix4>` & **BaseLight::cropMatrix** (int  *index*)

Returns the crop matrix at cascade index.

----

.. _api_BaseLight_fc769521:

 int **BaseLight::lightType** () const

Return a type of the light. Fot more details refer to BaseLight::LightType

----

.. _api_BaseLight_57069e8f:

 void **BaseLight::setBrightness** (float  *brightness*)

Changes a *brightness* of emitting light.

**See also** brightness().

----

.. _api_BaseLight_0691ed28:

 void **BaseLight::setCastShadows** (bool  *shadows*)

Enables or disables cast *shadows* ability for the light source.

**See also** castShadows().

----

.. _api_BaseLight_6d32471b:

 void **BaseLight::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes a *color* of emitting light.

**See also** color().

----

.. _api_BaseLight_72eb3c58:

 int **BaseLight::tilesCount** () const

Returns number of shadow map atlas tiles required for this light source.


