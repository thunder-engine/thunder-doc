.. _api_AreaLight:

AreaLight
=========

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_AreaLight_description:

Description
-----------

To determine the emiter position AreaLight uses Transform component of the own Actor.



.. _api_AreaLight_public:

Public Methods
--------------

+--------+----------------------------------------------------------------+
|  float | :ref:`radius<api_AreaLight_283ec0b9>` () const                 |
+--------+----------------------------------------------------------------+
|   void | :ref:`setRadius<api_AreaLight_9142bfed>` (float  radius)       |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceHeight<api_AreaLight_fae97625>` (float  height) |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceWidth<api_AreaLight_efd07ac6>` (float  width)   |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceHeight<api_AreaLight_9f7d683e>` () const           |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceWidth<api_AreaLight_6c412ad9>` () const            |
+--------+----------------------------------------------------------------+



.. _api_AreaLight_static:

Static Methods
--------------

None

.. _api_AreaLight_methods:

Methods Description
-------------------

.. _api_AreaLight_283ec0b9:

 float **AreaLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_AreaLight_9142bfed:

 void **AreaLight::setRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** radius().

----

.. _api_AreaLight_fae97625:

 void **AreaLight::setSourceHeight** (float  *height*)

Changes the source *height* of the light.

**See also** sourceHeight().

----

.. _api_AreaLight_efd07ac6:

 void **AreaLight::setSourceWidth** (float  *width*)

Changes the source *width* of the light.

**See also** sourceWidth().

----

.. _api_AreaLight_9f7d683e:

 float **AreaLight::sourceHeight** () const

Returns the source height of the light.

**See also** setSourceHeight().

----

.. _api_AreaLight_6c412ad9:

 float **AreaLight::sourceWidth** () const

Returns the source width of the light.

**See also** setSourceWidth().


