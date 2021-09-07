.. _api_SpotLight:
SpotLight Class
================

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_SpotLight_description:
Description
-----------

To determine the emitter position and emit direction SpotLight uses Transform component of the own Actor.



.. _api_SpotLight_public:
Public Methods
--------------

+-------------------------+---------------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`attenuationDistance<api_SpotLight_attenuationDistance>` () const                |
+-------------------------+---------------------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`outerAngle<api_SpotLight_outerAngle>` () const                                  |
+-------------------------+---------------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setAttenuationDistance<api_SpotLight_setAttenuationDistance>` (float  distance) |
+-------------------------+---------------------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setOuterAngle<api_SpotLight_setOuterAngle>` (float  angle)                      |
+-------------------------+---------------------------------------------------------------------------------------+



.. _api_SpotLight_static:
Static Methods
--------------

None

.. _api_SpotLight_methods:
Methods Description
-------------------

.. _api_SpotLight_attenuationDistance:

:ref:`float<api_float>`  **SpotLight::attenuationDistance** () const

Returns the attenuation distance of the light cone.

**See also** setAttenuationDistance().

----

.. _api_SpotLight_outerAngle:

:ref:`float<api_float>`  **SpotLight::outerAngle** () const

Returns the angle of the light cone in degrees.

**See also** setOuterAngle().

----

.. _api_SpotLight_setAttenuationDistance:

:ref:`void<api_void>`  **SpotLight::setAttenuationDistance** (:ref:`float<api_float>`  *distance*)

Changes the attenuation *distance* of the light cone.

**See also** attenuationDistance().

----

.. _api_SpotLight_setOuterAngle:

:ref:`void<api_void>`  **SpotLight::setOuterAngle** (:ref:`float<api_float>`  *angle*)

Changes the *angle* of the light cone in degrees.

**See also** outerAngle().

----


