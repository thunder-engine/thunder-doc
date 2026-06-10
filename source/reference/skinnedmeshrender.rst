.. _api_SkinnedMeshRender:

SkinnedMeshRender
=================

Inherited: None

.. _api_SkinnedMeshRender_description:

Description
-----------

The SkinnedMeshRender component allows you to display 3D Skeletal Mesh to use in both 2D and 3D scenes.



.. _api_SkinnedMeshRender_public:

Public Methods
--------------

+----------------------------------+---------------------------------------------------------------------------------+
|  :ref:`Armature<api_Armature>` * | :ref:`armature<api_SkinnedMeshRender_6e3bc401>` () const                        |
+----------------------------------+---------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsCenter<api_SkinnedMeshRender_03fc57a8>` () const                    |
+----------------------------------+---------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsExtent<api_SkinnedMeshRender_0c45d3e1>` () const                    |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setArmature<api_SkinnedMeshRender_2e13da5f>` (Armature * armature)        |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsCenter<api_SkinnedMeshRender_f71a56b8>` (const Vector3 & center) |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsExtent<api_SkinnedMeshRender_98fd751c>` (const Vector3 & extent) |
+----------------------------------+---------------------------------------------------------------------------------+



.. _api_SkinnedMeshRender_static:

Static Methods
--------------

None

.. _api_SkinnedMeshRender_methods:

Methods Description
-------------------

.. _api_SkinnedMeshRender_6e3bc401:

 :ref:`Armature<api_Armature>` * **SkinnedMeshRender::armature** () const

Returns a Armature component for the attached skeleton.

**See also** setArmature().

----

.. _api_SkinnedMeshRender_03fc57a8:

 :ref:`Vector3<api_Vector3>`  **SkinnedMeshRender::boundsCenter** () const

Returns the center of the local bounding box.

**See also** setBoundsCenter().

----

.. _api_SkinnedMeshRender_0c45d3e1:

 :ref:`Vector3<api_Vector3>`  **SkinnedMeshRender::boundsExtent** () const

Returns the extent of the local bounding box.

**See also** setBoundsExtent().

----

.. _api_SkinnedMeshRender_2e13da5f:

 void **SkinnedMeshRender::setArmature** (:ref:`Armature<api_Armature>` * *armature*)

Attaches an *armature* skeleton.

**See also** armature().

----

.. _api_SkinnedMeshRender_f71a56b8:

 void **SkinnedMeshRender::setBoundsCenter** (:ref:`Vector3<api_Vector3>` & *center*)

Sets the *center* of the local bounding box.

**See also** boundsCenter().

----

.. _api_SkinnedMeshRender_98fd751c:

 void **SkinnedMeshRender::setBoundsExtent** (:ref:`Vector3<api_Vector3>` & *extent*)

Sets the *extent* of the local bounding box.

**See also** boundsExtent().


