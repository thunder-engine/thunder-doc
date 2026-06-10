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

+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`activeScene<api_World_d6b72a08>` () const                                           |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`activeSceneChanged<api_World_187ef203>` ()                                          |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`createScene<api_World_102594ba>` (const TString & name)                             |
+------------------------------+-------------------------------------------------------------------------------------------+
|  :ref:`Object<api_Object>` * | :ref:`gameController<api_World_4a27893e>` () const                                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`graphUpdated<api_World_2093fce6>` ()                                                |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`isToBeUpdated<api_World_6a587d1c>` ()                                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|    :ref:`Scene<api_Scene>` * | :ref:`loadScene<api_World_65dc9187>` (const TString & path, bool  additive)               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`makeDirty<api_World_c341bd07>` ()                                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         bool | :ref:`rayCast<api_World_9c04f635>` (const Ray & ray, float  maxDistance, Ray::Hit * hit)  |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneLoaded<api_World_84a63b75>` ()                                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`sceneUnloaded<api_World_af890654>` ()                                               |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setActiveScene<api_World_e910a8b7>` (Scene * scene)                                 |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setGameController<api_World_f69c3701>` (Object * controller)                        |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setRayCastHandler<api_World_0ec8fa49>` (RayCastCallback  callback, System * system) |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`setToBeUpdated<api_World_c1f79a80>` (bool  flag)                                    |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadAll<api_World_916c3e8d>` ()                                                   |
+------------------------------+-------------------------------------------------------------------------------------------+
|                         void | :ref:`unloadScene<api_World_8ea0c9f4>` (Scene * scene)                                    |
+------------------------------+-------------------------------------------------------------------------------------------+



.. _api_World_static:

Static Methods
--------------

None

.. _api_World_methods:

Methods Description
-------------------

.. _api_World_d6b72a08:

 :ref:`Scene<api_Scene>` * **World::activeScene** () const

Returns an active Scene.

There must always be one Scene marked as the active at the same time.

**See also** setActiveScene().

----

.. _api_World_187ef203:

 void **World::activeSceneChanged** ()

Emmits signal when active scene has been changed.

----

.. _api_World_102594ba:

 :ref:`Scene<api_Scene>` * **World::createScene** (:ref:`TString<api_TString>` & *name*)

Create an empty new Scene at runtime with the given name.

----

.. _api_World_4a27893e:

 :ref:`Object<api_Object>` * **World::gameController** () const

Returns a game controller object.

Game controller is abstract object respocible for various gameplay aspects.

**See also** setGameController().

----

.. _api_World_2093fce6:

 void **World::graphUpdated** ()

Emmits signal when graph has been updated.

----

.. _api_World_6a587d1c:

 bool **World::isToBeUpdated** ()

Returns in case of scene must be updated in the current frame; otherwise returns false.

----

.. _api_World_65dc9187:

 :ref:`Scene<api_Scene>` * **World::loadScene** (:ref:`TString<api_TString>` & *path*, bool  *additive*)

Loads the scene stored in the .map files by the it's path.


**Note:** The previous scenes will be not unloaded in the case of an *additive* flag is true.


----

.. _api_World_c341bd07:

 void **World::makeDirty** ()

Marks World as dirty. Mainly used to detect scene graph configuration changes.

----

.. _api_World_9c04f635:

 bool **World::rayCast** (:ref:`Ray<api_Ray>` & *ray*, float  *maxDistance*, :ref:`Ray::Hit<api_Ray_Hit>` * *hit*)

Casts a ray, of length maxDistance, against all colliders in the World. Returns true if the *ray* has a *hit* point with a Collider; otherwise returns false.

----

.. _api_World_84a63b75:

 void **World::sceneLoaded** ()

Emmits signal when scene has been loaded.

----

.. _api_World_af890654:

 void **World::sceneUnloaded** ()

Emmits signal when scene has been unloaded.

----

.. _api_World_e910a8b7:

 void **World::setActiveScene** (:ref:`Scene<api_Scene>` * *scene*)

Sets the *scene* to be active.

There must always be one Scene marked as the active at the same time.

**See also** activeScene().

----

.. _api_World_f69c3701:

 void **World::setGameController** (:ref:`Object<api_Object>` * *controller*)

Sets the game controller.

Game *controller* is abstract object respocible for various gameplay aspects.

**See also** gameController().

----

.. _api_World_0ec8fa49:

 void **World::setRayCastHandler** (:ref:`RayCastCallback<api_RayCastCallback>`  *callback*, :ref:`System<api_System>` * *system*)

Sets the raycast *callback* function.

This function will be used to check intersections with in game geometry. In the most cases implemented in the physical engines. This *callback* is added by any physical *system* by the default.

----

.. _api_World_c1f79a80:

 void **World::setToBeUpdated** (bool  *flag*)

Sets an update flag.

**See also** isToBeUpdated().

----

.. _api_World_916c3e8d:

 void **World::unloadAll** ()

Unloads all from the World.

----

.. _api_World_8ea0c9f4:

 void **World::unloadScene** (:ref:`Scene<api_Scene>` * *scene*)

Unloads the *scene* from the World.


