.. _api_PointLight:

PointLight
==========

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_PointLight_description:

Description
-----------

To determine the emiter position PointLight uses Transform component of the own Actor.



.. _api_PointLight_public:

Public Methods
--------------

+--------+----------------------------------------------------------------------+
|  float | :ref:`attenuationRadius<api_PointLight_46e8baf5>` () const           |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setAttenuationRadius<api_PointLight_0de14923>` (float  radius) |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setSourceLength<api_PointLight_fe9576ab>` (float  length)      |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setSourceRadius<api_PointLight_0ef2186d>` (float  radius)      |
+--------+----------------------------------------------------------------------+
|  float | :ref:`sourceLength<api_PointLight_b830f49c>` () const                |
+--------+----------------------------------------------------------------------+
|  float | :ref:`sourceRadius<api_PointLight_310da6c2>` () const                |
+--------+----------------------------------------------------------------------+



.. _api_PointLight_static:

Static Methods
--------------

None

.. _api_PointLight_methods:

Methods Description
-------------------

.. _api_PointLight_46e8baf5:

 float **PointLight::attenuationRadius** () const

Returns the attenuation radius of the light.

**See also** setAttenuationRadius().

----

.. _api_PointLight_0de14923:

 void **PointLight::setAttenuationRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** attenuationRadius().

----

.. _api_PointLight_fe9576ab:

 void **PointLight::setSourceLength** (float  *length*)

Changes the source *length* of the light.

**See also** sourceLength().

----

.. _api_PointLight_0ef2186d:

 void **PointLight::setSourceRadius** (float  *radius*)

Changes the source *radius* of the light.

**See also** sourceRadius().

----

.. _api_PointLight_b830f49c:

 float **PointLight::sourceLength** () const

Returns the source length of the light.

**See also** setSourceLength().

----

.. _api_PointLight_310da6c2:

 float **PointLight::sourceRadius** () const

Returns the source radius of the light.

**See also** setSourceRadius().


