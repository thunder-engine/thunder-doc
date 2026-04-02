.. _api_SpotLight:

SpotLight
=========

Inherited: None

.. _api_SpotLight_description:

Description
-----------

To determine the emitter position and emit direction SpotLight uses Transform component of the own Actor.



.. _api_SpotLight_public:

Public Methods
--------------

+--------+-------------------------------------------------------------------------+
|  float | :ref:`attenuationDistance<api_SpotLight_7ac4fdb5>` () const             |
+--------+-------------------------------------------------------------------------+
|  float | :ref:`outerAngle<api_SpotLight_5864e90b>` () const                      |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setAttenuationDistance<api_SpotLight_6f87bd12>` (float  distance) |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setOuterAngle<api_SpotLight_6b5dc01a>` (float  angle)             |
+--------+-------------------------------------------------------------------------+



.. _api_SpotLight_static:

Static Methods
--------------

None

.. _api_SpotLight_methods:

Methods Description
-------------------

.. _api_SpotLight_7ac4fdb5:

 float **SpotLight::attenuationDistance** () const

Returns the attenuation distance of the light cone.

**See also** setAttenuationDistance().

----

.. _api_SpotLight_5864e90b:

 float **SpotLight::outerAngle** () const

Returns the angle of the light cone in degrees.

**See also** setOuterAngle().

----

.. _api_SpotLight_6f87bd12:

 void **SpotLight::setAttenuationDistance** (float  *distance*)

Changes the attenuation *distance* of the light cone.

**See also** attenuationDistance().

----

.. _api_SpotLight_6b5dc01a:

 void **SpotLight::setOuterAngle** (float  *angle*)

Changes the *angle* of the light cone in degrees.

**See also** outerAngle().


