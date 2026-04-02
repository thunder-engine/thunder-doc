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
|                                            :ref:`AABBox<api_AABBox>` | :ref:`bound<api_VisualEffect_4c9feb16>` () const                  |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`capacity<api_VisualEffect_e63189a5>` () const               |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`continous<api_VisualEffect_0c34fb61>` () const              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`emitterStride<api_VisualEffect_12af980b>` () const          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`gpu<api_VisualEffect_534bfae2>` () const                    |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`particleStride<api_VisualEffect_b2d60ac8>` () const         |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
| const :ref:`VisualEffect::Renderable<api_VisualEffect_Renderable>` * | :ref:`renderable<api_VisualEffect_0e3b7645>` (int  index) const   |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`renderablesCount<api_VisualEffect_f048cb26>` ()             |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setCapacity<api_VisualEffect_971de5fa>` (int  capacity)     |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setContinous<api_VisualEffect_73cd1402>` (bool  continuous) |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setGpu<api_VisualEffect_2e61b08c>` (bool  gpu)              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setLocal<api_VisualEffect_2c3f0861>` (bool  local)          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`systemStride<api_VisualEffect_d9e0482b>` () const           |
+----------------------------------------------------------------------+-------------------------------------------------------------------+



.. _api_VisualEffect_static:

Static Methods
--------------

None

.. _api_VisualEffect_methods:

Methods Description
-------------------

.. _api_VisualEffect_4c9feb16:

 :ref:`AABBox<api_AABBox>`  **VisualEffect::bound** () const

Returns bounding box for the emitter.

----

.. _api_VisualEffect_e63189a5:

 int **VisualEffect::capacity** () const

Returns a maximum number of particles to emit.

**See also** setCapacity().

----

.. _api_VisualEffect_0c34fb61:

 bool **VisualEffect::continous** () const

Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_VisualEffect_12af980b:

 int **VisualEffect::emitterStride** () const

Return a size for emitter atributes structure.

----

.. _api_VisualEffect_534bfae2:

 bool **VisualEffect::gpu** () const

Returns true if GPU particle simulation is enabled, false otherwise.


**Note:** Gpu simulation is not supported yet.


**See also** setGpu().

----

.. _api_VisualEffect_b2d60ac8:

 int **VisualEffect::particleStride** () const

Return a size for particle atributes structure.

----

.. _api_VisualEffect_0e3b7645:

const :ref:`VisualEffect::Renderable<api_VisualEffect::Renderable>` * **VisualEffect::renderable** (int  *index*) const

Returns renderable parameters with *index* associated with the particle emitter.

----

.. _api_VisualEffect_f048cb26:

 int **VisualEffect::renderablesCount** ()

Returns renderables count.

----

.. _api_VisualEffect_971de5fa:

 void **VisualEffect::setCapacity** (int  *capacity*)

Sets a maximum *capacity* of particles to emit.

**See also** *capacity*().

----

.. _api_VisualEffect_73cd1402:

 void **VisualEffect::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_VisualEffect_2e61b08c:

 void **VisualEffect::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.


**Note:** Gpu simulation is not supported yet.


**See also** *gpu*().

----

.. _api_VisualEffect_2c3f0861:

 void **VisualEffect::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

----

.. _api_VisualEffect_d9e0482b:

 int **VisualEffect::systemStride** () const

Return a size for system atributes structure.


