.. _api_PostProcessVolume:

PostProcessVolume
=================

Inherited: :doc:`Component<api_Component>`

.. _api_PostProcessVolume_description:

Description
-----------

Used to affect post process settings in the game and editor.



.. _api_PostProcessVolume_public:

Public Methods
--------------

+--------+-----------------------------------------------------------------------------+
|  float | :ref:`blendWeight<api_PostProcessVolume_blendWeight>` () const              |
+--------+-----------------------------------------------------------------------------+
|    int | :ref:`priority<api_PostProcessVolume_priority>` () const                    |
+--------+-----------------------------------------------------------------------------+
|   void | :ref:`setBlendWeight<api_PostProcessVolume_setBlendWeight>` (float  weight) |
+--------+-----------------------------------------------------------------------------+
|   void | :ref:`setPriority<api_PostProcessVolume_setPriority>` (int  priority)       |
+--------+-----------------------------------------------------------------------------+
|   void | :ref:`setUnbound<api_PostProcessVolume_setUnbound>` (bool  unbound)         |
+--------+-----------------------------------------------------------------------------+
|   bool | :ref:`unbound<api_PostProcessVolume_unbound>` () const                      |
+--------+-----------------------------------------------------------------------------+



.. _api_PostProcessVolume_static:

Static Methods
--------------

None

.. _api_PostProcessVolume_methods:

Methods Description
-------------------

.. _api_PostProcessVolume_blendWeight:

 float **PostProcessVolume::blendWeight** () const

Returns the weight of settings for blending process.

**See also** setBlendWeight().

----

.. _api_PostProcessVolume_priority:

 int **PostProcessVolume::priority** () const

Returns the priority of volume in the list.

**See also** setPriority().

----

.. _api_PostProcessVolume_setBlendWeight:

 void **PostProcessVolume::setBlendWeight** (float  *weight*)

Sets the *weight* of settings for blending process.

**See also** blendWeight().

----

.. _api_PostProcessVolume_setPriority:

 void **PostProcessVolume::setPriority** (int  *priority*)

Sets the *priority* of volume in the list.

**See also** *priority*().

----

.. _api_PostProcessVolume_setUnbound:

 void **PostProcessVolume::setUnbound** (bool  *unbound*)

Sets flag *unbound* if current settings must be applied entire scene.

**See also** *unbound*().

----

.. _api_PostProcessVolume_unbound:

 bool **PostProcessVolume::unbound** () const

Returns true in case of component has no bounding volume; otherwise return false.

**See also** setUnbound().


