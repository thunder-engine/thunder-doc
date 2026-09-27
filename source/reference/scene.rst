.. _api_Scene:

Scene
=====

Inherited: :ref:`Object<api_Object>`

.. _api_Scene_description:

Description
-----------

The Scene class serves as a container for actors and entities within the application, providing methods to interact with the world and manage the associated resource.



.. _api_Scene_public:

Public Methods
--------------

+----------------------------+-------------------------------------------------------------------------------------+
|                       void | :ref:`addToGroup<api_Scene_ba7234f6>` (Object * object, const TString & group)      |
+----------------------------+-------------------------------------------------------------------------------------+
|                       void | :ref:`addToGroupByHash<api_Scene_ba6571e4>` (Object * object, uint32_t  hash)       |
+----------------------------+-------------------------------------------------------------------------------------+
|         Object::ObjectList | :ref:`getObjectsInGroup<api_Scene_89c701d6>` (const TString & group)                |
+----------------------------+-------------------------------------------------------------------------------------+
|         Object::ObjectList | :ref:`getObjectsInGroupByHash<api_Scene_e24d3b15>` (uint32_t  hash)                 |
+----------------------------+-------------------------------------------------------------------------------------+
|                       void | :ref:`removeFromGroup<api_Scene_c0623f41>` (Object * object, const TString & group) |
+----------------------------+-------------------------------------------------------------------------------------+
|                       void | :ref:`removeFromGroupByHash<api_Scene_094f78ab>` (Object * object, uint32_t  hash)  |
+----------------------------+-------------------------------------------------------------------------------------+
|  :ref:`World<api_World>` * | :ref:`world<api_Scene_b7d1f460>` () const                                           |
+----------------------------+-------------------------------------------------------------------------------------+



.. _api_Scene_static:

Static Methods
--------------

None

.. _api_Scene_methods:

Methods Description
-------------------

.. _api_Scene_ba7234f6:

 void **Scene::addToGroup** (:ref:`Object<api_Object>` * *object*, :ref:`TString<api_TString>` & *group*)

Adds *object* to group.

----

.. _api_Scene_ba6571e4:

 void **Scene::addToGroupByHash** (:ref:`Object<api_Object>` * *object*, uint32_t  *hash*)

Adds *object* to a group with specific hash.

----

.. _api_Scene_89c701d6:

 Object::ObjectList **Scene::getObjectsInGroup** (:ref:`TString<api_TString>` & *group*)

Returns a list of objects in group.

----

.. _api_Scene_e24d3b15:

 Object::ObjectList **Scene::getObjectsInGroupByHash** (uint32_t  *hash*)

Returns a list of objects from a group with specific hash.

----

.. _api_Scene_c0623f41:

 void **Scene::removeFromGroup** (:ref:`Object<api_Object>` * *object*, :ref:`TString<api_TString>` & *group*)

Removes *object* from group.

----

.. _api_Scene_094f78ab:

 void **Scene::removeFromGroupByHash** (:ref:`Object<api_Object>` * *object*, uint32_t  *hash*)

Removes *object* from a group with specific hash.

----

.. _api_Scene_b7d1f460:

 :ref:`World<api_World>` * **Scene::world** () const

Returns the World to which the scene belongs.


