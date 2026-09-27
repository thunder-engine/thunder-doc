.. _api_Renderable:

Renderable
==========

Inherited: :ref:`NativeBehaviour<api_NativeBehaviour>`

.. _api_Renderable_description:

Description
-----------


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_Renderable_public:

Public Methods
--------------

+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`applyBlendShapeWeights<api_Renderable_0a316bf2>` (Mesh & mesh, Mesh & instance, const std::vector<float> & weights) |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                        :ref:`AABBox<api_AABBox>` | :ref:`bound<api_Renderable_31b45ead>` ()                                                                                  |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                                             bool | :ref:`isCulled<api_Renderable_58a3e7c4>` (const Frustum & frustum, const Matrix4 & viewProjection)                        |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                  :ref:`Material<api_Material>` * | :ref:`material<api_Renderable_ad0e4185>` () const                                                                         |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|  :ref:`MaterialInstance<api_MaterialInstance>` * | :ref:`materialInstance<api_Renderable_201d5b87>` (int  index)                                                             |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                          :ref:`Mesh<api_Mesh>` * | :ref:`meshToDraw<api_Renderable_945d7381>` ()                                                                             |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setLod<api_Renderable_13e5fc08>` (uint32_t  lod)                                                                    |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterial<api_Renderable_dac5980b>` (Material * material)                                                         |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
|                                             void | :ref:`setMaterialsList<api_Renderable_b0a4c651>` (const std::list<Material *> & materials)                                |
+--------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+



.. _api_Renderable_static:

Static Methods
--------------

+-------+----------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`filterByLayer<api_Renderable_fa7be586>` (const Renderable::RenderList & in, Renderable::GroupList & out, int  layer) |
+-------+----------------------------------------------------------------------------------------------------------------------------+
|  void | :ref:`group<api_Renderable_c7a58062>` (const Renderable::GroupList & in, Renderable::GroupList & out)                      |
+-------+----------------------------------------------------------------------------------------------------------------------------+

.. _api_Renderable_methods:

Methods Description
-------------------

.. _api_Renderable_0a316bf2:

 void **Renderable::applyBlendShapeWeights** (:ref:`Mesh<api_Mesh>` & *mesh*, :ref:`Mesh<api_Mesh>` & *instance*, :ref:`std::vector<float><api_std_vector<float>>` & *weights*)

Applies current blend shape *weights* to the *mesh* *instance* vertices.

----

.. _api_Renderable_31b45ead:

 :ref:`AABBox<api_AABBox>`  **Renderable::bound** ()

Returns a bound box of the renderable object.

----

.. _api_Renderable_fa7be586:

 void **Renderable::filterByLayer** (:ref:`Renderable::RenderList<api_Renderable_RenderList>` & *in*, :ref:`Renderable::GroupList<api_Renderable_GroupList>` & *out*, int  *layer*)

Filters *out* an *in* renderable components by it's material layer.

----

.. _api_Renderable_c7a58062:

 void **Renderable::group** (:ref:`Renderable::GroupList<api_Renderable_GroupList>` & *in*, :ref:`Renderable::GroupList<api_Renderable_GroupList>` & *out*)

Groups elements from *in* list into *out* rendering instances.

----

.. _api_Renderable_58a3e7c4:

 bool **Renderable::isCulled** (:ref:`Frustum<api_Frustum>` & *frustum*, :ref:`Matrix4<api_Matrix4>` & *viewProjection*)

Returns true if current renderable fails *frustum* culling test; otherwise returns true; Parameter *viewProjection* used to project bounding box to screen space for LOD calculation.

----

.. _api_Renderable_ad0e4185:

 :ref:`Material<api_Material>` * **Renderable::material** () const

Returns a first instantiated Material assigned to this Renderable.

**See also** setMaterial().

----

.. _api_Renderable_201d5b87:

 :ref:`MaterialInstance<api_MaterialInstance>` * **Renderable::materialInstance** (int  *index*)

Returns a Material instance with *index* assigned to this Renderable.

----

.. _api_Renderable_945d7381:

 :ref:`Mesh<api_Mesh>` * **Renderable::meshToDraw** ()

Returns a mesh which will be drawn.

----

.. _api_Renderable_13e5fc08:

 void **Renderable::setLod** (uint32_t  *lod*)

Sets current *lod* level.

----

.. _api_Renderable_dac5980b:

 void **Renderable::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** material().

----

.. _api_Renderable_b0a4c651:

 void **Renderable::setMaterialsList** (:ref:`*><api_*>>` & *materials*)

Creates a new instances for the list *materials* and assigns it.


