.. _api_Actor:

Actor
=====

Inherited: None

.. _api_Actor_description:

Description
-----------

The Actor probably is the most important class in the Thunder Engine. It represents all objects on the scene like 3D meshes, light sources, effects and many more. You should think about Actor as a key chain for the various Components. You can add and remove any components you like at any time except the Transform component. The Transform component must persist constantly and you shoudn't remove it.



.. _api_Actor_public:

Public Methods
--------------

+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|     :ref:`Component<api_Component>` * | :ref:`addComponent<api_Actor_92e75b8d>` (const TString & type)                                      |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|     :ref:`Component<api_Component>` * | :ref:`component<api_Actor_7dfc392e>` (const TString & type)                                         |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|     :ref:`Component<api_Component>` * | :ref:`componentInChild<api_Actor_102d437e>` (const TString & type)                                  |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
| std::list<Component :ref:`*><api_*>>` | :ref:`components<api_Actor_93ac5db4>` (const TString & type)                                        |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
| std::list<Component :ref:`*><api_*>>` | :ref:`componentsInChild<api_Actor_7fd439b8>` (const TString & type) const                           |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                   int | :ref:`flags<api_Actor_e1d3654f>` () const                                                           |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  bool | :ref:`isEnabled<api_Actor_d70e26f4>` () const                                                       |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  bool | :ref:`isEnabledInHierarchy<api_Actor_84fca325>` () const                                            |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  bool | :ref:`isInHierarchy<api_Actor_9d842e1f>` (Actor * actor) const                                      |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  bool | :ref:`isInstance<api_Actor_57fa69c0>` () const                                                      |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  bool | :ref:`isStatic<api_Actor_7803d9a6>` () const                                                        |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|             :ref:`Scene<api_Scene>` * | :ref:`scene<api_Actor_93e64c20>` () const                                                           |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setEnabled<api_Actor_b16a4fc3>` (const bool  enabled)                                         |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setFlags<api_Actor_5bf38d19>` (int  flags)                                                    |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setParent<api_Actor_e6f73cdb>` (Object * parent, int32_t  position = -1, bool  force = false) |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setStatic<api_Actor_2735c0e4>` (const bool  flag)                                             |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|                                  void | :ref:`setTransform<api_Actor_d0426751>` (Transform * transform)                                     |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|     :ref:`Transform<api_Transform>` * | :ref:`transform<api_Actor_4ad73051>` ()                                                             |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+
|             :ref:`World<api_World>` * | :ref:`world<api_Actor_cb869e47>` () const                                                           |
+---------------------------------------+-----------------------------------------------------------------------------------------------------+

.. _api_Actor_enums:

Public Enums
------------

.. _api_Actor_Flags:

**enum Actor::Flags**

+-------------------+--------+-------------------------------------------------------------------------------+
|          Constant | Value  | Description                                                                   |
+-------------------+--------+-------------------------------------------------------------------------------+
|     Actor::Enable | (1<<0) | This Actor can be visible on the screen and can be updated in the game cycle. |
+-------------------+--------+-------------------------------------------------------------------------------+
| Actor::Selectable | (1<<1) | This Actor can be selected in the Editor.                                     |
+-------------------+--------+-------------------------------------------------------------------------------+
|     Actor::Static | (1<<3) | This Actor is not supposed to be moved.                                       |
+-------------------+--------+-------------------------------------------------------------------------------+



.. _api_Actor_static:

Static Methods
--------------

None

.. _api_Actor_methods:

Methods Description
-------------------

.. _api_Actor_92e75b8d:

 :ref:`Component<api_Component>` * **Actor::addComponent** (:ref:`TString<api_TString>` & *type*)

Returns created component with specified type;

----

.. _api_Actor_7dfc392e:

 :ref:`Component<api_Component>` * **Actor::component** (:ref:`TString<api_TString>` & *type*)

Returns the component with *type* if one is attached to this Actor; otherwise returns nullptr.

----

.. _api_Actor_102d437e:

 :ref:`Component<api_Component>` * **Actor::componentInChild** (:ref:`TString<api_TString>` & *type*)

Returns the component with *type* in the Actor's children using depth search. A component is returned only if it's found on a current Actor; otherwise returns nullptr.

----

.. _api_Actor_93ac5db4:

std::list<Component :ref:`*><api_*>>`  **Actor::components** (:ref:`TString<api_TString>` & *type*)

Returns a list of the components with *type* attached to this Actor.

----

.. _api_Actor_7fd439b8:

std::list<Component :ref:`*><api_*>>`  **Actor::componentsInChild** (:ref:`TString<api_TString>` & *type*) const

Returns a list of the components with *type* in the Actor's children using depth search.

----

.. _api_Actor_e1d3654f:

 int **Actor::flags** () const

Returns a set of Actor::Flags applied to this Actor.

**See also** setFlags().

----

.. _api_Actor_d70e26f4:

 bool **Actor::isEnabled** () const

Returns true in case of Actor is enabled; otherwise returns false. Disabled Actors becomes invisible for the user. By default the property is true.

----

.. _api_Actor_84fca325:

 bool **Actor::isEnabledInHierarchy** () const

Returns false in case of one of Actors in top hierarchy was disabled; otherwise returns true.

----

.. _api_Actor_9d842e1f:

 bool **Actor::isInHierarchy** (:ref:`Actor<api_Actor>` * *actor*) const

Return true if *actor* is a part of hiearhy.

----

.. _api_Actor_57fa69c0:

 bool **Actor::isInstance** () const

Returns true in case the current object is an instance of the serialized prefab structure; otherwise returns false.

----

.. _api_Actor_7803d9a6:

 bool **Actor::isStatic** () const

Returns true if this actor will not be moved during the game; otherwise returns false.

----

.. _api_Actor_93e64c20:

 :ref:`Scene<api_Scene>` * **Actor::scene** () const

Returns the scene where actor attached to.

----

.. _api_Actor_b16a4fc3:

 void **Actor::setEnabled** (bool  *enabled*)

Marks this Actor as *enabled* or disabled. Disabled Actors becomes invisible for the user.

**See also** isEnabled().

----

.. _api_Actor_5bf38d19:

 void **Actor::setFlags** (int  *flags*)

Applies a new set of Actor::Flags *flags* to this Actor.

**See also** flags().

----

.. _api_Actor_e6f73cdb:

void **Actor::setParent** (:ref:`Object<api_Object>` * *parent*, int32_t  *position* = -1, bool  *force* = false)

Reimplements: Object::setParent(Object *parent, int32_t position, bool force).

Makes the actor a child of the *parent* at given position. If *force* is true the parent-relative position, scale and rotation recalculation will be ignored.

----

.. _api_Actor_2735c0e4:

 void **Actor::setStatic** (bool  *flag*)

Marks current Actor as static or dynamic (by default). This *flag* can help to optimize rendering.

**See also** isStatic().

----

.. _api_Actor_d0426751:

 void **Actor::setTransform** (:ref:`Transform<api_Transform>` * *transform*)

Replaces an existant *transform* with new one.

**See also** transform().

----

.. _api_Actor_4ad73051:

 :ref:`Transform<api_Transform>` * **Actor::transform** ()

Returns the Transform component attached to this Actor.

**See also** setTransform().

----

.. _api_Actor_cb869e47:

 :ref:`World<api_World>` * **Actor::world** () const

Returns the world where actor attached to.


