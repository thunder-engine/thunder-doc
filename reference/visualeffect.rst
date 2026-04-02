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
|                                            :ref:`AABBox<api_AABBox>` | :ref:`bound<api_VisualEffect_cf3d9e51>` () const                  |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`capacity<api_VisualEffect_d6841a5f>` () const               |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`continous<api_VisualEffect_4c6d2ab7>` () const              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`emitterStride<api_VisualEffect_fe9c4da8>` () const          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 bool | :ref:`gpu<api_VisualEffect_d30f169c>` () const                    |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`particleStride<api_VisualEffect_a4f56d28>` () const         |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
| const :ref:`VisualEffect::Renderable<api_VisualEffect_Renderable>` * | :ref:`renderable<api_VisualEffect_5e19d47a>` (int  index) const   |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`renderablesCount<api_VisualEffect_e89fd4b1>` ()             |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setCapacity<api_VisualEffect_72130b4d>` (int  capacity)     |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setContinous<api_VisualEffect_1d92fbe5>` (bool  continuous) |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setGpu<api_VisualEffect_6924af5d>` (bool  gpu)              |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                 void | :ref:`setLocal<api_VisualEffect_f260de31>` (bool  local)          |
+----------------------------------------------------------------------+-------------------------------------------------------------------+
|                                                                  int | :ref:`systemStride<api_VisualEffect_95bfd436>` () const           |
+----------------------------------------------------------------------+-------------------------------------------------------------------+



.. _api_VisualEffect_static:

Static Methods
--------------

None

.. _api_VisualEffect_methods:

Methods Description
-------------------

.. _api_VisualEffect_cf3d9e51:

 :ref:`AABBox<api_AABBox>`  **VisualEffect::bound** () const

Returns bounding box for the emitter.

----

.. _api_VisualEffect_d6841a5f:

 int **VisualEffect::capacity** () const

Returns a maximum number of particles to emit.

**See also** setCapacity().

----

.. _api_VisualEffect_4c6d2ab7:

 bool **VisualEffect::continous** () const

Returns true for continuous emission, false for one time emission.

**See also** setContinous().

----

.. _api_VisualEffect_fe9c4da8:

 int **VisualEffect::emitterStride** () const

Return a size for emitter atributes structure.

----

.. _api_VisualEffect_d30f169c:

 bool **VisualEffect::gpu** () const

Returns true if GPU particle simulation is enabled, false otherwise.


**Note:** Gpu simulation is not supported yet.


**See also** setGpu().

----

.. _api_VisualEffect_a4f56d28:

 int **VisualEffect::particleStride** () const

Return a size for particle atributes structure.

----

.. _api_VisualEffect_5e19d47a:

const :ref:`VisualEffect::Renderable<api_VisualEffect::Renderable>` * **VisualEffect::renderable** (int  *index*) const

Returns renderable parameters with *index* associated with the particle emitter.

----

.. _api_VisualEffect_e89fd4b1:

 int **VisualEffect::renderablesCount** ()

Returns renderables count.

----

.. _api_VisualEffect_72130b4d:

 void **VisualEffect::setCapacity** (int  *capacity*)

Sets a maximum *capacity* of particles to emit.

**See also** capacity().

----

.. _api_VisualEffect_1d92fbe5:

 void **VisualEffect::setContinous** (bool  *continuous*)

Setter for the *continuous* flag indicating *continuous* particle emission.

**See also** continous().

----

.. _api_VisualEffect_6924af5d:

 void **VisualEffect::setGpu** (bool  *gpu*)

Setter for the *gpu* flag indicating GPU particle simulation.


**Note:** Gpu simulation is not supported yet.


**See also** gpu().

----

.. _api_VisualEffect_f260de31:

 void **VisualEffect::setLocal** (bool  *local*)

Setter for the *local* flag indicating *local* particle space.

----

.. _api_VisualEffect_95bfd436:

 int **VisualEffect::systemStride** () const

Return a size for system atributes structure.


