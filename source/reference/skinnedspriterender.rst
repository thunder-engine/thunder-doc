.. _api_SkinnedSpriteRender:

SkinnedSpriteRender
===================

Inherited: :ref:`SpriteRender<api_SpriteRender>`

.. _api_SkinnedSpriteRender_description:

Description
-----------

The SkinnedSpriteRender component allows you to display 2D Skeletal Sprite to use in both 2D and 3D scenes.



.. _api_SkinnedSpriteRender_public:

Public Methods
--------------

+----------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Armature<api_Armature>` * | :ref:`armature<api_SkinnedSpriteRender_b739ea6f>` () const                        |
+----------------------------------+-----------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsCenter<api_SkinnedSpriteRender_54b72aec>` () const                    |
+----------------------------------+-----------------------------------------------------------------------------------+
|      :ref:`Vector3<api_Vector3>` | :ref:`boundsExtent<api_SkinnedSpriteRender_0af56792>` () const                    |
+----------------------------------+-----------------------------------------------------------------------------------+
|                             void | :ref:`setArmature<api_SkinnedSpriteRender_0db37a98>` (Armature * armature)        |
+----------------------------------+-----------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsCenter<api_SkinnedSpriteRender_1ecb8273>` (const Vector3 & center) |
+----------------------------------+-----------------------------------------------------------------------------------+
|                             void | :ref:`setBoundsExtent<api_SkinnedSpriteRender_e38a52db>` (const Vector3 & extent) |
+----------------------------------+-----------------------------------------------------------------------------------+



.. _api_SkinnedSpriteRender_static:

Static Methods
--------------

None

.. _api_SkinnedSpriteRender_methods:

Methods Description
-------------------

.. _api_SkinnedSpriteRender_b739ea6f:

 :ref:`Armature<api_Armature>` * **SkinnedSpriteRender::armature** () const

Returns a Armature component for the attached skeleton.

**See also** setArmature().

----

.. _api_SkinnedSpriteRender_54b72aec:

 :ref:`Vector3<api_Vector3>`  **SkinnedSpriteRender::boundsCenter** () const

Returns the center of the local bounding box.

**See also** setBoundsCenter().

----

.. _api_SkinnedSpriteRender_0af56792:

 :ref:`Vector3<api_Vector3>`  **SkinnedSpriteRender::boundsExtent** () const

Returns the extent of the local bounding box.

**See also** setBoundsExtent().

----

.. _api_SkinnedSpriteRender_0db37a98:

 void **SkinnedSpriteRender::setArmature** (:ref:`Armature<api_Armature>` * *armature*)

Attaches an *armature* skeleton.

**See also** armature().

----

.. _api_SkinnedSpriteRender_1ecb8273:

 void **SkinnedSpriteRender::setBoundsCenter** (:ref:`Vector3<api_Vector3>` & *center*)

Sets the *center* of the local bounding box.

**See also** boundsCenter().

----

.. _api_SkinnedSpriteRender_e38a52db:

 void **SkinnedSpriteRender::setBoundsExtent** (:ref:`Vector3<api_Vector3>` & *extent*)

Sets the *extent* of the local bounding box.

**See also** boundsExtent().


