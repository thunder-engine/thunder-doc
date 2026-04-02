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
|  :ref:`Armature<api_Armature>` * | :ref:`armature<api_SkinnedMeshRender_4527cb3a>` () const                        |
+----------------------------------+---------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsCenter<api_SkinnedMeshRender_1a7263e4>` () const                    |
+----------------------------------+---------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsExtent<api_SkinnedMeshRender_e25b4ac8>` () const                    |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setArmature<api_SkinnedMeshRender_db541068>` (Armature * armature)        |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsCenter<api_SkinnedMeshRender_267ab493>` (const Vector3 & center) |
+----------------------------------+---------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsExtent<api_SkinnedMeshRender_45e8f13d>` (const Vector3 & extent) |
+----------------------------------+---------------------------------------------------------------------------------+



.. _api_SkinnedMeshRender_static:

Static Methods
--------------

None

.. _api_SkinnedMeshRender_methods:

Methods Description
-------------------

.. _api_SkinnedMeshRender_4527cb3a:

 :ref:`Armature<api_Armature>` * **SkinnedMeshRender::armature** () const

Returns a Armature component for the attached skeleton.

**See also** setArmature().

----

.. _api_SkinnedMeshRender_1a7263e4:

 :ref:`Vector3<api_Vector3>`  **SkinnedMeshRender::boundsCenter** () const

Returns the center of the local bounding box.

**See also** setBoundsCenter().

----

.. _api_SkinnedMeshRender_e25b4ac8:

 :ref:`Vector3<api_Vector3>`  **SkinnedMeshRender::boundsExtent** () const

Returns the extent of the local bounding box.

**See also** setBoundsExtent().

----

.. _api_SkinnedMeshRender_db541068:

 void **SkinnedMeshRender::setArmature** (:ref:`Armature<api_Armature>` * *armature*)

Attaches an *armature* skeleton.

**See also** *armature*().

----

.. _api_SkinnedMeshRender_267ab493:

 void **SkinnedMeshRender::setBoundsCenter** (:ref:`Vector3<api_Vector3>` & *center*)

Sets the *center* of the local bounding box.

**See also** boundsCenter().

----

.. _api_SkinnedMeshRender_45e8f13d:

 void **SkinnedMeshRender::setBoundsExtent** (:ref:`Vector3<api_Vector3>` & *extent*)

Sets the *extent* of the local bounding box.

**See also** boundsExtent().


