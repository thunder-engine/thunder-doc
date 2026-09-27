.. _api_VisualEffect:

VisualEffect
============

Inherited: :ref:`Resource<api_Resource>`

.. _api_VisualEffect_description:

Description
-----------

VisualEffect alows developer to create a complex visual effects.



.. _api_VisualEffect_public:

Public Methods
--------------

+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                            :ref:`AABBox<api_AABBox>` | :ref:`bound<api_VisualEffect_5d7b82e4>` () const                  |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`capacity<api_VisualEffect_f4c31ab6>` () const               |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`continous<api_VisualEffect_85c20bdf>` () const              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`emitterStride<api_VisualEffect_d852be19>` () const          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`gpu<api_VisualEffect_a3174cfe>` () const                    |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`local<api_VisualEffect_9e62bc84>` () const                  |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`particleStride<api_VisualEffect_be7d4812>` () const         |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
| const :ref:`VisualEffect::Renderable<api_VisualEffect_Renderable>` * | :ref:`renderable<api_VisualEffect_15fe4832>` (int  index) const   |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`renderablesCount<api_VisualEffect_026c79fe>` ()             |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setCapacity<api_VisualEffect_bcdfae07>` (int  capacity)     |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setContinous<api_VisualEffect_465fd8b1>` (bool  continuous) |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setGpu<api_VisualEffect_98fa371d>` (bool  gpu)              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setLocal<api_VisualEffect_0cae19d8>` (bool  local)          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`systemStride<api_VisualEffect_81ec02f5>` () const           |
+----------------------------------------------------------------------+-------------------------------------------------------------------+



.. _api_VisualEffect_static:

Static Methods
--------------

None

.. _api_VisualEffect_methods:

Methods Description
-------------------

.. _api_VisualEffect_5d7b82e4:

 :ref:`AABBox<api_AABBox>`  **VisualEffect::bound** () const

Returns bounding box for the emitter.

----

.. _api_VisualEffect_f4c31ab6:

 int **VisualEffect::capacity** () const

Returns a maximum number of particles to emit.

**See also** setCapacity().

----

.. _api_VisualEffect_85c20bdf:

 bool **VisualEffect::continous** () const

Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_VisualEffect_d852be19:

 int **VisualEffect::emitterStride** () const

Return a size for emitter atributes structure.

----

.. _api_VisualEffect_a3174cfe:

 bool **VisualEffect::gpu** () const

Returns true if GPU particle simulation is enabled, false otherwise.


**Note:** Gpu simulation is not supported yet.


**See also** setGpu().

----

.. _api_VisualEffect_9e62bc84:

 bool **VisualEffect::local** () const

Returns true if particles are in local space, false otherwise.

**See also** setLocal().

----

.. _api_VisualEffect_be7d4812:

 int **VisualEffect::particleStride** () const

Return a size for particle atributes structure.

----

.. _api_VisualEffect_15fe4832:

const :ref:`VisualEffect::Renderable<api_VisualEffect::Renderable>` * **VisualEffect::renderable** (int  *index*) const

Returns renderable parameters with *index* associated with the particle emitter.

----

.. _api_VisualEffect_026c79fe:

 int **VisualEffect::renderablesCount** ()

Returns renderables count.

----

.. _api_VisualEffect_bcdfae07:

 void **VisualEffect::setCapacity** (int  *capacity*)

Sets a maximum *capacity* of particles to emit.

**See also** capacity().

----

.. _api_VisualEffect_465fd8b1:

 void **VisualEffect::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_VisualEffect_98fa371d:

 void **VisualEffect::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.


**Note:** Gpu simulation is not supported yet.


**See also** gpu().

----

.. _api_VisualEffect_0cae19d8:

 void **VisualEffect::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

**See also** local().

----

.. _api_VisualEffect_81ec02f5:

 int **VisualEffect::systemStride** () const

Return a size for system atributes structure.


