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
|  float | :ref:`radius<api_AreaLight_04819753>` () const                 |
+--------+----------------------------------------------------------------+
|   void | :ref:`setRadius<api_AreaLight_b0c7f823>` (float  radius)       |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceHeight<api_AreaLight_e2f65079>` (float  height) |
+--------+----------------------------------------------------------------+
|   void | :ref:`setSourceWidth<api_AreaLight_a95b4862>` (float  width)   |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceHeight<api_AreaLight_4d180ae7>` () const           |
+--------+----------------------------------------------------------------+
|  float | :ref:`sourceWidth<api_AreaLight_02f39ed1>` () const            |
+--------+----------------------------------------------------------------+



.. _api_AreaLight_static:

Static Methods
--------------

None

.. _api_AreaLight_methods:

Methods Description
-------------------

.. _api_AreaLight_04819753:

 float **AreaLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_AreaLight_b0c7f823:

 void **AreaLight::setRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** radius().

----

.. _api_AreaLight_e2f65079:

 void **AreaLight::setSourceHeight** (float  *height*)

Changes the source *height* of the light.

**See also** sourceHeight().

----

.. _api_AreaLight_a95b4862:

 void **AreaLight::setSourceWidth** (float  *width*)

Changes the source *width* of the light.

**See also** sourceWidth().

----

.. _api_AreaLight_4d180ae7:

 float **AreaLight::sourceHeight** () const

Returns the source height of the light.

**See also** setSourceHeight().

----

.. _api_AreaLight_02f39ed1:

 float **AreaLight::sourceWidth** () const

Returns the source width of the light.

**See also** setSourceWidth().


