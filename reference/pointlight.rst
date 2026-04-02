.. _api_PointLight:

PointLight
==========

Inherited: None

.. _api_PointLight_description:

Description
-----------

To determine the emiter position PointLight uses Transform component of the own Actor.



.. _api_PointLight_public:

Public Methods
--------------

+--------+----------------------------------------------------------------------+
|  float | :ref:`attenuationRadius<api_PointLight_ba0791e6>` () const           |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setAttenuationRadius<api_PointLight_87ad36c2>` (float  radius) |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setSourceLength<api_PointLight_f3d4026a>` (float  length)      |
+--------+----------------------------------------------------------------------+
|   void | :ref:`setSourceRadius<api_PointLight_0e24c3fb>` (float  radius)      |
+--------+----------------------------------------------------------------------+
|  float | :ref:`sourceLength<api_PointLight_0c6d5f93>` () const                |
+--------+----------------------------------------------------------------------+
|  float | :ref:`sourceRadius<api_PointLight_4329e86c>` () const                |
+--------+----------------------------------------------------------------------+



.. _api_PointLight_static:

Static Methods
--------------

None

.. _api_PointLight_methods:

Methods Description
-------------------

.. _api_PointLight_ba0791e6:

 float **PointLight::attenuationRadius** () const

Returns the attenuation radius of the light.

**See also** setAttenuationRadius().

----

.. _api_PointLight_87ad36c2:

 void **PointLight::setAttenuationRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** attenuationRadius().

----

.. _api_PointLight_f3d4026a:

 void **PointLight::setSourceLength** (float  *length*)

Changes the source *length* of the light.

**See also** sourceLength().

----

.. _api_PointLight_0e24c3fb:

 void **PointLight::setSourceRadius** (float  *radius*)

Changes the source *radius* of the light.

**See also** sourceRadius().

----

.. _api_PointLight_0c6d5f93:

 float **PointLight::sourceLength** () const

Returns the source length of the light.

**See also** setSourceLength().

----

.. _api_PointLight_4329e86c:

 float **PointLight::sourceRadius** () const

Returns the source radius of the light.

**See also** setSourceRadius().


