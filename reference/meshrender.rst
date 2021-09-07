.. _api_MeshRender:
MeshRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_MeshRender_description:
Description
-----------

Draws a mesh for the 3D graphics.

The MeshRender component allows you to display 3D Mesh to use in both 2D and 3D scenes.



.. _api_MeshRender_public:
Public Methods
--------------

+---------------------------------+----------------------------------------------------------------------+
|                                 | :ref:`MeshRender<api_MeshRender_MeshRender>` ()                      |
+---------------------------------+----------------------------------------------------------------------+
|                                 | :ref:`~MeshRender<api_MeshRender_~MeshRender>` ()                    |
+---------------------------------+----------------------------------------------------------------------+
| :ref:`Material<api_Material>` * | :ref:`material<api_MeshRender_material>` () const                    |
+---------------------------------+----------------------------------------------------------------------+
|         :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_MeshRender_mesh>` () const                            |
+---------------------------------+----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setMaterial<api_MeshRender_setMaterial>` (Material * material) |
+---------------------------------+----------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setMesh<api_MeshRender_setMesh>` (Mesh * mesh)                 |
+---------------------------------+----------------------------------------------------------------------+



.. _api_MeshRender_static:
Static Methods
--------------

+-------------------------------------------------------------------+-------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_MeshRender_methods>` ()       |
+-------------------------------------------------------------------+-------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_MeshRender_properties>` () |
+-------------------------------------------------------------------+-------------------------------------------------+

.. _api_MeshRender_methods:
Methods Description
-------------------

.. _api_MeshRender_MeshRender:

**MeshRender::MeshRender** ()

Default constructs an instance of MeshRender.

----

.. _api_MeshRender_~MeshRender:

**MeshRender::~MeshRender** ()

Destroys the instance of MeshRender. The destructor is virtual.

----

.. _api_MeshRender_material:

:ref:`Material<api_Material>` * **MeshRender::material** () const

Returns an instantiated Material assigned to MeshRender.

**See also** setMaterial().

----

.. _api_MeshRender_mesh:

:ref:`Mesh<api_Mesh>` * **MeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_MeshRender_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **MeshRender::methods** ()

----

.. _api_MeshRender_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **MeshRender::properties** ()

----

.. _api_MeshRender_setMaterial:

:ref:`void<api_void>`  **MeshRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_MeshRender_setMesh:

:ref:`void<api_void>`  **MeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** *mesh*().

----


