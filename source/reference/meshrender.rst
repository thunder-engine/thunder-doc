.. _api_MeshRender:

MeshRender
==========

Inherited: None

.. _api_MeshRender_description:

Description
-----------

The MeshRender component allows you to display 3D Mesh to use in both 2D and 3D scenes.



.. _api_MeshRender_public:

Public Methods
--------------

+--------------------------+-----------------------------------------------------------------------+
|              VariantList | :ref:`materials<api_MeshRender_a63c2e97>` () const                    |
+--------------------------+-----------------------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_MeshRender_ecbd2053>` () const                         |
+--------------------------+-----------------------------------------------------------------------+
|                     void | :ref:`setMaterials<api_MeshRender_c3d1f28b>` (VariantList  materials) |
+--------------------------+-----------------------------------------------------------------------+
|                     void | :ref:`setMesh<api_MeshRender_647d35cf>` (Mesh * mesh)                 |
+--------------------------+-----------------------------------------------------------------------+



.. _api_MeshRender_static:

Static Methods
--------------

None

.. _api_MeshRender_methods:

Methods Description
-------------------

.. _api_MeshRender_a63c2e97:

 VariantList **MeshRender::materials** () const

Returns a list of assigned materials.

**See also** setMaterials().

----

.. _api_MeshRender_ecbd2053:

 :ref:`Mesh<api_Mesh>` * **MeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_MeshRender_c3d1f28b:

 void **MeshRender::setMaterials** (VariantList  *materials*)

Assigns an array of the *materials* to the mesh.

**See also** materials().

----

.. _api_MeshRender_647d35cf:

 void **MeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** mesh().


