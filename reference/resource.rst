.. _api_Resource:
Resource Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Resource_description:
Description
-----------

Base class for every resource in Thunder Engine.

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Resource_public:
Public Methods
--------------

+-------------------------------------------------------------+-------------------------------------------------------------------------+
|                                                             | :ref:`Resource<api_Resource_Resource>` ()                               |
+-------------------------------------------------------------+-------------------------------------------------------------------------+
|                                                             | :ref:`~Resource<api_Resource_~Resource>` ()                             |
+-------------------------------------------------------------+-------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`decRef<api_Resource_decRef>` ()                                   |
+-------------------------------------------------------------+-------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`incRef<api_Resource_incRef>` ()                                   |
+-------------------------------------------------------------+-------------------------------------------------------------------------+
|                                       :ref:`void<api_void>` | :ref:`setState<api_Resource_setState>` (Resource::ResourceState  state) |
+-------------------------------------------------------------+-------------------------------------------------------------------------+
| :ref:`Resource::ResourceState<api_Resource::ResourceState>` | :ref:`state<api_Resource_state>` () const                               |
+-------------------------------------------------------------+-------------------------------------------------------------------------+

.. _api_Resource_static:
Static Methods
--------------

None

.. _api_Resource_methods:
Methods Description
-------------------

.. _api_Resource_Resource:

**Resource::Resource** ()

Default constructs an instance of Resource.

----

.. _api_Resource_~Resource:

**Resource::~Resource** ()

Destroys the instance of Resource. The destructor is virtual.

----

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


