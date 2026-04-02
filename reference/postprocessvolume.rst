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
|  float | :ref:`blendWeight<api_PostProcessVolume_b8a2e051>` () const           |
+--------+-----------------------------------------------------------------------+
|    int | :ref:`priority<api_PostProcessVolume_ac8745d0>` () const              |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setBlendWeight<api_PostProcessVolume_60c32871>` (float  weight) |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setPriority<api_PostProcessVolume_81adf5cb>` (int  priority)    |
+--------+-----------------------------------------------------------------------+
|   void | :ref:`setUnbound<api_PostProcessVolume_3508ca4d>` (bool  unbound)     |
+--------+-----------------------------------------------------------------------+
|   bool | :ref:`unbound<api_PostProcessVolume_5dbc897e>` () const               |
+--------+-----------------------------------------------------------------------+



.. _api_PostProcessVolume_static:

Static Methods
--------------

None

.. _api_PostProcessVolume_methods:

Methods Description
-------------------

.. _api_PostProcessVolume_b8a2e051:

 float **PostProcessVolume::blendWeight** () const

Returns the weight of settings for blending process.

**See also** setBlendWeight().

----

.. _api_PostProcessVolume_ac8745d0:

 int **PostProcessVolume::priority** () const

Returns the priority of volume in the list.

**See also** setPriority().

----

.. _api_PostProcessVolume_60c32871:

 void **PostProcessVolume::setBlendWeight** (float  *weight*)

Sets the *weight* of settings for blending process.

**See also** blendWeight().

----

.. _api_PostProcessVolume_81adf5cb:

 void **PostProcessVolume::setPriority** (int  *priority*)

Sets the *priority* of volume in the list.

**See also** *priority*().

----

.. _api_PostProcessVolume_3508ca4d:

 void **PostProcessVolume::setUnbound** (bool  *unbound*)

Sets flag *unbound* if current settings must be applied entire scene.

**See also** *unbound*().

----

.. _api_PostProcessVolume_5dbc897e:

 bool **PostProcessVolume::unbound** () const

Returns true in case of component has no bounding volume; otherwise return false.

**See also** setUnbound().


