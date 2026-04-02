.. _api_AreaLight:

AreaLight
=========

Inherited: None

.. _api_AreaLight_description:

Description
-----------

To determine the emiter position AreaLight uses Transform component of the own Actor.



.. _api_AreaLight_public:

Public Methods
--------------

+--------+----------------------------------------------------------------+
|  float | :ref:`radius<api_AreaLight_5b0d894f>` () const                 |
+--------+----------------------------------------------------------------+
|   void | :ref:`setRadius<api_AreaLight_1340c6ef>` (float  radius)       |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceHeight<api_AreaLight_67fa1e23>` (float  height) |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceWidth<api_AreaLight_150436a2>` (float  width)   |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceHeight<api_AreaLight_a5c73b8e>` () const           |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceWidth<api_AreaLight_e0cda43b>` () const            |
+--------+----------------------------------------------------------------+



.. _api_AreaLight_static:

Static Methods
--------------

None

.. _api_AreaLight_methods:

Methods Description
-------------------

.. _api_AreaLight_5b0d894f:

 float **AreaLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_AreaLight_1340c6ef:

 void **AreaLight::setRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** *radius*().

----

.. _api_AreaLight_67fa1e23:

 void **AreaLight::setSourceHeight** (float  *height*)

Changes the source *height* of the light.

**See also** sourceHeight().

----

.. _api_AreaLight_150436a2:

 void **AreaLight::setSourceWidth** (float  *width*)

Changes the source *width* of the light.

**See also** sourceWidth().

----

.. _api_AreaLight_a5c73b8e:

 float **AreaLight::sourceHeight** () const

Returns the source height of the light.

**See also** setSourceHeight().

----

.. _api_AreaLight_e0cda43b:

 float **AreaLight::sourceWidth** () const

Returns the source width of the light.

**See also** setSourceWidth().


