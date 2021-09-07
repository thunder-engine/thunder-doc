.. _api_PostProcessVolume:
PostProcessVolume Class
================

Inherited: :ref:`Component<api_Component>`

.. _api_PostProcessVolume_description:
Description
-----------

A post process settings volume.

Used to affect post process settings in the game and editor.



.. _api_PostProcessVolume_public:
Public Methods
--------------

+-------------------------+-----------------------------------------------------------------------------+
|                         | :ref:`PostProcessVolume<api_PostProcessVolume_PostProcessVolume>` ()        |
+-------------------------+-----------------------------------------------------------------------------+
|                         | :ref:`~PostProcessVolume<api_PostProcessVolume_~PostProcessVolume>` ()      |
+-------------------------+-----------------------------------------------------------------------------+
| :ref:`float<api_float>` | :ref:`blendWeight<api_PostProcessVolume_blendWeight>` () const              |
+-------------------------+-----------------------------------------------------------------------------+
|     :ref:`int<api_int>` | :ref:`priority<api_PostProcessVolume_priority>` () const                    |
+-------------------------+-----------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setBlendWeight<api_PostProcessVolume_setBlendWeight>` (float  weight) |
+-------------------------+-----------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setPriority<api_PostProcessVolume_setPriority>` (int  priority)       |
+-------------------------+-----------------------------------------------------------------------------+
|   :ref:`void<api_void>` | :ref:`setUnbound<api_PostProcessVolume_setUnbound>` (bool  unbound)         |
+-------------------------+-----------------------------------------------------------------------------+
|   :ref:`bool<api_bool>` | :ref:`unbound<api_PostProcessVolume_unbound>` () const                      |
+-------------------------+-----------------------------------------------------------------------------+



.. _api_PostProcessVolume_static:
Static Methods
--------------

+-------------------------------------------------------------------+--------------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_PostProcessVolume_methods>` ()       |
+-------------------------------------------------------------------+--------------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_PostProcessVolume_properties>` () |
+-------------------------------------------------------------------+--------------------------------------------------------+

.. _api_PostProcessVolume_methods:
Methods Description
-------------------

.. _api_PostProcessVolume_PostProcessVolume:

**PostProcessVolume::PostProcessVolume** ()

Default constructs an instance of PostProcessVolume.

----

.. _api_PostProcessVolume_~PostProcessVolume:

**PostProcessVolume::~PostProcessVolume** ()

Destroys the instance of PostProcessVolume. The destructor is virtual.

----

.. _api_PostProcessVolume_blendWeight:

:ref:`float<api_float>`  **PostProcessVolume::blendWeight** () const

Returns the weight of settings for blending process.

**See also** setBlendWeight().

----

.. _api_PostProcessVolume_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **PostProcessVolume::methods** ()

----

.. _api_PostProcessVolume_priority:

:ref:`int<api_int>`  **PostProcessVolume::priority** () const

Returns the priority of volume in the list.

**See also** setPriority().

----

.. _api_PostProcessVolume_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **PostProcessVolume::properties** ()

----

.. _api_PostProcessVolume_setBlendWeight:

:ref:`void<api_void>`  **PostProcessVolume::setBlendWeight** (:ref:`float<api_float>`  *weight*)

Sets the *weight* of settings for blending process.

**See also** blendWeight().

----

.. _api_PostProcessVolume_setPriority:

:ref:`void<api_void>`  **PostProcessVolume::setPriority** (:ref:`int<api_int>`  *priority*)

Sets the *priority* of volume in the list.

**See also** *priority*().

----

.. _api_PostProcessVolume_setUnbound:

:ref:`void<api_void>`  **PostProcessVolume::setUnbound** (:ref:`bool<api_bool>`  *unbound*)

Sets flag *unbound* if current settings must be applied entire scene.

**See also** *unbound*().

----

.. _api_PostProcessVolume_unbound:

:ref:`bool<api_bool>`  **PostProcessVolume::unbound** () const

Returns true in case of component has no bounding volume; otherwise return false.

**See also** setUnbound().

----


