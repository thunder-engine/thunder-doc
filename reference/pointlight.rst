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

+-------------------------+----------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`attenuationRadius<api_PointLight_attenuationRadius>` () const              |
+-------------------------+----------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setAttenuationRadius<api_PointLight_setAttenuationRadius>` (float  radius) |
+-------------------------+----------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setSourceLength<api_PointLight_setSourceLength>` (float  length)           |
+-------------------------+----------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setSourceRadius<api_PointLight_setSourceRadius>` (float  radius)           |
+-------------------------+----------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`sourceLength<api_PointLight_sourceLength>` () const                        |
+-------------------------+----------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`sourceRadius<api_PointLight_sourceRadius>` () const                        |
+-------------------------+----------------------------------------------------------------------------------+



.. _api_PointLight_static:
Static Methods
--------------

None

.. _api_PointLight_methods:
Methods Description
-------------------

.. _api_PointLight_attenuationRadius:

:ref:`float<api_float>`  **PointLight::attenuationRadius** () const

Returns the attenuation radius of the light.

**See also** setAttenuationRadius().

----

.. _api_PointLight_setAttenuationRadius:

:ref:`void<api_void>`  **PointLight::setAttenuationRadius** (:ref:`float<api_float>`  *radius*)

Changes the attenuation *radius* of the light.

**See also** attenuationRadius().

----

.. _api_PointLight_setSourceLength:

:ref:`void<api_void>`  **PointLight::setSourceLength** (:ref:`float<api_float>`  *length*)

Changes the source *length* of the light.

**See also** sourceLength().

----

.. _api_PointLight_setSourceRadius:

:ref:`void<api_void>`  **PointLight::setSourceRadius** (:ref:`float<api_float>`  *radius*)

Changes the source *radius* of the light.

**See also** sourceRadius().

----

.. _api_PointLight_sourceLength:

:ref:`float<api_float>`  **PointLight::sourceLength** () const

Returns the source length of the light.

**See also** setSourceLength().

----

.. _api_PointLight_sourceRadius:

:ref:`float<api_float>`  **PointLight::sourceRadius** () const

Returns the source radius of the light.

**See also** setSourceRadius().

----


