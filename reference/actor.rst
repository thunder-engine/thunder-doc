.. _api_Actor:

Actor
=====

Inherited: :doc:`Object<api_Object>`

.. _api_Actor_description:

Description
-----------

The Actor probably is the most important class in the Thunder Engine. It represents all objects on the scene like 3D meshes, light sources, effects and many more. You should think about Actor as a key chain for the various Components. You can add and remove any components you like at any time except the Transform component. The Transform component must persist constantly and you shoudn't remove it.



.. _api_Actor_public:

Public Methods
--------------

+------------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`addComponent<api_Actor_addComponent>` (const std::string  type)                                |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`component<api_Actor_component>` (const std::string  type)                                      |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`Component<api_Component>` * | :ref:`componentInChild<api_Actor_componentInChild>` (const std::string  type)                        |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                                int | :ref:`componentsInChild<api_Actor_componentsInChild>` (const std::string  type)                      |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                                int | :ref:`hideFlags<api_Actor_hideFlags>` () const                                                       |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabled<api_Actor_isEnabled>` () const                                                       |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isEnabledInHierarchy<api_Actor_isEnabledInHierarchy>` () const                                 |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isInHierarchy<api_Actor_isInHierarchy>` (Actor * actor) const                                  |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isInstance<api_Actor_isInstance>` () const                                                     |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isStatic<api_Actor_isStatic>` () const                                                         |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                                int | :ref:`layers<api_Actor_layers>` () const                                                             |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|          :ref:`Scene<api_Scene>` * | :ref:`scene<api_Actor_scene>` () const                                                               |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setEnabled<api_Actor_setEnabled>` (const bool  enabled)                                        |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setHideFlags<api_Actor_setHideFlags>` (int  flags)                                             |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setLayers<api_Actor_setLayers>` (const int  layers)                                            |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setParent<api_Actor_setParent>` (Object * parent, int32_t  position = -1, bool  force = false) |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|                               void | :ref:`setStatic<api_Actor_setStatic>` (const bool  flag)                                             |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|  :ref:`Transform<api_Transform>` * | :ref:`transform<api_Actor_transform>` ()                                                             |
+------------------------------------+------------------------------------------------------------------------------------------------------+
|          :ref:`World<api_World>` * | :ref:`world<api_Actor_world>` () const                                                               |
+------------------------------------+------------------------------------------------------------------------------------------------------+

.. _api_Actor_enums:

Public Enums
------------

.. _api_Actor_HideFlags:

**enum Actor::HideFlags**

+-------------------+--------+-------------------------------------------------------------------------------+
|          Constant | Value  | Description                                                                   |
+-------------------+--------+-------------------------------------------------------------------------------+
|     Actor::ENABLE | (1<<0) | This Actor can be visible on the screen and can be updated in the game cycle. |
+-------------------+--------+-------------------------------------------------------------------------------+
| Actor::SELECTABLE | (1<<1) | This Actor can be selected in the Editor.                                     |
+-------------------+--------+-------------------------------------------------------------------------------+



.. _api_Actor_static:

Static Methods
--------------

None

.. _api_Actor_methods:

Methods Description
-------------------

.. _api_Actor_addComponent:

 :ref:`Component<api_Component>`* **Actor::addComponent** (std::string  *type*)

Returns created component with specified *type*;

----

.. _api_Actor_component:

 :ref:`Component<api_Component>`* **Actor::component** (std::string  *type*)

Returns the component with *type* if one is attached to this Actor; otherwise returns nullptr.

----

.. _api_Actor_componentInChild:

 :ref:`Component<api_Component>`* **Actor::componentInChild** (std::string  *type*)

Returns the component with *type* in the Actor's children using depth search. A component is returned only if it's found on a current Actor; otherwise returns nullptr.

----

.. _api_Actor_componentsInChild:

 int **Actor::componentsInChild** (std::string  *type*)

Returns a list of the components with *type* in the Actor's children using depth search.

----

.. _api_Actor_hideFlags:

 int **Actor::hideFlags** () const

Returns a set of Actor::HideFlags applied to this Actor.

**See also** setHideFlags().

----

.. _api_Actor_isEnabled:

 bool **Actor::isEnabled** () const

Returns true in case of Actor is enabled; otherwise returns false. Disabled Actors becomes invisible for the user. By default the property is true.

----

.. _api_Actor_isEnabledInHierarchy:

 bool **Actor::isEnabledInHierarchy** () const

Returns false in case of one of Actors in top hierarchy was disabled; otherwise returns true.

----

.. _api_Actor_isInHierarchy:

 bool **Actor::isInHierarchy** (:ref:`Actor<api_Actor>` * *actor*) const

Return true if *actor* is a part of hiearhy.

----

.. _api_Actor_isInstance:

 bool **Actor::isInstance** () const

Returns true in case the current object is an instance of the serialized prefab structure; otherwise returns false.

----

.. _api_Actor_isStatic:

 bool **Actor::isStatic** () const

Returns true if this actor will not be moved during the game; otherwise returns false.

----

.. _api_Actor_layers:

 int **Actor::layers** () const

Returns the layers list for the this Actor as a bit mask. The layers used for the various purposes like filtering objects before rendering.

**See also** setLayers().

----

.. _api_Actor_scene:

 :ref:`Scene<api_Scene>`* **Actor::scene** () const

Returns the scene where actor attached to.

----

.. _api_Actor_setEnabled:

 void **Actor::setEnabled** (bool  *enabled*)

Marks this Actor as *enabled* or disabled. Disabled Actors becomes invisible for the user.

**See also** isEnabled().

----

.. _api_Actor_setHideFlags:

 void **Actor::setHideFlags** (int  *flags*)

Applies a new set of Actor::HideFlags *flags* to this Actor.

**See also** hideFlags().

----

.. _api_Actor_setLayers:

 void **Actor::setLayers** (int  *layers*)

Assigns the list of *layers* for this Actor as a bitmask.

**See also** *layers*().

----

.. _api_Actor_setParent:

 void **Actor::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Makes the actor a child of the *parent* at given *position*.

**Note:** Please ignore the *force* flag it will be provided by the default.

----

.. _api_Actor_setStatic:

 void **Actor::setStatic** (bool  *flag*)

Marks current Actor as static or dynamic (by default). This *flag* can help to optimize rendering.

**See also** isStatic().

----

.. _api_Actor_transform:

 :ref:`Transform<api_Transform>`* **Actor::transform** ()

Returns the Transform component attached to this Actor.

----

.. _api_Actor_world:

 :ref:`World<api_World>`* **Actor::world** () const

Returns the world where actor attached to.


