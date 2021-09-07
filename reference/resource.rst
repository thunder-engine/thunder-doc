.. _api_Resource:
Resource Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Resource_description:
Description
-----------

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Resource_public:
Public Methods
--------------

+-------------------------------------------------------------+-------------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`decRef<api_Resource_decRef>` ()                                         |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`incRef<api_Resource_incRef>` ()                                         |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`setState<api_Resource_setState>` (Resource::ResourceState  state)       |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+
| :ref:`Resource::ResourceState<api_Resource::ResourceState>` | :ref:`state<api_Resource_state>` () const                                     |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`subscribe<api_Resource_subscribe>` (Resource::IObserver * observer)     |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`unsubscribe<api_Resource_unsubscribe>` (Resource::IObserver * observer) |
+-------------------------------------------------------------+-------------------------------------------------------------------------------+

.. _api_Resource_enums:
Public Enums
--------------

.. _api_Resource_ResourceState:
**enum Resource::ResourceState**

Status for the resource.

+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
|              Constant | Value | Description                                                                                                                                 |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Invalid | 0     | The state is invalid.                                                                                                                       |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Loading | 1     | This resource is loading.                                                                                                                   |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
| Resource::ToBeUpdated | 2     | This resource must be updated. Mostly used for the graphical rendering to upload textures and meshes to the graphical system.               |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
|       Resource::Ready | 3     | This resource is ready to use.                                                                                                              |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Suspend | 4     | This resource is not needed at this moment. In case of resource system will require additional memory suspended resources will be unloaded. |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+
| Resource::ToBeDeleted | 5     | This resource will be unloaded soon. Resources with this state shouldn't be used anywhere.                                                  |
+-----------------------+-------+---------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_Resource_static:
Static Methods
--------------

None

.. _api_Resource_methods:
Methods Description
-------------------

.. _api_Resource_decRef:

:ref:`void<api_void>`  **Resource::decRef** ()

Decreases the reference counter for the resource. In case of the reference count becomes zero the resource set to ResourceState::Suspend state.

----

.. _api_Resource_incRef:

:ref:`void<api_void>`  **Resource::incRef** ()

Increases the reference counter for the resource.

----

.. _api_Resource_setState:

:ref:`void<api_void>`  **Resource::setState** (:ref:`Resource::ResourceState<api_Resource::ResourceState>`  *state*)

Sets new *state* for the resource.

**See also** *state*().

----

.. _api_Resource_state:

:ref:`Resource::ResourceState<api_Resource::ResourceState>`  **Resource::state** () const

Returns state for the resource. For possible states please see Resource::ResourceState.

**See also** setState().

----

.. _api_Resource_subscribe:

:ref:`void<api_void>`  **Resource::subscribe** (:ref:`Resource::IObserver<api_Resource::IObserver>` * *observer*)

Subscribes *observer* to handle resource status.

----

.. _api_Resource_unsubscribe:

:ref:`void<api_void>`  **Resource::unsubscribe** (:ref:`Resource::IObserver<api_Resource::IObserver>` * *observer*)

Unsubscribes *observer* to stop handle resource status.

----


