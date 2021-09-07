.. _api_Actor:
Actor Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_Actor_description:
Description
-----------

Base class for all entities in Thunder Engine.

The Actor probably is the most important class in the Thunder Engine. It represents all objects on the scene like 3D meshes, light sources, effects and many more. You should think about Actor as a key chain for the various Components. You can add and remove any components you like at any time except the Transform component. The Transform component must persist constantly and you shoudn't remove it.



.. _api_Actor_public:
Public Methods
--------------

+-----------------------------------+------------------------------------------------------------------------------------------------------+
|                                   | :ref:`Actor<api_Actor_Actor>` ()                                                                     |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|                                   | :ref:`~Actor<api_Actor_~Actor>` ()                                                                   |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`Component<api_Component>` * | :ref:`addComponent<api_Actor_addComponent>` (const std::string  type)                                |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`Component<api_Component>` * | :ref:`component<api_Actor_component>` (const std::string  type)                                      |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`Component<api_Component>` * | :ref:`componentInChild<api_Actor_componentInChild>` (const std::string  type)                        |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`isEnabled<api_Actor_isEnabled>` () const                                                       |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`isEnabledInHierarchy<api_Actor_isEnabledInHierarchy>` () const                                 |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`isInstance<api_Actor_isInstance>` () const                                                     |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`isStatic<api_Actor_isStatic>` () const                                                         |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`isValidInstance<api_Actor_isValidInstance>` () const                                           |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|               :ref:`int<api_int>` | :ref:`layers<api_Actor_layers>` () const                                                             |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|         :ref:`Scene<api_Scene>` * | :ref:`scene<api_Actor_scene>` ()                                                                     |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setEnabled<api_Actor_setEnabled>` (const bool  enabled)                                        |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setLayers<api_Actor_setLayers>` (const int  layers)                                            |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setParent<api_Actor_setParent>` (Object * parent, int32_t  position = -1, bool  force = false) |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`setStatic<api_Actor_setStatic>` (const bool  flag)                                             |
+-----------------------------------+------------------------------------------------------------------------------------------------------+
| :ref:`Transform<api_Transform>` * | :ref:`transform<api_Actor_transform>` ()                                                             |
+-----------------------------------+------------------------------------------------------------------------------------------------------+



.. _api_Actor_static:
Static Methods
--------------

+-------------------------------------------------------------------+--------------------------------------------+
|     :ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * | :ref:`methods<api_Actor_methods>` ()       |
+-------------------------------------------------------------------+--------------------------------------------+
| :ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * | :ref:`properties<api_Actor_properties>` () |
+-------------------------------------------------------------------+--------------------------------------------+

.. _api_Actor_methods:
Methods Description
-------------------

.. _api_Actor_Actor:

**Actor::Actor** ()

Default constructs an instance of Actor.

----

.. _api_Actor_~Actor:

**Actor::~Actor** ()

Destroys the instance of Actor. The destructor is virtual.

----

.. _api_Actor_addComponent:

:ref:`Component<api_Component>` * **Actor::addComponent** (:ref:`std::string<api_std::string>`  *type*)

Returns created component with specified *type*;

----

.. _api_Actor_component:

:ref:`Component<api_Component>` * **Actor::component** (:ref:`std::string<api_std::string>`  *type*)

Returns the component with *type* if one is attached to this Actor; otherwise returns nullptr.

----

.. _api_Actor_componentInChild:

:ref:`Component<api_Component>` * **Actor::componentInChild** (:ref:`std::string<api_std::string>`  *type*)

Returns the component with *type* in the Actor's children using depth search. A component is returned only if it's found on a current Actor; otherwise returns nullptr.

----

.. _api_Actor_isEnabled:

:ref:`bool<api_bool>`  **Actor::isEnabled** () const

Returns true in case of Actor is enabled; otherwise returns false. Disabled Actors becomes invisible for the user. By default the property is true.

----

.. _api_Actor_isEnabledInHierarchy:

:ref:`bool<api_bool>`  **Actor::isEnabledInHierarchy** () const

Returns false in case of one of Actors in hierarchy was disabled; otherwise returns true.

----

.. _api_Actor_isInstance:

:ref:`bool<api_bool>`  **Actor::isInstance** () const

Returns true in case the current object is an instance of the serialized prefab structure; otherwise returns false.

----

.. _api_Actor_isStatic:

:ref:`bool<api_bool>`  **Actor::isStatic** () const

Returns true if this actor will not be moved during the game; otherwise returns false.

----

.. _api_Actor_isValidInstance:

:ref:`bool<api_bool>`  **Actor::isValidInstance** () const

In case of this Action is an instance of a prefab will validate the the instance and return the result.

----

.. _api_Actor_layers:

:ref:`int<api_int>`  **Actor::layers** () const

Returns the layers list for the this Actor as a bit mask. The layers used for the various purposes like filtering objects before rendering.

**See also** setLayers().

----

.. _api_Actor_methods:

:ref:`const MetaMethod::Table<api_const MetaMethod::Table>` * **Actor::methods** ()

----

.. _api_Actor_properties:

:ref:`const MetaProperty::Table<api_const MetaProperty::Table>` * **Actor::properties** ()

----

.. _api_Actor_scene:

:ref:`Scene<api_Scene>` * **Actor::scene** ()

Returns the scene where actor attached to.

----

.. _api_Actor_setEnabled:

:ref:`void<api_void>`  **Actor::setEnabled** (:ref:`bool<api_bool>`  *enabled*)

Marks this Actor as *enabled* or disabled. Disabled Actors becomes invisible for the user.

**See also** isEnabled().

----

.. _api_Actor_setLayers:

:ref:`void<api_void>`  **Actor::setLayers** (:ref:`int<api_int>`  *layers*)

Assigns the list of *layers* for this Actor as a bitmask.

**See also** *layers*().

----

.. _api_Actor_setParent:

:ref:`void<api_void>`  **Actor::setParent** (:ref:`Object<api_Object>` * *parent*, :ref:`int32_t<api_int32_t>`  *position* = -1, :ref:`bool<api_bool>`  *force* = false)

Reimplemented from Object::setParent().

Makes the actor a child of the *parent* at given *position*.

**Note:** Please ignore the *force* flag it will be provided by the default.

----

.. _api_Actor_setStatic:

:ref:`void<api_void>`  **Actor::setStatic** (:ref:`bool<api_bool>`  *flag*)

Marks current Actor as static or dynamic (by default). This *flag* can help to optimize rendering.

**See also** isStatic().

----

.. _api_Actor_transform:

:ref:`Transform<api_Transform>` * **Actor::transform** ()

Returns the Transform component attached to this Actor.

----


