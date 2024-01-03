.. _api_Resource:

Resource Class
==============

Inherited: :doc:`Object<api_Object>`

.. _api_Resource_description:

Description
-----------

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Resource_public:

Public Methods
--------------

+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`decRef<api_Resource_decRef>` ()                                                                 |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`incRef<api_Resource_incRef>` ()                                                                 |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     bool | :ref:`isUnloadable<api_Resource_isUnloadable>` ()                                                     |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`notifyCurrentState<api_Resource_notifyCurrentState>` ()                                         |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`setState<api_Resource_setState>` (ResourceState  state)                                         |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`ResourceState<api_ResourceState>` | :ref:`state<api_Resource_state>` () const                                                             |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`subscribe<api_Resource_subscribe>` (Resource::ResourceUpdatedCallback  callback, void * object) |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`switchState<api_Resource_switchState>` (ResourceState  state)                                   |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                     void | :ref:`unsubscribe<api_Resource_unsubscribe>` (void * object)                                          |
+------------------------------------------+-------------------------------------------------------------------------------------------------------+



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

 void **Resource::setState** (:ref:`ResourceState<api_ResourceState>`  *state*)

Sets new *state* for the resource.

**See also** *state*().

----

.. _api_Resource_state:

 :ref:`ResourceState<api_ResourceState>` **Resource::state** () const

Returns state for the resource. For possible states please see Resource::ResourceState.

**See also** setState().

----

.. _api_Resource_subscribe:

 void **Resource::subscribe** (:ref:`Resource::ResourceUpdatedCallback<api_Resource::ResourceUpdatedCallback>`  *callback*, void * *object*)

Subscribes *callback* fro *object* to handle resource status.

----

.. _api_Resource_switchState:

 void **Resource::switchState** (:ref:`ResourceState<api_ResourceState>`  *state*)

Switches the current *state* to a new *state* for the resource.

----

.. _api_Resource_unsubscribe:

 void **Resource::unsubscribe** (void * *object*)

Unsubscribes an *object* to stop handle resource status.


