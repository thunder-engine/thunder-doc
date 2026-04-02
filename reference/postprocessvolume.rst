.. _api_PostProcessVolume:

PostProcessVolume
=================

Inherited: None

.. _api_PostProcessVolume_description:

Description
-----------

Used to affect post process settings in the game and editor.



.. _api_PostProcessVolume_public:

Public Methods
--------------

+--------+-----------------------------------------------------------------------+
|  float | :ref:`blendWeight<api_PostProcessVolume_a2d56940>` () const           |
+--------+-----------------------------------------------------------------------+
|    int | :ref:`priority<api_PostProcessVolume_bcf705ed>` () const              |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setBlendWeight<api_PostProcessVolume_a893c4e7>` (float  weight) |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setPriority<api_PostProcessVolume_021c9d35>` (int  priority)    |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setUnbound<api_PostProcessVolume_6930d8b7>` (bool  unbound)     |
+--------+-----------------------------------------------------------------------+
|   bool | :ref:`unbound<api_PostProcessVolume_1ef389bd>` () const               |
+--------+-----------------------------------------------------------------------+



.. _api_PostProcessVolume_static:

Static Methods
--------------

None

.. _api_PostProcessVolume_methods:

Methods Description
-------------------

.. _api_PostProcessVolume_a2d56940:

 float **PostProcessVolume::blendWeight** () const

Returns the weight of settings for blending process.

**See also** setBlendWeight().

----

.. _api_PostProcessVolume_bcf705ed:

 int **PostProcessVolume::priority** () const

Returns the priority of volume in the list.

**See also** setPriority().

----

.. _api_PostProcessVolume_a893c4e7:

 void **PostProcessVolume::setBlendWeight** (float  *weight*)

Sets the *weight* of settings for blending process.

**See also** blendWeight().

----

.. _api_PostProcessVolume_021c9d35:

 void **PostProcessVolume::setPriority** (int  *priority*)

Sets the *priority* of volume in the list.

**See also** priority().

----

.. _api_PostProcessVolume_6930d8b7:

 void **PostProcessVolume::setUnbound** (bool  *unbound*)

Sets flag *unbound* if current settings must be applied entire scene.

**See also** unbound().

----

.. _api_PostProcessVolume_1ef389bd:

 bool **PostProcessVolume::unbound** () const

Returns true in case of component has no bounding volume; otherwise return false.

**See also** setUnbound().


