.. _api_PointLight:

PointLight
==========

Inherited: :doc:`BaseLight<api_BaseLight>`

.. _api_PointLight_description:

Description
-----------

To determine the emiter position PointLight uses Transform component of the own Actor.



.. _api_PointLight_public:

Public Methods
--------------

+--------+----------------------------------------------------------------------------------+
|  float | :ref:`attenuationRadius<api_PointLight_attenuationRadius>` () const              |
+--------+----------------------------------------------------------------------------------+
|   void | :ref:`setAttenuationRadius<api_PointLight_setAttenuationRadius>` (float  radius) |
+--------+----------------------------------------------------------------------------------+
|   void | :ref:`setSourceLength<api_PointLight_setSourceLength>` (float  length)           |
+--------+----------------------------------------------------------------------------------+
|   void | :ref:`setSourceRadius<api_PointLight_setSourceRadius>` (float  radius)           |
+--------+----------------------------------------------------------------------------------+
|  float | :ref:`sourceLength<api_PointLight_sourceLength>` () const                        |
+--------+----------------------------------------------------------------------------------+
|  float | :ref:`sourceRadius<api_PointLight_sourceRadius>` () const                        |
+--------+----------------------------------------------------------------------------------+



.. _api_PointLight_static:

Static Methods
--------------

None

.. _api_PointLight_methods:

Methods Description
-------------------

.. _api_PointLight_attenuationRadius:

 float **PointLight::attenuationRadius** () const

Returns the attenuation radius of the light.

**See also** setAttenuationRadius().

----

.. _api_PointLight_setAttenuationRadius:

 void **PointLight::setAttenuationRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** attenuationRadius().

----

.. _api_PointLight_setSourceLength:

 void **PointLight::setSourceLength** (float  *length*)

Changes the source *length* of the light.

**See also** sourceLength().

----

.. _api_PointLight_setSourceRadius:

 void **PointLight::setSourceRadius** (float  *radius*)

Changes the source *radius* of the light.

**See also** sourceRadius().

----

.. _api_PointLight_sourceLength:

 float **PointLight::sourceLength** () const

Returns the source length of the light.

**See also** setSourceLength().

----

.. _api_PointLight_sourceRadius:

 float **PointLight::sourceRadius** () const

Returns the source radius of the light.

**See also** setSourceRadius().


