.. _api_PointLight:
PointLight Class
================

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_PointLight_description:
Description
-----------

To determine the emiter position PointLight uses Transform component of the own Actor.



.. _api_PointLight_public:
Public Methods
--------------

+-------------------------+------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`radius<api_PointLight_radius>` () const              |
+-------------------------+------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setRadius<api_PointLight_setRadius>` (float  radius) |
+-------------------------+------------------------------------------------------------+

.. _api_PointLight_static:
Static Methods
--------------

None

.. _api_PointLight_methods:
Methods Description
-------------------

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


