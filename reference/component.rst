.. _api_Component:
Component Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Component_description:
Description
-----------

The Component class is a base class for each aspect of the actor, and how it interacts with the world.

Note: This class must be a superclass only and shouldn't be created manually.



.. _api_Component_public:
Public Methods
--------------

+-------------------------------------+-------------------------------------------------------------+
|           :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_actor>` () const                  |
+-------------------------------------+-------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isEnabled<api_Component_isEnabled>` () const          |
+-------------------------------------+-------------------------------------------------------------+
|               :ref:`bool<api_bool>` | :ref:`isRenderable<api_Component_isRenderable>` () const    |
+-------------------------------------+-------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setEnabled<api_Component_setEnabled>` (bool  enabled) |
+-------------------------------------+-------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`tr<api_Component_tr>` (const std::string & source)    |
+-------------------------------------+-------------------------------------------------------------+



.. _api_Component_static:
Static Methods
--------------

None

.. _api_Component_methods:
Methods Description
-------------------

.. _api_Component_actor:

:ref:`Actor<api_Actor>` * **Component::actor** () const

Returns a pointer to the actor to which the component is attached.

----

.. _api_Component_isEnabled:

:ref:`bool<api_bool>`  **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_isRenderable:

:ref:`bool<api_bool>`  **Component::isRenderable** () const

Returns true in case of the component can be rendered on the screen; otherwise returns false.

----

.. _api_Component_setEnabled:

:ref:`void<api_void>`  **Component::setEnabled** (:ref:`bool<api_bool>`  *enabled*)

Sets current state of component to *enabled* or disabled.

**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.

**See also** isEnabled().

----

.. _api_Component_tr:

:ref:`std::string<api_std::string>`  **Component::tr** (:ref:`std::string<api_std::string>` & *source*)

Returns a translated version of *source* text; otherwise returns *source* text if no appropriate translated string is available.

----


