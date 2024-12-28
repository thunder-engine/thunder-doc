.. _api_Component:

Component
=========

Inherited: None

.. _api_Component_description:

Description
-----------

The Component class is a base class for each aspect of the actor, and how it interacts with the world.


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_Component_public:

Public Methods
--------------

+------------------------------------+----------------------------------------------------------------------------------------------------------+
|          :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_actor>` () const                                                               |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`component<api_Component_component>` (const std::string  type)                                      |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmos<api_Component_drawGizmos>` ()                                                           |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmosSelected<api_Component_drawGizmosSelected>` ()                                           |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|          :ref:`Actor<api_Actor>` * | :ref:`instantiate<api_Component_instantiate>` (Prefab * prefab, Vector3  position, Quaternion  rotation) |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabled<api_Component_isEnabled>` () const                                                       |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|          :ref:`Scene<api_Scene>` * | :ref:`scene<api_Component_scene>` () const                                                               |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setEnabled<api_Component_setEnabled>` (bool  enabled)                                              |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|                        std::string | :ref:`tr<api_Component_tr>` (const std::string  source)                                                  |
+------------------------------------+----------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`transform<api_Component_transform>` () const                                                       |
+------------------------------------+----------------------------------------------------------------------------------------------------------+



.. _api_Component_static:

Static Methods
--------------

None

.. _api_Component_methods:

Methods Description
-------------------

.. _api_Component_actor:

 :ref:`Actor<api_Actor>` * **Component::actor** () const

Returns an Actor which the Component is attached to.

----

.. _api_Component_component:

 :ref:`Component<api_Component>` * **Component::component** (std::string  *type*)

Returns a component with *type* attached to the same Actor. If no such component with this *type* returns nullptr.

----

.. _api_Component_drawGizmos:

 void **Component::drawGizmos** ()

Implement drawGizmos if you want to draw gizmos that are always drawn.

----

.. _api_Component_drawGizmosSelected:

 void **Component::drawGizmosSelected** ()

Implement drawGizmosSelected to draw a gizmo if the object is selected.

----

.. _api_Component_instantiate:

 :ref:`Actor<api_Actor>` * **Component::instantiate** (:ref:`Prefab<api_Prefab>` * *prefab*, :ref:`Vector3<api_Vector3>`  *position*, :ref:`Quaternion<api_Quaternion>`  *rotation*)

Clones the actor represented by *prefab* asset. This Actor will be a sibling of caller Actor and has local *position* and *rotation*.

----

.. _api_Component_isEnabled:

 bool **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_scene:

 :ref:`Scene<api_Scene>` * **Component::scene** () const

Returns a Scene which the Component is attached to.

----

.. _api_Component_setEnabled:

 void **Component::setEnabled** (bool  *enabled*)

Sets current state of component to *enabled* or disabled.


**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.


**See also** isEnabled().

----

.. _api_Component_tr:

 std::string **Component::tr** (std::string  *source*)

Returns a translated version of *source* text; otherwise returns *source* text if no appropriate translated std::string is available.

----

.. _api_Component_transform:

 :ref:`Transform<api_Transform>` * **Component::transform** () const

Returns a transform attached to this Actor.


