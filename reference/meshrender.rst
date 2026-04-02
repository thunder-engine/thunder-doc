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
|              VariantList | :ref:`materials<api_MeshRender_417d03cb>` () const                    |
+--------------------------+-----------------------------------------------------------------------+
|  :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_MeshRender_853dea41>` () const                         |
+--------------------------+-----------------------------------------------------------------------+
|                     void | :ref:`setMaterials<api_MeshRender_8eaf6350>` (VariantList  materials) |
+--------------------------+-----------------------------------------------------------------------+
|                     void | :ref:`setMesh<api_MeshRender_f0d5a7bc>` (Mesh * mesh)                 |
+--------------------------+-----------------------------------------------------------------------+



.. _api_MeshRender_static:

Static Methods
--------------

None

.. _api_MeshRender_methods:

Methods Description
-------------------

.. _api_MeshRender_417d03cb:

 VariantList **MeshRender::materials** () const

Returns a list of assigned materials.

**See also** setMaterials().

----

.. _api_MeshRender_853dea41:

 :ref:`Mesh<api_Mesh>` * **MeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_MeshRender_8eaf6350:

 void **MeshRender::setMaterials** (VariantList  *materials*)

Assigns an array of the *materials* to the mesh.

**See also** materials().

----

.. _api_MeshRender_f0d5a7bc:

 void **MeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** mesh().


