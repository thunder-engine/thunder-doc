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
|  float | :ref:`attenuationDistance<api_SpotLight_10ebf96c>` () const             |
+--------+-------------------------------------------------------------------------+
|  float | :ref:`outerAngle<api_SpotLight_1f0ebc57>` () const                      |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setAttenuationDistance<api_SpotLight_635bad2e>` (float  distance) |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setOuterAngle<api_SpotLight_f0651edc>` (float  angle)             |
+--------+-------------------------------------------------------------------------+



.. _api_SpotLight_static:

Static Methods
--------------

None

.. _api_SpotLight_methods:

Methods Description
-------------------

.. _api_SpotLight_10ebf96c:

 float **SpotLight::attenuationDistance** () const

Returns the attenuation distance of the light cone.

**See also** setAttenuationDistance().

----

.. _api_SpotLight_1f0ebc57:

 float **SpotLight::outerAngle** () const

Returns the angle of the light cone in degrees.

**See also** setOuterAngle().

----

.. _api_SpotLight_635bad2e:

 void **SpotLight::setAttenuationDistance** (float  *distance*)

Changes the attenuation *distance* of the light cone.

**See also** attenuationDistance().

----

.. _api_SpotLight_f0651edc:

 void **SpotLight::setOuterAngle** (float  *angle*)

Changes the *angle* of the light cone in degrees.

**See also** outerAngle().


