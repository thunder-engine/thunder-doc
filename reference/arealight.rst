.. _api_AreaLight:

AreaLight Class
===============

Inherited: :doc:`BaseLight<api_BaseLight>`

.. _api_AreaLight_description:

Description
-----------

To determine the emiter position AreaLight uses Transform component of the own Actor.



.. _api_AreaLight_public:

Public Methods
--------------

+--------+-----------------------------------------------------------------------+
|  float | :ref:`radius<api_AreaLight_radius>` () const                          |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setRadius<api_AreaLight_setRadius>` (float  radius)             |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setSourceHeight<api_AreaLight_setSourceHeight>` (float  height) |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setSourceWidth<api_AreaLight_setSourceWidth>` (float  width)    |
+--------+-----------------------------------------------------------------------+
|  float | :ref:`sourceHeight<api_AreaLight_sourceHeight>` () const              |
+--------+-----------------------------------------------------------------------+
|  float | :ref:`sourceWidth<api_AreaLight_sourceWidth>` () const                |
+--------+-----------------------------------------------------------------------+



.. _api_AreaLight_static:

Static Methods
--------------

None

.. _api_AreaLight_methods:

Methods Description
-------------------

.. _api_AreaLight_radius:

 float **AreaLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_AreaLight_setRadius:

 void **AreaLight::setRadius** (float  *radius*)

Changes the attenuation *radius* of the light.

**See also** *radius*().

----

.. _api_AreaLight_setSourceHeight:

 void **AreaLight::setSourceHeight** (float  *height*)

Changes the source *height* of the light.

**See also** sourceHeight().

----

.. _api_AreaLight_setSourceWidth:

 void **AreaLight::setSourceWidth** (float  *width*)

Changes the source *width* of the light.

**See also** sourceWidth().

----

.. _api_AreaLight_sourceHeight:

 float **AreaLight::sourceHeight** () const

Returns the source height of the light.

**See also** setSourceHeight().

----

.. _api_AreaLight_sourceWidth:

 float **AreaLight::sourceWidth** () const

Returns the source width of the light.

**See also** setSourceWidth().


