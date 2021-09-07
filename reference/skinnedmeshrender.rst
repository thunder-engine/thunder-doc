.. _api_SkinnedMeshRender:
SkinnedMeshRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_SkinnedMeshRender_description:
Description
-----------

Draws an animated skeletal mesh for the 3D graphics.

The SkinnedMeshRender component allows you to display 3D Skeletal Mesh to use in both 2D and 3D scenes.



.. _api_SkinnedMeshRender_public:
Public Methods
--------------

+---------------------------------+-----------------------------------------------------------------------------+
|                                 | :ref:`SkinnedMeshRender<api_SkinnedMeshRender_SkinnedMeshRender>` ()        |
+---------------------------------+-----------------------------------------------------------------------------+
|                                 | :ref:`~SkinnedMeshRender<api_SkinnedMeshRender_~SkinnedMeshRender>` ()      |
+---------------------------------+-----------------------------------------------------------------------------+
| :ref:`Armature<api_Armature>` * | :ref:`armature<api_SkinnedMeshRender_armature>` () const                    |
+---------------------------------+-----------------------------------------------------------------------------+
| :ref:`Material<api_Material>` * | :ref:`material<api_SkinnedMeshRender_material>` () const                    |
+---------------------------------+-----------------------------------------------------------------------------+
|         :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_SkinnedMeshRender_mesh>` () const                            |
+---------------------------------+-----------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setArmature<api_SkinnedMeshRender_setArmature>` (Armature * armature) |
+---------------------------------+-----------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setMaterial<api_SkinnedMeshRender_setMaterial>` (Material * material) |
+---------------------------------+-----------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setMesh<api_SkinnedMeshRender_setMesh>` (Mesh * mesh)                 |
+---------------------------------+-----------------------------------------------------------------------------+



.. _api_SkinnedMeshRender_static:
Static Methods
--------------

+-------------------------------------------------------------------+--------------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_SkinnedMeshRender_methods>` ()       |
+-------------------------------------------------------------------+--------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_SkinnedMeshRender_properties>` () |
+-------------------------------------------------------------------+--------------------------------------------------------+

.. _api_SkinnedMeshRender_methods:
Methods Description
-------------------

.. _api_SkinnedMeshRender_SkinnedMeshRender:

**SkinnedMeshRender::SkinnedMeshRender** ()

Default constructs an instance of SkinnedMeshRender.

----

.. _api_SkinnedMeshRender_~SkinnedMeshRender:

**SkinnedMeshRender::~SkinnedMeshRender** ()

Destroys the instance of SkinnedMeshRender. The destructor is virtual.

----

.. _api_SkinnedMeshRender_armature:

:ref:`Armature<api_Armature>` * **SkinnedMeshRender::armature** () const

Returns a Armature component for the attached skeleton.

**See also** setArmature().

----

.. _api_SkinnedMeshRender_material:

:ref:`Material<api_Material>` * **SkinnedMeshRender::material** () const

Returns an instantiated Material assigned to SkinnedMeshRender.

**See also** setMaterial().

----

.. _api_SkinnedMeshRender_mesh:

:ref:`Mesh<api_Mesh>` * **SkinnedMeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_SkinnedMeshRender_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **SkinnedMeshRender::methods** ()

----

.. _api_SkinnedMeshRender_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **SkinnedMeshRender::properties** ()

----

.. _api_SkinnedMeshRender_setArmature:

:ref:`void<api_void>`  **SkinnedMeshRender::setArmature** (:ref:`Armature<api_Armature>` * *armature*)

Attaches an *armature* skeleton.

**See also** *armature*().

----

.. _api_SkinnedMeshRender_setMaterial:

:ref:`void<api_void>`  **SkinnedMeshRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_SkinnedMeshRender_setMesh:

:ref:`void<api_void>`  **SkinnedMeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** *mesh*().

----


