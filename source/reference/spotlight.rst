.. _api_SpotLight:

SpotLight
=========

Inherited: :ref:`BaseLight<api_BaseLight>`

.. _api_SpotLight_description:

Description
-----------

To determine the emitter position and emit direction SpotLight uses Transform component of the own Actor.



.. _api_SpotLight_public:

Public Methods
--------------

+--------+-------------------------------------------------------------------------+
|  float | :ref:`attenuationDistance<api_SpotLight_4862b130>` () const             |
+--------+-------------------------------------------------------------------------+
|  float | :ref:`outerAngle<api_SpotLight_a689fb41>` () const                      |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setAttenuationDistance<api_SpotLight_ca3f1e75>` (float  distance) |
+--------+-------------------------------------------------------------------------+
|   void | :ref:`setOuterAngle<api_SpotLight_d62097a4>` (float  angle)             |
+--------+-------------------------------------------------------------------------+



.. _api_SpotLight_static:

Static Methods
--------------

None

.. _api_SpotLight_methods:

Methods Description
-------------------

.. _api_SpotLight_4862b130:

 float **SpotLight::attenuationDistance** () const

Returns the attenuation distance of the light cone.

**See also** setAttenuationDistance().

----

.. _api_SpotLight_a689fb41:

 float **SpotLight::outerAngle** () const

Returns the angle of the light cone in degrees.

**See also** setOuterAngle().

----

.. _api_SpotLight_ca3f1e75:

 void **SpotLight::setAttenuationDistance** (float  *distance*)

Changes the attenuation *distance* of the light cone.

**See also** attenuationDistance().

----

.. _api_SpotLight_d62097a4:

 void **SpotLight::setOuterAngle** (float  *angle*)

Changes the *angle* of the light cone in degrees.

**See also** outerAngle().


