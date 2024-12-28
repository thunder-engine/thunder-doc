.. _api_VisualEffect:

VisualEffect
============

Inherited: None

.. _api_VisualEffect_description:

Description
-----------

VisualEffect alows developer to create a complex visual effects.



.. _api_VisualEffect_public:

Public Methods
--------------

+----------------------------------+------------------------------------------------------------------------+
|        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_VisualEffect_bound>` () const                          |
+----------------------------------+------------------------------------------------------------------------+
|                              int | :ref:`capacity<api_VisualEffect_capacity>` () const                    |
+----------------------------------+------------------------------------------------------------------------+
|                             bool | :ref:`continous<api_VisualEffect_continous>` () const                  |
+----------------------------------+------------------------------------------------------------------------+
|                             bool | :ref:`gpu<api_VisualEffect_gpu>` () const                              |
+----------------------------------+------------------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_VisualEffect_material>` () const                    |
+----------------------------------+------------------------------------------------------------------------+
|          :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_VisualEffect_mesh>` () const                            |
+----------------------------------+------------------------------------------------------------------------+
|                              int | :ref:`particleStride<api_VisualEffect_particleStride>` () const        |
+----------------------------------+------------------------------------------------------------------------+
|                              int | :ref:`renderableStride<api_VisualEffect_renderableStride>` () const    |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setCapacity<api_VisualEffect_setCapacity>` (int  capacity)       |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setContinous<api_VisualEffect_setContinous>` (bool  continuous)  |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setGpu<api_VisualEffect_setGpu>` (bool  gpu)                     |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setLocal<api_VisualEffect_setLocal>` (bool  local)               |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setMaterial<api_VisualEffect_setMaterial>` (Material * material) |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setMesh<api_VisualEffect_setMesh>` (Mesh * mesh)                 |
+----------------------------------+------------------------------------------------------------------------+
|                             void | :ref:`setSpawnRate<api_VisualEffect_setSpawnRate>` (float  rate)       |
+----------------------------------+------------------------------------------------------------------------+
|                            float | :ref:`spawnRate<api_VisualEffect_spawnRate>` () const                  |
+----------------------------------+------------------------------------------------------------------------+



.. _api_VisualEffect_static:

Static Methods
--------------

None

.. _api_VisualEffect_methods:

Methods Description
-------------------

.. _api_VisualEffect_bound:

 :ref:`AABBox<api_AABBox>`  **VisualEffect::bound** () const

Returns bounding box for the emitter.

----

.. _api_VisualEffect_capacity:

 int **VisualEffect::capacity** () const

Returns a maximum number of particles to emit.

**See also** setCapacity().

----

.. _api_VisualEffect_continous:

 bool **VisualEffect::continous** () const

Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_VisualEffect_gpu:

 bool **VisualEffect::gpu** () const

Returns true if GPU particle simulation is enabled, false otherwise.


**Note:** Gpu simulation is not supported yet.


**See also** setGpu().

----

.. _api_VisualEffect_material:

 :ref:`Material<api_Material>` * **VisualEffect::material** () const

Returns a material associated with the particle emitter.

**See also** setMaterial().

----

.. _api_VisualEffect_mesh:

 :ref:`Mesh<api_Mesh>` * **VisualEffect::mesh** () const

Returns a mesh associated with the particle emitter.

**See also** setMesh().

----

.. _api_VisualEffect_particleStride:

 int **VisualEffect::particleStride** () const

Return a size for particle atribute structure.

----

.. _api_VisualEffect_renderableStride:

 int **VisualEffect::renderableStride** () const

Return a size for particle atribute structure.

----

.. _api_VisualEffect_setCapacity:

 void **VisualEffect::setCapacity** (int  *capacity*)

Sets a maximum *capacity* of particles to emit.

**See also** *capacity*().

----

.. _api_VisualEffect_setContinous:

 void **VisualEffect::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_VisualEffect_setGpu:

 void **VisualEffect::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.


**Note:** Gpu simulation is not supported yet.


**See also** *gpu*().

----

.. _api_VisualEffect_setLocal:

 void **VisualEffect::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

----

.. _api_VisualEffect_setMaterial:

 void **VisualEffect::setMaterial** (:ref:`Material<api_Material>` * *material*)

Sets a *material* associated with the particle emitter.

**See also** *material*().

----

.. _api_VisualEffect_setMesh:

 void **VisualEffect::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Sets a *mesh* associated with the particle emitter.

**See also** *mesh*().

----

.. _api_VisualEffect_setSpawnRate:

 void **VisualEffect::setSpawnRate** (float  *rate*)

Sets spawn *rate* factor of emitted particles.

**See also** spawnRate().

----

.. _api_VisualEffect_spawnRate:

 float **VisualEffect::spawnRate** () const

Returns a distribution factor of emitted particles.

**See also** setSpawnRate().


