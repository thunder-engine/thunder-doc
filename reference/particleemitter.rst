.. _api_ParticleEmitter:

ParticleEmitter Class
=====================

Inherited: None

.. _api_ParticleEmitter_description:

Description
-----------

The ParticleEmitter class encapsulates various parameters and settings for controlling the appearance and behavior of particles emitted by a particle system. Users can customize these settings, such as associating a mesh and material, defining distribution factors, enabling GPU simulation, setting local or world space, specifying continuous or discrete emission, and applying particle modifiers.



.. _api_ParticleEmitter_public:

Public Methods
--------------

+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         bool | :ref:`continous<api_ParticleEmitter_continous>` () const                                  |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                        float | :ref:`distribution<api_ParticleEmitter_distribution>` () const                            |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         bool | :ref:`gpu<api_ParticleEmitter_gpu>` () const                                              |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|              :ref:`Material<api_Material>` * | :ref:`material<api_ParticleEmitter_material>` () const                                    |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                      :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_ParticleEmitter_mesh>` () const                                            |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`ModifiersDeque<api_ModifiersDeque>` & | :ref:`modifiers<api_ParticleEmitter_modifiers>` ()                                        |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setContinous<api_ParticleEmitter_setContinous>` (bool  continuous)                  |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setDistribution<api_ParticleEmitter_setDistribution>` (float  distribution)         |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setGpu<api_ParticleEmitter_setGpu>` (bool  gpu)                                     |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setLocal<api_ParticleEmitter_setLocal>` (bool  local)                               |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setMaterial<api_ParticleEmitter_setMaterial>` (Material * material)                 |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setMesh<api_ParticleEmitter_setMesh>` (Mesh * mesh)                                 |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         void | :ref:`setModifiers<api_ParticleEmitter_setModifiers>` (const ModifiersDeque & modifiers)  |
+----------------------------------------------+-------------------------------------------------------------------------------------------+
|                                         bool | :ref:`operator==<api_ParticleEmitter_operator==>` (const ParticleEmitter & emitter) const |
+----------------------------------------------+-------------------------------------------------------------------------------------------+



.. _api_ParticleEmitter_static:

Static Methods
--------------

None

.. _api_ParticleEmitter_methods:

Methods Description
-------------------

.. _api_ParticleEmitter_continous:

 bool **ParticleEmitter::continous** () const

Getter for the continuous flag indicating continuous particle emission. Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_ParticleEmitter_distribution:

 float **ParticleEmitter::distribution** () const

Getter for the distribution factor of emitted particles.

**See also** setDistribution().

----

.. _api_ParticleEmitter_gpu:

 bool **ParticleEmitter::gpu** () const

Getter for the GPU flag indicating GPU particle simulation. Returns true if GPU particle simulation is enabled, false otherwise.

**Note:** Gpu simulation is not supported yet.

**See also** setGpu().

----

.. _api_ParticleEmitter_material:

 :ref:`Material<api_Material>`* **ParticleEmitter::material** () const

Getter for the material associated with the particle emitter.

**See also** setMaterial().

----

.. _api_ParticleEmitter_mesh:

 :ref:`Mesh<api_Mesh>`* **ParticleEmitter::mesh** () const

Getter for the mesh associated with the particle emitter.

**See also** setMesh().

----

.. _api_ParticleEmitter_modifiers:

 :ref:`ModifiersDeque<api_ModifiersDeque>`& **ParticleEmitter::modifiers** ()

Getter for the deque of particle modifiers.

**See also** setModifiers().

----

.. _api_ParticleEmitter_setContinous:

 void **ParticleEmitter::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_ParticleEmitter_setDistribution:

 void **ParticleEmitter::setDistribution** (float  *distribution*)

Setter for the *distribution* factor of emitted particles.

**See also** *distribution*().

----

.. _api_ParticleEmitter_setGpu:

 void **ParticleEmitter::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.

**Note:** Gpu simulation is not supported yet.

**See also** *gpu*().

----

.. _api_ParticleEmitter_setLocal:

 void **ParticleEmitter::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

----

.. _api_ParticleEmitter_setMaterial:

 void **ParticleEmitter::setMaterial** (:ref:`Material<api_Material>` * *material*)

Setter for the *material* associated with the particle emitter.

**See also** *material*().

----

.. _api_ParticleEmitter_setMesh:

 void **ParticleEmitter::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Setter for the *mesh* associated with the particle emitter.

**See also** *mesh*().

----

.. _api_ParticleEmitter_setModifiers:

 void **ParticleEmitter::setModifiers** (:ref:`ModifiersDeque<api_ModifiersDeque>` & *modifiers*)

Setter for the deque of particle *modifiers*.

**See also** *modifiers*().

----

.. _api_ParticleEmitter_operator==:

 bool **ParticleEmitter::operator==** (:ref:`ParticleEmitter<api_ParticleEmitter>` & *emitter*) const

Equality operator for comparing two particle *emitter* objects. Returns true if the *emitter*s are equal, false otherwise.


