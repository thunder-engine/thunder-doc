.. _api_Component:
Component Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Component_description:
Description
-----------

Base class for everything attached to Actor.

The Component class is a base class for each aspect of the actor, and how it interacts with the world.

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Component_public:
Public Methods
--------------

+---------------------------+-------------------------------------------------------------+
|                           | :ref:`Component<api_Component_Component>` ()                |
+---------------------------+-------------------------------------------------------------+
|                           | :ref:`~Component<api_Component_~Component>` ()              |
+---------------------------+-------------------------------------------------------------+
| :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_actor>` () const                  |
+---------------------------+-------------------------------------------------------------+
|     :ref:`bool<api_bool>` | :ref:`isEnabled<api_Component_isEnabled>` () const          |
+---------------------------+-------------------------------------------------------------+
|     :ref:`void<api_void>` | :ref:`setEnabled<api_Component_setEnabled>` (bool  enabled) |
+---------------------------+-------------------------------------------------------------+
|       :ref:`int<api_int>` | :ref:`tr<api_Component_tr>` (const int & )                  |
+---------------------------+-------------------------------------------------------------+

.. _api_Component_static:
Static Methods
--------------

+-------------------------------------------------------------------+------------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Component_methods>` ()       |
+-------------------------------------------------------------------+------------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Component_properties>` () |
+-------------------------------------------------------------------+------------------------------------------------+

.. _api_Component_methods:
Methods Description
-------------------

.. _api_Component_Component:

**Component::Component** ()

Default constructs an instance of Component.

----

.. _api_Component_~Component:

**Component::~Component** ()

Destroys the instance of Component. The destructor is virtual.

----

.. _api_Component_actor:

:ref:`Actor<api_Actor>` * **Component::actor** () const

Returns a pointer to the actor to which the component is attached.

----

.. _api_Component_isEnabled:

:ref:`bool<api_bool>`  **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Component::methods** ()

----

.. _api_Component_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Component::properties** ()

----

.. _api_Component_setEnabled:

:ref:`void<api_void>`  **Component::setEnabled** (:ref:`bool<api_bool>`  *enabled*)

Sets current state of component to *enabled* or disabled.

**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.

**See also** isEnabled().

----

.. _api_Component_tr:

:ref:`int<api_int>`  **Component::tr** (:ref:`int<api_int>` & **)

Returns **a **translated **version **of **source **text; **otherwise **returns **source **text **if **no **appropriate **translated **string **is **available.

----


