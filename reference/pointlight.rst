.. _api_PointLight:
PointLight Class
================

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_PointLight_description:
Description
-----------

Point Lights works much like a real-world light bulb, emitting light in all directions.

To determine the emiter position PointLight uses Transform component of the own Actor.



.. _api_PointLight_public:
Public Methods
--------------

+-------------------------+------------------------------------------------------------+
|                         | :ref:`PointLight<api_PointLight_PointLight>` ()            |
+-------------------------+------------------------------------------------------------+
|                         | :ref:`~PointLight<api_PointLight_~PointLight>` ()          |
+-------------------------+------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`radius<api_PointLight_radius>` () const              |
+-------------------------+------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setRadius<api_PointLight_setRadius>` (float  radius) |
+-------------------------+------------------------------------------------------------+

.. _api_PointLight_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_PointLight_properties>` () |
+-------------------------------------------------------------------+-------------------------------------------------+

.. _api_PointLight_methods:
Methods Description
-------------------

.. _api_PointLight_PointLight:

**PointLight::PointLight** ()

Default constructs an instance of PointLight.

----

.. _api_PointLight_~PointLight:

**PointLight::~PointLight** ()

Destroys the instance of PointLight. The destructor is virtual.

----

.. _api_PointLight_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **PointLight::properties** ()

----

.. _api_PointLight_radius:

:ref:`float<api_float>`  **PointLight::radius** () const

Returns the attenuation radius of the light.

**See also** setRadius().

----

.. _api_PointLight_setRadius:

:ref:`void<api_void>`  **PointLight::setRadius** (:ref:`float<api_float>`  *radius*)

Changes the attenuation *radius* of the light.

**See also** *radius*().

----


