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

+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_c528a9fe>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`component<api_Component_6fa52eb3>` (const TString & type)                                       |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmos<api_Component_ad9cb8f1>` ()                                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmosSelected<api_Component_bc54e189>` ()                                                  |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`Actor<api_Actor>` * | :ref:`instantiate<api_Component_725e98f6>` (Prefab * prefab, Vector3  position, Quaternion  rotation) |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabled<api_Component_71a620cf>` () const                                                     |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabledInHierarchy<api_Component_2c4370e5>` () const                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`Scene<api_Scene>` * | :ref:`scene<api_Component_9b2aef76>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setEnabled<api_Component_3fae70db>` (bool  enabled)                                             |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`TString<api_TString>` | :ref:`tr<api_Component_74d052e3>` (const TString & source)                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`transform<api_Component_4a7b9c3d>` () const                                                     |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`World<api_World>` * | :ref:`world<api_Component_62f94a37>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+



.. _api_Component_static:

Static Methods
--------------

None

.. _api_Component_methods:

Methods Description
-------------------

.. _api_Component_c528a9fe:

 :ref:`Actor<api_Actor>` * **Component::actor** () const

Returns an Actor which the Component is attached to.

----

.. _api_Component_6fa52eb3:

 :ref:`Component<api_Component>` * **Component::component** (:ref:`TString<api_TString>` & *type*)

Returns a component with *type* attached to the same Actor. If no such component with this *type* returns nullptr.

----

.. _api_Component_ad9cb8f1:

 void **Component::drawGizmos** ()

Implement drawGizmos if you want to draw gizmos that are always drawn.

----

.. _api_Component_bc54e189:

 void **Component::drawGizmosSelected** ()

Implement drawGizmosSelected to draw a gizmo if the object is selected.

----

.. _api_Component_725e98f6:

 :ref:`Actor<api_Actor>` * **Component::instantiate** (:ref:`Prefab<api_Prefab>` * *prefab*, :ref:`Vector3<api_Vector3>`  *position*, :ref:`Quaternion<api_Quaternion>`  *rotation*)

Clones the actor represented by *prefab* asset. This Actor will be a sibling of caller Actor and has local *position* and *rotation*.

----

.. _api_Component_71a620cf:

 bool **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_2c4370e5:

 bool **Component::isEnabledInHierarchy** () const

Returns false in case of one of Actors in top hierarchy or this component was disabled; otherwise returns true.

----

.. _api_Component_9b2aef76:

 :ref:`Scene<api_Scene>` * **Component::scene** () const

Returns a Scene which the Component is attached to.

----

.. _api_Component_3fae70db:

 void **Component::setEnabled** (bool  *enabled*)

Sets current state of component to *enabled* or disabled.


**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.


**See also** isEnabled().

----

.. _api_Component_74d052e3:

 :ref:`TString<api_TString>`  **Component::tr** (:ref:`TString<api_TString>` & *source*)

Returns a translated version of *source* text; otherwise returns *source* text if no appropriate translated std::string is available.

----

.. _api_Component_4a7b9c3d:

 :ref:`Transform<api_Transform>` * **Component::transform** () const

Returns a transform attached to this Actor.

----

.. _api_Component_62f94a37:

 :ref:`World<api_World>` * **Component::world** () const

Returns a World which the Component is attached to.


