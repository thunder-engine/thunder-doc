.. _api_MeshRender:

MeshRender
==========

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_MeshRender_description:

Description
-----------

The MeshRender component allows you to display 3D Mesh to use in both 2D and 3D scenes.



.. _api_MeshRender_public:

Public Methods
--------------

+--------------------------+------------------------------------------------------------------------------------+
|                    float | :ref:`blendShapeWeight<api_MeshRender_9dafe3c5>` (size_t  index) const             |
+--------------------------+------------------------------------------------------------------------------------+
|              VariantList | :ref:`materials<api_MeshRender_7c231e9f>` () const                                 |
+--------------------------+------------------------------------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_MeshRender_f4695d78>` () const                                      |
+--------------------------+------------------------------------------------------------------------------------+
|                     void | :ref:`setBlendShapeWeight<api_MeshRender_837f15ce>` (size_t  index, float  weight) |
+--------------------------+------------------------------------------------------------------------------------+
|                     void | :ref:`setMaterials<api_MeshRender_30d9ce45>` (VariantList  materials)              |
+--------------------------+------------------------------------------------------------------------------------+
|                     void | :ref:`setMesh<api_MeshRender_986274d3>` (Mesh * mesh)                              |
+--------------------------+------------------------------------------------------------------------------------+



.. _api_MeshRender_static:

Static Methods
--------------

None

.. _api_MeshRender_methods:

Methods Description
-------------------

.. _api_MeshRender_9dafe3c5:

 float **MeshRender::blendShapeWeight** (size_t  *index*) const

Returns weight of a blend shape with specified index.

**See also** setBlendShapeWeight().

----

.. _api_MeshRender_7c231e9f:

 VariantList **MeshRender::materials** () const

Returns a list of assigned materials.

**See also** setMaterials().

----

.. _api_MeshRender_f4695d78:

 :ref:`Mesh<api_Mesh>` * **MeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_MeshRender_837f15ce:

 void **MeshRender::setBlendShapeWeight** (size_t  *index*, float  *weight*)

Sets the *weight* of a blend shape with specified *index* for this renderer.

**See also** blendShapeWeight().

----

.. _api_MeshRender_30d9ce45:

 void **MeshRender::setMaterials** (VariantList  *materials*)

Assigns an array of the *materials* to the mesh.

**See also** materials().

----

.. _api_MeshRender_986274d3:

 void **MeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** mesh().


