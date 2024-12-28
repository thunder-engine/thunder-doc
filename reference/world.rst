.. _api_World:

World
=====

Inherited: None

.. _api_World_description:

Description
-----------


Note: A scene object creating automatically by the engine. Only one World instance can be created in the game. A scene object must be set as a parent for other game hierarchies to show them on the screen. The main scene graph object can be retrieved using Engine::sceneGraph()




.. _api_World_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`activeScene<api_World_activeScene>` () const                                                 |
+------------------------------+----------------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`createScene<api_World_createScene>` (const std::string & name)                               |
+------------------------------+----------------------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`gameController<api_World_gameController>` () const                                           |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         bool | :ref:`isToBeUpdated<api_World_isToBeUpdated>` ()                                                   |
+------------------------------+----------------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_World_loadScene>` (const std::string & path, bool  additive)                   |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`makeDirty<api_World_makeDirty>` ()                                                           |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         bool | :ref:`rayCast<api_World_rayCast>` (const Ray & ray, float  maxDistance, Ray::Hit * hit)            |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`setActiveScene<api_World_setActiveScene>` (Scene * scene)                                    |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`setGameController<api_World_setGameController>` (Object * controller)                        |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`setRayCastHandler<api_World_setRayCastHandler>` (RayCastCallback  callback, System * system) |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`setToBeUpdated<api_World_setToBeUpdated>` (bool  flag)                                       |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadAll<api_World_unloadAll>` ()                                                           |
+------------------------------+----------------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadScene<api_World_unloadScene>` (Scene * scene)                                          |
+------------------------------+----------------------------------------------------------------------------------------------------+



.. _api_World_static:

Static Methods
--------------

None

.. _api_World_methods:

Methods Description
-------------------

.. _api_World_activeScene:

 :ref:`Scene<api_Scene>` * **World::activeScene** () const

Returns an active Scene.

There must always be one Scene marked as the active at the same time.

**See also** setActiveScene().

----

.. _api_World_createScene:

 :ref:`Scene<api_Scene>` * **World::createScene** (std::string & *name*)

Create an empty new Scene at runtime with the given *name*.

----

.. _api_World_gameController:

 :ref:`Object<api_Object>` * **World::gameController** () const

Returns a game controller object.

Game controller is abstract object respocible for various gameplay aspects.

**See also** setGameController().

----

.. _api_World_isToBeUpdated:

 bool **World::isToBeUpdated** ()

Returns in case of scene must be updated in the current frame; otherwise returns false.

----

.. _api_World_loadScene:

 :ref:`Scene<api_Scene>` * **World::loadScene** (std::string & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's *path*.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_World_makeDirty:

 void **World::makeDirty** ()

Marks World as dirty. Mainly used to detect scene graph configuration changes.

----

.. _api_World_rayCast:

 bool **World::rayCast** (:ref:`Ray<api_Ray>` & *ray*, float  *maxDistance*, :ref:`Ray::Hit<api_Ray::Hit>` * *hit*)

Casts a *ray*, of length *maxDistance*, against all colliders in the World. Returns true if the *ray* has a *hit* point with a Collider; otherwise returns false.

----

.. _api_World_setActiveScene:

 void **World::setActiveScene** (:ref:`Scene<api_Scene>` * *scene*)

Sets the *scene* to be active.

There must always be one Scene marked as the active at the same time.

**See also** activeScene().

----

.. _api_World_setGameController:

 void **World::setGameController** (:ref:`Object<api_Object>` * *controller*)

Sets the game *controller*.

Game *controller* is abstract object respocible for various gameplay aspects.

**See also** gameController().

----

.. _api_World_setRayCastHandler:

 void **World::setRayCastHandler** (:ref:`RayCastCallback<api_RayCastCallback>`  *callback*, :ref:`System<api_System>` * *system*)

Sets the raycast *callback* function.

This function will be used to check intersections with in game geometry. In the most cases implemented in the physical engines. This *callback* is added by any physical *system* by the default.

----

.. _api_World_setToBeUpdated:

 void **World::setToBeUpdated** (bool  *flag*)

Sets an update *flag*.

**See also** isToBeUpdated().

----

.. _api_World_unloadAll:

 void **World::unloadAll** ()

Unloads all from the World.

----

.. _api_World_unloadScene:

 void **World::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.


