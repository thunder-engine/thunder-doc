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

+-------------------------+-----------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`angle<api_SpotLight_angle>` () const                      |
+-------------------------+-----------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`distance<api_SpotLight_distance>` () const                |
+-------------------------+-----------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setAngle<api_SpotLight_setAngle>` (float  angle)          |
+-------------------------+-----------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setDistance<api_SpotLight_setDistance>` (float  distance) |
+-------------------------+-----------------------------------------------------------------+

.. _api_SpotLight_static:
Static Methods
--------------

None

.. _api_SpotLight_methods:
Methods Description
-------------------

.. _api_SpotLight_angle:

:ref:`float<api_float>`  **SpotLight::angle** () const

Returns the angle of the light cone in degrees.

**See also** setAngle().

----

.. _api_SpotLight_distance:

:ref:`float<api_float>`  **SpotLight::distance** () const

Returns the attenuation distance of the light cone.

**See also** setDistance().

----

.. _api_SpotLight_setAngle:

:ref:`void<api_void>`  **SpotLight::setAngle** (:ref:`float<api_float>`  *angle*)

Changes the *angle* of the light cone in degrees.

**See also** *angle*().

----

.. _api_SpotLight_setDistance:

:ref:`void<api_void>`  **SpotLight::setDistance** (:ref:`float<api_float>`  *distance*)

Changes the attenuation *distance* of the light cone.

**See also** *distance*().

----


