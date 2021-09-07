.. _api_AreaLight:
AreaLight Class
================

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_AreaLight_description:
Description
-----------

Point Lights works much like a real-world light bulb, emitting light in all directions.

To determine the emiter position AreaLight uses Transform component of the own Actor.



.. _api_AreaLight_public:
Public Methods
--------------

+-------------------------+-----------------------------------------------------------------------+
|                         | :ref:`AreaLight<api_AreaLight_AreaLight>` ()                          |
+-------------------------+-----------------------------------------------------------------------+
|                         | :ref:`~AreaLight<api_AreaLight_~AreaLight>` ()                        |
+-------------------------+-----------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`radius<api_AreaLight_radius>` () const                          |
+-------------------------+-----------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setRadius<api_AreaLight_setRadius>` (float  radius)             |
+-------------------------+-----------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setSourceHeight<api_AreaLight_setSourceHeight>` (float  height) |
+-------------------------+-----------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setSourceWidth<api_AreaLight_setSourceWidth>` (float  width)    |
+-------------------------+-----------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`sourceHeight<api_AreaLight_sourceHeight>` () const              |
+-------------------------+-----------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`sourceWidth<api_AreaLight_sourceWidth>` () const                |
+-------------------------+-----------------------------------------------------------------------+



.. _api_AreaLight_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_AreaLight_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_AreaLight_properties>` () |
+-------------------------------------------------------------------+------------------------------------------------+

.. _api_AreaLight_methods:
Methods Description
-------------------

.. _api_AreaLight_AreaLight:

**AreaLight::AreaLight** ()

Default constructs an instance of AreaLight.

----

.. _api_AreaLight_~AreaLight:

**AreaLight::~AreaLight** ()

Destroys the instance of AreaLight. The destructor is virtual.

----

.. _api_AreaLight_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **AreaLight::methods** ()

----

.. _api_AreaLight_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **AreaLight::properties** ()

----

.. _api_AreaLight_radius:

:ref:`float<api_float>`  **AreaLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_AreaLight_setRadius:

:ref:`void<api_void>`  **AreaLight::setRadius** (:ref:`float<api_float>`  *radius*)

Changes the attenuation *radius* of the light.

**See also** *radius*().

----

.. _api_AreaLight_setSourceHeight:

:ref:`void<api_void>`  **AreaLight::setSourceHeight** (:ref:`float<api_float>`  *height*)

Changes the source *height* of the light.

**See also** sourceHeight().

----

.. _api_AreaLight_setSourceWidth:

:ref:`void<api_void>`  **AreaLight::setSourceWidth** (:ref:`float<api_float>`  *width*)

Changes the source *width* of the light.

**See also** sourceWidth().

----

.. _api_AreaLight_sourceHeight:

:ref:`float<api_float>`  **AreaLight::sourceHeight** () const

Returns the source height of the light.

**See also** setSourceHeight().

----

.. _api_AreaLight_sourceWidth:

:ref:`float<api_float>`  **AreaLight::sourceWidth** () const

Returns the source width of the light.

**See also** setSourceWidth().

----


