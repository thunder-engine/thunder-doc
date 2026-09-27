.. _api_Component:

Component
=========

Inherited: :ref:`Object<api_Object>`

.. _api_Component_description:

Description
-----------

The Component class is a base class for each aspect of the actor, and how it interacts with the world.


Note: This class must be a superclass only and shouldn't be created manually.




.. _api_Component_public:

Public Methods
--------------

+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                 :ref:`Actor<api_Actor>` * | :ref:`actor<api_Component_be9623d4>` () const                                                         |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`addTag<api_Component_a3ed9c81>` (const TString & tag)                                           |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`addTagByHash<api_Component_8f9107a4>` (uint32_t  hash)                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                         :ref:`Component<api_Component>` * | :ref:`component<api_Component_a3d5209b>` (const TString & type)                                       |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`drawGizmos<api_Component_415ae29c>` ()                                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`drawGizmosSelected<api_Component_8cdb90e7>` ()                                                  |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`hasTag<api_Component_9a6c80bd>` (const TString & tag)                                           |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`hasTagByHash<api_Component_0cea84f7>` (uint32_t  hash)                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                 :ref:`Actor<api_Actor>` * | :ref:`instantiate<api_Component_16f8947e>` (Prefab * prefab, Vector3  position, Quaternion  rotation) |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`isEnabled<api_Component_2a8316fd>` () const                                                     |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      bool | :ref:`isEnabledInHierarchy<api_Component_1fda2c56>` () const                                          |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`removeTag<api_Component_5e6b8f0d>` (const TString & tag)                                        |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`removeTagByHash<api_Component_5ea7bd9c>` (uint32_t  hash)                                       |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                 :ref:`Scene<api_Scene>` * | :ref:`scene<api_Component_03fa2ec9>` () const                                                         |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                                      void | :ref:`setEnabled<api_Component_a6de7548>` (bool  enabled)                                             |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|  :ref:`std::vector<uint32_t><api_std_vector<uint32_t>>` & | :ref:`tags<api_Component_a561d4bc>` ()                                                                |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                               :ref:`TString<api_TString>` | :ref:`tr<api_Component_bcd91783>` (const TString & source)                                            |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                         :ref:`Transform<api_Transform>` * | :ref:`transform<api_Component_6729450c>` () const                                                     |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
|                                 :ref:`World<api_World>` * | :ref:`world<api_Component_d70ef142>` () const                                                         |
+-----------------------------------------------------------+-------------------------------------------------------------------------------------------------------+



.. _api_Component_static:

Static Methods
--------------

None

.. _api_Component_methods:

Methods Description
-------------------

.. _api_Component_be9623d4:

 :ref:`Actor<api_Actor>` * **Component::actor** () const

Returns an Actor which the Component is attached to.

----

.. _api_Component_a3ed9c81:

 void **Component::addTag** (:ref:`TString<api_TString>` & *tag*)

Adds *tag* for current component. Automatically adds component to specific Scene group.

----

.. _api_Component_8f9107a4:

 void **Component::addTagByHash** (uint32_t  *hash*)

Adds a tag for current component by tag hash. Automatically adds component to specific Scene group.

----

.. _api_Component_a3d5209b:

 :ref:`Component<api_Component>` * **Component::component** (:ref:`TString<api_TString>` & *type*)

Returns a component with *type* attached to the same Actor. If no such component with this *type* returns nullptr.

----

.. _api_Component_415ae29c:

 void **Component::drawGizmos** ()

Implement drawGizmos if you want to draw gizmos that are always drawn.

----

.. _api_Component_8cdb90e7:

 void **Component::drawGizmosSelected** ()

Implement drawGizmosSelected to draw a gizmo if the object is selected.

----

.. _api_Component_9a6c80bd:

 bool **Component::hasTag** (:ref:`TString<api_TString>` & *tag*)

Returns true if component has a tag; otherwise returns false.

----

.. _api_Component_0cea84f7:

 bool **Component::hasTagByHash** (uint32_t  *hash*)

Returns true if component has a tag provided by its hash; otherwise returns false.

----

.. _api_Component_16f8947e:

 :ref:`Actor<api_Actor>` * **Component::instantiate** (:ref:`Prefab<api_Prefab>` * *prefab*, :ref:`Vector3<api_Vector3>`  *position*, :ref:`Quaternion<api_Quaternion>`  *rotation*)

Clones the actor represented by *prefab* asset. This Actor will be a sibling of caller Actor and has local *position* and rotation.

----

.. _api_Component_2a8316fd:

 bool **Component::isEnabled** () const

Returns true if the component is enabled; otherwise returns false.

----

.. _api_Component_1fda2c56:

 bool **Component::isEnabledInHierarchy** () const

Returns false in case of one of Actors in top hierarchy or this component was disabled; otherwise returns true.

----

.. _api_Component_5e6b8f0d:

 void **Component::removeTag** (:ref:`TString<api_TString>` & *tag*)

Removes *tag* for current component. Automatically removes component from specific Scene group.

----

.. _api_Component_5ea7bd9c:

 void **Component::removeTagByHash** (uint32_t  *hash*)

Removes a tag for current component by tag hash. Automatically removes component from specific Scene group.

----

.. _api_Component_03fa2ec9:

 :ref:`Scene<api_Scene>` * **Component::scene** () const

Returns a Scene which the Component is attached to.

----

.. _api_Component_a6de7548:

 void **Component::setEnabled** (bool  *enabled*)

Sets current state of component to *enabled* or disabled.


**Note:** The disabled component will be created but not affect the Actor. For example, MeshRender component will not draw a mesh.


**See also** isEnabled().

----

.. _api_Component_a561d4bc:

 :ref:`std::vector<uint32_t><api_std::vector<uint32_t>>` & **Component::tags** ()

Returns list of component tags.

----

.. _api_Component_bcd91783:

 :ref:`TString<api_TString>`  **Component::tr** (:ref:`TString<api_TString>` & *source*)

Returns a translated version of *source* text; otherwise returns *source* text if no appropriate translated string is available.

----

.. _api_Component_6729450c:

 :ref:`Transform<api_Transform>` * **Component::transform** () const

Returns a transform attached to this Actor.

----

.. _api_Component_d70ef142:

 :ref:`World<api_World>` * **Component::world** () const

Returns a World which the Component is attached to.


