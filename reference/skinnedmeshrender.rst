.. _api_SkinnedMeshRender:

SkinnedMeshRender
=================

Inherited: :doc:`Renderable<api_Renderable>`

.. _api_SkinnedMeshRender_description:

Description
-----------

The SkinnedMeshRender component allows you to display 3D Skeletal Mesh to use in both 2D and 3D scenes.



.. _api_SkinnedMeshRender_public:

Public Methods
--------------

+--------------------------------------+----------------------------------------------------------------------------------+
|      :ref:`Armature<api_Armature>` * | :ref:`armature<api_SkinnedMeshRender_armature>` () const                         |
+--------------------------------------+----------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`boundsCenter<api_SkinnedMeshRender_boundsCenter>` () const                 |
+--------------------------------------+----------------------------------------------------------------------------------+
|          :ref:`Vector3<api_Vector3>` | :ref:`boundsExtent<api_SkinnedMeshRender_boundsExtent>` () const                 |
+--------------------------------------+----------------------------------------------------------------------------------+
|  :ref:`VariantList<api_VariantList>` | :ref:`materials<api_SkinnedMeshRender_materials>` () const                       |
+--------------------------------------+----------------------------------------------------------------------------------+
|              :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_SkinnedMeshRender_mesh>` () const                                 |
+--------------------------------------+----------------------------------------------------------------------------------+
|                                 void | :ref:`setArmature<api_SkinnedMeshRender_setArmature>` (Armature * armature)      |
+--------------------------------------+----------------------------------------------------------------------------------+
|                                 void | :ref:`setBoundsCenter<api_SkinnedMeshRender_setBoundsCenter>` (Vector3  center)  |
+--------------------------------------+----------------------------------------------------------------------------------+
|                                 void | :ref:`setBoundsExtent<api_SkinnedMeshRender_setBoundsExtent>` (Vector3  extent)  |
+--------------------------------------+----------------------------------------------------------------------------------+
|                                 void | :ref:`setMaterials<api_SkinnedMeshRender_setMaterials>` (VariantList  materials) |
+--------------------------------------+----------------------------------------------------------------------------------+
|                                 void | :ref:`setMesh<api_SkinnedMeshRender_setMesh>` (Mesh * mesh)                      |
+--------------------------------------+----------------------------------------------------------------------------------+



.. _api_SkinnedMeshRender_static:

Static Methods
--------------

None

.. _api_SkinnedMeshRender_methods:

Methods Description
-------------------

.. _api_SkinnedMeshRender_armature:

 :ref:`Armature<api_Armature>`* **SkinnedMeshRender::armature** () const

Returns a Armature component for the attached skeleton.

**See also** setArmature().

----

.. _api_SkinnedMeshRender_boundsCenter:

 :ref:`Vector3<api_Vector3>` **SkinnedMeshRender::boundsCenter** () const

Returns the center of the local bounding box.

**See also** setBoundsCenter().

----

.. _api_SkinnedMeshRender_boundsExtent:

 :ref:`Vector3<api_Vector3>` **SkinnedMeshRender::boundsExtent** () const

Returns the extent of the local bounding box.

**See also** setBoundsExtent().

----

.. _api_SkinnedMeshRender_materials:

 :ref:`VariantList<api_VariantList>` **SkinnedMeshRender::materials** () const

Returns a list of assigned materials.

**See also** setMaterials().

----

.. _api_SkinnedMeshRender_mesh:

 :ref:`Mesh<api_Mesh>`* **SkinnedMeshRender::mesh** () const

Returns a Mesh assigned to this component.

**See also** setMesh().

----

.. _api_SkinnedMeshRender_setArmature:

 void **SkinnedMeshRender::setArmature** (:ref:`Armature<api_Armature>` * *armature*)

Attaches an *armature* skeleton.

**See also** *armature*().

----

.. _api_SkinnedMeshRender_setBoundsCenter:

 void **SkinnedMeshRender::setBoundsCenter** (:ref:`Vector3<api_Vector3>`  *center*)

Sets the *center* of the local bounding box.

**See also** boundsCenter().

----

.. _api_SkinnedMeshRender_setBoundsExtent:

 void **SkinnedMeshRender::setBoundsExtent** (:ref:`Vector3<api_Vector3>`  *extent*)

Sets the *extent* of the local bounding box.

**See also** boundsExtent().

----

.. _api_SkinnedMeshRender_setMaterials:

 void **SkinnedMeshRender::setMaterials** (:ref:`VariantList<api_VariantList>`  *materials*)

Assigns an array of the *materials* to the mesh.

**See also** *materials*().

----

.. _api_SkinnedMeshRender_setMesh:

 void **SkinnedMeshRender::setMesh** (:ref:`Mesh<api_Mesh>` * *mesh*)

Assigns a new *mesh* to draw.

**See also** *mesh*().


