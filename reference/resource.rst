.. _api_Resource:

Resource
========

Inherited: None

.. _api_Resource_description:

Description
-----------


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_Resource_public:

Public Methods
--------------

+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`decRef<api_Resource_decRef>` ()                                                                 |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`incRef<api_Resource_incRef>` ()                                                                 |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         bool | :ref:`isUnloadable<api_Resource_isUnloadable>` ()                                                     |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`notifyCurrentState<api_Resource_notifyCurrentState>` ()                                         |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`setState<api_Resource_setState>` (Resource::State  state)                                       |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Resource::State<api_Resource::State>` | :ref:`state<api_Resource_state>` () const                                                             |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`subscribe<api_Resource_subscribe>` (Resource::ResourceUpdatedCallback  callback, void * object) |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`switchState<api_Resource_switchState>` (Resource::State  state)                                 |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                         void | :ref:`unsubscribe<api_Resource_unsubscribe>` (void * object)                                          |
+----------------------------------------------+-------------------------------------------------------------------------------------------------------+

.. _api_Resource_enums:

Public Enums
------------

.. _api_Resource_State:

**enum Resource::State**

Status for the resource.

+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|              Constant | Value | Description                                                                                                                                                                                                                                            |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Invalid | 0     | The state is invalid (Unable to load resource).                                                                                                                                                                                                        |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Loading | 1     | This resource is loading from the disc.                                                                                                                                                                                                                |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Resource::ToBeUpdated | 2     | This resource must be updated. Mostly used for the graphical resources to upload resouce to the graphical system. In case of resource doesn't require updating internal data. The resource must switch state to Ready immediately.                     |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|       Resource::Ready | 3     | This resource is ready to use.                                                                                                                                                                                                                         |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|     Resource::Suspend | 4     | This resource is not needed at this moment. In case of resource system will require additional memory suspended resources will be unloaded.                                                                                                            |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|   Resource::Unloading | 5     | This resource is marked to be unloaded. Mostly used for the graphical resources to unload resources from the graphical system. In case of resource doesn't require to unload internal data. The resource must switch state to ToBeDeleted immediately. |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Resource::ToBeDeleted | 6     | This resource will be deleted soon. Resources with this state must not be used anywhere.                                                                                                                                                               |
+-----------------------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_Resource_static:

Static Methods
--------------

None

.. _api_Resource_methods:

Methods Description
-------------------

.. _api_Resource_decRef:

 void **Resource::decRef** ()

Decreases the reference counter for the resource. In case of the reference count becomes zero the resource set to ResourceState::Suspend state.

----

.. _api_Resource_incRef:

 void **Resource::incRef** ()

Increases the reference counter for the resource.

----

.. _api_Resource_isUnloadable:

 bool **Resource::isUnloadable** ()

Returns true in case of resource can be unloaded from GPU; otherwise returns false.

----

.. _api_Resource_notifyCurrentState:

 void **Resource::notifyCurrentState** ()

Notifies subscribers about the current state of the resource.

----

.. _api_Resource_setState:

 void **Resource::setState** (:ref:`Resource::State<api_Resource::State>`  *state*)

Sets new *state* for the resource.

**See also** *state*().

----

.. _api_Resource_state:

 :ref:`Resource::State<api_Resource::State>`  **Resource::state** () const

Returns state for the resource. For possible states please see Resource::ResourceState.

**See also** setState().

----

.. _api_Resource_subscribe:

 void **Resource::subscribe** (:ref:`Resource::ResourceUpdatedCallback<api_Resource::ResourceUpdatedCallback>`  *callback*, void * *object*)

Subscribes *callback* fro *object* to handle resource status. Increases reference count.

----

.. _api_Resource_switchState:

 void **Resource::switchState** (:ref:`Resource::State<api_Resource::State>`  *state*)

Switches the current *state* to a new *state* for the resource.

----

.. _api_Resource_unsubscribe:

 void **Resource::unsubscribe** (void * *object*)

Unsubscribes an *object* to stop handle resource status. Decreases reference count.


