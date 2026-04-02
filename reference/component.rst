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
|          :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_be5ca3f1>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`component<api_Component_734891f6>` (const TString & type)                                       |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmos<api_Component_8413e6bc>` ()                                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`drawGizmosSelected<api_Component_4fc83ead>` ()                                                  |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`Actor<api_Actor>` * | :ref:`instantiate<api_Component_e10567d8>` (Prefab * prefab, Vector3  position, Quaternion  rotation) |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabled<api_Component_70518fe9>` () const                                                     |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabledInHierarchy<api_Component_25deb369>` () const                                          |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`Scene<api_Scene>` * | :ref:`scene<api_Component_ed078239>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setEnabled<api_Component_1a7bc209>` (bool  enabled)                                             |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|        :ref:`TString<api_TString>` | :ref:`tr<api_Component_4825be6f>` (const TString & source)                                            |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`transform<api_Component_f2e47306>` () const                                                     |
+------------------------------------+-------------------------------------------------------------------------------------------------------+
|          :ref:`World<api_World>` * | :ref:`world<api_Component_8c02a31e>` () const                                                         |
+------------------------------------+-------------------------------------------------------------------------------------------------------+



.. _api_Component_static:

Static Methods
--------------

None

.. _api_Component_methods:

Methods Description
-------------------

.. _api_Component_be5ca3f1:

 :ref:`Actor<api_Actor>` * **Component::actor** () const

Returns an Actor which the Component is attached to.

----

.. _api_Component_734891f6:

 :ref:`Component<api_Component>` * **Component::component** (:ref:`TString<api_TString>` & *type*)

Returns a component with *type* attached to the same Actor. If no such component with this *type* returns nullptr.

----

.. _api_Component_8413e6bc:

 void **Component::drawGizmos** ()

Implement drawGizmos if you want to draw gizmos that are always drawn.

----

.. _api_Component_4fc83ead:

 void **Component::drawGizmosSelected** ()

Implement drawGizmosSelected to draw a gizmo if the object is selected.

----

.. _api_Component_e10567d8:

 :ref:`Actor<api_Actor>` * **Component::instantiate** (:ref:`Prefab<api_Prefab>` * *prefab*, :ref:`Vector3<api_Vector3>`  *position*, :ref:`Quaternion<api_Quaternion>`  *rotation*)

Clones the actor represented by *prefab* asset. This Actor will be a sibling of caller Actor and has local *position* and rotation.

----

.. _api_Component_70518fe9:

 bool **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_25deb369:

 bool **Component::isEnabledInHierarchy** () const

Returns false in case of one of Actors in top hierarchy or this component was disabled; otherwise returns true.

----

.. _api_Component_ed078239:

 :ref:`Scene<api_Scene>` * **Component::scene** () const

Returns a Scene which the Component is attached to.

----

.. _api_Component_1a7bc209:

 void **Component::setEnabled** (bool  *enabled*)

Sets current state of component to *enabled* or disabled.


**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.


**See also** isEnabled().

----

.. _api_Component_4825be6f:

 :ref:`TString<api_TString>`  **Component::tr** (:ref:`TString<api_TString>` & *source*)

Returns a translated version of *source* text; otherwise returns *source* text if no appropriate translated std::string is available.

----

.. _api_Component_f2e47306:

 :ref:`Transform<api_Transform>` * **Component::transform** () const

Returns a transform attached to this Actor.

----

.. _api_Component_8c02a31e:

 :ref:`World<api_World>` * **Component::world** () const

Returns a World which the Component is attached to.


