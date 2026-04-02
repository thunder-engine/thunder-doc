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

+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                            :ref:`AABBox<api_AABBox>` | :ref:`bound<api_VisualEffect_9fa28654>` () const                  |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`capacity<api_VisualEffect_8ba6975e>` () const               |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`continous<api_VisualEffect_cdfb09a2>` () const              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`emitterStride<api_VisualEffect_6d27e309>` () const          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`gpu<api_VisualEffect_5f02b697>` () const                    |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`particleStride<api_VisualEffect_f10ac8b7>` () const         |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
| const :ref:`VisualEffect::Renderable<api_VisualEffect_Renderable>` * | :ref:`renderable<api_VisualEffect_c37d4e95>` (int  index) const   |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`renderablesCount<api_VisualEffect_d5a7c904>` ()             |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setCapacity<api_VisualEffect_1d6f847c>` (int  capacity)     |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setContinous<api_VisualEffect_a3df925c>` (bool  continuous) |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setGpu<api_VisualEffect_09b4c12a>` (bool  gpu)              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setLocal<api_VisualEffect_de6849ab>` (bool  local)          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`systemStride<api_VisualEffect_fadc063e>` () const           |
+----------------------------------------------------------------------+-------------------------------------------------------------------+



.. _api_VisualEffect_static:

Static Methods
--------------

None

.. _api_VisualEffect_methods:

Methods Description
-------------------

.. _api_VisualEffect_9fa28654:

 :ref:`AABBox<api_AABBox>`  **VisualEffect::bound** () const

Returns bounding box for the emitter.

----

.. _api_VisualEffect_8ba6975e:

 int **VisualEffect::capacity** () const

Returns a maximum number of particles to emit.

**See also** setCapacity().

----

.. _api_VisualEffect_cdfb09a2:

 bool **VisualEffect::continous** () const

Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_VisualEffect_6d27e309:

 int **VisualEffect::emitterStride** () const

Return a size for emitter atributes structure.

----

.. _api_VisualEffect_5f02b697:

 bool **VisualEffect::gpu** () const

Returns true if GPU particle simulation is enabled, false otherwise.


**Note:** Gpu simulation is not supported yet.


**See also** setGpu().

----

.. _api_VisualEffect_f10ac8b7:

 int **VisualEffect::particleStride** () const

Return a size for particle atributes structure.

----

.. _api_VisualEffect_c37d4e95:

const :ref:`VisualEffect::Renderable<api_VisualEffect::Renderable>` * **VisualEffect::renderable** (int  *index*) const

Returns renderable parameters with *index* associated with the particle emitter.

----

.. _api_VisualEffect_d5a7c904:

 int **VisualEffect::renderablesCount** ()

Returns renderables count.

----

.. _api_VisualEffect_1d6f847c:

 void **VisualEffect::setCapacity** (int  *capacity*)

Sets a maximum *capacity* of particles to emit.

**See also** capacity().

----

.. _api_VisualEffect_a3df925c:

 void **VisualEffect::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_VisualEffect_09b4c12a:

 void **VisualEffect::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.


**Note:** Gpu simulation is not supported yet.


**See also** gpu().

----

.. _api_VisualEffect_de6849ab:

 void **VisualEffect::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

----

.. _api_VisualEffect_fadc063e:

 int **VisualEffect::systemStride** () const

Return a size for system atributes structure.


